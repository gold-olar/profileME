import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
import './detailsForm.css'


class DetailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',

        }
    }

    render() {
        return (
            <section>
                <NavigationBar auth={this.props.auth} logOut={this.props.logOut} />
                <div className="detailsform_bg">
                    <div className="card">

                        <Form className="card-form">
                            <Row>
                                <Col><h3 className="text-center features-header"> PORTFOLIO DETAILS </h3></Col>
                            </Row>
                            <p className="errorMessage text-center"> {this.props.errorMessage}</p>

                            <FormGroup row>
                                <Label for="Name" sm={2}>Name</Label>
                                <Col className="input" sm={5}>
                                    <Input type="text" onChange={(event) => this.props.onInputChange(event, "firstName")} name="firstName" required placeholder="First Name" />
                                </Col>
                                <Col className="input" sm={5}>
                                    <Input type="text" onChange={(event) => this.props.onInputChange(event, "lastName")} name="lastName" required placeholder="Last Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Introduction" sm={2}>Introduction</Label>
                                <Col className="input" sm={10}>
                                    <Input type="textarea" name="introduction" onChange={(event) => this.props.onInputChange(event, "introduction")}
                                        placeholder="I'm an enthusiastic developer and I am ready to take on challenges... " />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="WhatYouDo" sm={2}>What You Do</Label>
                                <Col className="input" sm={10}>
                                    <Input type="textarea" name="whatYouDo" onChange={(event) => this.props.onInputChange(event, "whatYouDo")}
                                        placeholder="I'm a badass web developer. I write Javascript ...." />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="SocialLinks" sm={2}>Social Links</Label>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "facebook")} name="facebook" placeholder="Facebook" />

                                </Col>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "linkedin")} name="linkedin" placeholder="LinkedIn" />
                                </Col>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "github")} name="github" placeholder="GitHub" />
                                </Col>
                                <Col sm={2}>
                                </Col>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "dribble")} name="dribble" placeholder="Dribbble" />
                                </Col>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "behance")} name="behance" placeholder="Behance" />
                                </Col>
                                <Col className="input" sm={3}>
                                    <Input type="url" onChange={(event) => this.props.onInputChange(event, "twitter")} name="twitter" placeholder="Twitter" />
                                </Col>
                            </FormGroup>

                            <FormGroup check row>
                            <Col className="" sm={{ size: 2, offset: 2 }}>
                                    {this.props.loading ? <div className="spinner-grow text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> : <button onClick={this.props.onDetailsFormSubmit} type="submit" className="submit-btn btn btn-light"> SUBMIT </button>}
                                    <br/>
                                    {this.props.successMessage ? <Link className="link-to-p success" to ={`/${this.props.username}`}> View your profile </Link> : null}
                                </Col>
                                
                            </FormGroup>
                        </Form>


                    </div>
                </div>
            </section>

        );
    }
}

export default DetailsForm;
