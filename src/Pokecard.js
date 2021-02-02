import React from 'react';
import './Pokecard.css';

const pokeImgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

const Pokecard = props => {
    let imgSrc = `${pokeImgUrl}${padToThree(props.id)}.png`
    return (
        <div className="Pokecard">
            <div className="col s12 m7 l3">
                <div className="card">
                    <div className="card-image">
                        <img src={imgSrc}/>
                    </div>
                    <div className="card-content">
                        <strong>{props.name}</strong>
                        <div>
                            Type: <strong>{props.type}</strong>
                        </div>
                    </div>

                    <div className="card-action">
                        Exp: <strong>{props.exp}</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pokecard;
