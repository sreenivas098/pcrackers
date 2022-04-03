import React, {  } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Experience = ({data}) => {
    const {id} = useParams();
    const item = data.filter(val=> val.id === id)[0];
  return (<div className='container'>
    {item && <div className='card mb-3' key={item.id}>
        <div className='card-header'>
            <div className='row'>
                <div className='col-6'><b>Company Name: </b><span className='text-danger'>{item.company}</span></div>
                <div className='col-6'><span className=' float-right'>{item.createTime}</span></div>
            </div>
        </div>
        <div className='card-body'>
            {item.description}
        </div>
        <div className='card-footer'>
        <div className='row'>
                <div className='col-6'>
                    <span><b>Name: </b><span className='text-primary'>{item.fullName}</span></span><br />
                    <span><b>Gmail: </b><span className='text-primary'>{item.gmail}</span></span>
                </div>
                <div className='col-6'></div>
            </div>
        </div>
    </div>}</div>
  )
}

const mapstateToProps = state => ({
    data: state.Experience.experience,
})

export default  connect(mapstateToProps, null)(Experience);