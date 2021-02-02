import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = props => {
    let pokemons = [...props.pokemons];
    let result = props.isWinner;
    return (
        <div>
            <h1>{result ? <span style={{ color: 'green' }}>Winner</span> : <span style={{ color: 'red' }}>Loser</span>}</h1>
            <h2>Total Exp: {props.exp}</h2>
            <div className="Pokedex row">
                {
                    pokemons.map(el => {
                        return (
                            <Pokecard
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                type={el.type}
                                exp={el.base_experience}
                            ></Pokecard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pokedex;
