import React from 'react';
import TableHeader from './table_header'
import TableBody from './table_body'

const Table=(props)=>{
    return(<table class='leads_table'>
        <TableHeader headers={['Name','Email','Mobile Num','Location Type','Location String','Acton',]}/>
        <TableBody {...props}/>
    </table>)
}
export default Table;
