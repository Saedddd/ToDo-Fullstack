'use client'

import Modal from '@/shared/Modal'
import { Button } from '@/shared/ui/Button'
import React, { useState, FormEventHandler } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddTask = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>('')


    const handleSubmitNewToDo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();


        setNewTaskValue('');
        setIsOpen(false);
    }

  return (
    <div>
        <Button
            onClick={() => setIsOpen(true)}
            className='btn btn-primary w-full'
        >
             ADD NEW TASK
            <FaPlus size={15} />
        </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <form onSubmit={handleSubmitNewToDo}>
            <label>
                Add new task
                <div className="modal-action">

                    <input 
                      value={newTaskValue}
                      onChange={(e) => setNewTaskValue(e.target.value)}
                      type="text" 
                      placeholder="Type here" 
                      className="input input-bordered input-primary w-full" 
                    />

                    <button type='submit' className='btn'>Submit</button>


                </div>
            </label>
          </form>
      </Modal>


    </div>
  )
}

export default AddTask