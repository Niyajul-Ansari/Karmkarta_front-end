import React from 'react'

const CreateTask = () => {
  return (
    <div className="mt-4 rounded p-5 bg-[#343131]">
        
        <form className='flex flex-wrap w-full items-start justify-between'>      
            <div className="w-1/2">
                <div>
                    <label className="block text-gray-300 mb-1">Task Title:-</label>
                    <input type="text" placeholder="Make a UI design" className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1">Assign Date:-</label>
                    <input type="date" className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1">Due Date:-</label>
                    <input type="date" className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" />
                </div>
                <div >
                    <label className="block text-gray-300 mb-1">Assign to:-</label>
                    <input type="text" placeholder="employee name" className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" />
                </div>
                <div >
                    <label className="block text-gray-300 mb-1">Category:-</label>
                    <input type="text" placeholder="design, dev, etc" className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" />
                </div>
            </div>
            <div className="w-2/5 gap-5 flex flex-col items-start">
                <label className="flex text-gray-300 mb-1">Description:-</label>
                <textarea className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none" rows="9"></textarea>
                <button className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Create Task</button>
            </div>        
        </form>
    </div>
    
  )
}

export default CreateTask