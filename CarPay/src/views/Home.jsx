// File: src/components/CarRequestForm.jsx
import React from 'react';

const carImages = [
  '/img/others/car1.jpg',
  '/img/others/car2.jpg',
  '/img/others/car3.jpg',
  '/img/others/car4.jpg',
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200 flex flex-col items-center">
      <header className="w-full py-10 flex flex-col items-center bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
        <img src="/img/logo/logo.png" alt="CarPay" className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">Your Smart Car Management Platform</h1>
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl text-center">
          Buy, sell, rent, manage, and maintain your cars all in one place. Simplicity, security, and professionalism at every step.
        </p>
        <a href="#services" className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition text-lg">Get Started</a>
      </header>

      <section className="w-full max-w-5xl mt-12 px-4" id="search">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Find Your Perfect Car</h2>
            <p className="text-gray-600 mb-4">Use our smart search engine to easily find the right car for sale or rent.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="Car type or model..." className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow">Search</button>
            </form>
          </div>
          <img src="/img/others/car1.jpg" alt="Search for a car" className="w-40 h-28 object-cover rounded-lg hidden md:block" />
        </div>
      </section>

      <section className="w-full max-w-5xl mt-16 px-4" id="services">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🚗</span>
            <h3 className="font-bold text-blue-700 mb-1">Buy & Sell Cars</h3>
            <p className="text-gray-600 text-sm text-center">A fast and secure platform for buying and selling new and used cars.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🛣️</span>
            <h3 className="font-bold text-blue-700 mb-1">Car Rentals</h3>
            <p className="text-gray-600 text-sm text-center">Daily or monthly rental services with a variety of options for everyone.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🛠️</span>
            <h3 className="font-bold text-blue-700 mb-1">Management & Maintenance</h3>
            <p className="text-gray-600 text-sm text-center">Track your car maintenance and schedule appointments easily and smartly.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">📊</span>
            <h3 className="font-bold text-blue-700 mb-1">Reports & Tracking</h3>
            <p className="text-gray-600 text-sm text-center">Detailed statistics and reports about your operations and vehicles.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mt-16 px-4 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Our Platform?</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="text-lg font-bold text-blue-700">Easy to Use</span>
            <p className="text-gray-600 text-sm mt-2">A simple and fast interface for all users.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="text-lg font-bold text-blue-700">24/7 Support</span>
            <p className="text-gray-600 text-sm mt-2">A support team ready to help you anytime.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="text-lg font-bold text-blue-700">Security & Reliability</span>
            <p className="text-gray-600 text-sm mt-2">Your data and transactions are our top priority.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl mt-16 px-4 text-center">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Sign up now and start your car journey!</h3>
        <a href="#" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-10 rounded-full shadow-lg transition text-lg mt-4">Create New Account</a>
      </section>

      <footer className="mt-20 mb-6 text-gray-500 text-sm text-center">© {new Date().getFullYear()} CarPay | The Complete Car Management Platform</footer>
    </div>
  );
};

export default Home;
