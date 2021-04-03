const appFooter = document.createElement('template');
appFooter.innerHTML = `
  <style>
    footer {
      height: 30px;
      background: red;
      position: fixed;
      bottom: 0;
      left: 0
    }
  </style>
  <footer>
    klk
  </footer>
`

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open '});
    this.shadowRoot.appendChild(appFooter.content.cloneNode(true));
  }
}

window.customElements.define('app-footer', AppFooter);