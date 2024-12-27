// const root = document.documentElement
// root.style.setProperty('--detail-background', 'purple');

class Janela {
    static state = 0;
    static elementoHTML = `    <section class="customize-overlay" style="opacity: 1">
        <div class="customize-overlay--header">
            <h1 class="customize-overlay--title">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                customGui v1.0.0
            </h1>
            <a class="customize-overlay--save" style="display: none">salvar</a>
            <a class="customize-overlay--vision">
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
            </a>
        </div>
        <div class="customize-overlay--nav">
            <ul>
                <li class="overlay--nav-item">
                    <a class="active">header</a>
                </li>
                <li class="overlay--nav-item">
                    <a>footer</a>
                </li>
                <li class="overlay--nav-item">
                    <a>home</a>
                </li>
                <li class="overlay--nav-item">
                    <a>shop</a>
                </li>
                <li class="overlay--nav-item">
                    <a>suporte</a>
                </li>
                <!--
                <li class="overlay--nav-item">
                    <a>checkout</a>
                </li>
                -->
            </ul>
        </div>
        <div class="customize--warning">
            <div class="customize--warning-loading">
                <i class="fa fa-spinner guiLoading" aria-hidden="true"></i>
            </div>
        </div>
        <div class="customize--content-container">

            <!-- Aba de customização: header -->
            <div class="customize--header customize-content">
                <h1 class="customize--tab-title">Header</h1>
                <div class="customize--items-container">
                    <div class="segment-title">Estilização da Página</div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Título da página:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Logo: (url):</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>      
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do header:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Opacidade:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="range">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor dos detalhes:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor da fonte:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    <div class="segment-title">Botão do discord</div>
                     
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Link do Discord:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor da fonte:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor secundária do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aba de personalização do footer -->
            <div class="customize--footer customize-content">
                <h1 class="customize--tab-title">Footer</h1>
                <div class="customize--items-container">
                    <div class="segment-title">Estilização da Página</div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Texto do rodapé:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do texto:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do footer:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Opacidade:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="range">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aba de Personalização do Home-->
            <div class="customize--home customize-content">
                <h1 class="customize--tab-title">Home</h1>
                <div class="customize--items-container">
                    <div class="segment-title">Estilização da Página</div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Imagem: (url)</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do fundo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Opacidade da cor:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="range">
                        </div>
                    </div>
                    
                    <div class="segment-title">Título e subtítulo</div>

                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Titulo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do título:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Subtítulo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do subtítulo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                    <div class="segment-title">Botão de compra</div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor da fonte do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor secundária do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aba de customização: Shop -->
            <div class="customize--shop customize-content">
                <h1 class="customize--tab-title">Shop</h1>
                <div class="customize--items-container">
                    <div class="segment-title">Estilização da página</div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do fundo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    <div class="segment-title">Estilização dos itens</div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do rótulo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Opacidade do rótulo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="range">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do texto:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor dos detalhes:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                     <div class="segment-title">Estilização do cartão</div>
                    
                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do fundo:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do texto:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor dos detalhes:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    
                    <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do texto do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>

                     <div class="customize--item">
                        <div class="customize--item-label">
                            <span>Cor secundária do botão:</span>
                        </div>
                        <div class="customize--item-value">
                            <input type="color">
                        </div>
                    </div>
                    <div class="segment-title">Editar itens da loja</div>
                    <ul class="customize--shop-items">
                    <div class="addItem-container">
                        <a href="#" class="addItem">+</a>                        
                    </div>
                    </ul>

                </div>
    </section>
    `
    static elementoJanela;
    static selectedTab = 0;
    static itensCriadosSessao = [];
    static estilosEditadosSessao;
    static fieldsEditadosSessao = [];


    // Método responsável por inicializar a janela customGui.
    static inicializar() {
        if (Janela.state == 0) {
            Janela.state = 1;
            // Cria elemento da janela
            $("body").prepend(Janela.elementoHTML)

            // Setter do elemento pai
            Janela.elementoJanela = document.querySelector(".customize-overlay")

            // Habilita movimentação da janela
            Janela.drag(Janela.elementoJanela);

            // Habilita funcionalidades de navegação da janela
            var tabs = document.querySelectorAll(".customize-overlay--nav ul li a")
            for (let i = 0; i <= tabs.length - 1; i++) {
                tabs[i].addEventListener("click", function (e) { Janela.selectTab(e.target) })
            }

            // Habilita função de alternar a opacidade da janela.
            Janela.elementoJanela.children[0].children[2].addEventListener("click", Janela.toggleOpacity)

            // Habilita adição de itens à lista de itens da loja
            document.querySelector(".addItem-container").addEventListener("click", Janela.createItemEditTab)

            // Adiciona itens existêntes do banco de dados à lista de itens editáveis
            Janela.setShopTab(Shop.items)

            Janela.estilosEditadosSessao = Style.items
            Janela.setTabStyleValues()

            Janela.setTabFieldValues()

            var botaoSalvar = document.querySelector(".customize-overlay--save")
            botaoSalvar.addEventListener("click", () => {
                botaoSalvar.style.display = 'none'
                Janela.salvarEdicoes()
            })
            // console.log(JSON.stringify(Janela.itensCriadosSessao) == JSON.stringify(Shop.items));
        }
    }

    // Método responsável por mover a janela de customização
    static drag(elemento) {
        // Inicializa variaveis de posição
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        // Adiciona função ao segurar janela
        Janela.elementoJanela.children[0].onmousedown = dragMouseDown;

        // Função responsável por definir coordenada da âncora
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        // Função responsável por mover a janela de acordo com a movimentação do mouse
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            Janela.elementoJanela.style.top = (elemento.offsetTop - pos2) + 'px';
            Janela.elementoJanela.style.left = (elemento.offsetLeft - pos1) + 'px';
        }

        // Função responsável por resetar funcionalidade ao soltar o mouse
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;

            var posY = parseInt(Janela.elementoJanela.style.top.toString().split("px")[0])
            var posX = parseInt(Janela.elementoJanela.style.left.toString().split("px")[0])

            // Todo: Implementar função responsiva, adquirindo dinamicamente a altura e largura da janela, caso
            // decida implementar rezise na janela*
            if (posY <= 0) {
                Janela.elementoJanela.style.top = '0px'
            } else if (posY + 586 >= window.innerHeight) {
                Janela.elementoJanela.style.top = window.innerHeight - 586 + 'px';
            }
            if (posX <= 0) {
                Janela.elementoJanela.style.left = '0px'
            } else if (posX + 416 >= window.innerWidth) {
                Janela.elementoJanela.style.left = window.innerWidth - 416 + 'px';
            }

        }
    }

    // Método responsável por alternar a opacidade da janela de customização
    static toggleOpacity() {
        Janela.elementoJanela.style.opacity = Janela.elementoJanela.style.opacity == 1 ? .45 : 1

        var eyeIcon = Janela.elementoJanela.children[0].children[1].children[0];
        if (eyeIcon.classList.contains("fa-eye-slash")) {
            eyeIcon.classList.remove("fa-eye-slash")
            eyeIcon.classList.add("fa-eye")
        } else {
            eyeIcon.classList.remove("fa-eye")
            eyeIcon.classList.add("fa-eye-slash")
        }
    }

    // Método responsável por selecionar a guia do menu da janela de customização
    static selectTab(tab) {
        var tabs = document.querySelectorAll(".customize-overlay--nav ul li a")
        for (let i = 0; i <= tabs.length - 1; i++) {
            if (tab == tabs[i]) {
                Janela.selectedTab = i;
            }
            tabs[i].classList.remove("active")
        }
        tab.classList.add("active")
        Janela.changeTab(Janela.selectedTab)
    }

    // Método responsável por trocar visualmente as abas da janela de customização
    static changeTab(tab) {
        var elementos = document.querySelectorAll(".customize-content")
        for (let i = 0; i <= elementos.length - 1; i++) {
            elementos[i].style.display = 'none'
        }
        elementos[tab].style.display = 'initial'

        // Fecha os itens editáveis da loja da janela 'Shop'
        var expandElements = document.querySelectorAll(".--items-item-expand");
        for (let i = 0; i <= expandElements.length - 1; i++) {
            expandElements[i].parentElement.classList.remove("item-opened")
            expandElements[i].parentElement.classList.remove("item-closing")
            expandElements[i].parentElement.children[4].classList.remove("opened")
            expandElements[i].parentElement.children[4].classList.remove("closing")
        }
    }

    static setTabFieldValues() {
        var timeout = setTimeout(() => {
            var inputsTexto = document.querySelectorAll('.customize--item-value input[type="text"], .customize--item-value textarea')
            for (let i = 0; i <= inputsTexto.length - 1; i++) {
                inputsTexto[i].value = Fields.items[i];
                var novoItem = new field(inputsTexto[i].value);
                Janela.fieldsEditadosSessao.push(novoItem);

                inputsTexto[i].addEventListener("input", function (e) {
                    // Janela.fieldsEditadosSessao = JSON.parse(Janela.fieldsEditadosSessao)
                    Janela.fieldsEditadosSessao[i].value = inputsTexto[i].value
                    // console.log(Janela.fieldsEditadosSessao[i].value)
                    Janela.verifyChanges("fields")
                })
            }
        }, 200);
    }

    static setTabStyleValues() {
        var timeout = setTimeout(() => {
            var inputsNaoTexto = document.querySelectorAll('input[type="color"], input[type="range"]');
            // // console.log(inputsNaoTexto.length)
            for (let i = 0; i <= inputsNaoTexto.length - 1; i++) {

                // console.log(inputsNaoTexto[i])
                inputsNaoTexto[i].addEventListener("input", function (e) {
                    var tipo = inputsNaoTexto[i].type
                    Janela.updateElementsStyle(tipo, i, e.currentTarget.value)
                    // console.log(e.currentTarget.value)
                })

                if (inputsNaoTexto[i].type == "color") {
                    function rgbToHex(r, g, b) {
                        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
                    }
                    var r = Style.valores[i].split(',')[0]
                    var g = Style.valores[i].split(',')[1]
                    var b = Style.valores[i].split(',')[2]
                    inputsNaoTexto[i].setAttribute("value", rgbToHex(r, g, b))
                }

                else if (inputsNaoTexto[i].type == "range") {
                    inputsNaoTexto[i].setAttribute("value", Style.valores[i].replace("%", ""))
                }
            }
        }, 200);
    }

    static updateElementsStyle(type, target, value) {
        const root = document.documentElement
        // console.log(type)
        var alvo = Style.propriedades[target]
        var valorTratado;
        if (type == "color") {
            function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null
            }
            valorTratado = hexToRgb(value).replaceAll(" ", "")
            root.style.setProperty(alvo, valorTratado)
        } else if (type == "range") {
            valorTratado = `${value}%`
            root.style.setProperty(alvo, `${value}%`)
        }
        var headerKey = ""
        var footerKey = ""
        var homeKey = ""
        var shopKey = ""

        for (let i = 0; i <= Style.propriedades.length - 1; i++) {
            // console.log(Style.propriedades[i].replace("--", "").split("-"))
            var propriedade = Style.propriedades[i].replace("--", "").split("-")
            var key = propriedade[0]
            var keyChild = propriedade[1]
            var valor = root.style.getPropertyValue(Style.propriedades[i])

            switch (key) {
                case "header":
                    headerKey += `"${keyChild}": "${valor}",`
                    break;
                case "footer":
                    footerKey += `"${keyChild}": "${valor}",`
                    break;
                case "home":
                    homeKey += `"${keyChild}": "${valor}",`
                    break;
                case "shop":
                    shopKey += `"${keyChild}": "${valor}",`
                    break;
            }
            Janela.estilosEditadosSessao = `
                {
                    "header":{${headerKey}},
                    "footer":{${footerKey}},
                    "home":{${homeKey}},
                    "shop":{${shopKey}}
                }
                `;

            // Janela.estilosEditadosSessao = JSON.stringify(Janela.estilosEditadosSessao
            //     .replaceAll(",},", "},").replaceAll(",}", "}").replaceAll(" ", "").replaceAll("\n", "").replace(/\\/g, ""))

            // Janela.estilosEditadosSessao = Janela.estilosEditadosSessao.replaceAll("\\","")
            Janela.estilosEditadosSessao = Janela.estilosEditadosSessao.replaceAll(",}", "}")
            // console.log(JSON.parse(father.replaceAll(",},", "},")))
            // console.log(key + " , " + keyChild + " === " + root.style.getPropertyValue(Style.propriedades[i]))

        }
        Janela.verifyChanges("estilos", target, valorTratado)
    }

    // Método responsável por criar e definir os itens existentes da guia SHOP da janela de customização
    static setShopTab(item) {
        for (let i = 0; i <= Shop.items.length - 1; i++) {
            Janela.createItemEditTab(item[i])
        }
    }

    // Método responsável por criar um novo item da loja 
    static createItemEditTab(item) {
        var elemento;

        // Se um parametro for passado, quer dizer que o item já existe no banco de dados, então o
        // elemento precisa ser criado com valores relacionados
        if (!isNaN(item.id)) {
            elemento = `
            <li class="customize--shop-items-item" value="${document.querySelectorAll(".customize--shop-items-item").length}">
                            <div class="--items-item-title">${item.titulo}</div>
                            <a class="--items-item-button moveup">
                                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                            </a>
                            <a class="--items-item-button movedown">
                                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                            </a>
                            <a class="--items-item-expand">
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            </a>
                            <div class="--items-item-content">
                                <div class="--items-item-label">
                                    <span>Titulo:</span>
                                    <input type="text" value="${item.titulo}">
                                </div>
                                <div class="--items-item-label">
                                    <span>Imagem: (url)</span>
                                    <input type="text" value="${item.imagem}">
                                </div>
                                <div class="--items-item-label">
                                    <span>Descrição breve:</span>
                                    <textarea class="desc">${item.descricao}</textarea>
                                </div>
                                <div class="--items-item-label">
                                    <span>Descrição detalhada:</span>
                                    <textarea class="descPlus">${item.descricaoDetalhada}</textarea>
                                </div>
                                <div class="--items-item-label">
                                    <span>Preço:</span>
                                    <input type="number" value="${item.preco}">
                                </div>
                                <div class="buttons-span">
                                    <div class="deleteItem">
                                        <a href="#">remover</a>
                                    </div>
                                </div>
                            </div>
                        </li>`
        }

        // Se um parametro não for passado, quer dizer que o usuário está criando o item agora, portanto
        // não tem valores relacionados
        else {
            elemento = `
            <li class="customize--shop-items-item" value="${document.querySelectorAll(".customize--shop-items-item").length}">
                            <div class="--items-item-title"></div>
                            <a class="--items-item-button moveup">
                                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                            </a>
                            <a class="--items-item-button movedown">
                                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                            </a>
                            <a class="--items-item-expand">
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            </a>
                            <div class="--items-item-content">
                                <div class="--items-item-label">
                                    <span>Titulo:</span>
                                    <input type="text" value="">
                                </div>
                                <div class="--items-item-label">
                                    <span>Imagem: (url)</span>
                                    <input type="text" value="">
                                </div>
                                <div class="--items-item-label">
                                    <span>Descrição:</span>
                                    <textarea class="desc"></textarea>
                                </div>
                                <div class="--items-item-label">
                                    <span>Descrição+:</span>
                                    <textarea class="descPlus"></textarea>
                                </div>
                                <div class="--items-item-label">
                                    <span>Preço:</span>
                                    <input type="number" value="">
                                </div>
                                <div class="buttons-span">
                                    <div class="deleteItem">
                                        <a href="#">remover</a>
                                    </div>
                                </div>
                            </div>
                        </li>`
        }

        // Cria elemento relacionado ao item
        $('.customize--shop-items .addItem-container').before(elemento);

        // Chama função para criar o objeto relacionado ao item
        item ? Janela.createItemObject(item) : Janela.createItemObject();

        // Chama função para adicionar função aos botões do elemento relacionado ao item
        Janela.addEditEvents(document.querySelectorAll(".customize--shop-items-item").length - 1)

        Janela.verifyChanges("itens")
    }

    // Método responsável por remover o elemento relacionado ao item
    static removeItemEditTab(item) {
        console.log(item)
        document.querySelectorAll(".customize--shop-items-item")[item].remove()
    }

    // Método responsável por criar uma instância de item, para organizar objetos do item e auxiliar na postagem
    static createItemObject(e) {
        var novoItem = new Item(e);
        Janela.itensCriadosSessao.push(novoItem);
    }

    // Método responsável por remover o objeto relacionado ao item
    static removeItemObject(itemId) {
        console.log(itemId)
        Item.indice = Item.indice - 1
        var temp = Janela.itensCriadosSessao.filter(item => item.id !== itemId)
        console.log(temp)

        for (let i = itemId; i <= temp.length - 1; i++) {
            temp[i].id -= 1;
            var elemento = document.querySelectorAll(".customize--shop-items-item")[i]
            elemento.value = elemento.value - 1;
            console.log(document.querySelectorAll(".customize--shop-items-item")[i])
        }
        Janela.itensCriadosSessao = temp;

        Janela.verifyChanges("itens")
    }

    // Método responsável por adicionar função aos elementos que compõem os itens editáveis
    static addEditEvents(item) {

        // Declara elemento relacionado ao item
        var elementoCriado = document.querySelectorAll(".customize--shop-items-item")[item]

        // Adiciona a função de expandir o menu de edição
        elementoCriado.children[3].addEventListener("click",
            function (e) {

                // Declara elemento do botão de abrir relacionado ao elemento do item criado
                var elementoCriado = e.currentTarget.parentElement.children[4]

                // Trecho: Animação de abrir
                if (elementoCriado.classList.contains("opened")) {
                    elementoCriado.classList.add("closing")
                    elementoCriado.classList.remove("opened")
                } else {
                    elementoCriado.classList.remove("closing")
                    elementoCriado.classList.add("opened")
                }

                // Trecho: Animação de fechar
                var elementoCriadoPai = elementoCriado.parentElement
                if (elementoCriadoPai.classList.contains("item-opened")) {
                    elementoCriadoPai.classList.add("item-closing")
                    elementoCriadoPai.classList.remove("item-opened")
                } else {
                    elementoCriadoPai.classList.remove("item-closing")
                    elementoCriadoPai.classList.add("item-opened")
                }
            }
        )

        // Adiciona função ao botão de remoção do item, referenciando corretamente o item a partir da posição do botão no html
        var botaoRemover = elementoCriado.children[4].children[5].children[0].children[0];
        botaoRemover.addEventListener("click", function (e) {
            var id = e.currentTarget.parentElement.parentElement.parentElement.parentElement.value;
            Janela.removeItemEditTab(id);
            Janela.removeItemObject(id)
        })

        // Adiciona função os botões de trocar localização do item
        var botaoSubirItem = elementoCriado.children[1]
        botaoSubirItem.addEventListener("click", function (e) {
            Janela.moveItemPosition(e.currentTarget.parentElement.value, "up")
            Janela.verifyChanges("itens")
        })
        var botaoDescerItem = elementoCriado.children[2]
        botaoDescerItem.addEventListener("click", function (e) {
            Janela.moveItemPosition(e.currentTarget.parentElement.value, "down")
            Janela.verifyChanges("itens")
        })

        // Declara elementos dos campos relacionados ao item 
        var titulo = elementoCriado.children[4].children[0].children[1];
        var imagem = elementoCriado.children[4].children[1].children[1];
        var descricao = elementoCriado.children[4].children[2].children[1];
        var descricaoDetalhada = elementoCriado.children[4].children[3].children[1];
        var preco = elementoCriado.children[4].children[4].children[1];

        var editableElements = [titulo, imagem, descricao, descricaoDetalhada, preco]

        // Função responsável por fazer a edição dos itens nos objetos locais de acordo com o input do usuário
        for (let i = 0; i <= editableElements.length - 1; i++) {

            // Condicional para evitar dupla adição dos eventos
            if (!editableElements[i].classList.contains['hasEvent']) {
                editableElements[i].classList.add("hasEvent")

                // Evento input: Quando o usuário muda um valor executa a função:
                editableElements[i].addEventListener("input", function (e) {

                    var id = e.currentTarget.parentElement.parentElement.parentElement.value
                    // Switch responsável por fazer as alterações nas chaves corretas dos objetos locais
                    switch (e.currentTarget) {

                        case titulo:
                            titulo.parentElement.parentElement.parentElement.children[0].textContent = titulo.value
                            Janela.itensCriadosSessao[id].titulo = titulo.value
                            break;

                        case imagem:
                            Janela.itensCriadosSessao[id].imagem = imagem.value
                            break;

                        case descricao:
                            Janela.itensCriadosSessao[id].descricao = descricao.value
                            break;

                        case descricaoDetalhada:
                            Janela.itensCriadosSessao[id].descricaoDetalhada = descricaoDetalhada.value
                            break;

                        case preco:
                            Janela.itensCriadosSessao[id].preco = preco.value
                            break;
                    }

                    Janela.verifyChanges("itens")
                })
            }
        }
    }

    static moveItemPosition(item, direction) {
        var hasMoved = false;
        switch (direction) {
            case 'up':
                if (item > 0) {
                    Janela.itensCriadosSessao[item].id = Janela.itensCriadosSessao[item].id - 1
                    Janela.itensCriadosSessao[item - 1].id = Janela.itensCriadosSessao[item].id + 1
                    // console.log(Janela.itensCriadosSessao[item - 1].id)

                    var elemento = document.querySelectorAll(".customize--shop-items-item")[item]
                    var elementoAcima = document.querySelectorAll(".customize--shop-items-item")[item - 1]
                    elemento.value = elemento.value - 1
                    elementoAcima.value = elemento.value + 1
                    hasMoved = true;
                }
                break;
            case 'down':
                if (item < Janela.itensCriadosSessao.length - 1) {
                    Janela.itensCriadosSessao[item].id = Janela.itensCriadosSessao[item].id + 1
                    Janela.itensCriadosSessao[item + 1].id = Janela.itensCriadosSessao[item].id - 1

                    var elemento = document.querySelectorAll(".customize--shop-items-item")[item]
                    var elementoAbaixo = document.querySelectorAll(".customize--shop-items-item")[item + 1]
                    elemento.value = elemento.value + 1
                    elementoAbaixo.value = elemento.value - 1
                    hasMoved = true;
                }
                break;
        }

        if (hasMoved == true) {
            var elemento = document.querySelectorAll(".customize--shop-items-item")
            var elementoListaOrdenada = [];
            var objetoListaOrdenada = [];

            for (let i = 0; i <= elemento.length - 1; i++) {
                for (let e = 0; e <= elemento.length - 1; e++) {
                    if (elemento[e].value == i) {
                        elemento[e].classList.remove("item-closing")
                        elemento[e].children[4].classList.remove("closing")
                        elementoListaOrdenada.push(elemento[e])

                    }
                    if (Janela.itensCriadosSessao[e].id == i) {
                        var item = Janela.itensCriadosSessao[e]
                        objetoListaOrdenada.push(item)
                    }
                }
            }

            Janela.itensCriadosSessao = objetoListaOrdenada

            for (let i = 0; i <= elementoListaOrdenada.length - 1; i++) {
                elemento[i].remove()
            }

            for (let i = 0; i <= elementoListaOrdenada.length - 1; i++) {
                $('.customize--shop-items .addItem-container').before(elementoListaOrdenada[i]);
            }
        }
    }

    // Método responsável por indentificar as alteração e redirecionar ao salvamento correto no banco de dados
    static salvarEdicoes() {
        if (JSON.stringify(Janela.itensCriadosSessao) != JSON.stringify(Shop.items)) {
            Janela.armazenar(JSON.stringify(Janela.itensCriadosSessao), 'B2')
        }

        var styles = Janela.estilosEditadosSessao
        if (typeof styles === 'string') {
            styles = styles.replaceAll(" ", "")
            if (styles != JSON.stringify(Style.items)) {
                Janela.armazenar(styles, 'B3')
            }
        }

        var campos = JSON.stringify(Janela.fieldsEditadosSessao)
            .replaceAll('}', "")
            .replaceAll('{', "")
            .replaceAll('"value":', "")

        if (JSON.stringify(Fields.items) != campos) {
            Janela.armazenar(campos, 'B4')
        } 

    }

    // Método responsável por indentificar alterações do usuário nos campos
    static verifyChanges(section, item, value) {
        switch (section) {
            case "itens":
                // Esse trecho mostra o botão de salvar se alguma alteração foi feita.
                if (JSON.stringify(Janela.itensCriadosSessao) == JSON.stringify(Shop.items)) {
                    document.querySelector(".customize-overlay--save").style.display = 'none'
                    return false
                } else {
                    document.querySelector(".customize-overlay--save").style.display = 'initial'
                    return true
                }
            case "estilos":
                // console.log(Style.valores[item] + " ---> " + value)
                if (Style.valores[item].toString() != `${value}`) {
                    document.querySelector(".customize-overlay--save").style.display = 'initial'
                    // console.log("dif")
                    return true
                } else {
                    document.querySelector(".customize-overlay--save").style.display = 'none'
                    // console.log("igualigual")
                    return false
                }
            case "fields":
                var campos = JSON.stringify(Janela.fieldsEditadosSessao)
                    .replaceAll('}', "")
                    .replaceAll('{', "")
                    .replaceAll('"value":', "")

                console.log(Janela.fieldsEditadosSessao)
                console.log(JSON.stringify(Fields.items))
                if (JSON.stringify(Fields.items) != campos) {
                    document.querySelector(".customize-overlay--save").style.display = 'initial'
                    return true
                } else {
                    document.querySelector(".customize-overlay--save").style.display = 'none'
                    return false
                }
        }
    }

    static updateShopElements() {
        var elementos = document.querySelectorAll(".main-content--container--list-item")
        for (let i = 0; i <= elementos.length - 1; i++) {
            elementos[i].remove()
        }
        Shop.items = ''
        Shop.getItems()
        var intervalo = setInterval(() => {
            if (Shop.items != '') {
                Shop.createItemElement()
                Shop.atualizarCard(0)
                clearInterval(intervalo)
            }
        }, 15);
    }

    // Temporário: método responsável por postar os itens no banco de dados
    static armazenar(item, location) {
        document.querySelector(".customize--warning").style.display = 'flex'
        const scriptURL = "https://script.google.com/macros/s/AKfycbzAlnyj8LSMi_d7gyKk8aCa15-rHLBpc_Eeaf7lsUtiWeZEeTmikUgZxU0W12fs_RDFsA/exec";

        fetch(scriptURL, {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Envia como formulário
            },
            body: new URLSearchParams({
                // Parâmetros
                'value': item,
                'location': location
            })
        })
            .then(response => response.text())
            .then(result => {
                // SUCESSO
                console.log('Sucesso:', result);

                var page = window.location.toString()
                if (page.includes("shop.html")) {
                    Janela.updateShopElements()
                }

                document.querySelector(".customize--warning").style.display = 'none'
            })
            .catch(error => {
                // ERRO
                console.log('Erro', result);
            });
    }
}

class field {
    value;
    constructor(e) {
        this.value = e
    }
}

class Item {
    static indice;;
    id;
    titulo;
    imagem;
    descricao;
    descricaoDetalhada;
    preco;
    constructor(e) {
        Item.indice >= 0 ? Item.indice += 1 : Item.indice = 0;
        // console.log(Item.indice)
        // console.log(this.id)

        if (!isNaN(e.id)) {
            this.id = e.id;
            this.titulo = e.titulo;
            this.imagem = e.imagem;
            this.descricao = e.descricao;
            this.descricaoDetalhada = e.descricaoDetalhada;
            this.preco = e.preco;
        } else {
            console.log(Item.indice)
            this.id = Item.indice;
            this.titulo = "";
            this.imagem = "";
            this.descricao = "";
            this.descricaoDetalhada = "";
            this.preco = "";
        }
    }
}