import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';

const Item = ({item,onSelect,id}) => {
    const deleteItems = () => {

    }
    return (
        <div>
            <li>{item} <RemoveIcon onClick={() => {onSelect(id)}} /></li>
        </div>
    )
}

export default Item;
