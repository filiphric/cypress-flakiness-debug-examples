import React, { useState, useEffect, useRef } from 'react';
import LogosGoogle from './Logo';
import CheckMark from './CheckMark';

const GoogleLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const timeout = Math.floor(Math.random() * 1000)

  useEffect(() => {
    setTimeout(() => {
      if (emailInputRef.current) {
        emailInputRef.current.value = '';
        emailInputRef.current.className = 'focused';
        emailInputRef.current.focus();
      }
    }, timeout); // simulates a delay of element focus
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
       setloggedIn(true)
      } else {
        const errorData = await response.json();
        setEmailError(errorData.message);
      }
    } catch (error) {
      setEmailError('Something went wrong');
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-12 border border-gray-300 rounded-lg shadow-lg">
      {loggedIn ? 
      <div>
        <h2 className="mt-4 text-center text-2xl text-gray-800">You are logged in!</h2>
        <CheckMark className='mx-auto mt-8 w-24 h-24 fill-green-500'/>
      </div> : 
        <div>
          <div className="flex justify-center">
            <LogosGoogle />
          </div>
          <h2 className="mt-4 text-center text-2xl text-gray-800">
            Sign in
          </h2>
          <p className="mt-3 text-center font-medium text-sm text-gray-800 mb-6">Use your Google Account</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
            <div>
              <input
                ref={emailInputRef}
                className={emailError ? 'error' : undefined}
                name="email"
                type="email"
                placeholder="Email or phone"
                aria-label="Email address"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              {emailError && <div className="text-sm text-red-600">{emailError}</div>}
            </div>
            <div>
              <button type="submit" className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Next
              </button>
            </div>
          </form>
        </div>}
      </div>
    </div>
  );
};

export default GoogleLogin;
