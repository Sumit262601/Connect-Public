import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IoMdMail } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import ContactForm from './ContactForm';
import { DarkModeContext } from '../context/DarkModeContext';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT FORM */}
      <div className={`py-10 ${darkMode ? 'bg-gray-800' : 'bg-transparent'} lg:px-8 md:flex`}>
        <div className="mx-auto max-w-2xl text-center mt-10 mb-10">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-10 mb-10 ${darkMode ? 'text-gray-200' : 'text-[#24315E]'}`}>
            Get in touch
          </h2>
          <div className="px-10 sm:px-20 sm:text-center">
            <div className={`items-start text-2xl ${darkMode ? 'text-[#BD4157]' : 'text-[#F76D6D]'}`}>
              <div className="flex items-center gap-3 mb-2">
                <IoMdMail aria-label="Email" />
                <span>info@connectpublics.in</span>
              </div>
              <div className="flex items-center gap-3">
                <LuPhone aria-label="Phone" />
                <span>+91 7838965747</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Contact;
