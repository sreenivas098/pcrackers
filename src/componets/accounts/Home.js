import Login from "./Login";


const loginBackground = {
    background:'#beabff', 
    position:'fixed',
     height:'100vh', 
     width:'100%'  ,
};
const Home  = () => {
    return(
        <div className="container-fluid"  style={loginBackground}>
            <div className="row ml-4">
                <h1 className="offset-1">PCrackers</h1>
            </div>
            <div className="row m-1">
                <div className="offset-1 col-5 col-md-5   ">
                <img src="assets/pc2.png" class="img-fluid bg-light col-12 col-md-12" alt="Placement Image" />
                </div>
                <div className="ml-1 col-6 col-md-5  border border-dark rounded-3" style={{background:'#903dcc'}}>
                   <div className="container" style={{width:'24rem',marginTop:'100px'}}>
                    <Login/>
                <div className="form-group" style={{marginTop:'24px'}}>
                <button class="btn btn-success d-inline  col-md-6" type="button">Login</button>
                    
                    
                    <button class="btn btn-secondary d-inline col-md-6" type="button">SignUp</button>
                </div>
                         
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;