import React from 'react'
import Button from 'react-bootstrap/Button';
import propTypes from 'prop-types'

const Profile = (props) => {
  
 
  return (
    <div>
<h3 style={{
    marginTop: '20px',
    fontSize: '50px',
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    lineHeight: '1.5',
    background: 'linear-gradient(to right, rgba(255,0,0,1) 0%,rgba(255,0,0,0.5) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    borderRadius: '50%',
    padding: '20px',
    display: 'inline-block',}}>{props.profile}</h3>


        <div>{props.children}</div>

        <h1 style={{marginTop:"30px",
  color: "black",
  padding: "10px 20px",
  textAlign: "center",
  fontSize: "2.5em",
  boxShadow: "0 0 10px black",
  display: 'inline-block',
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)"
}}>{props.fullName}</h1>




<p style={{marginTop:"20px",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "18px",
  lineHeight: "1.5",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#F5F5F5",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
}}>Bio "{props.bio}"</p>


        <h3 style={{marginTop:"20px",
  color: "black",
  padding: "10px 20px",
  textAlign: "center",
  fontSize: "2.5em",
  boxShadow: "0 0 10px black",
  display: 'inline-block',
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)"
}} 
        > Profession : {props.profession}</h3>
        <br />
        <>
      <Button  variant="danger" size="lg"
      style={{  display: 'inline-block',position: "relative",left: "50%",
      transform: "translateX(-50%)", borderRadius: '25px', padding: '15px 30px',marginTop:"20px"}}>The name of the profile user is :</Button>{' '}
    </>
    </div>
  )
}

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string.isRequired,
  profession: propTypes.string
  }

Profile.defaultProps = {
  profile:'Mon Profil de Jihed clic ici  :',
}

export default Profile;
