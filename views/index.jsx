import React from 'react'
import Default from './layouts/Default'

function Index({breads}) {
    return (
      <Default>
        <h2>Index Page</h2>
    {/* This is a JSX comment. */}
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                    <li key={index}>
                        <a>
                        {bread.name}
                        </a>
                    </li>
                )
            })
        }
        </ul>
      </Default>
)}

<div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>


module.exports = Index
