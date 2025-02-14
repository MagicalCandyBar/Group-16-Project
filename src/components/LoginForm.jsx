import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Validate email
  const validateEmail = (email) => {
    const validEmails = ["admin@gmail.com", "volunteer@gmail.com"];
    return validEmails.includes(email);
  };

  // Validate password length
  const validatePassword = (password) => {
    return password.length > 7;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email is valid
    if (!validateEmail(email)) {
      setErrorMessage(
        "Please enter a valid email (admin@gmail.com or volunteer@gmail.com)."
      );
      return; // Prevent form submission if email is invalid
    }

    // Check if the password is valid
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters long.");
      return; // Prevent form submission if password is invalid
    }

    setErrorMessage(""); // Clear error message if both email and password are valid

    // TODO: replace with an actual check
    const isProfileComplete = false; // Assume profile needs completion 
  
    // Redirect user to complete profile if not completed
    if (!isProfileComplete) {
      navigate("/user-profile/edit");
    } else {
      navigate("/user-profile"); // Navigate to the user profile page
    }

  };

  // Handle sign-up button click
  const handleSignUpClick = () => {
    navigate("/sign-up"); // Navigate to the Sign Up page
  };

  return (
    <form className="login-form-container" onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Email note below the email field */}
      <p className="email-info">admin@gmail.com or volunteer@gmail.com</p>

      <div className="form-field">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Password note below the password field */}
      <p className="password-info">
        Password must be at least 8 characters long
      </p>

      {/* Only show the error message if it exists */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Wrap buttons inside a container */}
      <div className="form-buttons">
        <button type="submit">Login</button>
        <button type="button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
