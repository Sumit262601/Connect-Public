import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IoMdMail } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT FORM */}
      <div className="py-10 bg-transparent lg:px-8 md:flex">
        <div className="mx-auto max-w-2xl text-center mt-10 mb-10">
          <h2 className="text-3xl font-bold text-[#24315E] tracking-tight sm:text-5xl md:text-6xl mt-10 mb-10">
            Get in touch
          </h2>
          <div className="px-10 sm:px-20 sm:text-center">
            <div className="items-start text-2xl text-[#F76D6D]">
              <div className="flex items-center gap-3 mb-2">
                <IoMdMail /> <span>info@connectpublics.in</span>
              </div>
              <div className="flex items-center gap-3">
                <LuPhone /> <span> +91 7838965747</span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Contact;
