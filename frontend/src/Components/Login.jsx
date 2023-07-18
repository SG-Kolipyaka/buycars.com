
import '../css/login.css';

const Login = () => {
 

 

 

  return (
    <div className="dd1" style={{border:"1px solid pink",backgroundColor:"pink",width:"50%",margin:"auto",height:"250px"}}>
      <h2 className="h23">Login Form</h2>
      <form className="form-2" >
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        <input type="submit" value="Login" className="login-button" />
      </form>
    </div>
  );
};

export default Login;
