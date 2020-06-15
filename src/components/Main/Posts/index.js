import React from "react";
import {connect} from "react-redux"
import axios from "axios";
import Post from "./Post";
import {addPosts} from "../../../actions";


class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postsUpload: false,
            currentPage: 1
        }

        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        if(!this.props.posts.length) {
            axios.get('http://localhost:3001/posts')
                .then(res => {
                    this.props.addAllPosts(res.data);
                })
                .then(res=>{
                    this.setState({postsUpload: true})
                })
        }
    }
    handleClick(ev){
        this.setState({currentPage: ev.target.id})
    }

     render() {
         if(!this.props.posts.length) return (<div>Loading... </div>)
         let posts = this.props.posts.map((p,i)=><Post key={p._id} num={i+1} post={p}/>)
         let pagination = [];
         for (let i = 0; i < posts.length/10; i++){
             pagination.push(<a  key={i} id={i+1} onClick={this.handleClick}> {i+1} </a>)
         }
         posts = posts.filter(p=>{
             return p.props.num >= this.state.currentPage*10-10 && p.props.num < +this.state.currentPage*10 + 1
         })
         return (
             <div>
                 <div className="pagination">{pagination}</div>
                 {posts}
                 <div className="pagination">{pagination}</div>
             </div>
         )
     }
 }
 const mapStateToProps = (state)=>{
    // console.log(state)
     return {
         posts: state.posts
     }
 }
 const mapDispatchToProps = {
    addAllPosts: addPosts
 }
 export default connect(mapStateToProps,mapDispatchToProps)(Posts);