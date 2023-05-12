import { useContext } from "react";
import CompoBanner from "../../Shared/CompoBanner";
import { authContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const { user } = useContext(authContext)
    const service = useLoaderData()
    const { _id, title, img, price } = service


    const handleCheckoutFunc = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const phone = form.phone.value
        const date = form.date.value
        const message = form.message.value
        const email = user?.email
        const order = { customerName: firstName + lastName, serviceId: _id, lastName, phone, date, message, email }

        fetch('http://localhost:8000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Booking successful!', {
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
            <CompoBanner>Checkout</CompoBanner>
            <div className="bg-slate-100 p-12 my-6 rounded">
                <h2 className="font-bold text-center text-3xl my-6">{title}</h2>
                <form onSubmit={handleCheckoutFunc} className="space-y-3">
                    <div className="flex gap-3">
                        <input type="text" name='firstName' placeholder="first name" className="input flex-1" required />
                        <input type="text" name='lastName' placeholder="last name" className="input flex-1" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name='phone' placeholder="Your phone" className="input flex-1" required />
                        <input type="date" name='date' placeholder="Date" className="input flex-1" required />

                    </div>
                    <div className="flex gap-3">
                        <textarea name="message" placeholder="Your message" className="w-full input h-40"></textarea>
                    </div>
                    <button type="submit" className="btn btn-error text-white w-full">Order Confirm</button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
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

export default Checkout;