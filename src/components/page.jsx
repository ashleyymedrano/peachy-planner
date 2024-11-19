import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import title from "/src/design/title.png";
import peach1 from "/src/design/peach1.png";
import peach2 from "/src/design/peach2.png";
import { Form } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

// Mocking registerUser service
const registerUser = async (values) => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ message: "Registration successful!" }), 1000)
    );
};

const Page = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate(); // Use the useNavigate hook

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

    const handleSignUpSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await registerUser(values);
            if (response.message === "Registration successful!") {
                setSuccessMessage(response.message);

                // Save user data in localStorage (for demo purposes)
                localStorage.setItem("userData", JSON.stringify(values)); // Store user data

                navigate("/lists"); // Navigate to the lists page only on success
            } else {
                setSuccessMessage("Registration failed. Please try again.");
            }
        } catch (error) {
            setSuccessMessage("An error occurred during registration. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };


    const handleLoginSubmit = async (values, { setSubmitting }) => {
        try {
            // Get stored user data from localStorage
            const storedUserData = JSON.parse(localStorage.getItem("userData"));

            // Mock login logic (replace this with actual API call for login)
            if (
                storedUserData &&
                values.email === storedUserData.email &&
                values.password === storedUserData.password
            ) {
                setSuccessMessage("Login successful!");
                navigate("/lists"); // Navigate to the lists page on success
            } else {
                setSuccessMessage("Invalid email or password. Please try again.");
            }
        } catch (error) {
            setSuccessMessage("An error occurred during login. Please try again.");
        } finally {
            setSubmitting(false);
        }
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
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
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
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="email"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="password"
                                        />
                                    </Form.Group>
                                    <button className="login-button" type="submit">
                                        Log in
                                    </button>
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
            {successMessage && (
                <div
                    className="success-message"
                    style={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        backgroundColor: "#f0f0f0",
                        padding: "0.5rem",
                        borderRadius: "10px",
                        color: "green",
                        marginTop: "20px",
                    }}
                >
                    {successMessage}
                </div>
            )}
        </>
    );
};

export default Page;