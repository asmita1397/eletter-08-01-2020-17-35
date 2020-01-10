import React, { Component } from 'react';
import '../component/home.css'
import Cards from './Cards';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import home3 from './Assests/home.png'
import printer from './Assests/print.jpeg'  
import Dropdown from './dropdown';
import Axios from 'axios'
import Example from './Example.js';
import MailComponent from './Email/MailComponent';
import { Thumbnail } from 'react-bootstrap';

 export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from:"nilesh.gupta6818@gmail.com",
      message:"from email webservice",
      tos:["nilesh.g@testyantra.com"],
      ccs:["nilesh.gupta6818@gmail.com"],
      waterMark:'',
      showWaterMark:false
    }
  }

  sendEmail = () => {

    Axios.post('http://localhost:8080/send-email', this.state)
      .then((response) => {
        console.log(" details" + this.state.email)
        console.log(response.data.message)
        if (response.data.statusCode === 201) {

           alert("suceess")

        } else if (response.data.statusCode === 401) {
               
        }

      }).catch((error) => {

        console.log(error);
      })
  }

 
   printPreview=(containerid)=>{
    /*  containerid = 'container-id'
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
   } 
   window.print()*/
   this.props.setHeader(true);
   }



  showWatermark=(data)=>{
             
    this.setState({
      show:data
    },()=>{this.props.showWatermark(this.state.show)})
    
  }

  logout=()=>{
    localStorage.clear();
    this.props.history.push('/');
  }
  sendBack(){
    this.props.sendData();
  }

  render() {
    return (
      <div>

     

    <div>
  
    <nav style={{height:'65px'}} class="navbar navbar-expand-md new-bg navbar-dark">
       
               
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
           <Dropdown/> 
        <li style={{marginTop: '11px'}}>
                <Link class="nav-link" to="/cards"><img style={{width:35}} src={home3} onClick={()=>{localStorage.clear()}}/> <span class="sr-only">(current)</span></Link>
                </li>
    
    </ul>
    </div>
    {this.props.buttonShow?<button onClick={()=>{window.history.back();localStorage.setItem("editClick",true)}} className="btn btn-warning">Edit</button>:null}
    {this.props.buttonShow?<MailComponent/>:null}
    
    {/* {   this.props.buttonShow?<img onClick={this.printPreview} style={{ width: 38, cursor: 'pointer', borderRadius: '100px' }} src={printer} />:null} */}

    {  this.props.buttonShow?<Example showWatermark={this.showWatermark.bind()  }/>:null}
    <div style={{marginTop: '-2px'}} class="nav-item nav-item avatar dropdown">
   
              <div class="nav-link new-link">
              <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="http://kartavyasadhana.in/assets/images/user.png" class="rounded-circle z-depth-0" alt="avatar image" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item waves-effect waves-light" href="#">Profile-Settings</a>
                    <Link class="dropdown-item waves-effect waves-light" onClick={this.logout}>Logout</Link>

                  </div>

              </div>
            </div>
    </nav>



    </div>


      </div>
    );
  }
}
export default withRouter(Home)