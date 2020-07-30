import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            title: ""
        }
    }

    // universalHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    titleHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={e => {
                this.props.addTodo(e, this.state.title)
                this.setState({title:""})}}>
                <input
                    name="title" 
                    value={this.state.title} 
                    type="text" 
                    placeholder="Add a new todo item..."
                    onChange={(e) => this.titleHandler(e)}/>
                <button>Add Todo</button>
            </form>
        </div>
    }
}

export default Form;