import React, { useState, Fragment } from 'react'
import Item from './Item';
import Filter from './Filter';

const List = ({ data }) => {

    const [filter, setFilter] = useState([]);

    const handleFilter = (e) => {
        e.preventDefault();
        if(!filter.includes(e.target.outerText)){
            setFilter([...filter, e.target.outerText]);
        }
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const i = filter.indexOf(e.target.previousSibling.outerText);
        setFilter([...filter.slice(0,i), ...filter.slice(i+1)]);
        console.log(filter);
    }

    const handleRemoveAll = (e) => {
        setFilter([...filter.slice(0,0), ...filter.slice(0,0)]);
    }

    return (
        <div>
            <Filter filter={filter} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}/>
            {data.map((item, index) => {
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
