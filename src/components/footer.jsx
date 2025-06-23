import React from 'react'
import apple from "../assets/images/apple.png"
import { FaAngleRight } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <div className="divide-y divide-gray-300 mt-6 mx-6 ">
                <div className='flex items-center gap-6'>
                    <img width={20} src={apple} className='mb-2'></img>
                    <p className='flex items-center gap-4 '><FaAngleRight />Apple Store Online</p>
                </div>

                <div className="py-3">Shop and Learn</div>
                <div className="py-3">Apple Wallet</div>
                <div className="py-3">Account</div>
                <div className="py-3">Entertainment</div>
                <div className="py-3">Apple Store</div>
                <div className="py-3">For Business</div>
                <div className="py-3">For Education</div>
                <div className="py-3">For Healthcare</div>
                <div className="py-3">Apple Values</div>
                <div className="py-3">About Apple</div>
            </div>

            <div className='mt-2 mx-6'>
                <p className='text-sm'>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <p className='mt-4'>India</p>
                <p className='mt-4'>Copyright © 2025 Apple Inc. All rights reserved.</p>
                <p className='mt-2'>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
            </div>



        </div>
    )
}

export default Footer