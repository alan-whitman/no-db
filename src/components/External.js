import React, { Component } from 'react';
import RenderExternal from './RenderExternal';
import './External.css';
import axios from 'axios';

class External extends Component    {
    constructor()   {
        super();
        this.state =    {
            pokemon: []
        }
    }
    // componentDidMount() {
    // }
    getPokemon()    {
        let url = 'https://pokeapi.co/api/v2/generation/generation-i/'
        axios.get(url).then((res) =>    {
            this.setState({pokemon: res.data.pokemon_species});
        }).catch(err => console.error(err));
    }
    render()    {
        return(
            <div className="external">
                {this.state.pokemon !== [] ? <RenderExternal dataset={this.state.pokemon} /> : false}
                {/* {this.state.pokemon.map((v, i) => <p key={i}>{v.name}</p>)} */}
            </div>
        )
    }
}

export default External;