import React from 'react';
import styled from'styled-components';

const Box = styled.div`
    font-family: spartan-bold;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 15px 20px -5px 	rgb(13,113,130, 0.15);
    padding-bottom: 15px;
    width: 85%;
    margin: 30px auto;
    h2 {
        color: #2B3939;
    }
    .position {
        padding-left: 15px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    ul {
        padding: 0px;
        margin: 0px;
        padding-left: 5px
    }
    border-left: ${props => props.new ? "8px solid #5CA5A5" : ""};
    hr {
        width: 90%;
        color: #7C8F8F;
    }

    @media (min-width: 1100px){
        hr{
            display: none;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

const TopInfo = styled.div`
    margin-left: 12px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Title = styled(Row)`
    padding-bottom: 10px;  
    padding-top: 10px; 
    h3 {
        margin-left: 15px;
    }
    .company {
        color: #5CA5A5;
    }
    .new {
        font-size: 0.9rem;
        background-color: #5CA5A5;
        color: white;
        border-radius: 12px;
        padding: 8px;
    }
    .featured{
        font-size: 0.9rem;
        background-color: #2B3939;
        color: white;
        border-radius: 12px;
        padding: 8px;
    }
`
const JobInfo = styled(Row)`
    p {
        font-family: spartan-medium;
        padding-left: 15px;
        color: #7C8F8F;
    }
`
const Tag = styled(Row)`
    p {
        color: #5CA5A5;
        background-color: #EFF6F6;
        padding: 8px;
        margin-left: 20px;
        margin-bottom: 15px;
        margin-top: 10px;
        cursor: pointer;
    }
    @media (min-width: 1100px){
        margin-right: 50px;
    }
`

const Item = ({ item, handleFilter }) => {
    const handleChildFilter = (e) => {
        handleFilter(e);
    }
    return (
        <div>
            <Box new={item.new}>
                <TopInfo>
                    <Title>
                        <h3 className="company">{item.company}</h3>
                        {item.new && 
                            <h3 className="new">NEW!</h3>
                        }
                        {item.featured && 
                            <h3 className="featured">FEATURED</h3>
                        }
                    </Title>
                    <h2 className="position">{item.position}</h2>
                    <JobInfo>
                        <p>{item.postedAt}</p>
                        <p className="bullet">•</p>
                        <p>{item.contract}</p>
                        <p className="bullet">•</p>
                        <p>{item.location}</p>
                    </JobInfo>
                </TopInfo>
                <hr></hr>
                
                {/* Filter */}
                <ul>
                    <Tag>
                        <p onClick={handleChildFilter}>{item.role}</p>
                        <p onClick={handleChildFilter}>{item.level}</p>
                        {item.languages.map((language, index) => {
                            return <p onClick={handleChildFilter} key={index}>{language}</p>
                        })}
                        {item.tools.map((tool, index) => {
                            return <p onClick={handleChildFilter} key={index}>{tool}</p>
                        })}
                    </Tag>
                </ul>
            </Box>
        </div>
    )
}

export default Item; 
