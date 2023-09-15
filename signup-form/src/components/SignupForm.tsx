// SignupForm.tsx
import React, { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  bio: string;
  jobTitle: string;
  email: string;
  password: string;
};

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    bio: '',
    jobTitle: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You can now send formData to your backend or handle accordingly
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md" style={{width: 650}}>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-5'>
          <div className="mb-4 ">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-600 ">Job Title</label>
            <input 
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-600">Bio</label>
            <textarea 
              id="bio"
              name="bio"
              rows={4}
              value={formData.bio}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            ></textarea>
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
