import React from "react";

class CommentClass extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    selectHandler = (e) => {
        console.log(e.target.value);
        let selectValue = e.target.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${selectValue}/comments`)
        .then(data => data.json())
        .then(data => this.setState({data}))
    }

    render(){
        return(
            <>
            <select onChange={this.selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <div> 
            {this.state.data.map((el, index) => (
                <section key={el.id}>
                    <h2> {index+1}, {el.title}</h2>
                    <p>{el.body}</p>
                </section>
            ))}
            
            </div>
            </>
        );

    }
}

export default CommentClass;