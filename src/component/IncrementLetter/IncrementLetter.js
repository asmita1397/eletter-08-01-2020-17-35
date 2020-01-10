import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG';
import TyHeaderSpace from '../Assests/tyheaderspace.png';
export class IncrementLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employee: [],
            waterMark: false,
            pix: false
        }
    }

    componentDidMount() {

        this.setState({
            employee: this.props.empData,
        })

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



    print = (data) => {
        ;
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

    //edit
    sendData() {
        this.props.sendData(this.state.employee);
        this.props.history.push('/InputIncrementLetter');

    }


    render() {

        let toDate = new Date();
        let toIncrementInEffectDate = new Date(this.state.employee.incrementInEffectDate);


        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    {<Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={() => this.sendData()} setHeader={(data) => this.print()} />}
                    <div>
                     


                    </div>
                    <div className="main">
                    <div className="card" id="AFourPage" style={{ marginTop: '100px' }}>
                        <div className="card-body">

                            {this.state.waterMark ? <header className="headerimg" >

                                <img style={{
                                    width: '1172px',
                                    height: '95px'
                                }} src={TyHeader}></img>

                            </header> : null}


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

                            <br></br>
                            <br></br>
                            <br></br>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;{toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}>To<br /> <br /> </p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong> {this.state.employee.employeeName},</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>Employee ID: {this.state.employee.employeeId}</strong></p>
                            <br />
                            <br />
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}>Subject: Increment Letter</p>
                            <br />
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><br /> Dear <strong> {this.state.employee.employeeName},<br /> <br /> </strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><br /> This year has been eventful and challenging for all of us in Test Yantra Software Solution Pvt Ltd. We have met the huge challenge of scaling up our business and growing our bottom line. <br /> <br /> Your performance during this period has been rated as Exceeds Expectations. We hope that you continue to meet all challenges that we will offer you in the coming year.<br /> <br /> Further your annual compensation for the year  {this.state.employee.annualCompensationYear} has been enhanced to <strong> <span style={{ fontSize: 'large' }}>&#x20B9;</span> {this.state.employee.salaryIncremented}</strong> per annum effective <strong>{toIncrementInEffectDate.getDate()}<sup>{this.nth(toIncrementInEffectDate.getDate())}</sup>&nbsp;{moment(toIncrementInEffectDate).format('MMMM YYYY')}</strong>. &nbsp;The Salary Annexure is attached along with this letter. All other terms and conditions of your letter of appointment remain unchanged.</p>
                            <br />
                            <br />
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Wish you all the best.<br /> </p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                            {/* <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}>(Human Resources)</p> */}
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            {this.state.waterMark ? <div className="footerimg" >

                                <img style={{
                                    width: '1172px',
                                    height: '95px'
                                }} src={TyFooter}></img>

                            </div> : null}
                        </div>

                    </div>

                    <div className="card" id="AFourPage" style={{ marginTop: '20px' }}>
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


                            {this.state.waterMark ? <header className="headerimg" >

                                <img style={{
                                    width: '1172px',
                                    height: '95px'
                                }} src={TyHeader}></img>

                            </header> : null}
                            <br></br>
                            <br></br>
                            <br></br>
                            <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                            <div style={{ padding: 0 }} className="">
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
                           
                            {this.state.waterMark ? <div className="footerimg" >

                                <img style={{
                                    width: '1172px',
                                    height: '95px'
                                }} src={TyFooter}></img>

                            </div> : null}
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

export default withRouter(IncrementLetter)
