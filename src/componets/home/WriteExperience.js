import React from "react";
import { useForm } from "react-hook-form";
const WriteExperience = () => {
  const {register, handleSubmit , formState: {erors}} = useForm();
  const onSubmit =(e) =>console.log(e);
  return(
    <div className="container">
      <h1>Post Intervie Exprience</h1>
      <form style={{width:'50rem'}} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text" className="form-control" {...register("company", {required:true})} placeholder="Enter company Name"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" cols="50"  {...register("description", {required:true})} rows="15" placeholder="Your experience "></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">POST</button>
        <button type="reset" className="btn btn-secondary ml-3 btn-lg">CLEAR</button>
      </form>
    </div>
  )
}

export default WriteExperience;
