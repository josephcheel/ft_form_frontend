class AdminNav extends HTMLElement {
	constructor() {
	  super();
	  this.shadow = this.attachShadow({ mode: 'open' });
  
	  this.container = document.createElement('div');
	  this.container.classList.add('sidebar');
	  this.container.innerHTML = `
				<ul>
					<li><a href="/Admin/index.html"><i class="fas fa-home"></i></a></li>
					<li><a href="#"><i class="fas fa-user"></i></a></li>
					<li><a href="#"><i class="fas fa-cogs"></i></a></li>
					<li><a href="#"><i class="fas fa-envelope"></i></a></li>
					<li><a href="/Admin/favourites.html"><i class="fas fa-star"></i></a></li>
				</ul>
	  `;
	  this.importStyles();
	  this.shadow.appendChild(this.container);
	}
  
	importStyles() {
	  const generalBootstrap = document.createElement('link');
	  generalBootstrap.setAttribute('rel', 'stylesheet');
	  generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
  
	  const styleLink = document.createElement('link');
	  styleLink.setAttribute('rel', 'stylesheet');
	  styleLink.setAttribute('href', '/Admin/Nav/styles.css');
  
	  const bootstrap = document.createElement('link');
	  bootstrap.setAttribute('rel', 'stylesheet');
	  bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
  
	// TEMPORARY ICONS
	  const fontAwesome = document.createElement('link');
	  fontAwesome.setAttribute('rel', 'stylesheet');
	  fontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
	
	  this.shadow.appendChild(fontAwesome);


	  this.shadow.appendChild(styleLink);
	  this.shadow.appendChild(generalBootstrap);
	  this.shadow.appendChild(bootstrap);
	}
	
  
	connectedCallback() {
		console.log('Admin Forms mounted');
		
	}
  }
  
  window.customElements.define('admin-nav', AdminNav);
  