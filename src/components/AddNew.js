import React, { Component } from 'react';
import './AddNew.css';

const AddNew = (props) =>   {
    return(
        <div className="add-new">
            <div>
                <input maxlength="20" value={props.newFirst} onChange={e => props.updateInput(e, 1)} />VS <input maxlength="20" value={props.newSecond} onChange={e => props.updateInput(e, 2)} />
            </div>
            <div>
                Your Name:<br /><br /><input maxlength="20" value={props.newSubmitter} onChange={e => props.updateInput(e, 3)} />
            </div>
            <div>
                <button>Submit</button>
            </div>
       </div>
    )
}

export default AddNew;






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
