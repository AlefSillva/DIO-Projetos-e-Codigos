class Cardnews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

//-------------------------------------------------------------
    build() {
        const componentRoot = document.createElement("div"); // cria uma div (principal)

        componentRoot.setAttribute("class", "card"); // adição de um atributo class com nome card
//-------------------------------------------------------------
        const cardLeft = document.createElement("div"); // cria uma div (filho)
        cardLeft.setAttribute("class", "card_left"); // adc atributo class/nome

        const autor = document.createElement("span");// cria um "span"com nome autor
        autor.textContent = "By: " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a"); // cria um elemento "a"
        linkTitle.textContent = this.getAttribute("Title");// criando um atributo "title" para o LinkTitle (título da notícia)
        linkTitle.href = this.getAttribute("link-url");


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");
//-------------------------------------------------------------
        // filhos "autor, linkTitle e newsContent" sendo pendurados no PAI "cardLeft"
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
//-------------------------------------------------------------
        const cardRight = document.createElement("div");// cria uma div (filho)
        cardRight.setAttribute("class", "card_right");// adc atributo class/nome
        
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.png";
        newsImage.alt = "Foto da Notícia"

        // Filho "newsImage" sendo pendurado mp PAI "cardRight"
        cardRight.appendChild(newsImage);

//-------------------------------------------------------------
        // filhos "cardLeft" e "cardRight" sendo pendurados no PAI "componentRoot"
        componentRoot.appendChild(cardLeft); 
        componentRoot.appendChild(cardRight);

//-------------------------------------------------------------
        return componentRoot
    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                border: 1px solid gray;
                -webkit-box-shadow: 0px 10px 13px -7px #000000,
                7px 7px 12px 0px rgba(0, 0, 0, 0);
                box-shadow: 0px 10px 13px -7px #000000, 7px 7px 12px 0px rgba(0, 0, 0, 0);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 1.563rem;
                color: #000000;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card_left0 > p {
                color: rgb(70, 70, 70);
            }
            
            `


        return style;
    }
}

customElements.define("card-news", Cardnews);

