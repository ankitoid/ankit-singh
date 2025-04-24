import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "Required";
    if (!formData.lastName.trim())  errs.lastName  = "Required";
    if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      errs.email = "Invalid";
    if (!/^\d{10}$/.test(formData.phone)) errs.phone = "10 digits";
    if (!formData.message.trim())        errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors first");
      return;
    }

    // 1) Notify YOU (template_5p8xoom must have "To" hard-coded in the dashboard)
    const notifyPromise = emailjs.send(
      "service_ankitoid",
      "template_5p8xoom",
      {
        first_name: formData.firstName,
        last_name:  formData.lastName,
        email:      formData.email,
        phone:      formData.phone,
        message:    formData.message
      },
      "SFxt_YsLVw7pIxpug"
    );

    // 2) Auto-reply visitor (template_w8bdb29 must have "To" = {{to_email}})
    const replyPromise = emailjs.send(
      "service_ankitoid",
      "template_w8bdb29",
      {
        to_email: formData.email,
        to_name:  formData.firstName
      },
      "SFxt_YsLVw7pIxpug"
    );

    toast.promise(
      Promise.all([notifyPromise, replyPromise]),
      {
        loading: "Sending…",
        success: "Sent & auto-reply delivered!",
        error:   (err) => {
          console.error("EmailJS error:", err);
          return err.text || "Failed to send";
        }
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6 md:px-20 bg-[#111010] text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster position="top-center" />

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg text-gray-400 mt-2">
          Let's connect! Send me a message below.
        </p>
      </div>

      <form onSubmit={sendEmail} className="bg-gray-800 p-8 max-w-lg mx-auto space-y-6 rounded-lg">
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "First Name", name: "firstName" },
            { label: "Last Name",  name: "lastName"  }
          ].map(({ label, name }) => (
            <motion.label key={name} className="block" whileHover={{ scale: 1.05 }}>
              <span className="text-md font-semibold">{label}</span>
              <input
                type="text"
                name={name}
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                placeholder={label}
                onChange={e => setFormData({ ...formData, [name]: e.target.value })}
              />
              {errors[name] && <p className="text-red-400 text-sm">{errors[name]}</p>}
            </motion.label>
          ))}
        </div>

        {/* Email & Phone */}
        {[
          { label: "Email",       name: "email", type: "email" },
          { label: "Phone Number",name: "phone", type: "tel"   }
        ].map(({ label, name, type }) => (
          <motion.label key={name} className="block" whileHover={{ scale: 1.05 }}>
            <span className="text-md">{label}</span>
            <input
              type={type}
              name={name}
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              placeholder={label}
              onChange={e => setFormData({ ...formData, [name]: e.target.value })}
            />
            {errors[name] && <p className="text-red-400 text-sm">{errors[name]}</p>}
          </motion.label>
        ))}

        {/* Message */}
        <motion.label className="block" whileHover={{ scale: 1.05 }}>
          <span className="text-md font-semibold">Message</span>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
            placeholder="Type your message..."
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
        </motion.label>

        {/* Terms & Submit */}
        <motion.label className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <input type="checkbox" required className="w-4 h-4" />
          <span className="text-sm">I accept the terms &amp; conditions</span>
        </motion.label>

        <motion.button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
