import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import CompoBanner from "../../Shared/CompoBanner";
import { FaTrash } from "react-icons/fa";
import { Circles } from 'react-loader-spinner'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const MyOrder = () => {
    const [order, setOrder] = useState([])
    const { user } = useContext(authContext)
    const [loading, setLoading]  = useState(true)


    useEffect(() => {
        fetch(`http://localhost:8000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                setLoading(false)
            })
    }, [user?.email])


    // order remove function
    const handleRemoveOrderFunc = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/booking/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const restOrder = order.filter(ord => ord._id != id)
                            setOrder(restOrder)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(e => console.log(e.message))
            }
        })

    }

    // confirm func
    const confirmFunc = (id)=>{
        fetch(`http://localhost:8000/booking/${id}`, {
            method: 'PATCH', 
            headers:{
                'content-type' : 'application/json',
                'Access-Control-Allow-Methods' : true

            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(e=> console.log(e.message))
    }


    return (
        <div>
            <CompoBanner>My Order</CompoBanner>
            {
              loading? <div className="py-12 flex justify-center"><Circles
              height="50"
              width="50"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /></div> : order.length ? <div className="overflow-x-auto w-full py-6 min-h-[75vh]">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Credential</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                order.map(ord => {
                                    const { _id, img, customerName, title, price, date } = ord
                                    return <tr key={_id}>
                                        <th>
                                            <span onClick={() => handleRemoveOrderFunc(_id)} className="text-red-500 cursor-pointer"> <FaTrash></FaTrash> </span>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-16 h-16">
                                                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{title}</div>
                                                    <div className="font-semibold text-gray-600">{customerName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="font-bold">${price || 0}</span>
                                        </td>
                                        <td className="font-bold">{date}</td>
                                        <th>
                                            <button onClick={() => confirmFunc(_id)} className="btn btn-error">confirm</button>
                                        </th>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div> : <h2 className="font-bold text-3xl text-center py-10">There is no cart item!</h2>
            }
        </div>
    );
};

export default MyOrder;