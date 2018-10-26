import React, { Component } from 'react';

class VoteCard extends Component    {
    // constructor()   {
    //     super()
    // }
    render()  {
        return(
            <li>{this.props.first} | {this.props.second} | {this.props.submitter}</li>
        )
    }
}

export default VoteCard