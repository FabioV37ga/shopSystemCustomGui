class Style {
    static items;
    static propriedades;
    static valores;

    static inicializar() {
        Style.getElements()
    }

    static getElements() {
        const API_KEY = "AIzaSyDPTQFaDDcN5-t7tkC3OM3Z5Xe4EMiQo6Q"; // Substitua pela sua chave de API
        const SPREADSHEET_ID = "1dMKnhAx9C2NRUyuZCdMVqTNHlLsZW_Gx9a4jiCSXZs4"; // Substitua pelo ID da sua planilha
        const RANGE = "Página1!B3"
        fetchGoogleSheetData()
        async function fetchGoogleSheetData() {
            // console.log(script)

            // Monta a URL para acessar a API do Google Sheets
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
            // Faz a requisição HTTP
            const response = await fetch(url)
            const data = await response.json();
            Style.items = JSON.parse(data.values)
        }
    }

    static defineStylesheet() {
        const root = document.documentElement

        Style.propriedades = [
            "--header-corFundo",
            "--header-opacidadeFundo",
            "--header-corDetalhes",
            "--header-corFonte",
            "--header-corFonteDiscord",
            "--header-corBotao",
            "--header-corSecundariaBotao",

            "--footer-corFonte",
            "--footer-corFundo",
            "--footer-opacidadeFundo",

            "--home-corFundo",
            "--home-opacidadeFundo",
            "--home-corFonteTitulo",
            "--home-corFonteSubtitulo",
            "--home-corFonteBotao",
            "--home-corBotao",
            "--home-corSecundariaBotao",

            "--shop-corFundo",
            "--shop-corRotulo",
            "--shop-opacidadeRotulo",
            "--shop-corFonteRotulo",
            "--shop-corDetalhesRotulo",
            "--shop-corFundoCartao",
            "--shop-corFonteCartao",
            "--shop-corDetalhesCartao",
            "--shop-corFonteBotao",
            "--shop-corBotaoCartao",
            "--shop-corSecundariaBotaoCartao",
        ]

        Style.valores = [
            Style.items.header.corFundo,
            Style.items.header.opacidadeFundo,
            Style.items.header.corDetalhes,
            Style.items.header.corFonte,
            Style.items.header.corFonteDiscord,
            Style.items.header.corBotao,
            Style.items.header.corSecundariaBotao,

            Style.items.footer.corFonte,
            Style.items.footer.corFundo,
            Style.items.footer.opacidadeFundo,

            Style.items.home.corFundo,
            Style.items.home.opacidadeFundo,
            Style.items.home.corFonteTitulo,
            Style.items.home.corFonteSubtitulo,
            Style.items.home.corFonteBotao,
            Style.items.home.corBotao,
            Style.items.home.corSecundariaBotao,

            Style.items.shop.corFundo,
            Style.items.shop.corRotulo,
            Style.items.shop.opacidadeRotulo,
            Style.items.shop.corFonteRotulo,
            Style.items.shop.corDetalhesRotulo,
            Style.items.shop.corFundoCartao,
            Style.items.shop.corFonteCartao,
            Style.items.shop.corDetalhesCartao,
            Style.items.shop.corFonteBotao,
            Style.items.shop.corBotaoCartao,
            Style.items.shop.corSecundariaBotaoCartao,

        ]

        for (let i = 0; i <= Style.valores.length - 1; i++) {
            root.style.setProperty(`${Style.propriedades[i]}`, `${Style.valores[i]}`)
        }

        for (let i = 0; i <= Style.valores.length - 1; i++) {
            // console.log(Style.propriedades[i] + " ====== " + root.style.getPropertyValue(Style.propriedades[i]) )
        }
    }
}