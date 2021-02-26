import React, { useState, Fragment } from 'react'
import Item from './Item';

const List = ({ data }) => {

    const [filter, setFilter] = useState([]);

    const handleFilter = (e) => {
        e.preventDefault();
        setFilter([...filter, e.target.outerText]);
    }
    return (
        <div>
            {data.map((item, index) => {
                // return <Item key={index} item={item} handleFilter={handleFilter} />
                
                const merged = item.languages.concat(item.tools).concat(item.role).concat(item.level);
                let result = false;
                if(filter.length === 0){
                    result = true;
                }else{
                    result = filter.every(skill => merged.includes(skill));
                }
                if(result){
                    return <Item key={index} item={item} handleFilter={handleFilter} />
                }else{
                    return <Fragment key={index}></Fragment>
                }
            })}
        </div>
    )
}

export default List;
