import React from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
  const { register,handleSubmit,  watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-groups mb-3">
              <label htmlFor="login_id" className="from-control-label h4">LoginId  </label>
              <input type="text" className="form-control form-control-lg" id="login_id" {...register("login_id",  {pattern:/^[Rr][0-9]{6}@rguktrkv.ac.in/g, required: true }) } placeholder="r16@rguktrkv.ac.in" /> 
              {errors.login_id && <p className='alert alert-danger' role="alert">Enter correct Mail Id</p>}
          </div>
          <div className="form-group mb-3">
              <label htmlFor="password" className="from-control-label h4">Password:  </label>
              <input type="password" className="form-control form-control-lg" {...register("password", { required: true })} id="password" placeholder="Password"/>
          </div>  
          <div className='form-group'>
            <input type="submit" className='btn btn-lg col-12 mt-3 mb-3 py-3 h4' value="Submit"/>
          </div>
        </form>        
                      
  </>;
};

// test : mocha \"src/*.test.js\" --require @babel/register --recursive

export default Login;
