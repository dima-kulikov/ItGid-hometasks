import React from 'react';

class Homework1 extends React.Component {

    constructor(props, ){
        super();
        console.log(props)

        this.state = {
            s1: props.p1
        }
    }

    s2 = 201;

    buttonHander = () => {
        let value = this.state.s1;
        value += 50;
        this.s2 += 5
        this.setState({s1: value})
    }


    componentDidMount(){
        let value = this.state.s1;
        value += 5;
        this.s2 += 5
        this.setState({s1: value})

    }


    render(){
        return (
        <>
           <div>{this.state.s1}</div>
           <div>{this.s2}</div>  
           <button onClick={this.buttonHander}>push</button>
           
        </>
        )
    }
}

export default Homework1;