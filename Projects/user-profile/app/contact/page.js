// import Navbar from "@/component/Navbar";

// const Contact = () => {
//     return (
//         <div>
//             <Navbar/>
//             <h1>Contact Us</h1>
//             <form>
//                 <label>Name:</label>
//                 <input type="text" placeholder="Your Name" />
//                 <label>Email:</label>
//                 <input type="email" placeholder="Your Email" />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
//   };
  
//   export default Contact;
  
"use client"
import { useState } from "react";
import Navbar from "@/component/Navbar";


const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear errors as user types
    };

    // Form Validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid.";
        }
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            console.log("Form Submitted:", formData);
            setFormData({ name: "", email: "" }); // Clear form
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "auto" }}>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Contact Us</h1>
            {submitted && <p style={{ color: "green" }}>Thank you for contacting us!</p>}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginBottom: "5px" }}>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{ marginBottom: "10px", padding: "8px" }}
                />
                {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

                <label style={{ marginTop: "10px", marginBottom: "5px" }}>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    style={{ marginBottom: "10px", padding: "8px" }}
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

                <button
                    type="submit"
                    style={{
                        marginTop: "15px",
                        padding: "10px",
                        backgroundColor: "#0070f3",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
