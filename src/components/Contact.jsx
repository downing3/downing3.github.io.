import React from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <div className="bg-sage h-screen flex flex-col justify-center items-center">
      <div className="fixed top-0 left-0 right-0">
        <NavBar />
      </div>
      <div className="text-center -mt-10"> 
        <ContactForm />
      </div>
    </div>
    );
}

export default Contact;