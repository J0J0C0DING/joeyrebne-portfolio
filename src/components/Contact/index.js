import React, { useState } from 'react';
import { validateEmail } from '../../utils/';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    setFormState({ name: '', email: '', message: '' });
  }

  return (
    <section className="w-11/12 mx-auto py-8 divide-y md:max-w-4xl px-3 bg-gradient-to-r from-cyan-500 to-blue-500 my-10 rounded-xl">
      <h1 className="font-bold text-2xl mb-2">Contact Me</h1>
      <div className="pt-2 flex flex-wrap justify-between items-center">
        <div id="contact-info" className="pb-10">
          <div id="phone" className="flex space-x-4 py-5">
            <h2 className="font-bold">Phone:</h2>
            <a href="tel:6128495026">+1 (612) 849 5026</a>
          </div>
          <div id="Email" className="flex space-x-4">
            <h2 className="font-bold">Email:</h2>
            <a href="mailto:joeyrebne@outlook.com">joeyrebne@outlook.com</a>
          </div>
        </div>
        <form
          id="contact-form"
          className="w-full md:w-1/2 grid grid-cols-1 gap-2"
          action="https://getform.io/f/dce1fad4-2153-4945-b340-351be3cd96e1"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              defaultValue={formState.name}
              onBlur={handleChange}
              name="name"
              className="mt-1 block w-full rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              defaultValue={formState.email}
              onBlur={handleChange}
              className="mt-1 block w-full rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="message" className="block">
              Message:
            </label>
            <textarea
              name="message"
              defaultValue={formState.message}
              rows="5"
              onBlur={handleChange}
              className="mt-1 block w-full rounded-lg"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-white text-blue-700 rounded-md w-fit px-5 py-2 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
