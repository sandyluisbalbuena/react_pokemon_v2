import React from 'react'

const PokemonRelated = (props) => {

  console.log(props);


  return (
    <>
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
    </>
  )
}

export default PokemonRelated