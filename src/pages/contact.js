import React, { useRef } from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/transitionEffect';

const Contact = () => {
  const [state, handleSubmit] = useForm('movakzae');
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    formRef.current.reset();
  };

  if (state.succeeded) {
    return (
      <main className="flex w-full min-h-screen flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="text-center dark:bg-gray-900 dark:text-white">
          <title>Thank you!</title>
          <h1 className="text-4xl font-bold mb-4">Thanks for reaching out!</h1>
          <p className="text-lg">We&apos;ll get back to you as soon as possible.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact page"
        />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className="flex w-full min-h-screen flex-col items-center justify-center bg-white text-black dark:bg-dark dark:text-dark">
          <motion.form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="w-full max-w-lg p-8 bg-white border border-black rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold mb-6 text-center hover:underline underline-offset-2 cursor-pointer">Contact Us!</h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 bg-white border border-black text-black placeholder-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white border border-black text-black placeholder-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 bg-white border border-black text-black placeholder-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50"
              disabled={state.submitting}
            >
              Submit
            </button>
          </motion.form>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
