
import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import TopMenu from "./TopMenu"
import Quiz from "./Quiz";
import ReadExperience from "./ReadExperience"
import WriteExperience from "./WriteExperience"
const Main  = () => {
	const [showQuiz,setShowQuiz]=React.useState(0);
	const [companyId, setCompanyId] = useState(0);
    return(
        <div className="container-fluid">
        	<div className="row">
        		<div className="col-4"> 
        			<Sidebar setCompanyId={setCompanyId} setShowQuiz={setShowQuiz}  />
        		</div>

        		<div className="col-8">
        			<div className="row">

        				<div className="container-fluid">
        					<TopMenu setShowQuiz={setShowQuiz}/>
        				</div>
        			</div> 
	        		<div className="row m-3">
	        			
	        				{showQuiz===1 && <Quiz />}
	        				{showQuiz === 0 && <ReadExperience  companyId={companyId} /> }
							{showQuiz === 2 && <WriteExperience /> }
	        					
	        		</div>
	        				
        		</div>
        	</div>
        </div>

    )
}
export default Main;
