import "./Signup.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Signup = (props) => {
  let history = useHistory();
  const handleCreateNewAccount = () => {
    history.push("/signup");
  };
  return (
    <div class="signup-container">
      <div className="container">
        <h2 class="text-center">Signup</h2>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label" for="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Signup
        </button>
        <div className="row">
          <div className="forgotpassword col-6 mt-3">
            <span>Forgot password?</span>
          </div>
          <div className="signup col-6 mt-3">
            <span onClick={() => handleCreateNewAccount()}>Sign up</span>
          </div>
        </div>
        <div class="social-Signup">
          <a href="/a" className="google">
            <span>Google</span>
          </a>
          <a href="/a" className="facebook">
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Signup;
