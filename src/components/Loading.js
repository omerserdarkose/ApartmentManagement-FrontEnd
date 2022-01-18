import React from 'react'
import loadingImg from "../images/loading03.gif"

function Loading() {
    return (
        <div className='loading '>
            <img src={loadingImg} alt='loading_bar' ></img>
        </div>
    )
}

export default Loading
