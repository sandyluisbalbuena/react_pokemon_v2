import React from 'react'

const Home = () => {
	return (
		<>
			<div className="p-5 text-center bg-image hero">
				<div className="mask">
					<div className="d-flex justify-content-center align-items-center h-100">
						<div className="text-white">
							<h1 className="mb-3"><img src="/src/assets/images/brand/pokemonBrandName2.png" width="40%" /></h1>
							<form className="d-flex input-group w-auto mt-5 container" action="/pokedex" method="get">
								<input id="pokemonName" name="pokemonName" type="search" className="form-control rounded" placeholder="Pokemon Search" aria-label="Search" aria-describedby="search-addon" required/>
								<button className="btn bg-dark" type="submit">
									<i className="fas fa-search text-white"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home