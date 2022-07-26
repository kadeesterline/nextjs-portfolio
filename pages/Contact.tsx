import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Contact: NextPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: `${message}`,
    };

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    });
  };

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.svg" />
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
        <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h1 className="text-4xl border-b-2 font-bold pb-4"> Contact Me </h1>
          <div className="grid place-content-center">
            <div>
              <form className="w-full max-w-lg p-2 m-2" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <p className="text-gray-600 text-xs italic dark:text-gray-300">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <p className="text-gray-600 text-xs italic dark:text-gray-300">
                      Please double check you have entered the correct email
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-500 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-slate-300 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 focus:shadow-outline focus:outline-none dark:text-black font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="m-5 p-5">
          <h1 className="text-4xl border-b-2 font-bold pb-4"> Social Links </h1>
          <div className="grid place-content-center pt-4">
            <div className="flex flex-wrap place-content-center ">
              <div
                className="badge-base LI-profile-badge mx-2"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="kade-esterline"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/kade-esterline?trk=profile-badge"
                ></a>
              </div>
              <div
                className="github-card"
                data-github="kadeesterline"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
