import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) newErrors.email = "Invalid email";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let emailPromise = emailjs.sendForm(
      "service_x25rzfa",
      "template_x2xtfok",
      form.current,
      "yeSdKlO6GGDuQLbi9"
    );

    toast.promise(emailPromise, {
      loading: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send. Try again later.",
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6 md:px-20 bg-[#111010] text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg text-gray-400 mt-2">Let's connect! Send me a message below.</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-8 max-w-lg mx-auto space-y-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{ label: "First Name", name: "firstName" }, { label: "Last Name", name: "lastName" }].map(({ label, name }) => (
            <motion.label key={name} className="block" whileHover={{ scale: 1.05 }}>
              <span className="text-md font-semibold">{label}</span>
              <input
                type="text"
                name={name}
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                placeholder={label}
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
              />
              {errors[name] && <p className="text-red-400 text-sm">{errors[name]}</p>}
            </motion.label>
          ))}
        </div>
        {[{ label: "Email", type: "email", name: "email" }, { label: "Phone Number", type: "tel", name: "phone" }].map(({ label, type, name }) => (
          <motion.label key={name} className="block" whileHover={{ scale: 1.05 }}>
            <span className="text-md ">{label}</span>
            <input
              type={type}
              name={name}
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
              placeholder={label}
              onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
            />
            {errors[name] && <p className="text-red-400 text-sm">{errors[name]}</p>}
          </motion.label>
        ))}
        <motion.label className="block" whileHover={{ scale: 1.05 }}>
          <span className="text-md font-semibold">Message</span>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
            placeholder="Type your message..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
        </motion.label>
        <motion.label className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <input type="checkbox" required className="w-4 h-4" />
          <span className="text-sm">I accept the terms & conditions</span>
        </motion.label>
        <motion.button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
