import React, { useEffect, useState } from 'react'
import CardSplide from '../components/CardSplide'
import PokemonImage from '../components/PokemonImage'
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonAdvantages from '../components/PokemonAdvantages';
import PokemonDisadvantages from '../components/PokemonDisadvantages';
import PokemonMoves from '../components/PokemonMoves';
import PokemonStats from '../components/PokemonStats';

const Pokedex = () => {

	let [flavor_text, setflavor_text] = useState([]);
	let [pokemonTypes, setpokemonTypes] = useState([]);
	let [pokemonNameForCard, setpokemonNameForCard] = useState([]);
	let [abilities, setabilities] = useState([]);
	let [moves, setmoves] = useState([]);
	let [stats, setstats] = useState([]);

	useEffect(()=>{
		pokemonSearch('charizard');

	}, []);
	
	function pokemonSearch(pokemonNameName){
		swal.close();
		if(pokemonNameName == undefined && pokemonNameName == null){
			var pname = document.getElementById('pokemonName');
			var pokemonName = pname.value;
		}
		else{
			var pokemonName = pokemonNameName;
		}
	
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	
		// let pokemonrelatedtobutton = document.getElementById('pokemonrelatedtobutton');
		// let pokemonEvolutionButton = document.getElementById('evolutionButton');
		// let collapseExample1 = document.getElementById('collapseExample1');
		// let collapseExample2 = document.getElementById('collapseExample2');
		// pokemonEvolutionButton.innerHTML = "SHOW";
		// pokemonEvolutionButton.setAttribute('data-custom', '0');
		// pokemonEvolutionButton.setAttribute('aria-expanded', 'false');
		// pokemonrelatedtobutton.innerHTML = "SHOW";
		// pokemonrelatedtobutton.setAttribute('data-custom', '0');
		// pokemonrelatedtobutton.setAttribute('aria-expanded', 'false');
		// collapseExample1.classList.remove('show');
		// collapseExample2.classList.remove('show');

		let pokemonImage = document.getElementById('pokemonImage');

		new Promise((resolve) => {
			new Promise((resolve) => {
				pokemonImage.classList.remove('animate__fadeIn');
				pokemonImage.classList.add('animate__fadeOut');
				setTimeout(() => resolve(), 2000);
			}).then(() => {
				pokemonImage.classList.remove('animate__fadeOut');
				pokemonImage.setAttribute('src','/assets/images/misc/loader.gif');
				pokemonImage.classList.add('animate__animated', 'animate__fadeIn');
			});
			setTimeout(() => resolve(), 3000);
		}).then(() => {
	
			pokemonImage.classList.remove('animate__fadeIn');
			pokemonImage.classList.add('animate__fadeIn');
			let existingChart = Chart.getChart("pokemonStatscanvas");
			if (existingChart) {
				existingChart.destroy();
			}
			let relatedTo = document.getElementById('relatedTo');
			let cardTitlePokemonName = document.getElementById('cardTitlePokemonName');
			let pokemonDescription = document.getElementById('pokemonDescription');
			let pokemonAbilities = document.getElementById('pokemonAbilities');
			let pokemonTypes = document.getElementById('pokemonTypes');
			let pokemonAdvantage = document.getElementById('pokemonAdvantage');
			let pokemonDisadvantage = document.getElementById('pokemonDisadvantage');
			let myTable = document.getElementById("myTable");
			let tbody = myTable.getElementsByTagName("tbody")[0];
	
			// tbody.innerHTML = `<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// cardTitlePokemonName.innerHTML = `<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// pokemonDescription.innerHTML = `<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// pokemonAbilities.innerHTML=`<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// pokemonTypes.innerHTML=`<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// pokemonAdvantage.innerHTML=`<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// pokemonDisadvantage.innerHTML=`<div class="spinner-border spinner-border-sm mt-2" role="status"></div>`;
			// console.log(pokemonName);
	
			axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
			.then(response => {
				// pokemonName.value="";
				// document.getElementById('pokemonName').value="";
				console.log(response.data)
				// pokemonEvolutionButton.setAttribute('onclick', 'pokemon_evolution(`'+response.data.pokemonSpecies+'`)');
				// pokemonrelatedtobutton.setAttribute('onclick', 'get_pokemon_related('+JSON.stringify(response.data.pokemonTypes)+')');
				// pokemonImage.setAttribute('src','https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/'+response.data.pokemonId+'.png');
				// pokemonImage.setAttribute('src','https://img.pokemondb.net/artwork/avif/'+response.data.pokemonName.toLowerCase()+'.avif');
				// cardTitlePokemonName.textContent = response.data.pokemonName;
				setflavor_text(response.data.species);   
				setmoves(response.data.moves);   
				setstats(response.data.stats);   
				setabilities(response.data.abilities);
				setpokemonTypes(response.data.types);
				setpokemonNameForCard(response.data.name);
				// get_pokemon_advantages(response.data.pokemonTypes);
				// get_pokemon_disadvantages(response.data.pokemonTypes);
				// pokemon_evolution_trigger(response.data.pokemonSpecies);
				// get_pokemon_cards(response.data.pokemonName);
				// relatedTo.innerHTML='Pokemon related to '+response.data.pokemonName;
				// flavor_text = response.data.pokemonSpecies;
			})
			.catch(() => { 
				console.log('umay');
				tbody.innerHTML = ``;
				cardTitlePokemonName.innerHTML = ``;
				pokemonDescription.innerHTML = ``;
				pokemonAbilities.innerHTML=``;
				pokemonTypes.innerHTML=``;
				pokemonAdvantage.innerHTML=``;
				pokemonDisadvantage.innerHTML=``;
				// pagboboUser(pokemonName);
			})
			.then(() => { 
			})
		});
	}


	return (
		<div className="container">

			<section className="row mt-5">
			</section>

			<section className="row d-flex mt-5" id="pokedexSectionResult">

				<div className="col-12 col-lg-3 mt-2">
					<div className='pokedex-sidenav'>
						<PokemonImage flavor_text={flavor_text} pokemonTyping={pokemonTypes}/>
					</div>
				</div>

				<div className="col-12 col-lg-9 mt-2">
					<div className="container-fluid">

						<div className="row">
							<div className="card my-1 px-1 animate__animated animate__fadeInUp" id="secondCard">
								<div className="card-body container-fluid">
									<div className="row">
										<div className="col-12 col-lg-4">
											<h6 className="card-title">Abilities</h6>
											<div id="pokemonAbilities">
												<PokemonAbilities abilities={abilities}/>
											</div>
										</div>
								
										<div className="col-12 col-lg-4">
											<h6 className="card-title">Advantages</h6>
											<div id="pokemonAdvantage">
												<PokemonAdvantages pokemonTyping={pokemonTypes}/>
											</div>
										</div>

										<div className="col-12 col-lg-4">
											<h6 className="card-title">Disadvantages</h6>
											<div id="pokemonDisadvantage">
												<PokemonDisadvantages pokemonTyping={pokemonTypes}/>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="card my-1 px-2 animate__animated animate__fadeInUp pokedexCard2" id="secondCard">
								<div className="card-body container-fluid">

									{/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark rounded ">
										<div class="container-fluid">
											<div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
												<ul class="navbar-nav mb-2 mb-lg-0">
													<li class="nav-item hvr-underline-from-center">
														<a class="nav-link" href="#">Moves</a>
													</li>
													<li class="nav-item hvr-underline-from-center">
														<a class="nav-link" href="#">Attributes</a>
													</li>
												</ul>
											</div>
										</div>
									</nav> */}


									<div className="row my-4">

										<div className="col-12 col-lg-8">
											<div className="row">
												<h6>Moves</h6>
												<PokemonMoves moves={moves} />
											</div>
										</div>

										<div className="col-12 col-lg-3 offset-lg-1">
											<div className="row">
												<PokemonStats stats={stats}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="card my-1 px-1" id="secondCard">
								<div className="card-body container-fluid">
									
									<div className="row">
										<h6 className="card-title">Evolution</h6>
											<button id="evolutionButton" data-custom="0" className="btn btn-dark" type="button"  data-mdb-toggle="collapse" data-mdb-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
												Show&nbsp;&nbsp;<span id="EvolutionChainSectionBtn"></span>
											</button>
										<hr/>
										<div className="collapse" id="collapseExample2">
											<div id="EvolutionChainSection">
												
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div className="row">
							<div className="card my-1 px-1 pokedexCard3" id="secondCard">
								<div className="card-body container-fluid">
										
									<div className="row">
										<h6 className="card-title" id="relatedTo">Pokemon related to Pikachu</h6>
										<button id="pokemonrelatedtobutton" data-custom="0" className="btn btn-dark" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
											Show
										</button>
										<hr/>
										<div className="collapse" id="collapseExample1">
											<div className="splide">
												<div className="splide__track">
													<ul className="splide__list" id="splide1">
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="row mb-5">
				<CardSplide pokemonName={pokemonNameForCard}/>
			</section>
		</div>
	)
}

export default Pokedex