const template = document.createElement('template');
template.innerHTML = `
	<style>
		h3 {
			margin-top: 0;
		}
		.card {
			background: #eee;
			border-radius: 5px;
			padding: 10px;
		}
	</style>
	<div class="card">
		<h3><slot name="title"/></h3>
		<span><slot name="name"/></span>
		<span><slot name="email"/></span>
	</div>
`

class UserCard extends HTMLElement {
  constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('title');
	}
	
}

window.customElements.define('user-card', UserCard);