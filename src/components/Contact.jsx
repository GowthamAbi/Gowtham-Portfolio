import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_r5zxzsc',
      'template_y7jxtxv',
      form.current,
      'NhZGd_xc-DLIghqb4'
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <section id="contact" className="py-16 bg-slate-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 border rounded-lg" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 border rounded-lg" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 border rounded-lg"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </section>
  );
}
