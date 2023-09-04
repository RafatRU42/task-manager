import { useForm } from "react-hook-form";

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'


interface MyComponentProps{
  isOpen:boolean;
  setIsOpen:boolean
}



const AddTaskModal: React.FC <MyComponentProps> = ({ isOpen, setIsOpen }) => {

  function closeModal() {
    setIsOpen(false)
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    closeModal()
  };



  return (
    <div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex justify-between">
              <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Let's Build a new Task
                  </Dialog.Title>
                  <div>
                    <button onClick={()=> closeModal()} className="text-bold text-xl btn ">X</button>
                  </div>
              </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="my-2">
                      <label className="block mb-2" htmlFor="name">Task Title</label>
                      <input  type="text" placeholder="Workspace Name" className="input input-bordered input-success w-full "  {...register("name",{required:true})} />
                    </div>

                    <div className="my-2">
                      <label className="block mb-2" htmlFor="name">Date</label>
                      <input  type="date" placeholder="Date" className="input input-bordered input-success w-full "  {...register("date",{required:true})} />
                    </div>


                  <div>
                  <label className="block mb-2" htmlFor="type"> Task Type</label>
                    <select className="input input-bordered input-success w-full " {...register("type",{required:true})}>
                      <option value="Human Resourses">Human Resourses</option>
                      <option value="Education">Education</option>
                      <option value="Sales CRM">Sales CRM</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Engineering IT">Engineering IT</option>
                      <option value="Small Business">Small Business</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  
                  <div className="my-2">
                      <label className="block mb-2" htmlFor="name">Description</label>
                      <textarea  placeholder="Description" className="textarea textarea-bordered textarea-success textarea-sm w-full"  {...register("description",{required:true})} />
                    </div>

                    <input className="btn btn-success text-white " type="submit" value='Submit' />
                  </form>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default AddTaskModal




