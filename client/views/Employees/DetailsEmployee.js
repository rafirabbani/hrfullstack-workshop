import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PencilAltIcon } from '@heroicons/react/outline'
import apiEmployee from './ApiEmployee'

export default function DetailsEmployee(props) {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef()
  const [edit, setEdit] = useState(false)
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

  const onEdit = () => {
      setEdit(!edit)
  } 

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  }

  const onSubmit = (id) => {
    for (const value in values){
      if (values[value] === '') {
        values[value] = undefined;
      }
    }
    const req = {
        employee_id: id,
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
    apiEmployee.edit(req).then(result => {
        console.log(result)
    }); 
    modalClose()
}

  const modalClose = () => {
    for (const key in props.employee){
        props.employee[key] = undefined;
    }
    setEdit(false)
    setOpen();
    props.setStatus()
    props.setDetailsEmployee();
}

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
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
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        <div className="text-left"><button className='float-right mt-3 w-full inline-flex justify-center rounded-md border 
                        border-blue-300 shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' onClick={onEdit} ><PencilAltIcon className="-ml-1 mr-2 h-5 w-5 text-white"/>Edit</button>{props.title} </div>
                    </Dialog.Title>
                    <div className=" mt-2 sm:flex sm:items-start">
                    <form method='POST' action='#' className={edit ? 'pointer-events-auto' : "pointer-events-none"} >
                        <div className='block mt-5'><label>Employee ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='employee_id' name='employee_id' 
                            type='text' 
                            placeholder={props.employee.employeeId} readOnly/>
                        </div>
                        <div className='block mt-5'><label>First Name</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='first_name' name='first_name' 
                            type='text' 
                            onChange={handleChange('first_name')} 
                            placeholder={props.employee.firstName}
                          />
                        </div>
                        <div className='block mt-5'><label>Last Name</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='last_name' name='last_name' 
                            type='text' 
                            onChange={handleChange('last_name')} 
                            placeholder={props.employee.lastName}
                          />
                        </div>
                        <div className='block mt-5'><label>Email</label></div>
                        <div className='block mt-1'><input className='rounded-lg w-72'id='email' name='email' 
                            type='text'
                            placeholder={props.employee.email}
                            onChange={handleChange('email')} 
                            
                          />
                        </div>
                        <div className='block mt-5'><label>Phone Number</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='phone_number' name='phone_number' 
                            type='text' 
                            onChange={handleChange('phone_number')} 
                            placeholder={props.employee.phoneNumber}
                          />
                        </div>
                        <div className='block mt-5'><label>Hire Date</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='hire_date' name='hire_date' 
                            type='text' 
                            onChange={handleChange('hire_date')} 
                            placeholder={props.employee.hireDate}
                          />
                        </div>
                        <div className='block mt-5'><label>Job ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='job_id' name='job_id' 
                            type='text' 
                            onChange={handleChange('job_id')} 
                            placeholder={props.employee.jobId}
                          />
                        </div>
                        <div className='block mt-5'><label>Salary</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='salary' name='salary' 
                            type='text' 
                            onChange={handleChange('salary')} 
                            placeholder={props.employee.salary}
                          />
                        </div>
                        <div className='block mt-5'><label>Manager ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='manager_id' name='manager_id' 
                            type='text' 
                            onChange={handleChange('manager_id')} 
                            placeholder={props.employee.managerId}
                          />
                        </div>
                        <div className='block mt-5'><label>Department ID</label></div>
                        <div className='block mt-1'><input className='rounded-lg'id='department_id' name='department_id' 
                            type='text' 
                            onChange={handleChange('department_id')} 
                            placeholder={props.employee.departmentId}
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
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => onSubmit(props.employee.employeeId)}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => modalClose()}
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