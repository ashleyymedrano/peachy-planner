import React, { useState } from "react";
import "../App.css";
import title from "/src/design/title.png";
import peach1 from "/src/design/peach1.png";
import peach2 from "/src/design/peach2.png";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const Page = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    // Validation schemas
    const signUpValidationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const handleSignUpSubmit = (values, { setSubmitting }) => {
        console.log("Sign-Up values:", values);
        setSubmitting(false);
    };

    const handleLoginSubmit = (values, { setSubmitting }) => {
        console.log("Login values:", values);
        setSubmitting(false);
    };

    return (
        <>
            <div>
                <img src={peach1} alt="Peach" height="70" width="100" className="peach1" />
            </div>
            <div>
                <img src={peach2} alt="Peach" height="70" width="100" className="peach3" />
            </div>
            <div>
                <img src={peach1} alt="Peach" height="70" width="100" className="peach4" />
            </div>
            <div>
                <img src={peach2} alt="Peach" height="70" width="100" className="peach2" />
            </div>
            <div className="container">
                <div className="title-container">
                    <img src={title} alt="Title" height="180" width="350" className="title" />
                    <h1 className="syp">sweeten your productivity</h1>
                </div>
                {isSignUp ? (
                    <Formik
                        initialValues={{ username: "", email: "", password: "" }}
                        validationSchema={signUpValidationSchema}
                        onSubmit={handleSignUpSubmit}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="card2">
                                    <Form.Group controlId="username">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <input
                                            type="password"
                                            placeholder="New password"
                                            className="password"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="confirmPassword">
                                        <input
                                            type="password"
                                            placeholder="Confirm password"
                                            className="password"
                                        />
                                    </Form.Group>
                                    <button className="create-account-button" type="submit">
                                        Create an account
                                    </button>
                                    <div>
                                        <button
                                            className="returning-user-button"
                                            onClick={() => setIsSignUp(false)}
                                        >
                                            Returning user? Log in
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLoginSubmit}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="card">
                                    <Form.Group controlId="email">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="password"
                                        />
                                    </Form.Group>
                                    <button className="login-button" type="submit">
                                        Log in
                                    </button>
                                    <a href="/public" className="forgot-password">
                                        Forgot password?
                                    </a>
                                    <div>
                                        <button
                                            className="new-user-button"
                                            onClick={() => setIsSignUp(true)}
                                        >
                                            Not a user? Create an account
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </>
    )
}

export default Page;
