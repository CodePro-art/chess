import LogInForm from '../../components/Forms/LogInForm/LogInForm';
import React, { Component } from 'react';
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-massage">
        My account 
      </div>
      <LogInForm/>
    </div>
  )
}
