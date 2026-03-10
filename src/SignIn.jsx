import React, { useState, useEffect } from "react";
import "./SignIn.css";

function SignIn() {
    // Initialize email from localStorage if it exists
    const [email, setEmail] = useState(localStorage.getItem("rememberedEmail") || "");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberedEmail") ? true : false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            alert("Please enter a valid email!");
            return;
        }

        // Logic for Remember Me
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        console.log("Login Attempt:", { email, password, rememberMe });
    };

    return (
        <div className="sign-in-page">
            <div className="login-card">
                <div className="header-section">
                    <h1 className="brand-name">Rupaayi</h1>
                    <h2 className="tagline">Personal Expense Tracker</h2>
                </div>

                <div className="login-box">
                    <h2 className="section-title">Sign In</h2>
                    <p className="register-text">
                        Not registered yet? <a href="/signup">Sign Up</a>
                    </p>
                    <hr />

                    <form className="signin-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-wrapper" style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "HIDE" : "SHOW"}
                                </span>
                            </div>
                        </div>

                        {/* NEW: Remember Me Section */}
                        <div className="remember-me-container">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="custom-checkbox"></span>
                                Remember Me
                            </label>
                        </div>

                        <button type="submit" className="signin-btn">SIGN IN</button>
                        <a href="/forgot" className="forgot-password">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;