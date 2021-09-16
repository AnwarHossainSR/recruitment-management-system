import React from 'react'
import Footer from '../../footer/Footer'
import NavBar from '../Navigation/NavBar'
import './Auth.scss'
import LoginItem from './LoginItem'

const Login = (props) => {
     return (
          <>
               <NavBar hero={ props.hero } />
               <LoginItem />
               <Footer />
          </>
     )
}

export default Login
