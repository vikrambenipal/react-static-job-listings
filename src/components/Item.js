import React from 'react';
import styled from'styled-components';

const Box = styled.div`
    border: 1px solid black;
    margin-bottom: 20px;
    border-radius: 5px;
    .position {
        padding-left: 15px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    width: 85%;
    margin: 30px auto;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    `
const Title = styled(Row)`
    h3 {
        padding-left: 15px;
    }
`
const JobInfo = styled(Row)`
    p {
        padding-left: 15px;
    }
`
const Item = ({ item }) => {
    return (
        <div>
            <Box>
                {/* <img src={require(item.logo)} alt=""></img> */}
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
                    <p>{item.contract}</p>
                    <p>{item.location}</p>
                </JobInfo>
                
                <hr></hr>
                {/* Filter */}
                <ul>
                    <li>{item.role}</li>
                    <li>{item.level}</li>
                    {item.languages.map((language, index) => {
                        return <li key={index}>{language}</li>
                    })}
                </ul>
            </Box>
        </div>
    )
}

export default Item; 
