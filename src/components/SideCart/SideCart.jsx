import React from 'react';

const SideCart = ({ watchTime }) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-primary'>My Cart</h1>

            <div className="mt-5 text-center">
                <p>Total watch time</p>
                <input type="text" className='bg-transparent' />
            </div>

            <div className='space-y-5'>
                <h5 className="mt-5">Add Break time</h5>
                <button className="w-25 btn-circle m-1 btn btn-success">15</button>
                <button className="w-25 btn-circle  btn btn-warning">20</button>
                <button className="w-25 btn-circle m-1 btn btn-error">25</button>
                <input type="text" className='bg-neutral' /> <br />
                <button className="btn btn-info w-100">
                    Complete
                </button>
            </div>

        </div>
    );
};

export default SideCart;