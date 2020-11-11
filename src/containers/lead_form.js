import React from 'react';
const l_type_list=[
   {name:'City',value:'city'},
    {name:'Town',value:'town'},
     {name:'Village',value:'village'}
]
const Dropdown=({list,onFieldChange,selectedvalue})=>{
    return <select onChange={onFieldChange} value={selectedvalue} name='location_type'>{list.map(item=><option value={item.value}>{item.name}</option>)}</select>
}

class LeadForm extends React.Component{

    state={
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        location_type: "",
        location_string: ""
    }

    onFieldChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
    }
    render(){
      return(<div className='add_lead_form'> 
         <div className='modal_header'>Add Lead</div>
         <div>
             <div>
                <div className='lead_form_field'>
                 <div>First Name</div>
                 <input type='text' onChange={this.onFieldChange} name='first_name'/>
                </div>
                <div className='lead_form_field'>
                   <div>Last Name</div>
                   <input type='text' onChange={this.onFieldChange} name='last_name'/>
                </div>
             </div>
             <div>
                <div className='lead_form_field'>
                   <div>Mobile</div>
                   <input type='text' onChange={this.onFieldChange} name='mobile'/>
                </div>
                <div className='lead_form_field'>
                  <div>Email Address</div>
                   <input type='text' onChange={this.onFieldChange} name='email'/>
                </div>
             </div>
             <div>
                <div className='lead_form_field'>
                   <div>Location Type</div>
                  <Dropdown selectedvalue={this.state.location_type} list ={l_type_list} onFieldChange={this.onFieldChange} name='location_type'/>
                </div>
                <div className='lead_form_field'>
                   <div>Location String</div>
                   <input type='text' onChange={this.onFieldChange} name='location_string'/>
                </div>
             </div> 
              <div>
                <div  className='lead_form_field'>
                  <button className='cancel'  onClick={this.props.openLeadPopup}>Cancel</button>
                </div>
                <div  className='lead_form_field'>
                   <button className ='add_lead_btn' disabled={!Object.keys({...this.state}).every(key=>!!this.state[key])}onClick={()=>this.props.addLead({...this.state})}>Save</button>
                </div>
             </div> 
         </div>
      </div>)
    }
}
export default LeadForm 
