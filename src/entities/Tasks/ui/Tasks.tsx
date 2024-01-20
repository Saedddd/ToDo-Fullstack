import React from 'react'

import { ITodoList } from '../types'

const Tasks = ({tasks} : ITodoList) => {
  return (
    <>
    <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
              
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Tasks