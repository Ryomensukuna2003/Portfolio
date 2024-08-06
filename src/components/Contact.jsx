import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send('service_cb8ukd3', 'template_7f3lpb8', formData, 'AYPDSjPE8jQQ9nDLR')
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-black mb-2">CONTACT</h2>
                <h1 className="text-center text-black text-4xl font-bold mb-12">Get in Touch with Me!</h1>

                <div className="flex flex-col text-black md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <div className="mb-6">
                            <h3 className="font-bold">Contact Number:</h3>
                            <p className="text-gray-600 mt-1">+91 9569032860</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Email Us:</h3>
                            <p className="text-gray-600 mt-1">mshivanshu1264@gmail.com</p>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="md:w-2/3">
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                name="user_name"
                                placeholder="Full Name"
                                className="w-full md:w-1/2 p-2 border rounded bg-[#F9F9F9]"
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                name="user_email"
                                placeholder="Email"
                                className="w-full md:w-1/2 p-2 border rounded bg-[#F9F9F9]"
                                required
                            />
                        </div>
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            name="message"
                            placeholder="Message"
                            className="w-full p-2 border rounded bg-[#F9F9F9]"
                            required
                        />
                        <button type="submit" className="flex gap-5 bg-black  text-white p-2 px-5 rounded">
                            Send
                            <Mail/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;