import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setResponseMsg("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setResponseMsg(data.error || "Something went wrong.");
            }
        } catch (error) {
            setResponseMsg("Failed to send message. Server error.");
        }
    };

    return (
        <section className="text-gray-100 body-font relative bg-black">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">
                        Contact Us
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                        We’d love to hear from you! Send us your message below.
                    </p>
                    {responseMsg && (
                        <p className="mt-4 text-green-400 font-medium">{responseMsg}</p>
                    )}
                </div>
                <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <label className="leading-7 text-sm text-blue-500">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-gray-900 text-white border border-purple-700 rounded py-1 px-3"
                                required
                            />
                        </div>
                        <div className="p-2 w-1/2">
                            <label className="leading-7 text-sm text-blue-500">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-900 text-white border border-purple-700 rounded py-1 px-3"
                                required
                            />
                        </div>
                        <div className="p-2 w-full">
                            <label className="leading-7 text-sm text-blue-500">Message</label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-gray-900 text-white border border-purple-700 rounded py-1 px-3 h-32"
                                required
                            ></textarea>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                className="flex mx-auto text-white bg-gradient-to-r from-blue-500 to-purple-700 py-2 px-8 rounded text-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
