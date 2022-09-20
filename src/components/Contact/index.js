import React, { useState } from 'react';
import { validateEmail } from '../../utils/';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
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
  }

  return (
    <section className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl px-3">
      <h1>Contact Me</h1>
      <div className="mt-8 max-w-md">
        <form id="contact-form" className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              defaultValue={formState.name}
              onBlur={handleChange}
              name="name"
              className="mt-1 block w-full"
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
              className="mt-1 block w-full"
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
              className="mt-1 block w-full"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
