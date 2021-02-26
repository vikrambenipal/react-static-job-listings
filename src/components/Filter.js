import React from 'react';
import styled from'styled-components';
import removeIcon from './images/icon-remove.svg';

// flex layout:
// 2 columns: tags and clear
// c1: row of tags with flex-wrap
// c2: p tag vertically centered

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Container = styled(Row)`
    border: ${props => props.len > 0 ? "2px solid black" : ""};
`
const RowWrap = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
`
const Tag = styled(RowWrap)`
    
`


const Filter = ({ filter }) => {
    console.log(filter);
    return (
        <Container  len={filter.length}>
            <Tag>
            {filter.map((tag, index) => {
                return <div key={index}>
                            <p>{tag}</p>
                            <img src={removeIcon} alt=""></img>
                        </div>      
            })} 
            </Tag>
            <div>
                {filter.length > 0 && <p className="clear">Clear</p>}
            </div>
        </Container>
        
        
    )
}

export default Filter;
