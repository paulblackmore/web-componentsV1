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
		this.users = [];
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('title');
	}

	getUsers(users) {
		this.users = users;
		console.log(this.users)
	}

	clearUsers() {
		this.users = [];
	}
	
	connectedCallback() {
		try {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => this.getUsers(json))
		} catch (error) {
			console.log('error getting users')
		}
	}

	disconnectedCallback() {
		this.clearUsers();
	}
}

window.customElements.define('user-card', UserCard);