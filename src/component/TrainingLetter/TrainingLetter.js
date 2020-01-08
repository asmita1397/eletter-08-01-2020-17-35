import React, { Component } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import Home from '../home';
import '../CommonStyle.css';
export class TrainingLetter extends Component {


    constructor(props) {
        super(props);
          
        this.state={
           employee:[]
        }
      }
      
    componentDidMount() {
        debugger
       
        this.setState({
            employee: this.props.empData,
        })
        console.log("DDDDDDDDDDDDDDDDDDd", this.props.empData)
        console.log("data hr form  state ", this.state.employee);
    }


    nth = (d) => {
        if (d > 3 && d < 21)
          return 'th';
        switch (d % 10) {
          case 1: return "st";
          case 2: return "nd";
          case 3: return "rd";
          default: return "th";
        }
      }



    render() {

        let toDate=new Date();
        let toJoiningDate=new Date(this.state.employee.joiningDate);

        if (this.props.empData  == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} />
                    <div className="card" id="AFourPage">
                        <div className="card-body">
                        <div  className="waterMark">
                <span style={{color:'#263248',fontSize: '91px',
    fontFamily: 'sans-serif',position: 'absolute',opacity: '0.3',zIndex:'0'}}>TES<span style={{color: '#F8981C',fontSize: '91px',
    fontFamily: 'sans-serif',fontWeight: "600"}}>TY</span>ANTRA</span>
                </div>
                            <div>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Date: {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></span></span></p>
                                <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Place: {this.state.employee.companyLocation}</strong></span></span></p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'center' }} align="CENTER"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong style={{ fontSize: 'x-large' }}>To Whomsoever It may concern </strong></span></span></p>
                                <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>This is to certify that </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>is an employee in this organization. {this.props.empData.gender.gender1} is presently holding the post as </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.designaton}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>. {this.props.empData.gender.gender1} joined this organization on </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>.</span></span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>Further this organization has </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>No Objection</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> for </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>joining to</span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.courseName} Course</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> at </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchName},</strong></span></span> <span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchLocation} Branch. </strong></span></span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'left', paddingLeft: 20, paddingRight: 20 }}><span style={{ color: '#000000' }}>For </span><span style={{ color: '#000000' }}><strong>Test Yantra Software Solutions (India ) Pvt Ltd</strong></span></p>
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}>(Human Resources)</p>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(TrainingLetter)
