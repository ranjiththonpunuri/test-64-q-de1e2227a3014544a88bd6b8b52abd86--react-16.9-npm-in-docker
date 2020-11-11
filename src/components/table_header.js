import React from 'react';

const TableHeader=(props)=>{
    return(<thead>
        <tr>{props.headers.map(header=><th width={header=='Action'?'20%':'16%'}>{header}</th>)}</tr>
    </thead>)
}
export default TableHeader;