import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import apiEmployee from './ApiEmployee'
import AddEmployee from './AddEmployee'
import DetailsEmployee from './DetailsEmployee'
import {TrashIcon, FolderOpenIcon} from '@heroicons/react/outline'

export default function Employees() {
    const [datas, setDatas] = useState([]);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState(false);
    const [detailsEmployee, setDetailsEmployee] = useState(false);
    const [employee, setEmployee] = useState({
        employeeId: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phoneNumber: undefined,
        hireDate: undefined,
        jobId: undefined,
        salary: undefined,
        managerId: undefined,
        departmentId: undefined
    })

    useEffect(() => {
        // calling api
        apiEmployee.getAll().then(data => {
            // fill data from apiRegion to regions with setRegions
            setDatas(data)
        }). catch(err => {
            console.log(err)
        });
    }, []); //useEffect with empty array as param for rendering only once

      useEffect(() => {
        apiEmployee.getAll().then(data => {
            setDatas(data);
            setStatus(false);
        }).catch(err => {
            console.log(err)
        });
    }, [status]); //re render on status change  

    const onDestroy = (id) => {
        apiEmployee.destroy(id).then((result) => {
            console.log(result)
            setStatus(true)
        })
    }

    const onDetails = (id, firstName, lastName, email, phoneNumber, hireDate, jobId, salary, managerId, departmentId) => {
        setDetailsEmployee(true)
        setEmployee({
            employeeId: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            hireDate: hireDate,
            jobId: jobId,
            salary: salary,
            managerId: managerId,
            departmentId: departmentId
        })
    }

    return (
        <>
            <h1><Header title={'Employees'} setModal={() => setModal(true)}/></h1>
            <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Employee ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Employee First Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Employee Last Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Details
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {datas.map((employee) => (
                                            <tr key={employee.employee_id}>

                                                <td className="whitespace-nowrap">
                                                    <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">{employee.employee_id}</div>
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    <div className="px-6 py-4whitespace-nowrap text-sm text-gray-500 text-left">{employee.first_name}</div>
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    <div className="px-6 py-4whitespace-nowrap text-sm text-gray-500 text-left">{employee.last_name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap content-left text-sm font-medium">
                                                    <a>
                                                        <button  onClick={ () => onDetails(employee.employee_id, employee.first_name, employee.last_name, employee.email, 
                                                            employee.phone_number, employee.hire_date, employee.job_id, employee.salary, 
                                                            employee.manager_id, employee.department_id) }>
                                                            <FolderOpenIcon className="h-5 w-5 text-blue-500"/></button>
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap content-left text-sm font-medium">
                                                    <a>
                                                        <button  onClick={ () => {
                                                                if (
                                                                    window.confirm(
                                                                        "Are you sure you wish to delete this item?"
                                                                    )
                                                                )
                                                                    onDestroy(employee.employee_id)
                                                            } } ><TrashIcon className="h-5 w-5 text-red-500"/></button>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {  modal ? <AddEmployee
                    title={'Add Employee'} 
                    setModal={() => setModal(false)} 
                    setStatus={() => setStatus(true)} 
                    /> : null }
                    { detailsEmployee ? <DetailsEmployee
                    title= {'Employee Details'}
                    setDetailsEmployee= {() => setDetailsEmployee(false)}
                    setStatus={() => setStatus(true)}
                    employee={employee}
                    /> : null }
        
                </div>
        </>
    );
}
