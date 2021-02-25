import React from 'react'

const Item = ({ item }) => {
    return (
        <div>
            <h3>{item.company}</h3>
            {item.new && 
                <p>NEW!</p>
            }
            {item.featured && 
                <p>FEATURED</p>
            }
            <h2>{item.position}</h2>
            <hr></hr>
            <ul>
                <li>{item.role}</li>
                <li>{item.level}</li>
                {item.languages.map((language, index) => {
                    return <li key={index}>{language}</li>
                })}
            </ul>

        </div>
    )
}

export default Item; 
