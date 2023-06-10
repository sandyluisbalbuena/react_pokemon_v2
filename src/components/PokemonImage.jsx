import React from 'react'

const PokemonImage = () => {



	return (
		<div className="card my-1 animate__animated animate__fadeInLeft pokedexCard1" id="firstCard">

			<div id="backgroundColor" className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
				<img id="pokemonImage" className="animate__animated animate__fadeIn animate__delay-1s p-3 img-fluid" src="https://img.pokemondb.net/artwork/avif/pikachu.avif" width="100%" height="100%"/>
				<a href="#!">
					<div className="mask pokedex-mask"></div>
				</a>
			</div>

			<div className="card-body text-center">
				<h5 id="cardTitlePokemonName" className="card-title p-2 m-1">Pikachu</h5>
				{/* @if(auth()->check())
					<button className="mt-3 btn btn-dark" data-mdb-toggle="modal" data-mdb-target="#postThread">
						<i className="far fa-pen-to-square me-1"></i>
						Create a thread
					</button>
				@endif  */}
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
	)
}

export default PokemonImage