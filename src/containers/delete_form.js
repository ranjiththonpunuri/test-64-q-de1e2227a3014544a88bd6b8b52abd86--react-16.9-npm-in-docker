import React from 'react';



class DeleteForm extends React.Component{

    render(){
      return(<div className='delete_lead_form'>
         <div className='modal_header'>Delete Lead</div>
         <div>
              <div>
                <div>
                  <button className='cancel' onClick={()=>this.props.openDeletePopup(null)}>Cancel</button>
                </div>
                <div>
                   <button className ='delete_lead_btn' onClick={()=>this.props.deleteLead(this.props.lead)}>Delete</button>
                </div>
             </div> 
         </div>
      </div>)
    }
}
export default DeleteForm 