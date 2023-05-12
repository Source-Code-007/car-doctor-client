import CompoBanner from "../../Shared/CompoBanner";

const Checkout = () => {
    const handleCheckoutFunc = (e)=>{
        e.preventDefault()
        const form = e.target
        const firstName = form.first-name.value
        const lastName = form.last-name.value
        const phone = form.phone.value
        const email = form.email.value
        const message = form.message.value
        console.log({firstName, lastName, phone, email, message});
    }
    return (
        <div>
            <CompoBanner>Checkout</CompoBanner>
            <div className="bg-slate-100 p-12 my-6 rounded">
                <form onSubmit={handleCheckoutFunc} className="space-y-3">
                    <div className="flex gap-3">
                        <input type="text" name='first-name' placeholder="first-name" className="input flex-1" />
                        <input type="text" name='last-name' placeholder="last-name" className="input flex-1" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name='phone' placeholder="Your phone" className="input flex-1" />
                        <input type="text" name='email' placeholder="Your email" className="input flex-1" />
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