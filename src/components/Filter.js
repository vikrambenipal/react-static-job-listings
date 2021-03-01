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
    border: ${props => props.len > 0 ? "0px solid black" : ""};
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgb(13,113,130, 0.15);
    width: 80%;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 50px;
    background-color: white;
    .clear {
        cursor: pointer;
        margin-right: 25px;
    }
`
const RowWrap = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
`
const Tag = styled(RowWrap)`
    p {
        color: #5CA5A5;
        background-color: #EFF6F6;
        padding: 8px;
        margin-left: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        
    }
    img {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 9px;
        height: 16px;
        background-color: #5CA5A5;
        cursor: pointer;
    }
`


const Filter = ({ filter, handleRemove, handleRemoveAll }) => {
    const handleRemoveTag = (e) => {
        handleRemove(e);
    }
    const handleRemoveAllTags = (e) => {
        handleRemoveAll(e)
    }
    return (
            <Container  len={filter.length}>
                <Tag>
                {filter.map((tag, index) => {
                    return <Row className="item" key={index}>
                                <p>{tag}</p>
                                <img onClick={handleRemoveTag} src={removeIcon} alt=""></img>
                            </Row>      
                })} 
                </Tag>
                <div>
                    {filter.length > 0 && <p onClick={handleRemoveAllTags}className="clear">Clear</p>}
                </div>
            </Container>
    )
}

export default Filter;
