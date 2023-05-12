import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import CompoBanner from "../../Shared/CompoBanner";

const MyOrder = () => {
    const [order, setOrder] = useState([])
    const { user, loading } = useContext(authContext)
    useEffect(() => {
        fetch(`http://localhost:8000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    console.log(order);

    return (
        <div>
            <CompoBanner>My Order</CompoBanner>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {/* row 1 */}
                        {
                            order.map(ord => {
                                const {_id, img, name, title, price, date} = ord
                                return <tr key={_id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
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
            </div>
        </div>
    );
};

export default MyOrder;