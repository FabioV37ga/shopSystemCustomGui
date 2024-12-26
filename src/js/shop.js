class Shop {
    static elementoItem;
    static itemSelecionado = 0;
    static items;

    static inicializar() {
        Shop.getItems()
    }

    static getItems(e) {
        const API_KEY = "AIzaSyDPTQFaDDcN5-t7tkC3OM3Z5Xe4EMiQo6Q"; // Substitua pela sua chave de API
        const SPREADSHEET_ID = "1dMKnhAx9C2NRUyuZCdMVqTNHlLsZW_Gx9a4jiCSXZs4"; // Substitua pelo ID da sua planilha
        const RANGE = "Página1!B2"
        fetchGoogleSheetData()
        async function fetchGoogleSheetData() {
            // console.log(script)

            // Monta a URL para acessar a API do Google Sheets
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
            // Faz a requisição HTTP
            const response = await fetch(url)
            const data = await response.json();
            Shop.items = JSON.parse(data.values)
            // console.log(Shop.items)
        }
    }

    static selecionarItem(e) {
        for (let i = 0; i <= Shop.elementoItem.length - 1; i++) {
            Shop.elementoItem[i].classList.remove("itemSelecionado");
            if (Shop.elementoItem[i] == e) {
                Shop.itemSelecionado = i;
            }
        }
        e.classList.add("itemSelecionado");
        // document.querySelector(".card-info").textContent = ("Item selecionado: " + Shop.itemSelecionado);
        // Shop.atualizarCard(e)
    }

    static atualizarCard(e) {
        // console.log(e.children[0].textContent)
        if (e != null) {
            document.querySelector(".card-info--titulo").textContent = Shop.items[0].titulo
            document.querySelector(".card-info--preco").textContent = "R$" + Shop.items[0].preco;
            document.querySelector(".card-info--descricao").innerHTML = Shop.items[0].descricaoDetalhada.replace("<br>", "<br>");
        } else {
            for (let i = 0; i <= Shop.items.length - 1; i++) {
                if (Shop.itemSelecionado == Shop.items[i].id) {
                    console.log(Shop.itemSelecionado)
                    document.querySelector(".card-info--titulo").textContent = Shop.items[i].titulo
                    document.querySelector(".card-info--preco").textContent = "R$" + Shop.items[0].preco;
                    // console.log(Shop.items[i].descricaoDetalhada.replace("<br>","<abr>"))
                    document.querySelector(".card-info--descricao").innerHTML = Shop.items[i].descricaoDetalhada.replace("<br>", "<br>");
                    break;
                }
            }
        }
    }

    static createItemElement() {
        for (let i = 0; i <= Shop.items.length - 1; i++) {
            var elemento = `
             <li class="main-content--container--list-item" value="${Shop.items[i].id}">
                <div class="title">
                    ${Shop.items[i].titulo}
                </div>
                <div class="price">
                    ${parseFloat(Shop.items[i].preco).toFixed(2)}
                </div>
                <div class="descricao">
                    ${Shop.items[i].descricao}
                </div>
                <div class="image" style="background-image: url(${Shop.items[i].imagem})"></div>
            </li>
            `
            $(".main-content--container--list").append(elemento);
            $(".main-content--container--list-item")[0].classList.add("itemSelecionado")
        }

        Shop.elementoItem = document.querySelectorAll(".main-content--container--list-item")
        Shop.itemSelecionado = Shop.elementoItem[0];

        for (let i = 0; i <= Shop.elementoItem.length - 1; i++) {
            Shop.elementoItem[i].addEventListener("click", function (e) {
                Shop.selecionarItem(e.currentTarget);
                Shop.atualizarCard()
            })
        }

    }
}