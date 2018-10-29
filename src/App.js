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
      newSecond: '',
      searchStr: '',
      canVote: true
    }
    this.getVotes = this.getVotes.bind(this);
    this.updateTally = this.updateTally.bind(this);
    this.showNewToggle = this.showNewToggle.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.addVote = this.addVote.bind(this);
    this.deleteVote = this.deleteVote.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }
  componentDidMount()  {
    axios.get('/api/votes').then(res =>  {
      this.setState({votes: res.data})
    }).catch(err => console.error(err));
  }
  addVote() {
    if (this.state.newFirst.trim().length > 0 && this.state.newSecond.trim().length > 0 && this.state.newSubmitter.trim().length > 0) {
      let newVote = {first: this.state.newFirst, second: this.state.newSecond, submitter: this.state.newSubmitter};
      axios.post('/api/votes', newVote).then(res => {
        this.setState({votes: res.data});
      }).catch(err => console.error(err))
      this.setState({showAddNew: false, newSubmitter: '', newFirst: '', newSecond: ''})
    }
  }
  getVotes()  {
    let searches = ''
    if (this.state.searchStr.trim() !== '')
      searches = `?search=${this.state.searchStr}`;
     axios.get('/api/votes' + searches).then(res =>  {
      this.setState({votes: res.data})
    }).catch(err => console.error(err));
  }
  updateTally(which, apiId) {
    // if (!this.state.canVote)
    //   return;
    axios.put(`/api/votes/update_tally/${apiId}/${which}`).then(res =>  {
      this.setState({votes: res.data, canVote: false});
    }).catch(err => console.error(err));
    setTimeout(() =>  {
      this.setState({canVote: true});
    }, 1000)
  }
  deleteVote(apiId)  {
    axios.delete(`/api/votes/${apiId}`).then(res => {
      this.setState({votes: res.data});
    }).catch(err => console.error(err)); 
  }
  updateInput(newVal, which) {
    switch(which) {
      case 1:
        this.setState({newFirst: newVal});
        break;
      case 2:
        this.setState({newSecond: newVal});
        break;
      case 3:
        this.setState({newSubmitter: newVal});
        break;
      case 4:
        this.setState({searchStr: newVal});
        break;
      default:
        return;
    }
  }
  showNewToggle() {
    this.setState({showAddNew: !this.state.showAddNew})
  }
  doSearch()  {
    this.getVotes();
    this.setState({searchStr: ''});
  }
  render() {
    const votes = this.state.votes.slice().reverse();
    return (
      <div className="App" ref="appRef">
        <header>
          <input value={this.state.searchStr} onChange={e => this.updateInput(e.target.value, 4)} /> 
          <div class="header-element" onClick={this.doSearch}>
            Search
          </div>
          <div  class="header-element" onClick={this.getVotes}>
            Refresh
          </div>
          <div  class="header-element" onClick={this.showNewToggle}>
            New Vote
          </div>
        </header>
        {this.state.showAddNew ? <AddNew updateInput={this.updateInput} addVote={this.addVote} showNewToggle={this.showNewToggle} newFirst={this.state.newFirst} newSecond={this.state.newSecond} newSubmitter={this.state.newSubmitter} /> : false}
        <div className="active-votes">
          {votes.map((vote, i) => {
            return <VoteCard first={vote.first} firstTally={vote.firstTally} second={vote.second} secondTally={vote.secondTally} submitter={vote.submitter} apiId={vote.id} key={i} updateTally={this.updateTally} deleteVote={this.deleteVote} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
