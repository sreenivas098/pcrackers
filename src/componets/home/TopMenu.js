import React from 'react';
import {Link} from "react-router-dom";
const TopMenu = ({setShowQuiz}) =>{
	return(
			<div className="row" >
					<Link to="#" className=" col-2  btn btn-secondary btn-lg">Preparation</Link>
				
					<Link to="#" className="col-3 ml-2 btn btn-secondary btn-lg">Previous paper</Link>
				
					<button to="quiz" className="col-2 ml-2 btn btn-secondary btn-lg" onClick={()=>setShowQuiz(1)}>Quiz</button>
			
					<Link to="" className="col-3 ml-2 btn btn-info btn-lg">Interview Experience</Link>
				
				
			</div>
		)
}
export default TopMenu;