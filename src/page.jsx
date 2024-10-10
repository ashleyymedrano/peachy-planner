import './App.css'
import { useState } from 'react'
import title from '/src/assets/title.png'
import peach1 from '/src/assets/peach1.png'
import peach2 from '/src/assets/peach2.png'

function Page() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <>
            <div>
                <img src={peach1} alt="Peach" height="70" width="100" className="peach1"/>
            </div>
            <div>
                <img src={peach2} alt="Peach" height="70" width="100" className="peach3"/>
            </div>
            <div>
                <img src={peach1} alt="Peach" height="70" width="100" className="peach4"/>
            </div>
            <div>
                <img src={peach2} alt="Peach" height="70" width="100" className="peach2"/>
            </div>
            <div className="container">
                <div className="title-container">
                    <img src={title} alt="Peach" height="180" width="350" className="title"/>
                    <h1 className="syp">sweeten your productivity</h1>
                </div>
                {isSignUp ? (
                    // Sign-up form (card2)
                    <div className="card2">
                        <div className="name-container">
                            <input type="text"
                                   placeholder="first name"
                                   className="first-name"/>
                            <input type="text"
                                   placeholder="last name"
                                   className="last-name"/>
                        </div>
                        <input type="text"
                               placeholder="email"
                               className="email"/>
                        <input type="password"
                               placeholder="new password"
                               className="password"/>
                        <input type="password"
                               placeholder="confirm password"
                               className="password"/>
                        <button className="create-account-button">create an account</button>
                        <div>
                            <button
                                className="returning-user-button"
                                onClick={() => setIsSignUp(false)}> {/* Switch to login form */}
                                returning user? log in
                            </button>
                        </div>
                    </div>
                ) : (
                    // Login form (card)
                    <div className="card">
                        <input type="text"
                               placeholder="email"
                               className="email"/>
                        <input type="password"
                               placeholder="password"
                               className="password"/>
                        <label className="remember-me">
                            <input type="checkbox"
                                   className="checkbox"/> Remember me
                        </label>
                        <button className="login-button">log in</button>
                        <a href="/" className="forgot-password">forgot password?</a>
                        <div>
                            <button
                                className="new-user-button"
                                onClick={() => setIsSignUp(true)}> {/* Switch to sign-up form */}
                                not a user? create an account
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Page;
