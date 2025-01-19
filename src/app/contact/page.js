"use client";

import React, { useRef, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconInfoCircle, IconMail, IconBrandGithub, IconBrandLinkedin, IconAnalyze, IconUser } from "@tabler/icons-react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1q117ia', 'template_zvg33hi', form.current, 'tplC4-4r5t_ldHsxs')
      .then((result) => {
          console.log('Email sent:', result.text);
          setMessage({ type: 'success', text: 'Message sent successfully!' });
          setFormData({ user_name: '', user_email: '', message: '' }); // Clear form after successful submission
      }, (error) => {
          console.error('Email send error:', error);
          setMessage({ type: 'error', text: 'Failed to send message, please try again later.' });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = formData.user_name && formData.user_email && formData.message;

  const links = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "About Me",
      href: "/about",
      icon: <IconUser className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <IconInfoCircle className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <IconAnalyze className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Contact",
      href: "/",
      icon: <IconMail className="text-white h-5 w-5 flex-shrink-0" />,
    },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row bg-black overflow-auto">
      <Sidebar className="bg-black">
        <SidebarBody>
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 p-8 bg-black text-white flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white w-full max-w-6xl">
          <div className="md:w-1/3 p-8">
            <h1 className="text-4xl font-bold mb-8">Contact</h1>
            <p className="text-lg mb-8">Got a project? Drop me a message if you want to work together on something.</p>
            <div className="flex items-center mb-4">
              <IconMail className="text-white h-5 w-5 flex-shrink-0 mr-4" />
              <span>korayavans@gmail.com</span>
            </div>
            <div className="flex items-center mb-4">
              <IconBrandGithub className="text-white h-5 w-5 flex-shrink-0 mr-4" />
              <a href="https://github.com/KorayYLM" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="flex items-center mb-4">
              <IconBrandLinkedin className="text-white h-5 w-5 flex-shrink-0 mr-4" />
              <a href="https://www.linkedin.com/in/koray-yilmaz-803819304/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
              <div className="mb-8">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-8">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  value={formData.user_email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-8">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={!isFormValid}
                >
                  Send
                </button>
              </div>
            </form>
            {message && (
              <div className={`mt-4 p-4 rounded ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}