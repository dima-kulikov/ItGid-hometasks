import React, { Component } from "react";

class PlaceholderPostClass extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then( myRes => myRes.json())
        .then( data => {
            this.setState({data})
        });

    }

    render(){
        return(
            <div>
            {this.state.data.map((el, index) => (
                <section key={el.id}>
                    <h2> {index+1}, {el.title}</h2>
                    <p>{el.body}</p>
                </section>
            ))}
            </div>
        );
    }
}

export default PlaceholderPostClass;