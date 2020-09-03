import React, {Component} from 'react';
import {Card, Form, FormGroup, Input, FormText, Button} from 'reactstrap';
import './signinup.css';

class Sign extends Component {
        state= {
            rightpane: false
        }
    

    handleSignUpButton = () => {
        this.setState ({rightpane: false,
      });
    }
    
      handleSignInButton = () => {
        this.setState({rightpane: true,
      });
    }
    render()
    {
    return (
        <div className="container" id="container">
            <div className="form">
                <Card className={`signin ${this.state.rightpane ? ` up-right-active` : ``}`}>
                    <Form>
                        <FormText><h1>Sign in</h1></FormText>
                        <FormGroup className="social">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        </FormGroup>
                        <FormText className="text">
                                <p>or use your account</p>
                        </FormText>
                        <FormGroup className="form-input">
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup className="form-input">
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        <FormText>
                            <p>Forgot your password?</p>
                        </FormText>
                        <Button className="button" id="b-signin" color="primary">Sign In</Button>{' '}
                    </Form>
                </Card>
                <Card className={`signup ${this.state.rightpane ? `up-right-inactive` :``}`}>
                    <Form>
                        <FormText><h1>Sign Up</h1></FormText>
                        <FormGroup className="social">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        </FormGroup>
                        <FormText className="text">
                                <p>or use your email for registration</p>
                        </FormText>
                        <FormGroup className="form-input">
                            <Input type="text" name="name" id="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup className="form-input">
                            <Input type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup className="form-input">
                            <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        <Button className="button" id="b-signup" color="primary">Sign Up</Button>
                    </Form>
                </Card>
            </div>
            <div className="shift">
                <Card className={`up-shift ${this.state.rightpane ? `in-right-active` :``}`}>
                    <h1>Hello Friend!</h1>
                    <p>
                        Enter your personal details and start your journey with us.
                    </p>
                    <div className="btn-style">
                        <Button className="button" id="b4-signup" onClick={this.handleSignUpButton} color="primary">Sign Up</Button>
                    </div>
                </Card>
                <Card className={`in-shift ${this.state.rightpane ? `in-right-inactive` :``}`}>
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <div className="btn-style">
                        <Button className="button"  id="b3-signin" onClick={this.handleSignInButton} color="primary">Sign In</Button>
                    </div>
                </Card>
            </div>   
        </div>
    );
    }
}

export default Sign;