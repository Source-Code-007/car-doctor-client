import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

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
            {order.length}
        </div>
    );
};

export default MyOrder;