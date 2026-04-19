export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:rushidchaudhari11@gmail.com?subject=Portfolio Message from ${name}&body=${message} (${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for any opportunities!
        </p>

        {/* 🔥 ADD onSubmit */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">

          {/* 🔥 ADD name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};