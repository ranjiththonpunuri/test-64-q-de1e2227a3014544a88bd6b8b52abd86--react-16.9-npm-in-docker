import React from 'react';


const TableRow=({lead,openMarkPopup,openDeletePopup})=>{  
    return(
        <tr>
           <td width='16%'>{lead.first_name+' '+lead.last_name}</td>
           <td width='16%'>{lead.email}</td>
           <td width='16%'>{lead.mobile}</td>
           <td width='16%'>{lead.location_type}</td>
           <td width='16%'>{lead.location_string}</td>
           <td width='20%'><button className ='update_lead_modal_btn' onClick={()=>openMarkPopup(lead)}> Mark Update</button><button className ='delete_lead_modal_btn' onClick={()=>openDeletePopup(lead)}> Delete</button></td> 
        </tr>
    )
}
export default TableRow;