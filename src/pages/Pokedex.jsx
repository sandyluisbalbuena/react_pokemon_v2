import React from 'react'

const Pokedex = () => {
	return (
		<div className="container">
			<section className="row mt-5">
			</section>

			<section className="row d-flex mt-5" id="pokedexSectionResult">

				<div className="col-12 col-lg-3 mt-2">
					<div className='pokedex-sidenav'>
						<div className="card my-1 animate__animated animate__fadeInLeft pokedexCard1" id="firstCard">

							<div id="backgroundColor" className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
								<img id="pokemonImage" className="animate__animated animate__fadeIn animate__delay-1s p-3" src="https://img.pokemondb.net/artwork/avif/pikachu.avif" width="100%" height="100%" className="img-fluid"/>
								<a href="#!">
									<div className="mask"></div>
								</a>
							</div>

							<div className="card-body text-center">
								<h5 id="cardTitlePokemonName" className="card-title p-2 m-1">Pikachu</h5>
								{/* @if(auth()->check()) */}
									<button className="mt-3 btn btn-dark" data-mdb-toggle="modal" data-mdb-target="#postThread">
										<i className="far fa-pen-to-square me-1"></i>
										Create a thread
									</button>
								{/* @endif */}
								<hr/>
								<p className="card-text" id="pokemonDescription"></p>
								<hr/>
								<div id="pokemonTypes">
									{/* <?php foreach ($pokemonData['pokemonTypes'] as $type): ?> */}
										<img className="mx-1" height="25px" src="./assets/images/pokemonTypes/electrictext.png" alt=""/>
									{/* <?php endforeach; ?> */}
								</div>
							</div>

						</div>
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
												{/* <?php foreach ($pokemonData['pokemonAbilities'] as $ability): ?> */}
													<button className="btn btn-dark m-1" type="button">Static</button>
												{/* <?php endforeach; ?> */}
											</div>
										</div>
								
										<div className="col-12 col-lg-4">
											<h6 className="card-title">Advantages</h6>
											<div id="pokemonAdvantage">
												
											</div>
										</div>

										<div className="col-12 col-lg-4">
											<h6 className="card-title">Disadvantages</h6>
											<div id="pokemonDisadvantage">
											
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
												<table id="myTable" className="display nowrap mb-3 pokedexTable">
													<thead>
														<tr>
															<th>Name</th>
															<th>Accuracy</th>
															<th>Damage class</th>
															<th>Power</th>
															<th>PP</th>
															<th>type</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="col-12 col-lg-4">
											<div className="row">
												<canvas id="pokemonStatscanvas" className=" mb-3"></canvas>
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
				<div className="col-12">
					<div className="card my-1 pokedex-card-section">
						<div className="card-body">
							<h5 className="card-title" id="pokeCard"></h5>
							<div className="splide" id="splideCards">
								<div className="splide__track">
									<ul className="splide__list" id="splideCardsId">
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Pokedex