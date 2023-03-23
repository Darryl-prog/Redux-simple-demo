import React from 'react';
import { useSelector } from 'react-redux';
import { InputState } from '../store/input';

const Profile = () => {
  const email = localStorage.getItem('email')
    ? JSON.parse(localStorage.getItem('email')!)
    : 'Guest';

  console.log(email);

  return (
    <main className="profile">
      <h2>User Profile</h2>
      <p>{email === '' ? 'Guest Account' : email}</p>
    </main>
  );
};

export default Profile;
