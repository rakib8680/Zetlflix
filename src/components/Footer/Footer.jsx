import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='space-y-3'>
                <h1 className='text-4xl'>Contact With Us</h1>
                <input type="text" placeholder="Type your name" className="input input-bordered w-full max-w-xs shadow" /> <br />
                <input type="email" placeholder="Type your email" className="input input-bordered w-full max-w-xs shadow" /> <br />
                <textarea placeholder="Type your message" className="textarea textarea-bordered textarea-lg w-full max-w-xs shadow" ></textarea>
                <br />
                <button className="btn btn-primary w-80">Send Email</button>
            </div>
            <div>
                <img className='' src="../../assets/login.png"/>
            </div>
        </div>
    );
};

export default Footer;