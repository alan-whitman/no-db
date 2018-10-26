import React, { Component } from 'react';
import './VoteCard.css';

class VoteCard extends Component    {
    // constructor()   {
    //     super()
    // }
    render()  {
        return(
            <div className="vote-card">
                <div className="first-contender">
                    <h4>{this.props.first}</h4>
                    <h5>{this.props.firstTally}</h5>

                    <div className="plus-button" onClick={e => this.props.updateTally('first', this.props.apiId)}>+</div>
                </div>
                <div className="second-contender">
                    <h4>{this.props.second}</h4>
                    <h5>{this.props.secondTally}</h5>
                    <div className="plus-button" onClick={e => this.props.updateTally('second', this.props.apiId)}>+</div>
                </div>
                <h3>Submitted by {this.props.submitter}</h3>
            </div>
        )
    }
}

// {this.props.first}: {this.props.firstTally} | {this.props.second}: {this.props.secondTally} | {this.props.submitter} | {this.props.apiId}


export default VoteCard;