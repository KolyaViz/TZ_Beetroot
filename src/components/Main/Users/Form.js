import React from "react";
import {connect} from "react-redux";
import User from "./User";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            user: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        let user = this.props.users.find(el=>{
                return el.name === this.state.value
            })
        this.setState({user})
        // store.dispatch({type:"FIND_USER", data: fUser})
        event.preventDefault();
    }


    render() {

        let user = <User user={this.state.user}/>;

        if(this.state.user) user = <div className="user_by_name">{user}</div>
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="найти"/>
                </form>
                {user}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        fUser: state.fUser,
        users: state.users
    }
}

export default connect(mapStateToProps)(Form);