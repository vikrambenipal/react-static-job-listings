import React from 'react';
import styled from'styled-components';
import removeIcon from './images/icon-remove.svg';

// flex layout:
// 2 columns: tags and clear
// c1: row of tags with flex-wrap
// c2: p tag vertically centered

const Container = styled.div`
    border: ${props => props.len > 0 ? "2px solid black" : ""};
`

const Filter = ({ filter }) => {
    console.log(filter);
    return (
        <Container len={filter.length}>
            {filter.map((tag, index) => {
                return <div key={index}>
                            <p>{tag}</p>
                            <img src={removeIcon} alt=""></img>
                        </div>      
            })} 
            {filter.length > 0 && <p>Clear</p>}
        </Container>
    )
}

export default Filter;
