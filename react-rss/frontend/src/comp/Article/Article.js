import React from 'react'
import './Article.css'

function Article (props) {
    return (
        <a href={props.link} className="article">
            <p className="art-text">{props.text}</p>  
        </a>
    )
}

export default Article