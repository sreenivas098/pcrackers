import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { ExperienceFunctions }from "./../../redux_store/reducers/Action Creators/ExperienceFunctions"
const ReadExperience = ({ReadExperienceData, companyId, getExperience}) => {
    useEffect(()=>{
        if(companyId ===0 )
            getExperience(companyId)
        else getExperience(companyId)
    }, [companyId])
  return (
    <div className='container'>
       {ReadExperienceData && ReadExperienceData.map((item, index)=>
            <div className='container mb-3' key={index}>
                <div className='row'>
                    <div className='col-6'>
                        <b>Company: </b>{item.company}
                    </div>
                    <div><b>Name: </b>{item.fullName}</div>
                </div>
                <div>
                    {item.description.substring(0, 40)} <br/>
                    <Link to={`interview/read/experience/${item.id}`}>Click here..</Link>
                </div>
            </div>
       )}
        
    </div>
  
  )
}

const mapstateToProps = state => ({
    ReadExperienceData: state.Experience.experience,
})
const mapDispatchTopros = dispatch => ({
    getExperience: (id) => dispatch(ExperienceFunctions(id))
})

export default connect(mapstateToProps, mapDispatchTopros)(ReadExperience)