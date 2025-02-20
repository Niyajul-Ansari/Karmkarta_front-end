import React from 'react'
import Header from '../../others/Header'
import TaskListNum from '../../others/TaskListNum'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
      <div className='p-5 bg-[#3b3b3b] h-screen  text-white'>
        <Header/>
        <TaskListNum/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard