import React, { Component } from 'react';

class RenderExternal extends Component  {
    // constructor()   {
    //     super();
    //     this.state = {

    //     }
    // }
    componentDidMount() {
        // console.log(this.props.dataset);
        // for (let i = 0; i < 152; i++) console.log(this.props.dataset[i])

    }
    render()    {
        return(
            <div>
                {this.props.dataset.map((v, i) => <p key={i}>{v.name}</p>)}
                {/* {this.props.dataset.map((v, i) => console.log(v[0]))} */}
            </div>
        )
    }
}

export default RenderExternal;