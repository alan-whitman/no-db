import React, { Component } from 'react';
import './AddNew.css';
import External from './External';


class AddNew extends Component  {
    constructor()   {
        super();
        this.state = {
            showPokemon: false,
            showExternalSelectFirst: false,
            showExternalSelectSecond: false

        }
        this.toggleExternalSelect = this.toggleExternalSelect.bind(this);
    }
    toggleExternalSelect(which)  {
        console.log('derp');
        this.setState({'showExternalSelectFirst': true})
        console.log(this.state.showExternalSelectFirst);
    }
    render()    {
        return(
            <div className="add-new">
                {this.state.showExternalSelectFirst ? <External /> : false}
                <div className="close-button" onClick={this.props.showNewToggle}>X</div>
                <div>
                    <input maxLength="20" value={this.props.newFirst} onChange={e => this.props.updateInput(e, 1)} />VS <input maxLength="20" value={this.props.newSecond} onChange={e => this.props.updateInput(e, 2)} />
                </div>
                <div>
                    <div className="select-external" onClick={e => this.toggleExternalSelect('showExternalSelectFirst')}>Select</div>
                    <div className="select-external" onClick={e => this.toggleExternalSelect('showExternalSelectSecond')}>Select</div>
                </div>
                <div>
                    Your Name:<br /><br /><input maxLength="20" value={this.props.newSubmitter} onChange={e => this.props.updateInput(e, 3)} />
                </div>
                <div>
                    <button onClick={this.props.addVote}>Submit</button>
                </div>
        </div>
        )
    }

}

export default AddNew;






// const AddNew = (props) =>   {
//     return(
//         <div className="add-new" onBlur={props.showNewToggle}>
//             <div className="close-button" onClick={props.showNewToggle}>X</div>
//             <div>
//                 <input maxLength="20" value={props.newFirst} onChange={e => props.updateInput(e, 1)} />VS <input maxLength="20" value={props.newSecond} onChange={e => props.updateInput(e, 2)} />
//             </div>
//             <div>
//                 Your Name:<br /><br /><input maxLength="20" value={props.newSubmitter} onChange={e => props.updateInput(e, 3)} />
//             </div>
//             <div>
//                 <button onClick={props.addVote}>Submit</button>
//             </div>
//        </div>
//     )
// }

// class  AddNew extends Component {
//     render()    {
//         return(
//             <div className="add-new">
//                 <div>
//                     <input maxlength="20" value={this.props.newFirst} onChange={e => this.props.updateValue(e, 1)} />VS <input value={this.props.newSecond} onChange={e => this.props.updateValue(e, 2)} />
//                 </div>
//                 <div>
//                     Your Name:<br /><br /><input value={this.props.newSubmitter} onChange={e => this.props.updateValue(e, 3)} />
//                 </div>
//                 <div>
//                     <button>Submit</button>
//                 </div>
//         </div>
//         )
//     }
// }
