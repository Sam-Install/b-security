import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { apiUrl, token } from '../../http';
import { toast } from 'react-toastify';

const Show = () => {  
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const res = await fetch(apiUrl + 'services', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });

            const result = await res.json();
            if (result.status) {
                setServices(result.data);
            } else {
                toast.error(result.message || "Failed to fetch services");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error fetching services");
        }
    }

    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this service?")) return;

        try {
            const res = await fetch(apiUrl + `services/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });

            const result = await res.json();
            if (result.status) {
                toast.success(result.message || "Deleted successfully");
                setServices(prev => prev.filter(service => service.id !== id));
            } else {
                toast.error(result.message || "Failed to delete service");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while deleting");
        }
    }

    return (
        <div className='mt-5'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className="w-full sm:w-1/3 bg-gray-500 shadow-md rounded-lg p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>
                    <ul className="space-y-3">
                        <li><NavLink to="/admin/services" className="block px-3 py-2 rounded hover:bg-orange-100">Services</NavLink></li>
                
                    </ul>
                </div>

                <div className='w-full sm-w-2/3'>
                    <div className='flex justify-between items-center p-2 bg-orange-400'>
                        <h1 className='text-black text-sm ml-5'>Services</h1>
                        <Link to='/admin/services/create/'>
                            <button className='bg-red-700 text-white px-8 py-4 text-sm rounded'>Create</button>
                        </Link>     
                    </div>

                    <div className='overflow-x-hidden'>
                        <table className='min-w-full border border-gray-200'>
                            <thead className='bg-gray-100 text-left text-sm font-semibold text-gray-700'>
                                <tr>
                                    <th className='px-4 py-3 border-b'>ID</th>
                                    <th className='px-4 py-3 border-b'>Title</th>
                                    <th className='px-4 py-3 border-b'>Description</th>
                                    <th className='px-4 py-3 border-b'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='text-sm text-gray-600'>
                                {services && services.map(service => (
                                    <tr key={service.id} className='hover:bg-gray-50'>
                                        <td className='px-4 py-3 border-b'>{service.id}</td>
                                        <td className='px-4 py-3 border-b'>{service.title}</td>
                                        <td className='px-4 py-3 border-b'>{service.description}</td>
                                        <td className='flex gap-1 flex-col sm:flex-row'>
                                            <Link to={`/admin/services/edit/${service.id}`}>
                                                <span className='bg-yellow-500 px-6 py-2 text-sm cursor-pointer'>Edit</span>
                                            </Link>      
                                            <span
                                                className='bg-red-600 px-6 py-2 text-sm cursor-pointer'
                                                onClick={() => handleDelete(service.id)}
                                            >
                                                Delete
                                            </span> 
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show
