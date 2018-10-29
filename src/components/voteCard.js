import React, { Component } from 'react';
import './VoteCard.css';
import party from '../images/tenor.gif';

class VoteCard extends Component    {
    constructor()   {
        super()
        this.state = {
            partyMode: false
        }
        this.togglePartyMode = this.togglePartyMode.bind(this);
    }
    togglePartyMode()   {
        this.setState({partyMode: !this.state.partyMode})
    }
    render()  {
        let firstRatio = 0;
        let secondRatio = 0;
        if (this.props.firstTally || this.props.secondTally)    {
            let total = this.props.firstTally + this.props.secondTally;
            firstRatio = Math.floor((this.props.firstTally / total) * 133);
            secondRatio = Math.floor((this.props.secondTally / total) * 133);
        }
        let bg1 = this.state.partyMode && firstRatio >= secondRatio ? party : '';
        bg1 = `url(${bg1})`;
        let bg2 = this.state.partyMode && secondRatio >= firstRatio ? party : '';
        bg2 = `url(${bg2})`;
        return(
            <div className="vote-card">
                
                <div className="party-button" onClick={this.togglePartyMode}>P</div>
                <div className="delete-button" onClick={e => this.props.deleteVote(this.props.apiId)}>
                    X
                </div>
                <div className="first-contender">
                    <h4>{this.props.first}</h4>
                    <h5>{this.props.firstTally}</h5>
                    <div className="first-graph" style={{height: firstRatio, backgroundImage: bg1, backgroundSize: 'contain'}}></div>
                    <div className="plus-button" onClick={e => this.props.updateTally('first', this.props.apiId)}>+</div>
                </div>
                <div className="second-contender">
                    <h4>{this.props.second}</h4>
                    <h5>{this.props.secondTally}</h5>
                    <div className="second-graph" style={{height: secondRatio, backgroundImage: bg2, backgroundSize: 'contain'}}></div>
                    <div className="plus-button" onClick={e => this.props.updateTally('second', this.props.apiId)}>+</div>
                </div>
                <h3>Submitted by {this.props.submitter}</h3>
            </div>
        )
    }
}

export default VoteCard;