class UserForms extends HTMLElement {
	constructor() {
	  super();
	  this.shadow = this.attachShadow({ mode: 'open' });
  
	  this.container = document.createElement('div');
	  this.container.classList.add('container', 'mt-4');
	  this.container.innerHTML = `
		<div id="appendCardsHere" class="row g-3">

		</div>
	  `;
	  this.importStyles();
	  
	  // Add dynamic cards
	  this.addCard({
		id: 1,
		title: "Formulario Empleo Estudiantes",
		startDate: "01/11/2024",
		endDate: "15/11/2024",
		badges: [{ text: "Estudiantes" }, { text: "Badge" }],
	  });
	  this.addCard({
		id: 2,
		title: "Formulario Satisfacción Piscina",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", }, { text: "Alert" }],
	  });
	  this.addCard({
		id: 3,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info"}, { text: "Alert" }],
	  });
	  this.addCard({
		id: 4,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert"}],
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
	  });
  
	  this.shadow.appendChild(this.container);
	}
  
	importStyles() {
	  const generalBootstrap = document.createElement('link');
	  generalBootstrap.setAttribute('rel', 'stylesheet');
	  generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
  
	  const styleLink = document.createElement('link');
	  styleLink.setAttribute('rel', 'stylesheet');
	  styleLink.setAttribute('href', '/User/Forms/styles.css');
  
	  const bootstrap = document.createElement('link');
	  bootstrap.setAttribute('rel', 'stylesheet');
	  bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
  
	  this.shadow.appendChild(styleLink);
	  this.shadow.appendChild(generalBootstrap);
	  this.shadow.appendChild(bootstrap);
	}
	handleCardClick(id)
	{
		console.log('Card clicked', id);
		// Redirect to the form page
		// window.location.href = `/form/?id=${id}`;
	}
	handleCardFavorite(id) {
		console.log('Star clicked', id);
	}
	addCard({ id, title, startDate, endDate, state /* Complete, New, Normal */ }) {
	  const GridOfCards = this.container.querySelector('#appendCardsHere');
  
	  if (GridOfCards) {
		const card = document.createElement('section');
		card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
		card.setAttribute('data-id', id);
		card.innerHTML = `
		  <div class="card mb-2">
			<div class="card-body">
			  <!-- Row 1: Header Section -->
			  <div class="row" id="row-header">
				<div id="state" class="col-auto">
				
					<img src="/public/assets/icons/calendar2.svg" width="30" height="30">
				</div>
				<div class="col align-items-center">
				  <section class="d-flex justify-content-end">
					<div class="row w-100 justify-content-end">
					
					  <div class="col-auto text-end">
						<abbr title="${startDate} - ${endDate}">
							<img src="/public/assets/icons/trophy-black.svg" width="30" height="30">
						</abbr>
					  </div>
					</div>
				  </section>
				</div>
			  </div>
  
			  <!-- Row 2: Card Title -->
			  <div class="row mt-5">
				<div class="col">
				  <h5 class="card-title text-center">${title}</h5>
				</div>
			  </div>
  
			  <div class="row mt-5">
				<div class="col d-flex justify-content-end">
				  <button id="enter">Enter</button>
			  </div>
			  <!-- Row 3: Badges -->
			  </div>
			</div>
		  </div>
		`;
		let state;
		if (state === 'Complete')
		{
			state = card.querySelector('#state');
			completeTrophy = document.createElement('img');
			styleLink.setAttribute('rel', 'stylesheet');
			styleLink.setAttribute('href', '/User/Forms/styles.css');
		
			
			state.appendChild()

		}
		else if (state === 'New')
		{

		}
		else (state === 'Normal')
		{

		}
		// Attach click event to the card
		GridOfCards.appendChild(card);
	  }
		
	}
  
	connectedCallback() {
		console.log('Admin Forms mounted');
		
	}
  }
  
  window.customElements.define('user-forms', UserForms);
  