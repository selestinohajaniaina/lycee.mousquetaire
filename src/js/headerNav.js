const template_header = document.createElement("template");
template_header.innerHTML = `
<style>
header{
    background: #353535;
    color: white;
    height: 6em;
    top: 0;
    margin: 0;
    padding: 20px 0 0 0;
}
.gtitre{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
}
@media (max-width:600px) {
    header{
      height: 20%;
    }
    .gtitre{
      flex-direction: column;
    }
  }
header h1{
    font-size: auto;
    font-family: Cooper Black;
}
header ul{
    display: flex;
    align-items: center;
    margin-right: 15px;
}
header ul li{
    
    margin-right: 15px;
    border-radius: 18px;
    cursor: pointer;
    width: 85px;
    height: 25px;
    text-align: center;
    padding-top: 5px;
    list-style: none;
}
header ul li:hover{
    box-shadow: inset 0px 0px 5px #ffffff;
    border-bottom: #ffffff solid 0.7px;
    transition: all 0.5s ease;
}
header ul li a{
    text-decoration: none;
    color: white;
}
</style>
<header>
        <div class="gtitre">
            <h1>Les Mousquetaires du Boeny</h1>
            
                <ul>
                    <li><a href="../../../index.html">Acceuil</a></li>
                    <li><a href="../social/index.html">Social</a></li>`+
                    //this link waits for the next codes
                    //<li><a href="#">Article</a></li>
                    `<li><a href="../localise/index.html">Localise</a></li>
                </ul>
            
        </div>
    </header>
`;

class Cardheader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template_header.content.cloneNode(true));
  }
}

window.customElements.define("header-bar", Cardheader);
