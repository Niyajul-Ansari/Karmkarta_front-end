import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
  return (
      <div className='p-5 bg-[#3b3b3b] h-screen  text-white'>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard