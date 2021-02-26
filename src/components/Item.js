import React from 'react';
import styled from'styled-components';

const Box = styled.div`
        border: 1px solid black;
        border-radius: 5px;
        width: 85%;
        margin: 30px auto;
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
    `
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
    const Filter = styled(Row)`
        p {
            color: #5CA5A5;
            background-color: #EFF6F6;
            padding: 8px;
            margin-left: 20px;
            margin-bottom: 15px;
            margin-top: 10px;
            cursor: pointer;
        }
    `

const Item = ({ item, handleFilter }) => {
    const handleChildFilter = (e) => {
        handleFilter(e);
    }
    return (
        <div>
            <Box new={item.new}>
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
                    <p className="bullet">•</p>
                    <p>{item.contract}</p>
                    <p className="bullet">•</p>
                    <p>{item.location}</p>
                </JobInfo>
                
                <hr></hr>
                {/* Filter */}
                <ul>
                    <Filter>
                        <p onClick={handleChildFilter}>{item.role}</p>
                        <p onClick={handleChildFilter}>{item.level}</p>
                        {item.languages.map((language, index) => {
                            return <p onClick={handleChildFilter} key={index}>{language}</p>
                        })}
                        {item.tools.map((tool, index) => {
                            return <p onClick={handleChildFilter} key={index}>{tool}</p>
                        })}
                    </Filter>
                </ul>
            </Box>
        </div>
    )
}

export default Item; 
