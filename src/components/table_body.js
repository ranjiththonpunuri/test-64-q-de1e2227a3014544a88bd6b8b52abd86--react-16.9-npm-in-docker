import React from 'react';
import TableRow from './table_row'

const TableBody=(props)=>{
    return(<tbody>
    {
        props.leads.map(lead=><TableRow lead={lead}  openMarkPopup={props.openMarkPopup} openDeletePopup={props.openDeletePopup}/>)
    }
    </tbody>)
}
export default TableBody;