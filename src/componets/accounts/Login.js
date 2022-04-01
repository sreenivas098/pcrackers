import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountLogin } from "../../redux_store/reducers/Action Creators/AccountFunctions"

const Login = ({UserLogin, userData}) => {
  
  const history =  useNavigate();
  const { register,handleSubmit, formState: { errors } } = useForm();

  useEffect(()=>{
    console.log(userData);
  },[userData])

  const onSubmit = data =>{ 
    
    data.history = history;
    UserLogin(data);
  }

  return <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-groups mb-3">
              <label htmlFor="login_id" className="from-control-label h4">LoginId  </label>
              <input type="text" className="form-control form-control-lg" id="login_id" {...register("gmail",  {pattern:/^[Rr][0-9]{6}@rguktrkv.ac.in/g, required: true }) } placeholder="r16@rguktrkv.ac.in" /> 
              {errors.gmail && <p className='alert alert-danger' role="alert">Enter correct Mail Id</p>}
          </div>
          <div className="form-group mb-3">
              <label htmlFor="password" className="from-control-label h4">Password:  </label>
              <input type="password" className="form-control form-control-lg" {...register("password", { required: true })} id="password" placeholder="Password"/>
          </div>  
          <div className='form-group'>
            <input type="submit" className='btn btn-lg col-12 mt-3 mb-3 py-3 h4' disabled={userData.initiated} value="Submit"/>
          </div>
        </form>        
                      
  </>;
};

const mapStateToProps = state =>({
  userData: state.AccountData,
});

const mapDispatchToProps = dispatch =>({
  
  UserLogin: ({gmail, password, history}) => {dispatch(AccountLogin(gmail, password, history))},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login); 
