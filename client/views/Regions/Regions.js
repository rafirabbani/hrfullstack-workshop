import React, { useState, useEffect } from 'react'
import apiRegion from './ApiRegion'
import Header from '../../components/Header'
import AddEditRegion from './AddEditRegion'
import { PencilAltIcon, TrashIcon} from '@heroicons/react/outline'


export default function Regions() {
    const [datas, setDatas] = useState([]);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState(false);
    const [region, setRegion] = useState({
        regionId: undefined,
        regionName: ''
    })

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

    const onEdit = (id, name) => {
        setModal(true)
        setRegion({
            regionId: id,
            regionName: name
        })
    }

    const onDestroy = (id) => {
        apiRegion.destroy(id).then(() => {
            setStatus(true)
        })
    }
    
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

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Edit
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Delete
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

                                                <td className="px-6 py-4 whitespace-nowrap content-left text-sm font-medium">
                                                    <a>
                                                        <button onClick={() => onEdit(region.region_id, region.region_name)}><PencilAltIcon className="h-5 w-5 text-blue-500"/></button>
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap content-left text-sm font-medium">
                                                    <a>
                                                        <button onClick={() => {
                                                                if (
                                                                    window.confirm(
                                                                        "Are you sure you wish to delete this item?"
                                                                    )
                                                                )
                                                                    onDestroy(region.region_id)
                                                            }}><TrashIcon className="h-5 w-5 text-red-500"/></button>
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
                    title={'Add or Edit Region'} 
                    setModal={() => setModal(false)} 
                    setStatus={() => setStatus(true)} 
                    region={region}
                    /> : null}
                </div>
        </>
    );
}