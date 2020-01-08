import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
export class InputOfferLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            designation: '',
            companyLocation: '',
            reportingDate: '',
            salaryOnBench: '',
            salaryAfterDeployment: '',
            date: '',

            // validation variable
            showEmployeeName: '',
            showDesignation: '',
            showCompanyLocation: '',
            showReportingDate: '',
            showSalaryOnBench: '',
            showSalaryAfterDeployment: '',
            showInvalidDate:''

        }
    }

    componentDidMount() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const nth = (d) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        let today = new Date();
        let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date: currentdate
        })


        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let reportingDate = (document.getElementById("reportingDate").value).trim();
                let salaryOnBench = (document.getElementById("salaryOnBench").value).trim();
                let salaryAfterDeployment = (document.getElementById("salaryAfterDeployment").value).trim();
                let selectedDate =new Date(reportingDate).setHours(23);
                let TodaysDate = new Date()


                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (reportingDate === "") {
                    that.setState({ showReportingDate: true })
                }
                if (salaryOnBench === "") {
                    that.setState({ showSalaryOnBench: true })
                }
                if (salaryAfterDeployment === "") {
                    that.setState({ showSalaryAfterDeployment: true })
                }

                if(selectedDate<TodaysDate){
                    that.setState({
                        showInvalidDate:"true"
                    })

                   return false;
              }       

                if (designation != "" && companyLocation != "" && employeeName != "" && reportingDate !== "" && salaryOnBench != "" && salaryAfterDeployment != '' && designation != "") {
                    console.log("True return")
                    return true;

                }
                else {
                    return false;
                }
            });
        });

    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/OfferLetter')
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideSalaryAfterDeployment = () => {
        this.setState({
            showSalaryAfterDeployment: false
        })
    }
    hideReportingDate = () => {
        this.setState({
            showReportingDate: false
        })
    }
    hideSalaryOnBench = () => {
        this.setState({
            showSalaryOnBench: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }


    render() {
        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Offer Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onClick={()=>{this.hideReportingDate();this.hideInvalidDate()}} onKeyPress={()=>{this.hideReportingDate();this.hideInvalidDate()}} type="date" label="Reporting Date" title="Reporting Date" name="reportingDate" id="reportingDate" onChange={(event) => {
                                                        this.setState({
                                                            reportingDate: event.target.value
                                                        }); this.hideReportingDate();this.hideInvalidDate();
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Employee Name field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showReportingDate ? <div id="errordiv" className="container-fluid">Please fill out Reporting Date field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid">Reporting Date equal or greater than Today's date * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation} label="Company Location" type="text" name="companyLocation" id="companyLocation" title="Company Location" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideSalaryOnBench} label="Salary On Bench" className="w-100" name="salaryOnBench" title="Salary On Bench" id="salaryOnBench" onChange={(event) => {
                                                        this.setState({
                                                            salaryOnBench: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideSalaryAfterDeployment} label="Salary After Deployment" className="w-100" name="salaryAfterDeployment" title="Salary After Deployment" id="salaryAfterDeployment" onChange={(event) => {
                                                        this.setState({
                                                            salaryAfterDeployment: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showSalaryOnBench ? <div id="errordiv" className="container-fluid">Please fill out Salary On Bench field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showSalaryAfterDeployment ? <div id="errordiv" className="container-fluid">Please fill out Salary After Deployment field* </div> : null}
                                                </div>
                                            </div>
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline type="submit" id="genrate" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InputOfferLetter)
