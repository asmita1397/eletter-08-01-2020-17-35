import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import Home from '../home';
import $ from 'jquery'

export class InputTrainingLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            companyLocation: '',
            designaton: '',
            joiningDate: '',
            date: '',
            courseName: '',
            branchName: '',
            branchLocation: '',
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him'
            },

            // variable validation 
            
            showEmployeeName: '',
            showCompanyLocation: '',
            showDesignation: '',
            showJoiningDate: '',
            showDate: '',
            showCourseName: '',
            showBranchName: '',
            showBranchLocation: '',
        }
    }

    componentDidMount() {

        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {

                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
        
        
              const nth = (d)=> {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
              }
        
                let today = new Date();
                let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                that.setState({
                    date:  currentdate
                })
        

                if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
                    that.setState({
                        ...that.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }
                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("Designaton").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let joiningDate = (document.getElementById("JoiningDate").value).trim();
                let courseName = (document.getElementById("CourseName").value).trim();
                let branchName = (document.getElementById("BranchName").value).trim();
                let branchLocation = (document.getElementById("BranchLocation").value).trim();

                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (joiningDate === "") {
                    that.setState({ showJoiningDate: true })
                }
                if (courseName === "") {
                    that.setState({ showCourseName: true })
                }
                if (branchName === "") {
                    that.setState({ showBranchName: true })
                }
                if (branchLocation === "") {
                    that.setState({ showBranchLocation: true })
                }

                if (designation != "" && companyLocation != "" && employeeName != "" && joiningDate != "" && branchName != '' && branchLocation != "" && courseName != "") {
                    console.log("True return")
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCourseName = () => {
        this.setState({
            showCourseName: false
        })
    }

    hideBranchName = () => {
        this.setState({
            showBranchName: false
        })
    }

    hideBranchLocation = () => {
        this.setState({
            showBranchLocation: false
        })
    }




    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/TrainingLetter')

    }

    render() {
        return (
            <div>
                <div >
                    <Home buttonShow={false} />
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Training Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">

                                                <div className="col-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off"  name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>

                                                <div className="col-9">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName}  label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>

                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-3 p-0" >
                                                </div>
                                                <div className="col-9 p-0" style={{ width: 0 }}>
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation}  label="Designation" name="Designaton" id="Designaton" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            designaton: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation} label="Company Location" className="w-100" name="companyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
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
                                            <div className="row">
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCourseName} type="text" label="Course Name" title="Course Name" name="Course Name" id="CourseName" onChange={(event) => {
                                                        this.setState({
                                                            courseName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideBranchName} type="text" label="Branch Name" title="Branch Name" name="Branch Name" id="BranchName" onChange={(event) => {
                                                        this.setState({
                                                            branchName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideBranchLocation} type="text" label="Branch Location" title="Branch Location" name="Branch Location" id="BranchLocation" onChange={(event) => {
                                                        this.setState({
                                                            branchLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-4 p-0" >
                                                    {this.state.showCourseName ? <div id="errordiv" className="container-fluid">Enter Course Name * </div> : null}
                                                </div>
                                                <div className="col-4 p-0" style={{ width: 0 }}>
                                                    {this.state.showBranchName ? <div id="errordiv" className="container-fluid">Enter Branch Name * </div> : null}
                                                </div>
                                                <div className="col-4 p-0" style={{ width: 0 }}>
                                                    {this.state.showBranchLocation ? <div id="errordiv" className="container-fluid">Enter Branch Location * </div> : null}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideJoiningDate} onClick={this.hideJoiningDate} type="date" label="Joining Date" title="Joining Date" name="Joining Date" id="JoiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        });this.hideJoiningDate();
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 p-0">
                                                {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                                </div>
                                            </div>



                                            <div style={{ width: '50%' }} className=" input-group  container-fluid">
                                                <MDBBtn outline id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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

export default withRouter(InputTrainingLetter)