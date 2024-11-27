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
		state: 'Complete',
		color: '#3ED008',
	  });
	  this.addCard({
		id: 2,
		title: "Formulario Satisfacción Piscina",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", }, { text: "Alert" }],
		state: 'New',
		color: '#3ED008',
	  });
	  this.addCard({
		id: 3,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info"}, { text: "Alert" }],
		state: 'Normal',
		color: '#3ED008',
	  });
	  this.addCard({
		id: 4,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert"}],
		state: 'New',
		color: '#3ED008',
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
		state: 'Complete',
		color: '#3ED008',
	  });
	  this.addCard({
		id: 6,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info" }, { text: "Alert" }],
		state: 'New',
		color: '#3ED008',
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
	insertTrophy(card, id)
	{
		let stateElement = card.querySelector(`#trophy-${id}`);
			
		let completeTrophy = document.createElement('img');
		completeTrophy.src = "/public/assets/icons/trophy-black.svg";
		completeTrophy.width = 30;
		completeTrophy.height = 30;

		stateElement.appendChild(completeTrophy);
	}
	insertNew(card, id, color)
	{
		let stateElement = card.querySelector(`#state-${id}`);
		let newTitle = document.createElement('h4');
		newTitle.innerHTML = "New";
		newTitle.style.color = color;
		newTitle.style.fontSize = '3rem';
		newTitle.style.fontWeight = 'bold';
		
		// newTitle.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
		
		stateElement.appendChild(newTitle);
	}
	insertCalendar(card, id, startDate, endDate)
	{
		let stateElement = card.querySelector(`#state-${id}`);
		
		let abbr = document.createElement('abbr');
		abbr.title = `${startDate} - ${endDate}`;
		abbr.style.fontSize = '1.0rem';
		abbr.style.fontWeight = 'bold';
		abbr.style.color = '#000';
		
		let calendar = document.createElement('img');
		calendar.src = "/public/assets/icons/calendar2.svg";
		calendar.width = 30;
		calendar.height = 30

		
		abbr.appendChild(calendar);
		stateElement.appendChild(abbr);
	}
	insertTrophyComplete(card, id)
	{
		let stateElement = card.querySelector(`#trophy-${id}`);
			
		let completeTrophy = document.createElement('img');
		completeTrophy.src = "/public/assets/icons/trophy.svg";
		completeTrophy.width = 30;
		completeTrophy.height = 30;

		stateElement.appendChild(completeTrophy);
	}
	clickEnter(id)
	{
		console.log('Enter clicked', id);
	}
	addCard({ id, title, startDate, endDate, state /* Complete, New, Normal */, color }) {
	  const GridOfCards = this.container.querySelector('#appendCardsHere');
  
	  if (GridOfCards) {
		const card = document.createElement('section');
		card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
		card.setAttribute('data-id', id);
		card.innerHTML = `
		  <div class="card mb-2">
			<div class="card-body">
			  <!-- Row 1: Header Section -->
			  <div class="row mb-5" id="row-header">
				<div id="state-${id}" class="col-auto">
				
				</div>
				<div class="col align-items-center">
				  <section class="d-flex justify-content-end">
					<div class="row w-100 justify-content-end">
					
					  <div class="col-auto text-end">
						<div id="trophy-${id}">
							
						</div>
					  </div>
					</div>
				  </section>
				</div>
			  </div>
  
			  <!-- Row 2: Card Title -->
			  <div class="row">
				<div class="col">
				  <h5 class="card-title text-center justify-content-center">${title}</h5>
				</div>
			  </div>
  
				<div class="d-flex align-items-end mt-4">
					<div class="row w-100">
						<div class="col d-flex justify-content-end">
							<button id="enter-${id}">Enter</button>
						</div>
					</div>
				</div>

			  </div>
			</div>
		  </div>
		`;
		
		if (state === 'Complete')
		{
			this.insertTrophyComplete(card, id);
			this.insertCalendar(card, id, startDate, endDate);
		}
		else if (state === 'New')
		{
			
			this.insertNew(card, id, color);
			let header = card.querySelector('#row-header');
			header.classList.remove('mb-5');
			header.classList.add('mb-2');
			this.insertTrophy(card, id);
		}
		else if (state === 'Normal')
		{
			this.insertCalendar(card, id, startDate, endDate);
			this.insertTrophy(card, id);
		}
		const style = document.createElement('style');
		style.textContent = `
			#enter-${id} {
			border-radius: 10px;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
			width: 70px;
			height: 37px;
			flex-shrink: 0;
			border: 0px;
			color: #FFF;
			text-align: center;
			font-family: 'Inter';
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			background: ${color};
		}`;

		card.querySelector(`#enter-${id}`).addEventListener('click', () => this.clickEnter(id));
		card.appendChild(style);
		// Attach click event to the card
		GridOfCards.appendChild(card);
	  }
		
	}
	connectedCallback() {
		console.log('Admin Forms mounted');
	}
  }
  
  window.customElements.define('user-forms', UserForms);