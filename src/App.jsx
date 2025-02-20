import React, { useEffect } from 'react'
import Login from './Components/Auth/login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './Units/LocalStorage'

const App = () => {

  useEffect(() => {
    // setlocalStorage()
    getlocalStorage()
  },)
  
  return (
    <>
      
      <Login/>
      {/* <EmployeeDashboard/>
      <AdminDashboard/> */}
    </>
  )
}

export default App