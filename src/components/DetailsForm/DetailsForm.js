import React, { Component } from 'react';
import { Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import './detailsForm.css'


class DetailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',

        }
    }
    render() {
        return (
            <section className="detailsform_bg">
                <div className="card">

                    <Form className="card-form">
                        <Row>
                            <Col><h3 className="text-center features-header"> PORTFOLIO DETAILS </h3></Col>
                        </Row>

                        <FormGroup row>
                            <Label for="Name" sm={2}>Name</Label>
                            <Col className="input" sm={5}>
                                <Input type="text" name="firstName" placeholder="First Name" />
                            </Col>
                            <Col className="input" sm={5}>
                                <Input type="text" name="lastName" placeholder="Last Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Introduction" sm={2}>Introduction</Label>
                            <Col className="input" sm={10}>
                                <Input type="textarea" name="introduction" placeholder="I'm an enthusiastic developer and I am ready to take on challenges... " />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="WhatYouDo" sm={2}>What You Do</Label>
                            <Col className="input" sm={10}>
                                <Input type="textarea" name="whatYouDo" placeholder="I'm a badass web developer. I write Javascript ...." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="DisplayPicture" sm={2}>Display Picture</Label>
                            <Col className="input" sm={10}>
                                <Input type="file" name="image"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="SocialLinks" sm={2}>Social Links</Label>
                            <Col className="input" sm={3}>
                                <Input type="url" name="facebook" placeholder="Facebook" />
                                
                            </Col>
                            <Col className="input" sm={3}>
                                <Input type="url" name="linkedin" placeholder="LinkedIn" />
                            </Col>
                            <Col className="input" sm={3}>
                                <Input type="url" name="github" placeholder="GitHub" />
                            </Col>
                            <Col  sm={2}>
                            </Col>
                            <Col className="input" sm={3}>
                                <Input type="url" name="dribble" placeholder="Dribble" />
                            </Col>
                            <Col className="input" sm={3}>
                                <Input type="url" name="behance" placeholder="Behance" />
                            </Col>
                            <Col className="input" sm={3}>
                                <Input type="url" name="twitter" placeholder="Twitter" />
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col className="input submit-btn btn btn-light" sm={{ size: 2, offset: 2 }}>
                                SUBMIT
                            </Col>
                        </FormGroup>
                    </Form>


                </div>
            </section>

        );
    }
}

export default DetailsForm;