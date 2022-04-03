import React from 'react';
const Sidebar = () =>{
	return(
		<div style={{backgroundColor: "gray",position: "fixed",width: "30%",
		height: "100vh",overflow: "scroll",textAlign: "center"}}>
		<div style={{paddingTop: "70px"}}> 
		<h4>Amazon</h4>
		<h4>TCS</h4>
		<h4>INFOSYS</h4> 
		<h4>WIPRO</h4>
		<h4>REDHAT</h4>
		<h4>INNOMINDS</h4>
		</div>	
	</div>

		)
}
export default Sidebar;