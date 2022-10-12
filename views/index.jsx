import React from 'react'
import Default from './layouts/Default'

function index({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
    {/* <p>I have {breads[0].name} bread!<p> */}
        {/* This is a JSX comment. */}
        <ul>
            {
                breads.map((bread, index) => {
                    return (<li key={index}>
                        <a href={`/breads/${bread.id}`}>
                            {bread.name}
                        </a>
                        <p>{bread.getBakedBy()}</p>
                    </li>)
        })
        }
        </ul>
      </Default>
    )
    }
    


module.exports = index
