import React from 'react';
import styled from'styled-components';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    `
const Item = ({ item }) => {
    return (
        <div>
            {/* <img src={require(item.logo)} alt=""></img> */}
            <Row>
                <h3>{item.company}</h3>
                {item.new && 
                    <h3>NEW!</h3>
                }
                {item.featured && 
                    <h3>FEATURED</h3>
                }
            </Row>
            <h2>{item.position}</h2>
            <Row>
                <p>{item.postedAt}</p>
                <p>{item.contract}</p>
                <p>{item.location}</p>
            </Row>
            
            <hr></hr>
            {/* Filter */}
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
