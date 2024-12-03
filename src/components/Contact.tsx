import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            We're here to help you transform your business with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Vancouver, Canada</p>
              </div>
            </div>
            
            {/* <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (604) XXX-XXXX</p>
              </div>
            </div> */}
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">contact@hy24.ai</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="Vancouver office"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;