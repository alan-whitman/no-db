import React, { Component } from 'react';
import RenderExternal from './RenderExternal';
import './External.css';
import axios from 'axios';

class External extends Component    {
    constructor()   {
        super();
        this.state =    {
            dataset: [],
            showExternal: false
        }
        this.getPokemonGen1 = this.getPokemonGen1.bind(this);
        this.getPokemonGen2 = this.getPokemonGen2.bind(this);
        this.getStarWarsChars = this.getStarWarsChars.bind(this);
        this.getGhibilFilms = this.getGhibilFilms.bind(this);
        this.toggleShowExternal = this.toggleShowExternal.bind(this);
    }
    getPokemonGen1()    {
        let url = 'https://pokeapi.co/api/v2/generation/generation-i/';
        axios.get(url).then((res) =>    {
            let pokemon = [];
            for (let i = 0; i < res.data.pokemon_species.length; i++)
                pokemon.push(res.data.pokemon_species[i].name);
            this.setState({dataset: pokemon});
        }).catch(err => console.error(err));
    }
    getPokemonGen2()    {
        let url = 'https://pokeapi.co/api/v2/generation/generation-ii/';
        axios.get(url).then((res) =>    {
            let pokemon = [];
            for (let i = 0; i < res.data.pokemon_species.length; i++)
                pokemon.push(res.data.pokemon_species[i].name);
            this.setState({dataset: pokemon});
        }).catch(err => console.error(err));
    }
    getStarWarsChars()    {
        let url = 'https://swapi.co/api/people/';
        axios.get(url).then((res) =>    {
            let names = [];
            for (let i = 0; i < res.data.results.length; i++)
                names.push(res.data.results[i].name);
            this.setState({dataset: names});
        }).catch(err => console.error(err));
    }
    getGhibilFilms()    {
        axios.get('https://ghibliapi.herokuapp.com/films').then(res =>  {
            let names = [];
            for (let i = 0; i < res.data.length; i++)   {
                names.push(res.data[i].title)
            }
            this.setState({dataset: names});
        }).catch(err => console.error(err));
    }
    toggleShowExternal(which) {
        switch(which)   {
            case 'p1':
                this.getPokemonGen1();
                break;
            case 'p2':
                this.getPokemonGen2();
                break;
            case 'swc':
                this.getStarWarsChars();
                break;
            case 'gh':
                this.getGhibilFilms();
                break;
            default:
                return;
        }
        this.setState({showExternal: true});
    }
    renderExternalChoices() {
        return(
            <div className="external-choices">
                <div className="external-choice" onClick={e => this.toggleShowExternal('p1')}>
                    Pokemon (1st Gen)
                </div>
                <div className="external-choice" onClick={e => this.toggleShowExternal('p2')}>
                    Pokemon (2nd Gen)
                </div>
                <div className="external-choice" onClick={e => this.toggleShowExternal('swc')}>
                    Star Wars Characters
                </div>
                <div className="external-choice" onClick={e => this.toggleShowExternal('gh')}>
                    Ghibli Films
                </div>
            </div>
        )
    }
    render()    {
        return(
            <div className="external">
                <div className="close-button-external" onClick={this.props.toggleExternalSelect}>X</div>
                {this.renderExternalChoices()}
                {this.state.showExternal ? <RenderExternal which={this.props.which} addExternal={this.props.addExternal} dataset={this.state.dataset} /> : false}
            </div>
        )
    }
}

export default External;