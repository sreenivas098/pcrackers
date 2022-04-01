import React from 'react';
import { useForm } from 'react-hook-form';
const Signup = () => {
    const { register,handleSubmit,  watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)
  return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-groups mb-3">
                <label htmlFor="full_name" className="from-control-label h4">Full Name:  </label>
                <input type="text" className="form-control form-control-lg" id="full_name" {...register('full_name', {required:true})} placeholder="Full Name" /> 
                {errors.full_name && <p className='alert alert-danger' role='alert'>Enter Full Name</p>}
            </div>
            <div className="form-groups mb-3">
                <label htmlFor="id_no" className="from-control-label h4">College Id:  </label>
                <input type="text" className="form-control form-control-lg" id="id_no" {...register('id_no', { pattern:/^[Rr][0-9]{6}/g, required:true } )} placeholder="R160000" /> 
                {errors.id_no && <p className='alert alert-danger' role='alert'>Enter Id No</p>}
            </div>
            <div className="form-groups mb-3">
                <label htmlFor="gamil" className="from-control-label h4">gmail:  </label>
                <input type="text" className="form-control form-control-lg" id="gamil"
                {...register("gmail",  {pattern:/^[Rr][0-9]{6}@rguktrkv.ac.in/g, required: true }) }
                placeholder="r161000@rguktrkv.ac.in" /> 
                {errors.gmail && <p className='alert alert-danger' role="alert">Enter correct Mail Id</p>}

            </div>
            <div className="form-group">
                <label htmlFor="password" className="from-control-label h4">Password:  </label>
                <input type="password" className="form-control form-control-lg"
                {...register("password",  {required: true }) }
                 id="password" placeholder="Password"/>
                 {errors.password && <p className='alert alert-danger' role="alert">Enter Password</p>}
            </div> 
            <div className="form-group">
                <label htmlFor="phone_number" className="from-control-label h4">Contact No:  </label>
                <input type="text" className="form-control form-control-lg"  id="phone_number"
                {...register("phone_number",  {maxLength:10, required: true }) }
                 placeholder="1234567890"/>
                 {errors.phone_number && <p className='alert alert-danger' role="alert">Enter Contact number</p>}
            </div>  
            <div className='form-group'>
                <input type="submit" className='btn btn-lg col-12 mt-3 mb-3 py-3 h4' value="Submit"/>
          </div>  
        </form>
                  
  </>;
};

// test : mocha \"src/*.test.js\" --require @babel/register --recursive

export default Signup;
