import React from 'react';
const H4 = {
	borderBottom: '3px solid black',
	padding: '10px'
};
const Sidebar = () =>{
	return(
		<div style={{backgroundColor: "gray",position: "fixed",width: "25%",
		height: "100vh",overflow: "scroll",textAlign: "left"}}>
		<div style={{padding:'70px 70px 0px 70px'}}> 
			<h4 style={H4}>Amazon</h4>
			<h4 style={H4}>TCS</h4>
			<h4 style={H4}>INFOSYS</h4> 
			<h4 style={H4}>WIPRO</h4>
			<h4 style={H4}>REDHAT</h4>
			<h4 style={H4}>INNOMINDS</h4>
		</div>	
	</div>

		)
}
export default Sidebar;