import React from 'react';

class UpdateForm extends React.Component{
    state={
        communication: "Sai",
        
    }

    onFieldChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
    }
    render(){
      return(<div className='update_lead_form'>
         <div className='modal_header'>Mark Communication</div>
         <div>
              <div className='update_form_field'>
                 <div>Communication</div>
                 <textarea type='text' onChange={this.onFieldChange} name='communication'/>
             </div>
              <div>
                <div className='lead_form_field'>
                  <button  className='cancel'  onClick={()=>this.props.openMarkPopup(null)}>Cancel</button>
                </div>
                <div className='lead_form_field'>
                   <button className ='update_lead_btn' onClick={()=>this.props.updateLead(this.props.lead,{...this.state})}>Save</button>
                </div>
             </div> 
         </div>
      </div>)
    }
}
export default UpdateForm 