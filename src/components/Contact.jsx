import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
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
        <div id='contact' className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-black  mb-2">CONTACT</h2>
                <h1 className="text-center text-black text-5xl  mt-5 mb-12">Get in Touch with Me!</h1>

                <div className="flex flex-col text-black md:flex-row gap-8">
                    <div className="bg-gray-100 p-8 rounded-lg md:w-1/3">
                        <div className="mb-6">
                            <MapPin className="mb-2" />
                            <h3 className="font-bold inline-block">Home</h3>
                            <p className="text-gray-600 mt-1">Gorakhpur, UttarPradesh</p>
                        </div>
                        <div className="mb-6">
                            <Phone className=" mb-2" />
                            <h3 className="font-bold inline-block">Contact Number</h3>
                            <p className="text-gray-600 mt-1">+91 9569032860</p>
                        </div>
                        <div>
                            <Mail className=" mb-2" />
                            <h3 className="font-bold inline-block">Email me</h3>
                            <p className="text-gray-600 mt-1">mshivanshu1264@gmail.com</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 border-solid border-2 p-5 rounded">
                        <form ref={formRef} onSubmit={handleSubmit} >
                            <div className="flex flex-col gap-6 mb-6">
                              <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                  <h3 className="mb-2">Name</h3>
                                  <input
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    name="user_name"
                                    placeholder="Full Name"
                                    className="w-full p-3 border border-gray-300 rounded bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="mb-2">Email</h3>
                                  <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    name="user_email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                  />
                                </div>
                              </div>
                              <div>
                                <h3 className="mb-2">Message</h3>
                                <textarea
                                  value={message}
                                  onChange={handleMessageChange}
                                  name="message"
                                  placeholder="Message"
                                  className="w-full p-3 border border-gray-300 rounded bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  required
                                />
                              </div>
                            </div>
                            <button type="submit" className="flex gap-5  bg-black  text-white p-2 px-5 rounded">
                                Send
                                <Mail />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
