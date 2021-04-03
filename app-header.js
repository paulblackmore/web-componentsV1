const appHeader = document.createElement('template');
appHeader.innerHTML = `
  <style>
    header {
      height: 50px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
    h4 {
      margin: 0;
    }
  </style>
  <header>
    <h4></h4>
    <slot></slot>
  </header>
`

class AppHeader extends HTMLElement {
  constructor() {
		super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(appHeader.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerHTML = this.getAttribute('title');
	}
}

window.customElements.define('app-header', AppHeader);