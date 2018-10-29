import React from 'react';
import './RenderExternal.css';

const RenderExternal = (props) =>   {
    let rand = Math.floor(Math.random() * props.dataset.length)
    if (props.dataset[rand])
        rand = props.dataset[rand];
    return(
        <div className="external-list">
            <div className="external-option" onClick={e => props.addExternal(rand, props.which)}>Random</div>
            {props.dataset.sort((a, b) => a > b ? 1 : -1).map((v, i) => <div className="external-option" key={i} onClick={e => props.addExternal(v, props.which)}>{v}</div>)}
        </div>
    )
}

export default RenderExternal;

// class RenderExternal extends Component  {
//     // constructor()   {
//     //     super();
//     //     this.state = {

//     //     }
//     // }
//     componentDidMount() {
//         // console.log(this.props.dataset);
//         // for (let i = 0; i < 152; i++) console.log(this.props.dataset[i])

//     }
//     render()    {
//         return(
//             <div>
//                 {this.props.dataset.map((v, i) => <p key={i}>{v.name}</p>)}
//                 {/* {this.props.dataset.map((v, i) => console.log(v[0]))} */}
//             </div>
//         )
//     }
// }
