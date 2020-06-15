import React from 'react'
export default function User(props) {

    if(!props.user) return ''
    return(
            <li className='user'>
                id: {props.user._id} <br/>
                Name: {props.user.name} <br/>
                gender: {props.user.gender} <br/>
                email: {props.user.email} <br/>
                phone: {props.user.phone} <br/>
            </li>
    )
}