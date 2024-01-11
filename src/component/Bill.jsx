import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { QRCode } from 'qrcode'
import generatePayload from 'promptpay-qr'

const Bill = () => {
    const mobileNumber = "097-179-6938";
    const IdCardNumber = "1-7399-02024-00-1";
    const [svg, setSvg] = useState("");
    const carts = useSelector((state) => state.carts);
    const subTotal = carts.reduce((total, product) => total + product.quantity * product.price, 0);

    const totalBilling = (subTotal) => {
        if (subTotal > 0) return subTotal + 35;
        return 0; // Return 0 if subTotal is not greater than 0
    };

    useEffect(() => {
        const total = totalBilling(subTotal);
        generateQR(total);
    }, [subTotal]);

    const generateQR = async (amount) => {
        const payload = generatePayload(mobileNumber, { amount });
    
        const options = { type: 'svg', color: { dark: '#000', light: '#fff' } };
        try {
            const svg = await QRCode.toString(payload, options);
            setSvg(svg);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckOut = () => {
        Swal.fire({
            title: "<strong>PromptPay Payment</strong>",
            icon: "info",
            html: `<img src="data:image/svg+xml;utf8;${encodeURIComponent(svg)}"/>
            Please use any Bank application scan this QRCode to pay with PromptPay`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: true,
        });
    };

    return (
        <div className='py-6 max-w-7xl mx-auto rounded-xl shadow-xl border border-[#ffaa00] '>
            <h1 className='text-4xl text-center font-bold '>Bill</h1>
            <div className="card card-body justify-center items-center py-4 ">
                <div className="mx-auto w-full max-w-sm ">
                    <div className="mt-2 space-y-2 ">
                        <div className='flex justify-between'>
                            <p className='text-lg text-rose-600'>
                                Subtotal
                            </p>
                            <p className='text-lg text-rose-600 text-end'>
                                {subTotal} ฿
                            </p>
                        </div>
                        <div className='flex justify-between pb-2 border-b-2 '>
                            <p className='text-lg text-rose-600'>
                                Shipping
                            </p>
                            <p className='text-lg text-rose-600 text-end'>
                                {subTotal > 0 ? "35 ฿" : 0 + "฿"}
                            </p>
                        </div>
                        <div className='flex justify-between pb-2 border-b-2 '>
                            <p className='text-lg text-rose-600'>
                                Total
                            </p>
                            <div>
                                <p className='text-lg text-rose-600'>
                                    {subTotal > 0 ? totalBilling(subTotal) : 0}
                                </p>
                                <p className='text-lg text-rose-600 '>
                                    including VAT
                                </p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button className='btn btn-[#ffaa00] text- container ' onClick={handleCheckOut}>Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill