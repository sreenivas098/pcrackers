const loginBackground = {
    background:'#beabff', 
    position:'fixed',
     height:'100vh', 
     width:'100%'  ,
};
const Login  = () => {
    return(
        <div className="container-fluid"  style={loginBackground}>
            <div className="row ml-4">
                <h1 className="offset-1">PCrackers</h1>
            </div>
            <div className="row m-1">
                
                <div className="offset-1 col-5 col-md-5  ">
                <img src="assets/pc2.png" class="img-fluid bg-light col-12 col-md-12" alt="Placement" />
                </div>
                <div className="ml-1 col-6 col-md-5  border border-dark rounded-3" style={{background:'#440582'}}>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;