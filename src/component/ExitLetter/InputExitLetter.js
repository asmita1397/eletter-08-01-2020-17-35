import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputExitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            designation: '',
            joiningDate: '',
            exitDate: '',
            date: '',
            location: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him',
            },
            // validation variable 
            showEmployeeName: '',
            showDesignation: '',
            showJoiningDate: '',
            showExitDate: '',
            showCompanyLocation: '',
            showinvalidDate: '',
            showJoinInvalid: ''
        }
    }

    componentDidMount() {
        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({



                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                employeeId: this.props.empData.employeeId,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate,
                exitDate: this.props.empData.exitDate,
                location: this.props.empData.location,
            })

        }
        var that = this;
        $(document).ready(() => {
            $('#generate').click((e) => {
                debugger
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

                console.log("dattetaetaetaet ", this.state)
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    
                    this.setState({
                        ...this.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }

                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let ExitDate = (document.getElementById("exitDate").value).trim();
                let JoiningDate = (document.getElementById("joiningDate").value).trim();
                let selectedJoiningDate = new Date(JoiningDate);
                let selectedExitDate = new Date(ExitDate)
                let now = new Date();

                if (designation === "") {
                    this.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    this.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }

                if (ExitDate === "") {
                    this.setState({ showExitDate: true })
                }
                if (JoiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }

                if (selectedJoiningDate > now) {
                    this.setState({ showJoinInvalid: true })
                    return false;
                }

                if (selectedExitDate < selectedJoiningDate) {
                    that.setState({
                        showinvalidDate: true
                    })
                    return false;
                }
                if (designation != "" && companyLocation != "" && employeeName != "" && ExitDate != "" && JoiningDate != '') {
                    console.log("True return")
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }

    onCheckHandler = (event) => {
        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
            console.log("if  ==", this.state.withWaterMark)
        }
        else {
            debugger;
            this.setState({
                withWaterMark: false
            })
            console.log("else  ==", this.state.withWaterMark)

        }
    }

    onChangeHeader = (event) => {

        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
            console.log("if  ==", this.state.withHeader)
        }
        else {
            debugger;
            this.setState({
                withHeader: false
            })
            console.log("else  ==", this.state.withHeader)

        }


    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideExitDate = () => {
        this.setState({
            showExitDate: false
        })
    }
    hideshowJoiningDate = () => {
        this.setState({
            showJoiningDate: false
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
            showinvalidDate: false
        })
    }

    hideInvalidJoin = () => {
        this.setState({
            showJoinInvalid: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)
        this.props.clicked(this.state)
        this.props.history.push('/ExitLetter')

    }

    hideInvalidDate = () => {
        this.setState({
            showinvalidDate: false
        })
    }


    //

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
                                        <h3 className="text-center black-text font-bold ">Exit Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" value={this.state.salute} autocomplete="off" name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div class="col-9">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
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
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.joiningDate} type="date" onClick={() => { this.hideshowJoiningDate(); this.hideInvalidJoin() }} onKeyPress={() => { this.hideshowJoiningDate(); this.hideInvalidJoin() }} label="Joined Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideshowJoiningDate(); this.hideInvalidJoin();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.exitDate} type="date" onClick={() => { this.hideExitDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideExitDate(); this.hideInvalidDate() }} label="Exit Date" title="Exit Date" name="exitDate" id="exitDate" onChange={(event) => {
                                                        this.setState({
                                                            exitDate: event.target.value
                                                        }); this.hideExitDate(); this.hideInvalidDate()
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining date field * </div> : null}
                                                    {this.state.showJoinInvalid ? <div id="errordiv" className="container-fluid">Joined Date must be equal or less than today's Date * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showExitDate ? <div id="errordiv" className="container-fluid">Please fill out Exit Date field * </div> : null}
                                                    {this.state.showinvalidDate ? <div id="errordiv" className="container-fluid">Exit Date must be greater or equal to Joining Date * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.designation} onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.location} onKeyPress={this.hideCompanyLocation} label="Company Location" className="w-100" name="commpanyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            location: event.target.value
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

                                            


                                            <div className=" input-group w-50 container-fluid">
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
export default withRouter(InputExitLetter)