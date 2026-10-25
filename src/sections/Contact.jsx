import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "../components/Icons";
import { profile } from "../constants";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon className="size-5" /> },
  { label: "LinkedIn", value: "in/shivamalapdave", href: profile.linkedin, icon: <LinkedInIcon className="size-5" /> },
  { label: "GitHub", value: "ShivamD18", href: profile.github, icon: <GitHubIcon className="size-5" /> },
];

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // "success" or "error" after a send attempt, null before
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <TitleHeader
          title="Let's work together"
          sub="Contact"
          intro="I'm open to engineering roles and research opportunities in robotics, embedded systems and biomedical engineering. Send a message or reach out directly."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Direct contact details */}
          <div className="reveal rounded-3xl bg-forest-200 text-offwhite-100 p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="text-offwhite-100/80 mt-2 leading-relaxed">
                The fastest way to reach me is by email.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {contactLinks.map(({ label, value, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="contact-link"
                  >
                    <span className="contact-link-icon">{icon}</span>
                    <span className="min-w-0">
                      <span className="block text-sm text-offwhite-100/70">{label}</span>
                      <span className="block font-semibold break-all">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 px-3 py-2">
                <span className="contact-link-icon">
                  <MapPinIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-offwhite-100/70">Based in</span>
                  <span className="block font-semibold">{profile.location}</span>
                </span>
              </li>
            </ul>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg mt-auto self-start"
            >
              <DownloadIcon className="size-5" />
              Download résumé
            </a>
          </div>

          {/* Message form */}
          <div className="reveal card-border rounded-3xl p-6 md:p-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project or question you have in mind."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg self-start disabled:opacity-60 disabled:cursor-wait"
              >
                {loading ? "Sending…" : "Send message"}
                <ArrowRightIcon className="size-5" />
              </button>

              {/* aria-live so screen readers announce the result too */}
              <p aria-live="polite" className="text-sm font-semibold empty:hidden">
                {status === "success" && (
                  <span className="text-forest-200">
                    Thanks! Your message was sent. I'll get back to you soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-700">
                    Something went wrong sending your message. Please try again, or email me
                    at{" "}
                    <a href={`mailto:${profile.email}`} className="underline">
                      {profile.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
