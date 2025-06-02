import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

export default function Cars() {
  // تفعيل العداد فقط
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const launchDate = new Date('2025-07-01T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="M&A Motors - Premium Car Purchase">
      <Head>
        <title>M&A Motors - Premium Car Purchase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta property="og:title" content="M&A Motors - Premium Car Purchase" />
        <meta property="og:description" content="Find your dream car in Canada with M&A Motors. Fast, free, and personalized car search and financing services." />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:url" content="https://Halalauto.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="M&A Motors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M&A Motors - Premium Car Purchase" />
        <meta name="twitter:description" content="Find your dream car in Canada with M&A Motors. Fast, free, and personalized car search and financing services." />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Navigation */}
      <nav className="nav p-4 fixed w-full top-0 z-20 animate__animated animate__fadeInDown" id="navbar">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">
            <img src="/logo.png" alt="logo" className="logo" style={{ maxWidth: '10rem' }} />
          </Link>
          <div className="md:flex items-center space-x-6 hidden md:block nav-menu" id="navMenu">
            <Link href="/" className="text-white hover:text-gray-300 transition duration-300 text-lg">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300 text-lg">About Us</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300 text-lg">Contact Us</Link>
            <Link href="/cars" className="text-white hover:text-gray-300 transition duration-300 text-lg">Available Cars</Link>
            <Link href="/request" className="text-white hover:text-gray-300 transition duration-300 text-lg">Request Car</Link>
            <a href="tel:+3439977144" className="text-white hover:text-gray-300 transition duration-300 text-lg">(343) 997-7144</a>
          </div>
          <div className="md:hidden">
            <button id="navToggle" className="nav-toggle text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section with Search Form */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A2238] to-[#2A3550] pt-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-center mb-6 animate__animated animate__fadeInUp">
            Find Your <span className="gradient-text">Dream Car</span> in Canada
          </h1>
          <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
            Available Cars
          </p>
          <div className="flex-grow flex items-center relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Amazing</span> is Coming Soon
                  </h1>
                  <p className="text-lg md:text-xl text-indigo-200 mb-8 max-w-lg mx-auto md:mx-0">
                    M&A Motors is your trusted platform to find, finance, and buy high-quality pre-owned and new cars across Canada. Browse our curated collection, compare options, and let us help you drive away in your dream car. New inventory and features are launching soon!
                  </p>
                  {/* Countdown Timer (dynamic) */}
                  <div className="grid grid-cols-4 gap-4 max-w-md mx-auto md:mx-0 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-indigo-300 text-sm">Days</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-indigo-300 text-sm">Hours</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-indigo-300 text-sm">Minutes</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-indigo-300 text-sm">Seconds</div>
                    </div>
                  </div>
                  {/* Newsletter Signup */}
                  <div className="max-w-md mx-auto md:mx-0">
                    <form className="flex flex-col sm:flex-row gap-3">
                      <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/10 backdrop-blur-sm border border-white/20" />
                      <button type="submit" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg font-medium transition-all duration-200 whitespace-nowrap">Notify Me</button>
                    </form>
                    <p className="text-xs text-indigo-300 mt-3">We respect your privacy. No spam, ever. Unsubscribe anytime.</p>
                  </div>
                  {/* Social Media */}
                  <div className="mt-10 flex justify-center md:justify-start space-x-6">
                    <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-200"><i className="fab fa-twitter text-xl"></i></a>
                    <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-200"><i className="fab fa-instagram text-xl"></i></a>
                    <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-200"><i className="fab fa-facebook text-xl"></i></a>
                    <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin-in text-xl"></i></a>
                  </div>
                </div>
                {/* Illustration */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
                    <img src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png" alt="Illustration" className="relative z-10 mx-auto floating-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - use the same as index.js/contact.js for consistency */}
    </Layout>
  );
}
