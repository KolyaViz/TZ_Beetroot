import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import User from "./User";
import Form from "./Form";
import {addUsers} from "../../../actions";

class UsersPage extends React.Component {
    constructor() {
        super();
        this.state = {usersUpload: false}
    }

    componentDidMount() {
        if (!this.props.users.length) {
            axios.get(`http://localhost:3001/users`)
                .then(res => {
                    this.props.addAllUsers(res.data)

                })
                .then(res => {
                    this.setState({usersUpload: true})
                })
        }
    }

    render() {
        let users = this.props.users;
        users = users.map(us => <User key={us._id} user={us}/>)
        return (
            <div>
                <Form/>
                <ul>{users}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,

    }
}
const mapDispatchToProps = {
    addAllUsers: addUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);