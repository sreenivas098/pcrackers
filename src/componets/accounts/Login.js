import React from 'react';
const Login = () => {
  return <>
  
        <div className="form-groups mb-3">
            <label htmlFor="gmail" className="from-control-label h4">gamil:  </label>
            <input type="text" className="form-control form-control-lg" id="gmail" name="gamil" placeholder="r16@rguktrkv.ac.in" /> 
        </div>
        <div className="form-group">
            <label htmlFor="password" className="from-control-label h4">Password:  </label>
            <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password"/>
        </div>           
                    
  </>;
};

// test : mocha \"src/*.test.js\" --require @babel/register --recursive

export default Login;
