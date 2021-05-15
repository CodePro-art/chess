import SignInForm from '../../components/Forms/SignInForm/SigninForm';
import './SigninPage.css';
import React from 'react';

export default function SigninPage() {
  return (
    <div className="sign-in-page">
      <h3 className="first-step">
        First Step
      </h3>
      <div className="sign-in-massage">
        Create your account 
      </div>
      <SignInForm/>
    </div>
  )
}