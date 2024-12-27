class Fields {
    static items;

    static inicializar() {
        Fields.getItems()
    }

    static getItems() {
        const API_KEY = "AIzaSyDPTQFaDDcN5-t7tkC3OM3Z5Xe4EMiQo6Q"; // Substitua pela sua chave de API
        const SPREADSHEET_ID = "1dMKnhAx9C2NRUyuZCdMVqTNHlLsZW_Gx9a4jiCSXZs4"; // Substitua pelo ID da sua planilha
        const RANGE = "Página1!B4"
        fetchGoogleSheetData()
        async function fetchGoogleSheetData() {
            // console.log(script)

            // Monta a URL para acessar a API do Google Sheets
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
            // Faz a requisição HTTP
            const response = await fetch(url)
            const data = await response.json();
            Fields.items = JSON.parse(data.values)
        }
    }

    static defineFieldValues(valores) {
        document.title = valores[0]
        document.querySelector('.header-content--logo a img').src = valores[1]
        document.querySelector('.user-discord').href = valores[2]
        document.querySelector('footer span').textContent = valores[3]
        document.querySelector('body').style.backgroundImage = valores[4]
        document.querySelector('.main-content--container h1').textContent = valores[5]
        var windowLoc = window.location.href.split('/');
        if (windowLoc[windowLoc.length - 1].includes("index.html")) {
            document.querySelector('.main-content--container span').textContent = valores[6]
        }
    }

}