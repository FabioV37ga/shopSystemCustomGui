// https://docs.google.com/spreadsheets/d/1uRevqsAMCLDQTv2iP-IbilNk1Df4AiVwk9b9qyh8sdY/edit?gid=0#gid=0
const scriptURL = 'https://script.google.com/macros/s/AKfycbztBsbN2kkgqh8lSJ07NMGr2DEZYU9SPOolJJCpeaoj3FwTnacxwsam-Cf1eVYASI3B/exec'; // Coloque aqui a URL gerada pelo Google Apps Script
const form = document.forms['sheetForm'];

// Captura o botão de envio e o campo de texto
var submitButton = document.querySelector(".form-confirm")

var cooldown = false;
// Adiciona um listener de clique no botão
submitButton.addEventListener('click', () => {
    // console.log(cooldown)
    if (cooldown == false) {
        cooldown = true;
        setInterval(() => {
            cooldown = false;
        }, 3000);

        var textField = document.querySelectorAll(".presenca-append-form-item")
        // Pega o valor do campo de texto
        var index = 0;
        var valid = false;

        var intervalo = setInterval(() => {
            if (index <= textField.length - 1) {
                const inputValue = textField[index].value;
                if (inputValue) {
                    valid = true;
                    // Faz a requisição POST ao Google Apps Script
                    fetch(scriptURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded' // Envia como formulário
                        },
                        body: new URLSearchParams({
                            'textField': inputValue // O campo 'textField' deve ser o mesmo usado no Google Apps Script
                        })
                    })
                        .then(response => response.text())
                        .then(result => {
                            // SUCESSO
                            console.log('Sucesso:', result); // Mensagem de sucesso
                            valid = true

                        })
                        .catch(error => {
                            // ERRO
                            console.log('Erro', result)
                        });
                } else {
                    // input sem valor
                    textField[index].placeholder = "Insira Nome e Documento!"
                    var timeout = setTimeout(() => {
                        for (let i = 0; i <= textField.length - 1; i++) {
                            textField[i].placeholder = "Nome - Documento (RG/CPF)"
                        }
                    }, 1800);
                }
                index++
            } else {
                if (valid == true) {
                    mostrarJanelaSucesso()

                }
                clearInterval(intervalo)
            }
        }, 300);
    }

    function mostrarJanelaSucesso() {
        // console.log("mjs")
        var overlay = document.querySelector(".presenca-append-overlay")
        function handleAnimationEnd() {

            limparCampos()
            overlay.removeEventListener("animationend", handleAnimationEnd)

            function handleAnimationEndOut() {
                overlay.classList.remove("out")
                overlay.style.display = 'none'
                overlay.removeEventListener("animationend", handleAnimationEndOut)
            }
            overlay.addEventListener("animationend", handleAnimationEndOut)
            overlay.classList.add("out")
        }
        overlay.addEventListener("animationend", handleAnimationEnd)
        overlay.style.display = 'flex'
    }

    function limparCampos() {
        textField[0].value = ""
        var camposAdicionais = document.querySelectorAll(".aditional-item")
        for (let i = 0; i <= camposAdicionais.length - 1; i++) {
            camposAdicionais[i].remove()
        }
    }
});

const API_KEY = "AIzaSyDPTQFaDDcN5-t7tkC3OM3Z5Xe4EMiQo6Q"; // Substitua pela sua chave de API
const SPREADSHEET_ID = "1uRevqsAMCLDQTv2iP-IbilNk1Df4AiVwk9b9qyh8sdY"; // Substitua pelo ID da sua planilha
const RANGE = "Página1!A3:A"

document.addEventListener("click", fetchGoogleSheetData)

async function fetchGoogleSheetData() {
    console.log("fetching")
    // console.log(script)
    try {
        // Monta a URL para acessar a API do Google Sheets
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        // Faz a requisição HTTP
        const response = await fetch(url);
        const data = await response.json();

        const rows = data.values;

        // Verifica se há dados e imprime no console
        if (rows && rows.length > 0) {
            console.log("Dados da planilha:");
            rows.forEach((row, index) => {
                console.log(`${index + 1}. Nome: ${row[0]}`);
            });
        } else {
            console.log("Nenhum dado encontrado.");
        }
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}
