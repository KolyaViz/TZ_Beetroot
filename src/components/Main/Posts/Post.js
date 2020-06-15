import React from "react";
export default function Post(props) {
    let tags = props.post.tags.map((t,i)=><li key={i}>{t}</li>)
    return (
        <div className="post">
            <h3>{props.post.name}</h3>
            <img src={props.post.picture} alt="image"/>
            <p>{props.post.about}</p>
            <ul>{tags}</ul>
            {props.num}
        </div>
    )
}