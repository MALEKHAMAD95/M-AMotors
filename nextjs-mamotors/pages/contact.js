import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us | M&A Motors">
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 pt-20">
        <div className="relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-16 lg:py-28 px-6 sm:px-8">
            <div className="relative z-10 max-lg:text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white !leading-tight">
                Welcome to <span className="text-indigo-400 block"> M&A Motors </span>
              </h1>
              <div className="max-w-md md:max-w-3xl mx-auto mt-6">
                <div className="mt-12 lg:mt-16 flex flex-wrap max-lg:justify-center gap-6">
                  <div className="rounded-md shadow-sm"></div>
                  <div>
                    <a href="#location" className="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition border-0 cursor-pointer">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/M&AMotors.jpg" alt="hero-img" />
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#2e0249] rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
          <div>
            <h1 className="text-4xl font-semibold text-white">Get in Touch</h1>
            <p className="text-sm text-gray-300 mt-6 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 479.058 479.058"><path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/></svg>
                <a href="mailto:Info@Halalauto.ca" className="text-white text-sm ml-4">Info@Halalauto.ca</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 482.6 482.6"><path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"/></svg>
                <a href="tel:+3439977144" className="text-white text-sm ml-4">(343) 997-7144</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 368.16 368.16"><path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"/><path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"/></svg>
                <span className="text-white text-sm ml-4">B-2560 Bank Street, Ottawa, ON</span>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-sm font-semibold text-slate-900">I'm interested in...</p>
            <div className="flex items-center flex-wrap gap-4 mt-4">
              <button type="button" className="px-4 py-2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-0 cursor-pointer border-2 border-[#a91079]">New Car</button>
              <button type="button" className="px-4 py-2 rounded-lg bg-transparent text-slate-900 text-sm tracking-wider font-medium outline-0 cursor-pointer border-2 border-gray-300">Used car</button>
              <button type="button" className="px-4 py-2 rounded-lg bg-transparent text-slate-900 text-sm tracking-wider font-medium outline-0 cursor-pointer border-2 border-gray-300">Car for work</button>
            </div>
            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white" />
              <input type="email" placeholder="Email" className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white" />
              <input type="text" placeholder="Subject" className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white" />
              <textarea placeholder="Message" rows={6} className="w-full rounded-lg px-4 text-slate-900 text-sm pt-3 outline-0 bg-white"></textarea>
              <button type="submit" className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm font-medium px-4 py-3 flex items-center justify-center w-full cursor-pointer !mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2" viewBox="0 0 548.244 548.244"><path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Animated Wheel SVG Background and Visit Our Location Section */}
      <section className="bg-gray-700 mb-18 relative">
        <div className="group relative">
          <div className="absolute -top-12 -left-12 w-56 h-56 z-10 text-muted-400/20 animate-spin">
            {/* Animated SVG wheel */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 280.9 280.9" xmlSpace="preserve">
              <g>
                <path className="fill-current" d="M140.4,234.5c51.9,0,94.1-42.2,94.1-94.1c0-51.9-42.2-94.1-94.1-94.1c-51.9,0-94.1,42.2-94.1,94.1C46.4,192.3,88.6,234.5,140.4,234.5z M140.4,49.7c50,0,90.7,40.7,90.7,90.7c0,50-40.7,90.7-90.7,90.7c-50,0-90.7-40.7-90.7-90.7C49.7,90.4,90.4,49.7,140.4,49.7z" />
                <path className="fill-current" d="M183.6,140.4c0-23.8-19.3-43.1-43.1-43.1c-23.8,0-43.1,19.3-43.1,43.1c0,23.8,19.3,43.1,43.1,43.1C164.2,183.6,183.6,164.2,183.6,140.4z M140.4,180.2c-21.9,0-39.8-17.9-39.8-39.8c0-21.9,17.9-39.8,39.8-39.8c21.9,0,39.8,17.9,39.8,39.8C180.2,162.4,162.4,180.2,140.4,180.2z" />
                <path className="fill-current" d="M140.4,125.1c-8.5,0-15.3,6.9-15.3,15.3c0,8.5,6.9,15.3,15.3,15.3c8.5,0,15.3-6.9,15.3-15.3C155.8,132,148.9,125.1,140.4,125.1z M140.4,152.4c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12c6.6,0,12,5.4,12,12C152.4,147.1,147.1,152.4,140.4,152.4z" />
                <path className="fill-current" d="M162.4,125.9c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4C155,122.6,158.3,125.9,162.4,125.9z M162.4,114.4c2.3,0,4.1,1.8,4.1,4.1c0,2.3-1.8,4.1-4.1,4.1c-2.3,0-4.1-1.8-4.1-4.1C158.3,116.2,160.2,114.4,162.4,114.4z" />
                <path className="fill-current" d="M118.5,125.9c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4C111,122.6,114.4,125.9,118.5,125.9z M118.5,114.4c2.3,0,4.1,1.8,4.1,4.1c0,2.3-1.8,4.1-4.1,4.1c-2.3,0-4.1-1.8-4.1-4.1C114.4,116.2,116.2,114.4,118.5,114.4z" />
                <path className="fill-current" d="M118.5,155c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C125.9,158.3,122.6,155,118.5,155z M118.5,166.5c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C122.6,164.7,120.7,166.5,118.5,166.5z" />
                <path className="fill-current" d="M162.4,155c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C169.8,158.3,166.5,155,162.4,155z M162.4,166.5c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C166.5,164.7,164.7,166.5,162.4,166.5z" />
              </g>
            </svg>
          </div>
          <div className="grouprelative">
            <div className="absolute bottom-4 -right-20 w-56 h-56 z-10 text-muted-400/20 animate-spin">
              {/* Animated SVG wheel bottom right */}
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 280.9 280.9" xmlSpace="preserve">
                <g>
                  <path className="fill-current" d="M140.4,234.5c51.9,0,94.1-42.2,94.1-94.1c0-51.9-42.2-94.1-94.1-94.1c-51.9,0-94.1,42.2-94.1,94.1C46.4,192.3,88.6,234.5,140.4,234.5z M140.4,49.7c50,0,90.7,40.7,90.7,90.7c0,50-40.7,90.7-90.7,90.7c-50,0-90.7-40.7-90.7-90.7C49.7,90.4,90.4,49.7,140.4,49.7z" />
                  <path className="fill-current" d="M183.6,140.4c0-23.8-19.3-43.1-43.1-43.1c-23.8,0-43.1,19.3-43.1,43.1c0,23.8,19.3,43.1,43.1,43.1C164.2,183.6,183.6,164.2,183.6,140.4z M140.4,180.2c-21.9,0-39.8-17.9-39.8-39.8c0-21.9,17.9-39.8,39.8-39.8c21.9,0,39.8,17.9,39.8,39.8C180.2,162.4,162.4,180.2,140.4,180.2z" />
                  <path className="fill-current" d="M140.4,125.1c-8.5,0-15.3,6.9-15.3,15.3c0,8.5,6.9,15.3,15.3,15.3c8.5,0,15.3-6.9,15.3-15.3C155.8,132,148.9,125.1,140.4,125.1z M140.4,152.4c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12c6.6,0,12,5.4,12,12C152.4,147.1,147.1,152.4,140.4,152.4z" />
                  <path className="fill-current" d="M162.4,125.9c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4C155,122.6,158.3,125.9,162.4,125.9z M162.4,114.4c2.3,0,4.1,1.8,4.1,4.1c0,2.3-1.8,4.1-4.1,4.1c-2.3,0-4.1-1.8-4.1-4.1C158.3,116.2,160.2,114.4,162.4,114.4z" />
                  <path className="fill-current" d="M118.5,125.9c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4C111,122.6,114.4,125.9,118.5,125.9z M118.5,114.4c2.3,0,4.1,1.8,4.1,4.1c0,2.3-1.8,4.1-4.1,4.1c-2.3,0-4.1-1.8-4.1-4.1C114.4,116.2,116.2,114.4,118.5,114.4z" />
                  <path className="fill-current" d="M118.5,155c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C125.9,158.3,122.6,155,118.5,155z M118.5,166.5c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C122.6,164.7,120.7,166.5,118.5,166.5z" />
                  <path className="fill-current" d="M162.4,155c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C169.8,158.3,166.5,155,162.4,155z M162.4,166.5c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C166.5,164.7,164.7,166.5,162.4,166.5z" />
                </g>
              </svg>
            </div>
            <div id="location" className="relative w-full max-w-7xl mx-auto px-5 py-24 z-20">
              <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">Visit <span className="gradient-text">Our Location</span></h2>
              <div>
                <div className="mt-16 lg:mt-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-lg overflow-hidden">
                      {/* Google Maps Embed */}
                      <iframe className="map" src="https://www.google.com/maps?q=45.35360096569718,-75.64102750151952&z=15&output=embed" width="100%" height="480" frameBorder="0" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
                    </div>
                    <div>
                      <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                          <h3 className="text-lg font-medium text-white-900">Our Address</h3>
                          <p className="mt-1 text-white">B-2560 Bank Street, Ottawa, ON</p>
                        </div>
                        <div className="border-t border-white-200 px-6 py-4">
                          <h3 className="text-lg font-medium text-white-900">Hours</h3>
                          <p className="mt-1 text-white-600">Monday - Friday: 9am - 5pm</p>
                          <p className="mt-1 text-white-600">Saturday: 10am - 4pm</p>
                          <p className="mt-1 text-white-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
