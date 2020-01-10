import React, { Component } from 'react'
import Home from '../home';
import Test from '../IncrementLetter/test';
import '../CommonStyle.css'
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
export class HRLetter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      waterMark: false

    }
  }

 
  componentDidMount() {
    
    this.setState({
      employee: this.props.empData,
    })
    console.log("DDDDDDDDDDDDDDDDDDd", this.props.empData)

    let showValue = JSON.parse(window.localStorage.getItem('beans'))


    console.log("data hr form  state ", this.state.employee);

    let that=this;
    var mediaQueryList = window.matchMedia('print');

    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
          console.log('before print dialog open');
      } else {
          console.log('after print dialog closed');
          that.setState({
              pix:false
         })
      }
  });

  }

  nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }


  print=(data)=>{
    debugger;
    console.log("pix value ",this.state.pix)
    if(this.state.employee.withHeader){
      this.setState({
         pix:true
      },()=>   setTimeout(() => {
        window.print()
      },500)
      )
    }else{
      window.print()
    }
   
  }

  //edit
  sendData(){
    this.props.sendData(this.state.employee);
    this.props.history.push('/hr');

  }

  render() {


    let joiningDate = new Date(this.state.employee.joiningDate);

    console.log("joining DAte render", joiningDate)
    console.log("WaterMark =", this.props.showWaterMark)

    if (this.props.empData == 0) {
      this.props.history.push("/cards")
    }
    let toDayDate = new Date()
    if (this.props.empData) {
      return (
        <div>
          {<Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={()=>this.sendData()} setHeader={(data)=>this.print()} />}
          <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
            <div className="card-body pb-0 mt-5">

              <div>

                {this.state.waterMark ? <header className="header" style={{ marginLeft: '-115px', marginTop: '-100px' }}>

                  <img className="tyHeader" src={TyHeader}></img>

                </header> : null}


                {console.log("watermark------------------", this.props.waterMark)}
                <p style={{ float: 'right' }}></p>
                <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                <p style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 30, marginTop: 150 }} align="JUSTIFY"><span ><strong>Date: {toDayDate.getDate()}<sup>{this.nth(toDayDate.getDate())}</sup>&nbsp;{moment(toDayDate).format('MMMM YYYY')}</strong></span></p>
                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                <p style={{ textAlign: 'center' }} align="CENTER"><span ><span style={{ fontSize: 'large' }}><strong>TO WHOMSOEVER IT MAY CONCERN</strong></span></span></p>
                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span ><strong>Sub: Information as per HR Records</strong></span></p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >This is to inform that </span><span ><strong>{this.state.employee.salute} {this.state.employee.employeeName} </strong></span><span >(Employee ID: {this.state.employee.employeeId}) is an employee of Test Yantra Software Solutions (India) Pvt Ltd from </span><span ><strong>{joiningDate.getDate()}<sup>{this.nth(joiningDate.getDate())}</sup>&nbsp;{moment(this.state.employee.joiningDate).format('MMMM YYYY')}</strong></span><span > to till Date. {this.props.empData.gender.gender1} is designated as {this.state.employee.designation}. </span></p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY">&nbsp;</p>
                {this.state.waterMark ? <div className="waterMark">
                  <span style={{
                    color: '#263248', fontSize: '91px',
                    fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                  }}>TES<span style={{
                    color: '#F8981C', fontSize: '91px',
                    fontFamily: 'sans-serif', fontWeight: "600"
                  }}>TY</span>ANTRA</span>
                </div> : null}
                <p lang="en-IN" style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >Thanks & Regards,</span></p>
                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >For <strong>Test Yantra Software Solutions (India) Pvt Ltd</strong></span></p>
                <br />
                <br />
                <br />
                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>Authorized Signatory</strong></p>
                {/* <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}><span ><strong>(Human Resources)</strong></span></p> */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br/>
                <br/>
              </div>


              {this.state.waterMark ? <div className="footer" style={{ marginLeft: '-141px', marginTop: '200px' }}>

                <img className="tyfooter" src={TyFooter}></img>

              </div> : null}
            </div>
          </div>


        </div>
      )
    } else {
      return (
        <h1></h1>)
    }
  }
}

export default withRouter(HRLetter)
