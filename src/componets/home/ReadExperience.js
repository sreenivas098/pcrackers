import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const ReadExperience = ({ReadExperienceData}) => {
    useEffect(()=>{
        console.log(ReadExperienceData);
    }, [ReadExperienceData])
  return (
    <div className='container'>
       {ReadExperienceData && ReadExperienceData.map((item, index)=>
            <div className='container mb-3'>
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

export default connect(mapstateToProps, null)(ReadExperience)