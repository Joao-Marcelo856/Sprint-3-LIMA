// Classe responsável pelo comportamento do menu mobile (abrir/fechar e animação dos links)
class MobileNavbar {
    // construtor recebe seletor do botão mobile, da lista de navegação e dos links
    constructor(mobileMenu, navList, navLinks) {
        // armazena seletor do botão do menu mobile
        this.mobileMenu = document.querySelector(mobileMenu);
        // armazena referência da lista de navegação
        this.navList = document.querySelector(navList);
        // armazena NodeList dos itens da lista (links)
        this.navLinks = document.querySelectorAll(navLinks);
        // classe que será alternada para abrir/fechar o menu
        this.activeClass = "active";

        // vincula o contexto do método handleClick à instância atual
        this.handleClick = this.handleClick.bind(this);
    }

    // animação para cada link: define ou remove a animação CSS sequencial
    animateLinks() {
        // percorre cada link, usando index para criar atraso progressivo
        this.navLinks.forEach((link, index) => {
            // se já houver animação definida, remove-a; caso contrário aplica a animação
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    // método que lida com o clique no botão mobile: alterna classes e anima links
    handleClick() {
        // alterna a classe active na lista de navegação (mostra/oculta)
        this.navList.classList.toggle(this.activeClass);
        // alterna a classe active no botão mobile (transforma linhas em X)
        this.mobileMenu.classList.toggle(this.activeClass);
        // chama animação dos links
        this.animateLinks();
    }

    // adiciona o listener de clique no botão mobile
    addClickEvent() {
        // garante que mobileMenu exista antes de adicionar o listener
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // inicializa a instância: somente adiciona evento se o botão existir na página
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// cria instância da MobileNavbar com os seletores usados no HTML
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
// inicializa o comportamento do menu mobile
mobileNavbar.init();