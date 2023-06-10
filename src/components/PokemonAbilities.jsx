import React, { useState } from 'react'

const PokemonAbilities = (props) => {


	let abilities = props.abilities;
	// let [loading, setloading] = useState(false);

	// props?setloading(true):null;

	return (
		<>
		{
			// (loading==true)?(
				abilities.map(ability=>(
					<button style={{width:'100%'}} key={ability.ability.name} className="btn btn-dark m-1" type="button">{ability.ability.name}{(ability.is_hidden==true)?<span className='badge badge-secondary ms-2'>Hidden</span>:''}</button>
				))
			// ):(<></>)
		}
		</>
	)
}

export default PokemonAbilities