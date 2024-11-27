class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });

		const script = document.createElement('script');
		script.textContent = `
			// Define handleSubmit function
			function handleQuery(event) {
				// Prevent form from actually submitting
				event.preventDefault();
				
				// Get query from the form input
				const query = document.querySelector('input[name="query"]').value;

				// Optionally, you could update the URL or pass the query to another part of the page
				console.log("Search Query:", query);

				// If you want to update the URL without refreshing the page
				const currentUrl = new URL(window.location);
				currentUrl.searchParams.set('query', query);
				window.history.pushState({}, '', currentUrl);

				// You can also trigger custom behavior like updating the admin-forms custom element
				const adminForms = document.querySelector('admin-forms');
				if (adminForms) {
					adminForms.setAttribute('query', query);  // Pass query to the custom element as an attribute
				}
			}
		`;
		this.shadow.innerHTML = `
		<form class="mb-5" action="/Admin/index.html" method="get" onsubmit="handleQuery(event)">
			<div class="input-group justify-content-center mt-5 mb-5">
				<input  type="search" name="query" placeholder="Search..." aria-label="Search" class="form-control search" style="max-width: 50%;">
				<button type="submit" class="btn btn-primary search-button">Search</button>
			</div>
        </form>`;
		this.shadow.appendChild(script);

		const style = document.createElement('style');
		style.textContent = `
			.search, .search:focus{
				border-radius: 25px;
				background-color: #D9D9D9;
			}
			.search-button{
				border-radius: 25px;
			}
		`;
		this.importStyles();
		this.shadow.appendChild(style);
	}
	importStyles() {
		const generalBootstrap = document.createElement('link');
		generalBootstrap.setAttribute('rel', 'stylesheet');
		generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
	
		const bootstrap = document.createElement('link');
		bootstrap.setAttribute('rel', 'stylesheet');
		bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
  
		this.shadow.appendChild(generalBootstrap);
		this.shadow.appendChild(bootstrap);
	  }
	  
}

window.customElements.define('search-bar', SearchBar);
  