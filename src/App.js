import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import VoteCard from './components/VoteCard';
import AddNew from './components/AddNew'

class App extends Component {
  constructor() {
    super();
    this.state = {
      votes: [],
      showAddNew: false,
      newSubmitter: '',
      newFirst: '',
      newSecond: ''
    }
    this.getVotes = this.getVotes.bind(this);
    this.updateTally = this.updateTally.bind(this);
    this.showNewToggle = this.showNewToggle.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  componentDidMount()  {
    axios.get('/api/votes').then(res =>  {
      this.setState({votes: res.data})
    }).catch(err => console.error(err));
  }
  getVotes()  {
    axios.get('/api/votes').then(res =>  {
      this.setState({votes: res.data})
    }).catch(err => console.error(err));
  }
  updateTally(which, apiId) {
    axios.put(`/api/votes/update_tally/${apiId}/${which}`).then(res =>  {
      this.setState({votes: res.data});
    }).catch(err => console.error(err));
  }
  addVote() {

  }
  updateInput(e, which) {
    let newVal = e.target.value;
    switch(which) {
      case 1:
        this.setState({newFirst: newVal})
        break;
      case 2:
        this.setState({newSecond: newVal})
        break;
      case 3:
        this.setState({newSubmitter: newVal})
        break;
    }
  }
  addingNew() {
    if (this.state.showAddNew) 
      return <AddNew updateInput={this.updateInput} newFirst={this.state.newFirst} newSecond={this.state.newSecond} newSubmitter={this.state.newSubmitter} />
  }
  showNewToggle() {
    this.setState({showAddNew: !this.state.showAddNew})
  }
  render() {
    return (
      <div className="App">
        <div className="refresh" onClick={this.getVotes}>
          Refresh
        </div>
        <div className="add-new-button" onClick={this.showNewToggle}>
          New<br />Vote
        </div>
        {this.addingNew()}
        <div className="active-votes">
          {this.state.votes.map((vote, i) => {
            return <VoteCard first={vote.first} firstTally={vote.firstTally} second={vote.second} secondTally={vote.secondTally} submitter={vote.submitter} apiId={vote.id} key={i} updateTally={this.updateTally} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
