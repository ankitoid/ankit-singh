// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const errs = {};
//     if (!formData.firstName.trim()) errs.firstName = "Required";
//     if (!formData.lastName.trim()) errs.lastName = "Required";
//     if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
//       errs.email = "Invalid";
//     if (!/^\d{10}$/.test(formData.phone)) errs.phone = "10 digits";
//     if (!formData.message.trim()) errs.message = "Required";
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       toast.error("Please fix the errors first");
//       return;
//     }

//     try {
//       console.log("Sending data:", formData);

//       toast.loading("Sending…");

//       await Promise.all([
//         emailjs.send("service_ankitoid", "template_contact_admin", {
//           from_name: `${formData.firstName} ${formData.lastName}`,
//           reply_to: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//         }),
//         emailjs.send("service_ankitoid", "template_contact_reply", {
//           to_email: "ankitsingh626522@gmail.com",
//           to_name: "Ankit",
//         }),
//       ]);

//       toast.dismiss();
//       toast.success("Sent & auto-reply delivered!");

//       // reset form
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (err) {
//       toast.dismiss();
//       console.error("EmailJS error:", err);
//       toast.error("Failed to send email");
//     }
//   };

//   return (
//     <motion.section
//       id="contact"
//       className="py-16 px-6 md:px-20 bg-[#111010] text-white"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <Toaster position="top-center" />

//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold">Contact Me</h2>
//         <p className="text-lg text-gray-400 mt-2">
//           Let's connect! Send me a message below.
//         </p>
//       </div>

//       <form
//         onSubmit={sendEmail}
//         className="bg-gray-800 p-8 max-w-lg mx-auto space-y-6 rounded-lg"
//       >
//         {/* Name fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             { label: "First Name", name: "firstName" },
//             { label: "Last Name", name: "lastName" },
//           ].map(({ label, name }) => (
//             <motion.label
//               key={name}
//               className="block"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-md font-semibold">{label}</span>
//               <input
//                 type="text"
//                 name={name}
//                 className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
//                 placeholder={label}
//                 onChange={(e) =>
//                   setFormData({ ...formData, [name]: e.target.value })
//                 }
//               />
//               {errors[name] && (
//                 <p className="text-red-400 text-sm">{errors[name]}</p>
//               )}
//             </motion.label>
//           ))}
//         </div>

//         {/* Email & Phone */}
//         {[
//           { label: "Email", name: "email", type: "email" },
//           { label: "Phone Number", name: "phone", type: "tel" },
//         ].map(({ label, name, type }) => (
//           <motion.label
//             key={name}
//             className="block"
//             whileHover={{ scale: 1.05 }}
//           >
//             <span className="text-md">{label}</span>
//             <input
//               type={type}
//               name={name}
//               className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
//               placeholder={label}
//               onChange={(e) =>
//                 setFormData({ ...formData, [name]: e.target.value })
//               }
//             />
//             {errors[name] && (
//               <p className="text-red-400 text-sm">{errors[name]}</p>
//             )}
//           </motion.label>
//         ))}

//         {/* Message */}
//         <motion.label className="block" whileHover={{ scale: 1.05 }}>
//           <span className="text-md font-semibold">Message</span>
//           <textarea
//             name="message"
//             rows="4"
//             className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
//             placeholder="Type your message..."
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />
//           {errors.message && (
//             <p className="text-red-400 text-sm">{errors.message}</p>
//           )}
//         </motion.label>

//         {/* Terms & Submit */}
//         <motion.label
//           className="flex items-center space-x-2"
//           whileHover={{ scale: 1.05 }}
//         >
//           <input type="checkbox" required className="w-4 h-4" />
//           <span className="text-sm">I accept the terms &amp; conditions</span>
//         </motion.label>

//         <motion.button
//           type="submit"
//           className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700"
//           whileHover={{ scale: 1.05 }}
//         >
//           Submit
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "Required";
    if (!formData.lastName.trim()) errs.lastName = "Required";
    if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      errs.email = "Invalid";
    if (!/^\d{10}$/.test(formData.phone)) errs.phone = "10 digits";
    if (!formData.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ── ORIGINAL EMAIL LOGIC — UNTOUCHED ──────────────────────────────────────
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors first");
      return;
    }

    try {
      console.log("Sending data:", formData);
      toast.loading("Sending…");

      await Promise.all([
        emailjs.send("service_ankitoid", "template_contact_admin", {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
        emailjs.send("service_ankitoid", "template_contact_reply", {
          to_email: "ankitsingh626522@gmail.com",
          to_name: "Ankit",
        }),
      ]);

      toast.dismiss();
      toast.success("Sent & auto-reply delivered!");

      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.dismiss();
      console.error("EmailJS error:", err);
      toast.error("Failed to send email");
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  const contactItems = [
    {
      Icon: CiLocationOn,
      label: "Location",
      value: "Noida, Uttar Pradesh, India 201317",
      href: "https://www.google.com/maps/@28.5415911,77.2895358,13z?entry=ttu",
    },
    {
      Icon: AiOutlineMail,
      label: "Email",
      value: "ankitsinghghoshi1234@gmail.com",
      href: "mailto:ankitsinghghoshi1234@gmail.com",
    },
    {
      Icon: BsPhone,
      label: "Phone",
      value: "+91 6265227382",
      href: "tel:6265227382",
    },
    {
      Icon: BsLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ankitoid",
      href: "https://www.linkedin.com/in/ankitoid/",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600&display=swap');

        .ct-section {
          background: #080c14;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* background grid */
        .ct-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* glow blobs */
        .ct-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .ct-blob-1 { width: 400px; height: 400px; background: rgba(59,130,246,0.18); top: -80px; left: -80px; }
        .ct-blob-2 { width: 300px; height: 300px; background: rgba(6,182,212,0.12); bottom: -60px; right: -60px; }

        .ct-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

        /* heading block */
        .ct-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #3b82f6;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .ct-eyebrow::before { content:''; width:24px; height:1px; background:#3b82f6; }
        .ct-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #e2eaf7;
          letter-spacing: -0.03em;
          margin-bottom: 60px;
        }
        .ct-title span { color: #3b82f6; }

        /* layout */
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: start;
        }

        /* left info panel */
        .ct-info-head {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2eaf7;
          margin-bottom: 12px;
        }
        .ct-info-sub {
          color: #8ba4c8;
          font-size: 0.93rem;
          line-height: 1.8;
          margin-bottom: 36px;
        }
        .ct-items { display: flex; flex-direction: column; gap: 14px; }

        .ct-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #0d1626;
          border: 1px solid rgba(99,179,237,0.12);
          border-radius: 14px;
          padding: 14px 20px;
          text-decoration: none;
          color: #e2eaf7;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ct-item:hover {
          border-color: rgba(59,130,246,0.5);
          transform: translateX(6px);
          box-shadow: 0 6px 24px rgba(59,130,246,0.15);
        }
        .ct-item-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(59,130,246,0.18), rgba(6,182,212,0.12));
          border: 1px solid rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.15rem;
          color: #3b82f6;
        }
        .ct-item-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ba4c8;
          display: block;
          margin-bottom: 2px;
        }
        .ct-item-value {
          font-size: 0.86rem;
          font-weight: 500;
          color: #e2eaf7;
        }

        /* form panel */
        .ct-form-wrap {
          background: #0d1626;
          border: 1px solid rgba(99,179,237,0.13);
          border-radius: 24px;
          padding: 40px;
        }

        .ct-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .ct-field { margin-bottom: 20px; }

        .ct-label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ba4c8;
          margin-bottom: 7px;
        }

        .ct-input {
          width: 100%;
          background: #080c14;
          border: 1px solid rgba(99,179,237,0.15);
          border-radius: 10px;
          padding: 12px 16px;
          color: #e2eaf7;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ct-input::placeholder { color: #8ba4c8; opacity: 0.6; }
        .ct-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.18);
        }
        .ct-input.has-error { border-color: #ef4444; }

        .ct-error {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: #ef4444;
          margin-top: 4px;
          display: block;
        }

        .ct-checkbox-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          font-size: 0.84rem;
          color: #8ba4c8;
          cursor: pointer;
        }
        .ct-checkbox-row input { accent-color: #3b82f6; width: 15px; height: 15px; flex-shrink: 0; }

        .ct-submit {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: #fff;
          border: none;
          border-radius: 11px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
        }
        .ct-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59,130,246,0.4);
          filter: brightness(1.08);
        }
        .ct-submit:active { transform: translateY(0); }

        @media (max-width: 900px) {
          .ct-section { padding: 80px 24px; }
          .ct-grid { grid-template-columns: 1fr; }
          .ct-form-wrap { padding: 28px; }
        }
        @media (max-width: 520px) {
          .ct-field-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="ct-section">
        {/* bg glow blobs */}
        <div className="ct-blob ct-blob-1" />
        <div className="ct-blob ct-blob-2" />

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0d1626",
              color: "#e2eaf7",
              border: "1px solid rgba(99,179,237,0.2)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.88rem",
            },
          }}
        />

        <div className="ct-inner">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ct-eyebrow">Get In Touch</div>
            <h2 className="ct-title">Let's <span>Connect</span></h2>
          </motion.div>

          <div className="ct-grid">
            {/* ── LEFT: contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="ct-info-head">Have a project in mind?</p>
              <p className="ct-info-sub">
                I'm always open to new opportunities, collaborations, and
                interesting projects. Drop me a message and I'll get back to
                you within 24 hours.
              </p>

              <div className="ct-items">
                {contactItems.map(({ Icon, label, value, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label === "Location" || label === "LinkedIn" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="ct-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  >
                    <div className="ct-item-icon"><Icon /></div>
                    <div>
                      <span className="ct-item-label">{label}</span>
                      <span className="ct-item-value">{value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="ct-form-wrap">
                <form onSubmit={sendEmail}>
                  {/* name row */}
                  <div className="ct-field-row">
                    {[
                      { label: "First Name", name: "firstName" },
                      { label: "Last Name", name: "lastName" },
                    ].map(({ label, name }) => (
                      <div className="ct-field" key={name}>
                        <label className="ct-label">{label}</label>
                        <input
                          type="text"
                          name={name}
                          value={formData[name]}
                          placeholder={label}
                          className={`ct-input ${errors[name] ? "has-error" : ""}`}
                          onChange={(e) =>
                            setFormData({ ...formData, [name]: e.target.value })
                          }
                        />
                        {errors[name] && (
                          <span className="ct-error">{errors[name]}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* email + phone */}
                  {[
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Phone Number", name: "phone", type: "tel" },
                  ].map(({ label, name, type }) => (
                    <div className="ct-field" key={name}>
                      <label className="ct-label">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        placeholder={label}
                        className={`ct-input ${errors[name] ? "has-error" : ""}`}
                        onChange={(e) =>
                          setFormData({ ...formData, [name]: e.target.value })
                        }
                      />
                      {errors[name] && (
                        <span className="ct-error">{errors[name]}</span>
                      )}
                    </div>
                  ))}

                  {/* message */}
                  <div className="ct-field">
                    <label className="ct-label">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      placeholder="Tell me about your project..."
                      className={`ct-input ${errors.message ? "has-error" : ""}`}
                      style={{ resize: "vertical" }}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <span className="ct-error">{errors.message}</span>
                    )}
                  </div>

                  {/* terms */}
                  <label className="ct-checkbox-row">
                    <input type="checkbox" required />
                    I accept the terms &amp; conditions
                  </label>

                  {/* submit */}
                  <motion.button
                    type="submit"
                    className="ct-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message →
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;