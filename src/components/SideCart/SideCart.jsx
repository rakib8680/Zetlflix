import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const SideCart = ({ watchTime }) => {

    // Watch Time 
    const [time, setTime] = useState(watchTime);

    // Break Time 
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const getFromLocalStorage = localStorage.getItem('watchTime');
        setTime(getFromLocalStorage);
        const getBreakTime = localStorage.getItem('breakTime');
        if (!getBreakTime) {
            setBreakTime(0)
        }
        else {
            setBreakTime(getBreakTime)
        }
    }, [watchTime]);



    const handleBreakTime = (bt) => {
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)
    };


    // toast 
    const handleToast = () => {
        toast("Purchase completed!")
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold text-primary'>My Cart</h1>

            <div className="mt-5 text-center">
                <p>Total watch time</p>
                <input type="text" value={time} disabled className='bg-transparent text-center text-secondary' />
            </div>

            <div className='space-y-5'>
                <h5 className="mt-5">Add Break time <br /> min</h5>
                <button onClick={() => handleBreakTime(15)} className="w-25 btn-circle m-1 btn btn-success">15</button>
                <button onClick={() => handleBreakTime(20)} className="w-25 btn-circle  btn btn-warning">20</button>
                <button onClick={() => handleBreakTime(25)} className="w-25 btn-circle m-1 btn btn-error">25</button>
                <input type="text" value={breakTime} disabled className='bg-neutral' /> <br />
                <button onClick={handleToast} className="btn btn-info w-100">
                    Complete
                </button>
            </div>

        </div>
    );
};

export default SideCart;