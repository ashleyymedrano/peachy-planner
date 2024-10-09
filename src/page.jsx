import './App.css'
import title from '/src/assets/title.png'


function Page() {
    return (
        <>
            <div className="container">
                <div className="title-container">
                    <img src={title} alt="Peach" height="300" width="400" className="title"/>
                    <h1 className="syp">sweeten your productivity</h1>
                </div>
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
                <button className="new-user-button">not a user? create an account.</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Page;