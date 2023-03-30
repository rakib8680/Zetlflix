import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bz076qd', 'template_bmhninn', form.current, '7mr_vvZKMjfXKtcvg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='mt-52 mb-40 '>
            <form ref={form} onSubmit={sendEmail} className="flex justify-center items-center gap-10 ">
                <div className='space-y-3'>
                    <h1 className='text-4xl'>Contact With Us</h1>
                    <input type="text" name="user_name" placeholder="Type your name" className="input input-bordered w-full max-w-xs shadow" /> <br />
                    <input type="email" name="user_email" placeholder="Type your email" className="input input-bordered w-full max-w-xs shadow" /> <br />
                    <textarea name="message" placeholder="Type your message" className="textarea textarea-bordered textarea-lg w-full max-w-xs shadow" ></textarea>
                    <br />
                    <button type="submit" value="send" className="btn btn-primary w-80">Send Email</button>
                </div>
                <div>
                    <img className='w-96 rounded-3xl' src="../../../public/login.png" />
                </div>
            </form>
        </div>
    );
};

export default Footer;