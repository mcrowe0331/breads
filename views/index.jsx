import React from 'react'
import baker from '../controllers/bakers_controller'
import Default from './layouts/Default'

function index({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
        <ul>
            (
                bakers.map(baker)=> {
                    return (
                        <li key={baker.id}>
                            <a href={`/bakers/${baker.id}`}>{baker.name</a>
                        </li>
                    )
                })
            }
        </ul>
        <h3>Breads</h3>
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
