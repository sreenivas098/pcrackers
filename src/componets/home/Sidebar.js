import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetCompanies } from "./../../redux_store/reducers/Action Creators/CompaniesActions"
const H4 = {
	borderBottom: '3px solid black',
	padding: '10px',
	cursor:'pointer'
};
const Sidebar = ({CompanyNames, getCompanyNames, setCompanyId, setShowQuiz }) =>{
	useEffect(()=>getCompanyNames(), []);
	return(
		<div style={{backgroundColor: "gray",position: "fixed",width: "25%",
		height: "100vh",overflow: "scroll",textAlign: "left"}}>
		<div style={{padding:'70px 70px 0px 70px'}}> 
			{CompanyNames.names && CompanyNames.names.map(company => <h4 style={H4} key={company.id}   onClick={()=>{setCompanyId(company.id);setShowQuiz(0);}}>{company.name}</h4>)}

		</div>	
	</div>

		)
}
const mapStateToProps = state => ({
	CompanyNames: state.CompanyNames
});
const mapDispatchToProps = dispatch => ({
	getCompanyNames: () => dispatch(GetCompanies())

})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);