import React from "react";
import Login from "./Login";
import Signup from "./Signup";


const loginBackground = {
    background:'#beabff', 
    position:'fixed',
     height:'100vh', 
     width:'100%'  ,
};
const Home  = () => {
    const [loginType, setLoginType] = React.useState(false);
    return(
        <div className="container-fluid"  style={loginBackground}>
            <div className="row ml-4">
                <h1 className="offset-1">PCrackers</h1>
            </div>
            <div className="row m-1">
                <div className="offset-1 col-5 col-md-5   ">
                <img src="assets/pc2.png" className="img-fluid bg-light col-12 col-md-12" alt="Placement" />
                </div>
                <div className="ml-1 col-6 col-md-5  border border-dark rounded-3" style={{background:'#903dcc'}}>
                   <div className="container" style={{width:'30rem',marginTop:'100px'}}>
                        {loginType ? <Signup /> : <Login />}
                        <div className="form-group" style={{marginTop:'24px'}}>
                            <button className="btn btn-success d-inline btn-lg  col-md-6" type="button" onClick={()=>setLoginType(false)}>Login</button>   
                            <button className="btn btn-secondary d-inline btn-lg col-md-6" type="button" onClick={()=>setLoginType(true)}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;