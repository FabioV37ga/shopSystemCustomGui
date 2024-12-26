Style.inicializar()

var intervaloItemsStyle = setInterval(() => {
    if (Style.items) {
        // console.log(Style.items)
        Style.defineStylesheet()
        setTimeout(() => {
            document.querySelector("header").style.filter = 'none'
            document.querySelector("main").style.filter = 'none'
            document.querySelector("footer").style.filter = 'none'
            document.querySelector(".loading").style.display = 'none'
        }, 0);
        clearInterval(intervaloItemsStyle)
    }
}, 15);



Shop.inicializar()

var intervaloItemsShop = setInterval(() => {
    var page = window.location.toString()
    if (Shop.items) {
        // console.log("t")
        if (page.includes("shop.html")) {
            Shop.createItemElement()
            Shop.atualizarCard(0)
        } else {
            clearInterval(intervaloItemsShop);
        }
        clearInterval(intervaloItemsShop);
    }
}, 15);