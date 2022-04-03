import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProfile } from '../../redux_store/reducers/Action Creators/ProfileAction';

const Profile = ({profileData, getProfile}) => {

    const {id, branch } = useParams();
    useEffect(()=>console.log(profileData),[profileData])
    useEffect(()=>{
        getProfile(id, branch)
    },[id, branch])
    const profile = profileData.profile
  return (
      <div className='container'>
        {profile && 
            <div className='card p-4'>
                <div className='card-header h4'>{profile.name}</div>
                <div className='row card-body'>
                    <div className='col-md-2'>
                        <img src={profile.profilePic} width={150} className='float-start' style={{borderRadius:'50%'}} height={150}/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <table className='table table-borderless table-sm'>
                            <tbody>
                                <tr>
                                    <th className='float-left'>Name</th>
                                    <td>{profile.name}</td>
                                </tr>
                                <tr>
                                    <th className='float-left'>Gmail</th>
                                    <td>{profile.gmail}</td>
                                </tr>
                                <tr>
                                    <th className='float-left'>Working Company</th>
                                    <td>{profile.company}</td>
                                </tr>
                                    
                                    {profile.crackedPlacements.map((company, index) => {
                                        if(index === 0) {
                                            return <tr key={index}>
                                                        <th rowSpan={profile.crackedPlacements.length} className='float-left'>Cracked Placements</th> 
                                                        <td>{company}</td> 
                                                    </tr>
                                        }
                                        else return <tr key={index}><th></th><td>{company}</td></tr>
                                    })}
                                <tr>
                                    <th>Interviews Attended</th>
                                    <td>{profile.interviewsAtttended}</td>
                                </tr>
                                    
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        }
      </div>
  )
}
const mapStateToProps = () => state =>({
    profileData: state.ProfileData
})

const mapDispathToProps = ()=> dispatch => ({
    getProfile: (id, branch) => dispatch(getProfile(id, branch)),
})
export default connect(mapStateToProps, mapDispathToProps)(Profile);