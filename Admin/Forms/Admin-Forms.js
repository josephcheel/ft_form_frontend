class AdminForms extends HTMLElement {
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
				<abbr title="Add Form"> <img id="add-form" class="mb-3" src="/public/assets/icons/plus-circle.svg" width="50" alt="Add Form">
				</abbr>
				</a>
			</div>
			</div>
		</div>
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
		isFavourite: false,
	  });
	  this.addCard({
		id: 2,
		title: "Formulario Satisfacción Piscina",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", }, { text: "Alert" }],
		isFavourite: false,
	  });
	  this.addCard({
		id: 3,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info"}, { text: "Alert" }],
		isFavourite: false,
	  });
	  this.addCard({
		id: 4,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert"}],
		isFavourite: false,
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
		isFavourite: false,
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
		isFavourite: false,
	  });
  
	  this.shadow.appendChild(this.container);
	}
  
	importStyles() {
	  const generalBootstrap = document.createElement('link');
	  generalBootstrap.setAttribute('rel', 'stylesheet');
	  generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
  
	  const styleLink = document.createElement('link');
	  styleLink.setAttribute('rel', 'stylesheet');
	  styleLink.setAttribute('href', '/Admin/Forms/styles.css');
  
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
	addCard({ id, title, startDate, endDate, badges = [], isFavourite }) {
	  const GridOfCards = this.container.querySelector('#appendCardsHere');
  
	  if (GridOfCards) {
		const card = document.createElement('section');
		card.classList.add('col-12', 'col-sm-6', 'col-md-4');
		card.setAttribute('data-id', id);
		card.innerHTML = `
		  <div class="card mb-2">
			<div class="card-body">
			  <!-- Row 1: Header Section -->
			  <div class="row" id="row-header">
				<div class="col-auto">
				  <div class="star-container">
					<input id="star" type="checkbox">
					<img id="star-selected" src="/public/assets/icons/star-fill_grey.svg">
					<img id="star-unselected" src="/public/assets/icons/start-fill_yellow.svg" >
				  </div>
				</div>
				<div class="col align-items-center">
				  <section class="d-flex justify-content-end">
					<div class="row w-100 justify-content-end">
					  <div class="col-auto d-flex align-items-center pe-1">
						<p>50 / 100</p>	
					  </div>
					  <div class="col-auto d-flex align-items-center pe-1 mb-2">
						<img src="/public/assets/icons/persons.svg" width="30" height="30">
					  </div>
					  <div class="col-auto text-end">
						<abbr title="${startDate} - ${endDate}">
							<img src="/public/assets/icons/calendar2.svg" width="30" height="30">
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
				<div class="col ">
				  <div>
					${badges
					  .map(
						(badge) =>
						  `<span class="badge rounded-pill custom-gray-badge text-black">${badge.text}</span>`
					  )
					  .join('')}
				  </div>
			  </div>
			  <!-- Row 3: Badges -->
			  </div>
			</div>
		  </div>
		`;
		const startCheckBox = card.querySelector('#star'); // Select the checkbox element
		console.log('isFavourite', isFavourite)
		if (startCheckBox) {
			// Set the checkbox's checked value based on the isFavourite value
			startCheckBox.checked = isFavourite;
		}

  
		// Attach click event to the card
		card.addEventListener('click', (event) => {
			if (!event.target.closest('#star')) {
				this.handleCardClick(id);
			}
		});
		// Attach click event to the star favorite
		let star = card.querySelector('#star');
		star.addEventListener('click', () => this.handleCardFavorite(id));
		GridOfCards.appendChild(card);
	  }
		
	}
  
	connectedCallback() {
		console.log('Admin Forms mounted');
		
	}
  }
  
  window.customElements.define('admin-forms', AdminForms);
  