import React from 'react'
import Item from './Item';

const List = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => {
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default List;
