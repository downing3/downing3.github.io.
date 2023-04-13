import React from "react";

function ContactForm() {
  return (
    <section className="bg-sage dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 mt-20 text-5xl tracking-tight font-thin text-center text-white dark:text-white">
          contact me
        </h2>
        <form action="#" className="space-y-8 mt-10">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-light text-white dark:text-gray-300">
              your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-light text-white dark:text-gray-300">
              header
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-light text-white dark:text-gray-400">
              your messege
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-none shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-buttons py-3 px-5 text-sm font-light text-center text-white rounded-none"
          >
            send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
