import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import VoteCard from './components/voteCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      votes: []
    }
    this.getVotes = this.getVotes.bind(this);
  }
  componentDidMount()  {
    axios.get('/api/votes').then((res) =>  {
      this.setState({votes: res.data.data})
    }).catch(err => console.error(err));

  }
  getVotes()  {
  }
  render() {
    return (
      <div className="App">
        {this.state.votes.map((vote, i) => {
          return <VoteCard first={vote.first} second={vote.second} submitter={vote.submitter} key={i} />
        })}
      </div>
    );
  }
}

export default App;
