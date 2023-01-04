const template_bottom = document.createElement("template");
template_bottom.innerHTML = `
<style>
nav{
    height: 90px;
    width: 100%;
    color: #ffffff;
    font-size: 10pt;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content:space-around;
    padding: 10px 0 0 0;
    background: #181818;
}
nav p:nth-child(2){
    text-align: center;
}
nav p:nth-child(1) img{
    width: 100%;
  }
nav img{
    background: chartreuse;
    border-radius: 10px;
    margin: 10px 0 0 0;
}
nav .lg-lpc{
    width: 60px;
}
nav p a:nth-child(1){
    color: #00eeff;
}
nav p a:nth-child(4){
    color: white;
}

/*sociale*/



.social-section-h1{
    text-decoration: underline;
    font-size: 15pt;
}
#prom_1{
    width: 350px;
}
.social-section-div-event>#nav_social{
    width:100%;
    height: 100%;
    border:red solid 1px;
    background: transparent;
    display: flex;
    justify-content: space-around;
}
#nav_social>div{
    border: #000 solid 1px;
    color: black;
    /* display: flex; */
    width: 700px;
}
/* #nav_social>div>div{
    max-width: 300px;
    text-align: justify;
} */
</style>
<nav>
        <p><img src="../../img/mtribune.jpg" ></p>
        <P>
            Social page, source |  
            <a href="https://madagascar-tribune.com/Lycee-Les-Mousquetaires-du-Boeny,14841.html" target="blank"> www.madagascar-tribune.com</a>
             | © copy right 2022
            <br>
            <img src="../../img/oli.gif" >
            <a href="https://www.facebook.com/selestino.hajaniaina" title="selestinoolivier@gmail.com" target="blank">HAJANIAINA Selestino</a>
            &#128550;
        </P>
        <p><img src="../../img/LPC.png" class="lg-lpc"></p>
    </nav>
`;

class Cardbottom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template_bottom.content.cloneNode(true));
  }
}

window.customElements.define("bottom-bar", Cardbottom);
