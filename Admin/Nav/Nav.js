class AdminNav extends HTMLElement {
	constructor() {
	  super();
	  this.shadow = this.attachShadow({ mode: 'open' });
  
	  this.container = document.createElement('div');
	  this.container.classList.add('container', 'mt-4');
	  this.container.innerHTML = `
		<div id="appendCardsHere" class="row g-3">
		<!-- Static Add Form Card -->
		<div class="col-12 col-sm-6 col-md-4">
			<div class="card">
			<div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
				<a href="#">
				<abbr title="Add Form"> <img id="add-form" class="mb-3" src="../public/assets/icons/plus-circle.svg" width="50" alt="Add Form">
				</abbr>
				</a>
			</div>
			</div>
		</div>
		</div>

	  `;
	  this.importStyles();
    }
  
	importStyles() {
	  const generalBootstrap = document.createElement('link');
	  generalBootstrap.setAttribute('rel', 'stylesheet');
	  generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
  
	  const styleLink = document.createElement('link');
	  styleLink.setAttribute('rel', 'stylesheet');
	  styleLink.setAttribute('href', '/Forms/styles.css');
  
	  const bootstrap = document.createElement('link');
	  bootstrap.setAttribute('rel', 'stylesheet');
	  bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
  
	  this.shadow.appendChild(styleLink);
	  this.shadow.appendChild(generalBootstrap);
	  this.shadow.appendChild(bootstrap);
	}
    
  
	connectedCallback() {
		console.log('Admin Forms mounted');
		
	}
  }
  
  window.customElements.define('admin-nav', AdminNav);
  