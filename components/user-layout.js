const userLayout = document.createElement('template');
userLayout.innerHTML = `
  <style>
    .container {
      background: red;
      color: #fff;
    }
  </style>
  <section class="container">
    <slot></slot>
  </section>
`

class UserLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(userLayout.content.cloneNode(true));
  }
}

window.customElements.define('user-layout', UserLayout);