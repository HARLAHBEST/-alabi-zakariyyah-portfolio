import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "messages"), form);

      await emailjs.send(
        "service_z21fqcb",
        "template_3e3dfkr",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "CvW_tW8gX0qNmBi1Z"
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setShowForm(false), 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "A modern portfolio built with React, Next.js, Bootstrap, Firebase, and EmailJS to showcase my skills and contact form.",
      tags: ["Next.js", "React", "Bootstrap", "Firebase", "EmailJS"],
      link: "https://yourportfolio.com",
    },
    {
      title: "Symteco Nigeria Limited Website",
      desc: "Corporate site for Symteco Nigeria Limited — responsive UI, service pages, and company info.",
      tags: ["MERN", "Corporate Website", "Deployment"],
      link: "https://symteconigerialimited.com",
    },
    {
      title: "Task Management App",
      desc: "A productivity app to help users create, organize, and track daily tasks efficiently.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/HARLAHBEST/task-app",
    },
  ];

  return (
    <div className="bg-light text-dark min-vh-100">
      {/* HEADER */}
      <header className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/mypics.jpg"
            alt="ALABI ZAKARIYYAH OLAMILEKAN"
            className="rounded-circle border border-primary"
            width="120"
            height="120"
          />
          <div>
            <h5 className="mb-0">ALABI ZAKARIYYAH OLAMILEKAN</h5>
            <small className="text-muted">
              Software Developer • MERN / Next.js Developer
            </small>
          </div>
        </div>

        <nav className="d-flex gap-3">
          <a href="#projects" className="text-decoration-none text-primary">
            Projects
          </a>
          <a href="#about" className="text-decoration-none text-primary">
            About
          </a>
          <a href="#contact" className="text-decoration-none text-primary">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="container py-5">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold display-5">
              Hi, I'm ALABI ZAKARIYYAH OLAMILEKAN — a passionate MERN & Next.js
              Developer.
            </h1>
            <p className="mt-3 text-secondary">
              I build interactive, scalable, and user-friendly web applications
              using modern JavaScript technologies like React, Next.js, Node.js,
              and MongoDB. I love solving real-world problems through clean code
              and creative solutions.
            </p>

            <div className="mt-4 d-flex gap-3">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-secondary">
                Contact Me
              </a>
            </div>

            <p className="mt-3 text-muted small">
              <strong>Tech Stack:</strong> React • Next.js • Node.js • Express •
              MongoDB • Bootstrap • Firebase • EmailJS
            </p>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-semibold">Featured Project</h5>
                <p className="text-secondary mt-2">
                  Symteco Nigeria Limited — a live corporate website showcasing
                  services and products with a clean, responsive design.
                </p>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <small className="text-muted">Role</small>
                    <div>Full Stack Developer</div>
                  </div>
                  <div>
                    <small className="text-muted">Status</small>
                    <div>Live</div>
                  </div>
                </div>
                <a
                  href="https://symteconigerialimited.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link text-decoration-none text-primary mt-3 p-0"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-5">
        <h2 className="fw-bold mb-3">Projects</h2>
        <p className="text-secondary">
          A collection of projects I’ve built — from personal experiments to
          real-world applications.
        </p>

        <div className="row g-4 mt-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="col-md-4"
              whileHover={{ y: -6 }}
            >
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="fw-semibold">{p.title}</h5>
                  <p className="text-secondary small mt-2">{p.desc}</p>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="badge bg-light text-dark border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 d-flex justify-content-between align-items-center">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary small text-decoration-none"
                    >
                      Learn more
                    </a>
                    <small className="text-muted">2025</small>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-5">
        <div className="row g-4">
          <div className="col-md-8">
            <h2 className="fw-bold">About Me</h2>
            <p className="text-secondary mt-3">
              I’m a certified MERN Stack Developer from SQI College of ICT. My
              training focused on full-stack web development — mastering
              MongoDB, Express.js, React, and Node.js. Recently, I’ve been
              expanding into Next.js to build modern, SEO-optimized, and
              high-performance applications.
            </p>

            <h5 className="mt-4 fw-semibold">Experience & Learning</h5>
            <ul className="text-secondary">
              <li>Frontend with React, Next.js, and Bootstrap</li>
              <li>Backend with Node.js, Express & MongoDB</li>
              <li>Certified MERN Stack Developer — SQI College of ICT</li>
            </ul>

            <h5 className="mt-4 fw-semibold">Core Values</h5>
            <div className="d-flex gap-2 flex-wrap mt-2">
              <span className="badge bg-light text-dark border">Creativity</span>
              <span className="badge bg-light text-dark border">Consistency</span>
              <span className="badge bg-light text-dark border">Collaboration</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-semibold">Skills</h5>
                <ul className="list-group list-group-flush mt-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Bootstrap",
                    "Firebase",
                    "EmailJS",
                    "GitHub",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="list-group-item d-flex justify-content-between"
                    >
                      {skill}
                      <span className="text-muted small">Proficient</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-100 mt-4">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="text-muted mb-4">
          Interested in working together? Click below to send me a message.
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="btn btn-primary px-4"
          >
            Send Message
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <form
                onSubmit={handleSubmit}
                className="mx-auto"
                style={{ maxWidth: 500 }}
              >
                <div className="mb-3 text-start">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <button type="submit" className="btn btn-success">
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </button>
                </div>
                {status && <p className="mt-3 text-muted">{status}</p>}
              </form>
            </motion.div>
          </AnimatePresence>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-1">
            <strong>
              © {new Date().getFullYear()} ALABI ZAKARIYYAH OLAMILEKAN.
            </strong>{" "}
            All rights reserved.
          </p>
          <p className="small mb-3">
            Designed & Built with ❤️ using React, Next.js, Bootstrap, Firebase,
            and EmailJS.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="https://github.com/HARLAHBEST"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              GitHub (HARLAHBEST)
            </a>
            <a
              href="https://github.com/Harlahbest2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              GitHub (Harlahbest2003)
            </a>
            <a
              href="https://www.linkedin.com/in/alabi-zakariyyah-olamilekan-899a4423b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              LinkedIn
            </a>
            <a
              href="mailto:alabizakariyyah22@gmail.com"
              className="text-white text-decoration-none"
            >
              Email Me
            </a>
            <a
              href="https://x.com/AlabiZakariyyah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              Twitter (X)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
