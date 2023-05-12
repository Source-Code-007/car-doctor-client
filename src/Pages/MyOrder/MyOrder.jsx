import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import CompoBanner from "../../Shared/CompoBanner";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


const MyOrder = () => {
    const [order, setOrder] = useState([])
    const { user, loading } = useContext(authContext)
    useEffect(() => {
        fetch(`http://localhost:8000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    console.log(order);


    // order remove function
    const handleRemoveOrderFunc = (id) => {
        fetch(`http://localhost:8000/booking/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const restOrder = order.filter(ord => ord._id != id)
                    setOrder(restOrder)
                    toast.error('Deleted successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div>
            <CompoBanner>My Order</CompoBanner>
            {
                order.length ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <tbody>
                            {/* row 1 */}
                            {
                                order.map(ord => {
                                    const { _id, img, name, title, price, date } = ord
                                    return <tr key={_id}>
                                        <th>
                                            <span onClick={() => handleRemoveOrderFunc(_id)} className="text-red-500 cursor-pointer"> <FaTrash></FaTrash> </span>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-16 h-16">
                                                        <img src={img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="font-bold">${price || 0}</span>
                                        </td>
                                        <td className="font-bold">{date}</td>
                                        <th>
                                            <button className="btn btn-error">details</button>
                                        </th>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div> : <h2 className="font-bold text-3xl text-center py-10">There is no cart item!</h2>
            }
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default MyOrder;