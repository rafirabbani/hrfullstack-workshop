import React,{ Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/outline'
import apiEmployee from './ApiEmployee'

export default function AddEditRegion(props) {
    const [open, setOpen] = useState(true);
    const cancelButtonRef = useRef()
    const [values, setValues] = useState({
      employee_id: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      hire_date: '',
      job_id: '',
      salary: '',
      manager_id: '',
      department_id: '',
    });

    const handleChange = name => event => {
      setValues({...values, [name]: event.target.value});
    }

    const onSubmit = () => {
        const req = {
            employee_id: undefined,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            hire_date: values.hire_date,
            job_id: values.job_id,
            salary: values.salary,
            manager_id: values.manager_id,
            department_id: values.department_id,
        }
        apiEmployee.create(req).then(result => {
            console.log(result)
        });
        modalClose()
    }
    
    const modalClose = () => {
        setOpen();
        props.setStatus()
        props.setModal();
    }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto bg-blue-100 bg-opacity-10 bg-modal"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={modalClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <DocumentAddIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {props.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <form method='POST' action='#'>
                        <div className='block mt-5'><label>Employee ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='employee_id' name='employee_id' 
                            type='text' 
                            placeholder={'employee_id'} readOnly/>
                        </div>
                        <div className='block mt-5'><label>First Name</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='first_name' name='first_name' 
                            type='text' 
                            onChange={handleChange('first_name')} 
                            placeholder={'e.g. John'}
                          />
                        </div>
                        <div className='block mt-5'><label>Last Name</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='last_name' name='last_name' 
                            type='text' 
                            onChange={handleChange('last_name')} 
                            placeholder={'e.g. Doe'}
                          />
                        </div>
                        <div className='block mt-5'><label>Email</label></div>
                        <div className='block mt-1'><input className='rounded-lg w-72'id='email' name='email' 
                            type='text' 
                            onChange={handleChange('email')} 
                            placeholder={'e.g. john@mymail.com'}
                          />
                        </div>
                        <div className='block mt-5'><label>Phone Number</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='phone_number' name='phone_number' 
                            type='text' 
                            onChange={handleChange('phone_number')} 
                            placeholder={'e.g. 123.456.789'}
                          />
                        </div>
                        <div className='block mt-5'><label>Hire Date</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='hire_date' name='hire_date' 
                            type='text' 
                            onChange={handleChange('hire_date')} 
                            placeholder={'e.g. 1996-01-01'}
                          />
                        </div>
                        <div className='block mt-5'><label>Job ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='job_id' name='job_id' 
                            type='text' 
                            onChange={handleChange('job_id')} 
                            placeholder={'e.g. 1'}
                          />
                        </div>
                        <div className='block mt-5'><label>Salary</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='salary' name='salary' 
                            type='text' 
                            onChange={handleChange('salary')} 
                            placeholder={'e.g. 1000'}
                          />
                        </div>
                        <div className='block mt-5'><label>Manager ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='manager_id' name='manager_id' 
                            type='text' 
                            onChange={handleChange('manager_id')} 
                            placeholder={'e.g. 1'}
                          />
                        </div>
                        <div className='block mt-5'><label>Department ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='department_id' name='department_id' 
                            type='text' 
                            onChange={handleChange('department_id')} 
                            placeholder={'e.g. 1'}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => onSubmit()}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={modalClose}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}