class UserDetail extends HTMLElement {
  constructor() {
		super();
		this.users = [];
		this.attachShadow({ mode: 'open' });
	}
	
	getUsers(users) {
		this.users = users;

		this.users.forEach(user => {
			const template = document.createElement('template');
			template.innerHTML = `
				<style>
					h2 {
						margin-top: 0;
					}
					.card {
						background: #eee;
						border-radius: 5px;
						padding: 10px;
						margin: 10px;
					}
				</style>
				<div class="card">
					<h2>${user.name}</h2>
					<span>${user.email}</span>
				</div>
			`	
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		})
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

window.customElements.define('user-detail', UserDetail);


