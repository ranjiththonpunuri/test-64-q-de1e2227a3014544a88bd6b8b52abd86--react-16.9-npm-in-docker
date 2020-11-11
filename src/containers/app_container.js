import React from 'react';
import Table from '../components/table'
import LeadForm from './lead_form'
import UpdateForm from './update_form'
import DeleteForm from './delete_form'


import {fetchLeadsApi,addLeadApi,deleteLeadApi,updateLeadApi} from '../axios/api'


class AppContainer extends React.Component{

    state={
        leads:[],
        openLeadForm:false,
        openDeleteForm:false,
        openUpdateForm:false,
        selctedLead:{}
    }
    componentDidMount(){
      this.fetchLeads()
    }
    deleteLead=(lead)=>{
      deleteLeadApi(lead.id).then((leads)=>{
          this.setState({openDeleteFrom:false},()=>{
              this.fetchLeads()
          })
        })
    }
    fetchLeads=()=>{
        fetchLeadsApi().then((leads)=>{
          this.setState({...this.state,leads:leads.data})
        })
    }
    updateLead=(lead,body)=>{
        updateLeadApi(lead.id,body).then(()=>{
          this.setState({openUpdateForm:false},()=>{
              this.fetchLeads()
          })
        })
    }
    addLead = (lead)=>{
        
        addLeadApi(lead).then(()=>{
            debugger
          this.setState({openLeadForm:false},()=>{
              this.fetchLeads()
          })
        })
    }
    openMarkPopup=(lead)=>{
            this.setState({openUpdateForm:!this.state.openUpdateForm,selectedLead:lead})
    }
    openLeadPopup=()=>{
      this.setState({openLeadForm:!this.state.openLeadForm})
    }
    openDeletePopup=(lead)=>{
        this.setState({openDeleteForm:!this.state.openDeleteForm,selectedLead:lead})
    }
    render(){
      return(<div style={{padding:'20px'}}>
         <div style={{paddingBottom:'20px'}}><button className ='add_lead_modal_btn' onClick={this.openLeadPopup}>Add Lead</button></div>
         <Table leads={this.state.leads}  openMarkPopup={this.openMarkPopup} openDeletePopup={this.openDeletePopup} />
         {this.state.openLeadForm?<LeadForm openLeadPopup={this.openLeadPopup} addLead={this.addLead}/>:null}
         {this.state.openUpdateForm?<UpdateForm lead={this.state.selectedLead} openMarkPopup={this.openMarkPopup} updateLead={this.updateLead}/>:null}
         {this.state.openDeleteForm?<DeleteForm lead={this.state.selectedLead} openDeletePopup={this.openDeletePopup} deleteLead={this.deleteLead}/>:null}
      </div>)
    }
}
export default AppContainer 
