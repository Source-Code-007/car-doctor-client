import { useContext } from "react";
import CompoBanner from "../../Shared/CompoBanner";
import { authContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const { user } = useContext(authContext)
    const service = useLoaderData()
    const {_id, title, img, price}  = service
    

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
        console.log(order);
    }
    return (
        <div>
            <CompoBanner>Checkout</CompoBanner>
            <div className="bg-slate-100 p-12 my-6 rounded">
                <h2 className="font-bold text-center text-3xl my-6">{title}</h2>
                <form onSubmit={handleCheckoutFunc} className="space-y-3">
                    <div className="flex gap-3">
                        <input type="text" name='firstName' placeholder="first name" className="input flex-1" />
                        <input type="text" name='lastName' placeholder="last name" className="input flex-1" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name='phone' placeholder="Your phone" className="input flex-1" />
                        <input type="date" name='date' placeholder="Date" className="input flex-1" />            
                   
                    </div>
                    <div className="flex gap-3">
                        <textarea name="message" placeholder="Your message" className="w-full input h-40"></textarea>
                    </div>
                    <button type="submit" className="btn btn-error text-white w-full">Order Confirm</button>
                </form>
            </div>

        </div>
    );
};

export default Checkout;