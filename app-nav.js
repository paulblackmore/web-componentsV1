const appNav = document.createElement('template');
appNav.innerHTML = `
  <style>
    nav {
      width: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  </style>
  <nav>
    <p>Home</p>
    <p>About</p>
    <p>Contact</p>
  </nav>
`

class AppNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(appNav.content.cloneNode(true));
  }
}

window.customElements.define('app-nav', AppNav);