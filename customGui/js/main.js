
// Janela.elementoJanela = document.querySelector(".customize-overlay")

// // Habilita movimentação da janela
// Janela.drag(Janela.elementoJanela);

// // Habilita funcionalidades de navegação da janela
// var tabs = document.querySelectorAll(".customize-overlay--nav ul li a")
// for (let i = 0; i <= tabs.length - 1; i++) {
//     tabs[i].addEventListener("click", function (e) { Janela.selectTab(e.target) })
// }

// // Toggle opacity
// Janela.elementoJanela.children[0].children[1].addEventListener("click", Janela.toggleOpacity)

// var intervalo = setTimeout(() => {
//     Janela.setShopTab()
//     // clearInterval(intervalo)
// }, 1000);


var intervalo = setInterval(() => {
    if (Shop.items) {
        Janela.inicializar()
        clearInterval(intervalo)
    }
}, 20);