import React, { useEffect } from 'react'

const PokemonRelated = (props) => {


  if(props.related.length != 0){
    let pokemonrelatedtobutton = document.getElementById('pokemonrelatedtobutton');
    let typing = ['fire','flying'];
    pokemonrelatedtobutton.addEventListener('click', () => {
      get_pokemon_related(typing);
      // get_pokemon_related(props.related);
    });
  }


  function get_pokemon_related(pokemonTypes){


    let splider = document.getElementById('splide1');


    if(document.getElementById('pokemonrelatedtobutton').getAttribute('data-custom') == 0){
      splider.innerHTML=`<div class="spinner-border spinner-border-sm mt-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>`;
      document.getElementById('pokemonrelatedtobutton').innerHTML="HIDE";


      let pokemonStart = 0;
      let pokemonEnd = 100;


      if (window.innerWidth <= 768) {
        var splide = new Splide( '.splide', {
          type   : 'loop',
          perPage: 2,
          focus  : 'center',
          arrows: false, 
          pagination: false,
          rewind: true,
          drag   : 'free',
        } ).mount();
      }
      else{
        var splide = new Splide( '.splide', {
          type   : 'loop',
          perPage: 6,
          focus  : 'center',
          arrows: false, 
          pagination: false,
          rewind: true,
          drag   : 'free',
        } ).mount();
      }
      if(splide.Components.Elements.slides.length > 0)
      {
        document.getElementById('splide1').innerHTML='';
        splide.destroy();
        if (window.innerWidth <= 768) {
          var splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 2,
            focus  : 'center',
            arrows: false, 
            pagination: false,
            rewind: true,
            drag   : 'free',
          } ).mount();
        }
        else{
          var splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 6,
            focus  : 'center',
            arrows: false, 
            pagination: false,
            rewind: true,
            drag   : 'free',
          } ).mount();
        }
      }
      
      axios.get('https://pokeapi.co/api/v2/pokemon?limit='+pokemonEnd+'&offset='+pokemonStart)
      .then(response => {

     
          let pokemons = response.data.results;
          pokemons.forEach((pokemon) => {

            axios.get(`https://pokeapi.co/api/v2/pokemon/`+pokemon.name)
            .then(response => {

              let array1 =[];
              let array2 =[];
              response.data.types.forEach((type) => {
                array1.push(type.type.name)
              })
              pokemonTypes.forEach((type) => {
                array2.push(type)
              })
              // console.log(array1.some(item => array2.includes(item)));
              if(array1.some(item => array2.includes(item))){
                // console.log(pokemon.name);
                let commonType = array1.filter(item => array2.includes(item));
                // EvolutionChainSection.innerHTML += '<img onclick="getonepokemondata(`'+nameAndId[0]+'`)" class="hvr-float" width="150px" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/'+nameAndId[1].toString().padStart(3, `0`)+'.png">';
                let newImg = document.createElement('img');
                // newImg.classList.add('col-xs-1'); 
                newImg.setAttribute('src', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/'+response.data.id.toString().padStart(3, `0`)+'.png');
                // newImg.setAttribute('src', 'https://img.pokemondb.net/artwork/avif/'+pokemon.name.toLowerCase()+'.avif');
                newImg.setAttribute('width', '100px');
                newImg.setAttribute('height', '100px');
                // newImg.setAttribute('src', 'https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/'+pokemon.name+'.png');
                newImg.setAttribute('onclick', 'pokemonSearch(`'+pokemon.name+'`)');
                newImg.className = 'hvr-float';
                // newImg.setAttribute('href', '#');
                // newImg.setAttribute('data-mdb-toggle', 'tooltip');
                // newImg.setAttribute('title', 'Im '+pokemon.name+', and Im also a '+commonType[0]+' type.');
                // new mdb.Tooltip(newImg).init();
                // mdb.Tooltip.getInstance(newImg) || new mdb.Tooltip(newImg).show();
                let newSlide = document.createElement('li');
                newSlide.className = 'splide__slide';
                // newSlide.textContent = 'New Slide';
                newSlide.appendChild(newImg);
                splide.add(newSlide);
              }
            })
            .catch(error => console.error('On get one pokemon error', error))
            .then(() => { 
            })
          });
        
      })
      .catch(error => console.error('On get one pokemon error', error))
      .then(() => { 
        document.getElementById('pokemonrelatedtobutton').setAttribute('data-custom', '1')
      })
    }
    else{
      document.getElementById('pokemonrelatedtobutton').setAttribute('data-custom', '0');
      document.getElementById('pokemonrelatedtobutton').innerHTML="SHOW";
      splider.innerHTML="";
    }
    
  }
  


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