import React from 'react'

const Profile = () => {
  return (
    <div className='profile jouralLayout'>
      <h1>프로필</h1>
      <div className="profileCard">
        <div className="profileHeader">
          <div className='profilePic'>
            <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="" />
          </div>
          <div className='profileInfo'>
            <h2>홍길동</h2>
            <h2>@abc</h2>
            <h2>hong@example..com</h2>
          </div>
        </div>
        <div className="profileSettings"></div>
      </div>
    </div>
  )
}

export default Profile