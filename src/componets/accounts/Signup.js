import React from 'react';
const Signup = () => {
  return <>
        <div className="form-groups mb-3">
            <label htmlFor="full_name" className="from-control-label h4">Full Name:  </label>
            <input type="text" className="form-control form-control-lg" id="full_name" name="full_name" placeholder="Full Name" /> 
        </div>
        <div className="form-groups mb-3">
            <label htmlFor="id_no" className="from-control-label h4">College Id:  </label>
            <input type="text" className="form-control form-control-lg" id="id_no" name="id_no" placeholder="R160000" /> 
        </div>
        <div className="form-groups mb-3">
            <label htmlFor="gamil" className="from-control-label h4">gmail:  </label>
            <input type="text" className="form-control form-control-lg" id="gamil" name="gamil" placeholder="r161000@rguktrkv.ac.in" /> 
        </div>
        <div className="form-group">
            <label htmlFor="password" className="from-control-label h4">Password:  </label>
            <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password"/>
        </div> 
        <div className="form-group">
            <label htmlFor="phone_number" className="from-control-label h4">Contact No:  </label>
            <input type="text" className="form-control form-control-lg" name="phone_number" id="phone_number" maxLength={10} placeholder="1234567890"/>
        </div>              
  </>;
};

// test : mocha \"src/*.test.js\" --require @babel/register --recursive

export default Signup;
