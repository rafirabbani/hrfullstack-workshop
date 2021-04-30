import React, { useState, useEffect } from 'react'
import apiRegion from './ApiRegion'
import Header from '../../components/Header'
import AddEditRegion from './AddEditRegion'


export default function Regions() {
    const [datas, setDatas] = useState([]);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        // calling api
        apiRegion.getAll().then(data => {
            // fill data from apiRegion to regions with setRegions
            setDatas(data)
        }). catch(err => {
            console.log(err)
        });
    }, []); //useEffect with empty array as param for rendering only once

    useEffect(() => {
        apiRegion.getAll().then(data => {
            setDatas(data);
            setStatus(false);
        }).catch(err => {
            console.log(err)
        });
    }, [status]); //re render on status change
    
    return (
        <>
            <h1><Header title={'Regions'} setModal={() => setModal(true)}/></h1>
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
                                                Region ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Region Name
                                            </th>

                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {datas.map((region) => (
                                            <tr key={region.region_id}>

                                                <td className="whitespace-nowrap">
                                                    <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">{region.region_id}</div>
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    <div className="px-6 py-4whitespace-nowrap text-sm text-gray-500 text-left">{region.region_name}</div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    { modal ? <AddEditRegion
                    title={'Add Region'} 
                    setModal={() => setModal(false)} 
                    setStatus={() => setStatus(true)} /> : null}
                </div>
        </>
    );
}

