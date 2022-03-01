import React from 'react';
import "./login.css";
const Login = () => {
  return <>

        <div className="form-groups mb-3">
            <label htmlFor="username" className="from-control-label">Username:  </label>
            <input type="text" className="form-control" id="username" name="username" placeholder="Username" /> 
        </div>
        <div className="form-group">
            <label htmlFor="password" className="from-control-label">Password:  </label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
        </div>           
                    
  </>;
};

export default Login;
