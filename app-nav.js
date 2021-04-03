const appNav = document.createElement('template');
appNav.innerHTML = `
  <style>
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      color: #585656;
    }
    nav {
      width: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  </style>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
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