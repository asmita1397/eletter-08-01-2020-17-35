import React, { Component } from 'react'
import Home from '../home';
import Test from '../IncrementLetter/test';
import '../CommonStyle.css'
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
export class SalaryRevision extends Component {

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

    let that = this;
    var mediaQueryList = window.matchMedia('print');

    mediaQueryList.addListener(function (mql) {
      if (mql.matches) {
        console.log('before print dialog open');
      } else {
        console.log('after print dialog closed');
        that.setState({
          pix: false
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


  print = (data) => {
    debugger;
    console.log("pix value ", this.state.pix)
    if (this.state.employee.withHeader) {
      this.setState({
        pix: true
      }, () => setTimeout(() => {
        window.print()
      }, 550)
      )
    } else {
      window.print()
    }

  }

  //edit
  sendData() {
    this.props.sendData(this.state.employee);
    this.props.history.push('/InputSalaryRevision');

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
          {<Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={() => this.sendData()} setHeader={(data) => this.print()} />}
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
                <div>
                  <p style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 30, marginTop: 150 }} align="JUSTIFY"><span ><strong>Date: {toDayDate.getDate()}<sup>{this.nth(toDayDate.getDate())}</sup>&nbsp;{moment(toDayDate).format('MMMM YYYY')}</strong></span></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>To<br /> <br /> <strong>{this.state.employee.employeeName}</strong><strong>,</strong></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>Employee ID: {this.state.employee.employeeId}</strong></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Subject: Change in Annual Salary Compensation</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}><br /> Dear <strong>{this.state.employee.employeeName},</strong><strong><br /> <br /> </strong></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>This is with reference to your Offer letter dated ( DOJ ). As per the Salary clause mentioned in your Offer, we confirm to revise your Annual CTC from INR 300000 to INR 400000. This revision is effective <span ><strong>{joiningDate.getDate()}<sup>{this.nth(joiningDate.getDate())}</sup>&nbsp;{moment(this.state.employee.joiningDate).format('MMMM YYYY')}</strong></span></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Further, your Salary revision shall be revised Annually, based on your performance and will be aligned to Performance appraisal policy adopted by the Company. &nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>The Salary Annexure is attached along with this letter. All other terms and conditions remains the same as per your Employment Offer.</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Wish you all the best.<br /> </p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>&nbsp;</strong></p>
                  <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>Authorized Signatory </strong></p>
                  <p style={{ paddingLeft: 60, textAlign: 'justify' }}>&nbsp;</p>
                </div>


                {this.state.waterMark ? <div className="waterMark">
                  <span style={{
                    color: '#263248', fontSize: '91px',
                    fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                  }}>TES<span style={{
                    color: '#F8981C', fontSize: '91px',
                    fontFamily: 'sans-serif', fontWeight: "600"
                  }}>TY</span>ANTRA</span>
                </div> : null}

                <br />
                <br />
              </div>


              {this.state.waterMark ? <div className="footer" style={{ marginLeft: '-141px', marginTop: '200px' }}>

                <img className="tyfooter" src={TyFooter}></img>

              </div> : null}
            </div>
          </div>




          {/* second card */}
          <div className="card" id="AFourPage" style={{ marginTop: '200px' }}>
            <div className="card-body pb-0">

              {this.state.waterMark ? <div className="waterMark">
                <span style={{
                  color: '#263248', fontSize: '91px',
                  fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                }}>TES<span style={{
                  color: '#F8981C', fontSize: '91px',
                  fontFamily: 'sans-serif', fontWeight: "600"
                }}>TY</span>ANTRA</span>
              </div>
                : null}


              {this.state.waterMark ? <header className="header" style={this.state.pix ? { marginLeft: '-115px', marginTop: '-13px' } : { marginLeft: '-115px', marginTop: '-115px' }}>

                <img style={{
                  width: '1160px',
                  height: '95px'
                }} src={TyHeader}></img>

              </header> : null}
              <br></br>
              <br></br>
              <br></br>
              <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
              <div style={{ padding: 0 }} className="mt-5">
                <table style={{ width: 800, marginLeft: 'auto', marginRight: 'auto', heigth: 160 }} border="1px">
                  <tbody>
                    <tr style={{ height: 32, background: '#D9D9D9' }}>
                      <td style={{ textAlign: 'center', width: '423.5px', paddingTop: '5px' }} colSpan={2}>
                        <p style={{ margin: 0 }}><strong>SALARY BREAK UP (ANNEXURE A)</strong></p>
                      </td>
                    </tr>
                    <tr >
                      <td style={{ width: '200px', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong style={{ fontSize: 'large' }}>NAME:</strong></td>
                      <td style={{ width: '200px', wordBreak: 'break-all', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>{this.state.employee.employeeName}</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: '200px', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong style={{ fontSize: 'large' }}>DESIGNATION:</strong></td>
                      <td style={{ width: '200px', wordBreak: 'break-all', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>{this.state.employee.designation}</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: '200px', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>LOCATION:</strong></td>
                      <td style={{ width: '200px', wordBreak: 'break-all', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>{this.state.employee.companyLocation}</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: '200px', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong style={{ fontSize: 'large' }}>COMPANY/BUSINESS UNIT:</strong></td>
                      <td style={{ width: '200px', wordBreak: 'break-all', textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>Test Yantra Software Solutions</strong></td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ width: 800, height: 160, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center', width: '423.5px', background: '#D9D9D9' }} colSpan={3}>
                        <p style={{ margin: 0 }}><strong>Basic and Other Allowances Details</strong></p>
                      </td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, }}>&nbsp;<strong>Cash Flow Head</strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>Monthly&nbsp;&nbsp;</strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;Yearly&nbsp;&nbsp;</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Basic Salary ( Basic + DA )</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>House Rent Allowance</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Conveyance Allowance</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>LTA</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Food&nbsp;Allowance</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Other&nbsp;Allowance</span></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}><strong>&nbsp;<span style={{ fontSize: 'medium' }}>Monthly / Yearly Gross</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                      <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                    </tr>
                  </tbody>
                </table>

                <table style={{ width: 800, heigth: 160, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                  <tbody>
                    <tr >
                      <td style={{ background: '#D9D9D9', width: '100%', textAlign: 'center' }} colSpan={3}><strong>Deductions</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>EPF Employee</span></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;</strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;&nbsp;</strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Professional Tax</span></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<span style={{ fontSize: 'medium' }}>Medical Insurance</span></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>Total</strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr >
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>Net Pay</strong></td>
                      <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }} colSpan={3}>&nbsp;<strong></strong></td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ width: 800, heigth: 160, marginLeft: 'auto', marginRight: 'auto' }} border={1}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#D9D9D9', textAlign: 'center' }} colSpan={3}><strong>Benefits&nbsp;</strong></td>
                    </tr>
                    <tr>
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;EPF Employer</td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: 125, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;Gratuity</td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr>
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;ESI</td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr>
                      <td style={{ width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>Total</strong></td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                      <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                    </tr>
                    <tr>
                      <td style={{ background: '#D9D9D9', width: 200, textAlign: 'left', paddingLeft: '10px' }}>&nbsp;<strong>CTC</strong></td>
                      <td style={{ background: '#D9D9D9', width: 200, wordBreak: 'break-all', textAlign: 'right' }} colSpan={2}>&nbsp;<strong></strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
              <br />
              <br />
              <br />
              <br />
              <br />
              {this.state.waterMark ? <div className="footer" style={this.state.pix ? { marginLeft: '-103px', marginTop: '-25px' } : { marginLeft: '-103px', marginTop: '-27px' }}>

                <img style={{
                  width: '1160px',
                  height: '95px'
                }} src={TyFooter}></img>

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

export default withRouter(SalaryRevision)
