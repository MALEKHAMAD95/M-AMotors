import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout title="M&A Motors - Premium Car Purchase">
      <Head>
        <title>M&A Motors - Premium Car Purchase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta property="og:title" content="M&A Motors - Premium Car Purchase" />
        <meta
          property="og:description"
          content="Find your dream car in Canada with M&A Motors. Fast, free, and personalized car search and financing services."
        />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:url" content="https://Halalauto.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="M&A Motors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M&A Motors - Premium Car Purchase" />
        <meta
          name="twitter:description"
          content="Find your dream car in Canada with M&A Motors. Fast, free, and personalized car search and financing services."
        />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
      </Head>
      {/* Navigation */}
      <nav className="nav p-4 fixed w-full top-0 z-20 animate__animated animate__fadeInDown">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">
            <img
              src="/logo.png"
              alt="logo"
              className="logo"
              style={{ maxWidth: "10rem" }}
            />
          </Link>
          <div className="md:flex items-center space-x-6 hidden md:block nav-menu">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/cars"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Available Cars
            </Link>
            <Link
              href="/request"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Request Car
            </Link>
            <a
              href="tel:+3439977144"
              className="text-white hover:text-gray-300 transition duration-300 text-lg block md:inline"
            >
              (343) 997-7144
            </a>
          </div>
          <div className="md:hidden">
            <button
              id="navToggle"
              className="nav-toggle text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="md:hidden nav-menu bg-[#1A2238] flex-col px-4"
          id="navMenuMobile"
          style={{ display: "none" }}
        >
          <Link href="/" className="block py-2 text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact" className="block py-2 text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/cars" className="block py-2 text-white hover:text-gray-300">
            Available Cars
          </Link>
          <Link href="/request" className="block py-2 text-white hover:text-gray-300">
            Request Car
          </Link>
          <a
            href="tel:+3439977144"
            className="block py-2 text-white hover:text-gray-300"
          >
            (343) 997-7144
          </a>
        </div>
      </nav>
      {/* Hero Section with Search Form */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A2238] to-[#232e47] pt-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-center mb-6 animate__animated animate__fadeInUp">
            Find Your{" "}
            <span className="gradient-text">Perfect Car</span> in Canada
          </h1>
          <p className="text-lg text-gray-400 text-center mb-6 max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
            Enter your desired car specifications and let us search and negotiate
            for you to get the best deals in Canada. Fast & free service!
          </p>
          <div className="mb-4 text-center text-gray-300 text-lg">
            Please fill out the form below with your desired car specifications
            and we will contact you within 24 hours.
          </div>
          <div className="bg-[#2A3550] p-6 rounded-lg shadow-lg w-full max-w-4xl animate__animated animate__fadeInUp animate__delay-2s">
            {/* Car Search Form - full conversion */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="customerName"
                >
                  Customer Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  placeholder="e.g., John Doe"
                  className="custom-input w-full focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="customerEmail"
                >
                  Customer Email *
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  placeholder="e.g., john@example.com"
                  className="custom-input w-full focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="customerPhone"
                >
                  Customer Phone *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  placeholder="e.g., 416-123-4567"
                  className="custom-input w-full focus:outline-none"
                  required
                />
              </div>
              <div
                style={{
                  display: "block",
                  position: "relative",
                  zIndex: 55,
                }}
              >
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="brand"
                >
                  Brand *
                </label>
                <input
                  type="text"
                  id="brandInput"
                  name="brand"
                  placeholder="e.g., Toyota"
                  className="custom-input w-full focus:outline-none"
                  required
                />
                <div id="brandDropdown" className="dropdown"></div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300">
                  Year *
                </label>
                <div className="range-slider" id="yearRangeSlider">
                  <input
                    type="range"
                    min="1980"
                    max="2025"
                    step="1"
                    defaultValue="2000"
                    id="yearMinRange"
                  />
                  <input
                    type="range"
                    min="1980"
                    max="2025"
                    step="1"
                    defaultValue="2025"
                    id="yearMaxRange"
                  />
                  <div className="range-track">
                    <div className="range-track-bg"></div>
                    <div className="range-fill" id="yearRangeFill"></div>
                    <div className="range-handle-min" id="yearHandleMin"></div>
                    <div className="range-handle-max" id="yearHandleMax"></div>
                  </div>
                  <div className="range-values">
                    <input type="text" id="yearMinInput" maxLength={4} />
                    <input type="text" id="yearMaxInput" maxLength={4} />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300">
                  Price (CAD) *
                </label>
                <div className="range-slider" id="priceRangeSlider">
                  <input
                    type="range"
                    min="1000"
                    max="99999"
                    step="1"
                    defaultValue="1000"
                    id="priceMinRange"
                  />
                  <input
                    type="range"
                    min="1000"
                    max="99999"
                    step="1"
                    defaultValue="99999"
                    id="priceMaxRange"
                  />
                  <div className="range-track">
                    <div className="range-track-bg"></div>
                    <div className="range-fill" id="priceRangeFill"></div>
                    <div className="range-handle-min" id="priceHandleMin"></div>
                    <div className="range-handle-max" id="priceHandleMax"></div>
                  </div>
                  <div className="range-values">
                    <input type="text" id="priceMinInput" maxLength={5} />
                    <input type="text" id="priceMaxInput" maxLength={5} />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() => {
                    const el = document.getElementById("additionalDetails");
                    if (el) el.classList.toggle("active");
                  }}
                >
                  Additional Details
                </button>
              </div>
              <div id="additionalDetails" className="tab-content md:col-span-2">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="model"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="e.g., Camry"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="mileageMin"
                  >
                    Mileage Min (KM)
                  </label>
                  <input
                    type="number"
                    id="mileageMin"
                    name="mileageMin"
                    placeholder="e.g., 0"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="mileageMax"
                  >
                    Mileage Max (KM)
                  </label>
                  <input
                    type="number"
                    id="mileageMax"
                    name="mileageMax"
                    placeholder="e.g., 100000"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="transmission"
                  >
                    Transmission
                  </label>
                  <select
                    id="transmission"
                    name="transmission"
                    className="custom-input w-full focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="drivetrain"
                  >
                    Drivetrain
                  </label>
                  <select
                    id="drivetrain"
                    name="drivetrain"
                    className="custom-input w-full focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="fwd">FWD</option>
                    <option value="rwd">RWD</option>
                    <option value="awd">AWD</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="seats"
                  >
                    Seats
                  </label>
                  <input
                    type="number"
                    id="seats"
                    name="seats"
                    placeholder="e.g., 5"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="features"
                  >
                    Features
                  </label>
                  <select
                    id="features"
                    name="features"
                    multiple
                    className="custom-input w-full focus:outline-none"
                  >
                    <option value="ac">AC</option>
                    <option value="sunroof">Sunroof</option>
                    <option value="nav">Navigation</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="termYears"
                  >
                    Term Years
                  </label>
                  <input
                    type="number"
                    id="termYears"
                    name="termYears"
                    placeholder="e.g., 3"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="maxMonthly"
                  >
                    Max Monthly (CAD)
                  </label>
                  <input
                    type="number"
                    id="maxMonthly"
                    name="maxMonthly"
                    placeholder="e.g., 500"
                    className="custom-input w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex space-x-4">
                <button type="button" className="btn-primary w-full">
                  Send By Email
                </button>
                <button type="button" className="btn-primary w-full">
                  Send By WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-[#2A3550] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 animate__animated animate__fadeIn">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/diamond.png"
                alt="Best Value"
                className="w-8 h-8"
              />
              <p className="text-sm">Best Value Guarantee</p>
            </div>
            <div className="flex items-center space-x-4 animate__animated animate__fadeIn">
              <img
                src="https://img.icons8.com/?size=100&id=-N0s39F8WQSP&format=png&color=000000"
                alt="Cars Inspected"
                className="w-8 h-8"
              />
              <p className="text-sm">Cars Fully Inspected</p>
            </div>
            <div className="flex items-center space-x-4 animate__animated animate__fadeIn">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/home.png"
                alt="Delivered"
                className="w-8 h-8"
              />
              <p className="text-sm">Delivered to Your Doorstep</p>
            </div>
            <div className="flex items-center space-x-4 animate__animated animate__fadeIn">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/money.png"
                alt="Financing"
                className="w-8 h-8"
              />
              <p className="text-sm">Flexible Financing</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Cars Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">
          Our{" "}
          <span className="gradient-text">Premium Collection</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="car-card p-4">
            <img
              src="https://robbreport.com/wp-content/uploads/2024/10/2006-escalade-feature-e1730317391943.jpg?w=1024"
              alt="Car 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              Cadillac Escalade
            </h3>
            <p className="text-gray-400">
              2017 | 6.2L | 91,000 KM | CAD 1864/month
            </p>
            <p className="text-gray-500">SUV | Full Options</p>
            <Link
              href="/cars"
              className="text-[#4B6BFB] hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
          <div className="car-card p-4">
            <img
              src="https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Car 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              BMW 218i Gran Coupé
            </h3>
            <p className="text-gray-400">
              2021 | 1.5L | 48,000 KM | CAD 1551/month
            </p>
            <p className="text-gray-500">Sedan | Full Options</p>
            <Link
              href="/cars"
              className="text-[#4B6BFB] hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
          <div className="car-card p-4">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Car 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              BMW 430i Coupe M Kit
            </h3>
            <p className="text-gray-400">
              2018 | 2.0L | 43,000 KM | CAD 1478/month
            </p>
            <p className="text-gray-500">Coupe | Full Options</p>
            <Link
              href="/cars"
              className="text-[#4B6BFB] hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
          <div className="car-card p-4">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Car 4"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              Mercedes-Benz GLE 45
            </h3>
            <p className="text-gray-400">
              2020 | 3.0L | 114,000 KM | CAD 2804/month
            </p>
            <p className="text-gray-500">SUV | Full Options</p>
            <Link
              href="/cars"
              className="text-[#4B6BFB] hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>
      {/* Features Grid Section */}
      <section className="">
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
                Explore Our Car Search & Trading Features
              </h2>
              <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
                Discover how our platform makes finding and trading your dream car effortless. From personalized searches to seamless transactions, we empower your automotive journey.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-8">
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 100 100">
                  <path d="M65.156 4.42c-8.327 0-15.13 6.855-15.13 15.202s6.803 15.165 15.13 15.165c7.017 0 12.924-4.863 14.626-11.382h13.843a3.798 3.798 0 0 0 3.791-3.805 3.798 3.798 0 0 0-3.79-3.8h-13.86C78.053 9.294 72.16 4.42 65.156 4.42zM6.391 15.8a3.798 3.798 0 0 0-3.79 3.805 3.798 3.798 0 0 0 3.79 3.8h36.397c-.21-1.234-.348-2.493-.348-3.783 0-1.304.134-2.575.348-3.821zm28.47 18.987c-7.018 0-12.92 4.89-14.619 11.418H6.392a3.783 3.783 0 0 0-.363 0 3.801 3.801 0 0 0-3.52 4.062 3.798 3.798 0 0 0 3.882 3.535H20.25c1.71 6.511 7.604 11.382 14.61 11.382 8.328 0 15.167-6.848 15.167-15.195 0-8.347-6.84-15.202-15.166-15.202zm22.383 11.418c.21 1.234.347 2.494.347 3.784 0 1.3-.134 2.57-.347 3.813h36.381a3.795 3.795 0 0 0 3.874-3.714 3.796 3.796 0 0 0-3.874-3.883H57.244zm7.912 18.979c-8.327 0-15.13 6.855-15.13 15.202S56.83 95.58 65.157 95.58c7.007 0 12.907-4.87 14.618-11.382h13.851a3.796 3.796 0 0 0 3.706-3.883 3.795 3.795 0 0 0-3.706-3.714H79.782c-1.701-6.527-7.608-11.418-14.626-11.418zM6.029 76.602a3.801 3.801 0 0 0-3.52 4.062 3.798 3.798 0 0 0 3.882 3.535h36.412a22.541 22.541 0 0 1-.348-3.813c0-1.29.138-2.55.348-3.784H6.39a3.783 3.783 0 0 0-.362 0z" />
                </svg>
                <h3 className="text-lg font-semibold mb-3">Vehicle Customization</h3>
                <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">Personalize your car search with filters for brand, model, year, and more to find the perfect vehicle tailored to your needs.</p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 682.667 682.667">
                  <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="30" clipPath="url(#b)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M458.172 372.633a533.882 533.882 0 0 0-.474 16.345c-.303 20.475-16.411 37.184-36.856 38.326-62.529 3.493-111.431 24.292-152.737 64.553-6.912 6.336-17.279 6.336-24.191 0-41.306-40.261-90.208-61.06-152.737-64.553-20.445-1.142-36.553-17.851-36.857-38.325a530.642 530.642 0 0 0-.473-16.346C51.549 251.97 48.104 86.598 248.803 16.615a22.014 22.014 0 0 1 2.942-.801l.01-.002a21.72 21.72 0 0 1 8.509 0c1.002.2 1.996.47 2.961.807C463.342 86.602 460.47 251.398 458.172 372.633Z" /><path d="M368.408 256c0-62.082-50.327-112.409-112.409-112.409S143.592 193.918 143.592 256c0 62.082 50.327 112.409 112.408 112.409S368.408 318.082 368.408 256Z" /><path strokeLinecap="round" d="m303.227 284.952-69.785-69.785M206.773 241.834l26.668-26.668" /></g>
                </svg>
                <h3 className="text-lg font-semibold mb-3">Secure Transactions</h3>
                <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">Trade with confidence using our secure platform, featuring encrypted payments and verified seller protections.</p>
              </div>
              <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 512 512">
                  <path d="M495.984 252.588c-17.119-14.109-44.177-15.319-61.936 3.74l-44.087 47.327c-5.7-18.319-22.809-31.658-42.977-31.658h-78.675c-5.97 0-7.969-2.28-18.339-10.269-39.538-34.468-98.924-34.358-138.342.33L82.71 287.516c-12.999-6.88-28.178-7.05-41.248-.52L8.294 303.575c-7.41 3.71-10.409 12.719-6.71 20.129l89.995 179.989c3.71 7.41 12.719 10.409 20.129 6.71l33.168-16.589c16.349-8.169 25.448-24.849 24.858-41.827h177.249c32.868 0 64.276-15.699 83.995-41.997l72.006-96.014c13.969-18.61 11.759-45.899-7-61.388zM131.456 466.985l-19.749 9.879-76.585-153.16 19.759-9.879c7.41-3.7 16.409-.71 20.119 6.71l63.166 126.332c3.7 7.409.7 16.408-6.71 20.118zm347.529-171.009L406.98 391.99c-14.089 18.789-36.518 29.998-59.996 29.998H159.265l-56.207-112.423 28.388-24.988c28.248-24.849 70.846-24.849 99.094 0 16.639 14.649 26.988 17.419 37.768 17.419h78.675c8.27 0 14.999 6.73 14.999 14.999s-6.73 14.999-14.999 14.999h-76.605c-8.28 0-14.999 6.72-14.999 14.999s6.72 14.999 14.999 14.999h86.655c12.449 0 24.449-5.22 32.928-14.329l66.036-70.886c6.04-6.48 15.299-5.94 20.979-.97 5.939 5.199 6.58 14.089 2.009 20.169zm-163.6-193.609c10.269-10.769 16.599-25.328 16.599-41.358 0-33.018-26.678-60.996-59.996-60.996-33.068 0-60.996 27.928-60.996 60.996 0 15.539 6.09 30.208 17.149 41.478-27.428 15.379-47.147 44.897-47.147 79.515v14.999c0 8.279 6.72 14.999 14.999 14.999h150.991c8.279 0 14.999-6.72 14.999-14.999v-14.999c-.001-33.938-18.668-63.916-46.598-79.635zm-43.397-72.355c16.259 0 29.998 14.199 29.998 30.998 0 16.539-13.459 29.998-29.998 29.998-16.799 0-30.998-13.739-30.998-29.998 0-16.509 14.489-30.998 30.998-30.998zm-60.996 151.99c0-33.068 27.928-60.996 60.996-60.996 33.078 0 59.996 27.358 59.996 60.996H210.992z" />
                </svg>
                <h3 className="text-lg font-semibold mb-3">Expert Support</h3>
                <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">Our dedicated team is available 24/7 to guide you through the car search and trading process, ensuring a smooth experience.</p>
              </div>
              {/* Add the remaining 3 feature cards here, following the same pattern, using the SVGs and text from the original HTML. */}
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-[#2A3550] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">
            How{" "}
            <span className="gradient-text">It Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInLeft">
              <div className="text-4xl font-bold mb-2 text-[#4B6BFB]">1</div>
              <h3 className="text-xl font-semibold mb-2">
                Submit Your Car Request
              </h3>
              <p className="text-gray-400">
                Fill out the form and specify your desired car features.
              </p>
            </div>
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInUp">
              <div className="text-4xl font-bold mb-2 text-[#4B6BFB]">2</div>
              <h3 className="text-xl font-semibold mb-2">
                We Search & Negotiate
              </h3>
              <p className="text-gray-400">
                Our team finds the best options and negotiates on your behalf.
              </p>
            </div>
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInRight">
              <div className="text-4xl font-bold mb-2 text-[#4B6BFB]">3</div>
              <h3 className="text-xl font-semibold mb-2">
                Receive Offers & Choose
              </h3>
              <p className="text-gray-400">
                We send you the best offers to choose from and handle the process
                until delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Data Privacy Note */}
      <div className="text-sm text-gray-400 text-center mt-2 mb-8">
        All information is confidential and will not be shared with any third
        party.
      </div>
      {/* Testimonials Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">
          What Our{" "}
          <span className="gradient-text">Users Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate__animated animate__fadeInLeft">
            <p className="text-gray-400 mb-4">
              Using M&A Motors's online marketplace, you can sell your car
              anywhere across Canada and beyond. We connect buyers and sellers
              nationwide, offering unparalleled access to customers seeking to buy
              a car like yours.
            </p>
            <a
              href="#"
              className="text-[#4B6BFB] hover:underline"
            >
              We went an extra mile for them!
            </a>
          </div>
          <div className="space-y-6">
            <div className="car-card p-4 flex items-start space-x-4">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/user-male-circle.png"
                alt="User"
                className="w-12 h-12"
              />
              <div>
                <p className="text-gray-300 mb-2">
                  Awesome photo service, on time, great pics. Sold within a week!
                </p>
                <p className="text-[#4B6BFB]">Steve B.</p>
              </div>
            </div>
            <div className="car-card p-4 flex items-start space-x-4">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/user-male-circle.png"
                alt="User"
                className="w-12 h-12"
              />
              <div>
                <p className="text-gray-300 mb-2">
                  M&A Motors photography service was excellent, especially the
                  outdoor shots!
                </p>
                <p className="text-[#4B6BFB]">John M.</p>
              </div>
            </div>
            <div className="car-card p-4 flex items-start space-x-4">
              <img
                src="https://img.icons8.com/ios-filled/50/4B6BFB/user-male-circle.png"
                alt="User"
                className="w-12 h-12"
              />
              <div>
                <p className="text-gray-300 mb-2">
                  Sold my car in just a few hours after listing. Amazing service!
                </p>
                <p className="text-[#4B6BFB]">Mike T.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer - replace with original HTML footer content */}
      <footer className="bg-[#1A2238] py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">M&A Motors</h3>
            <p className="text-gray-400">
              Your go-to platform to find high-quality pre-owned cars in Canada. M&A
              Motors is Canada's leading website to find and finance your next car.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cars"
                  className="text-gray-400 hover:text-[#4B6BFB] transition duration-300"
                >
                  (343) 997-7144
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#4B6BFB] transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:Info@Halalauto.ca"
                  className="text-gray-400 hover:text-[#4B6BFB] transition duration-300"
                >
                  Info@Halalauto.ca
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#4B6BFB] transition duration-300"
                >
                  Financing a Car
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://whatsapp.com"
                className="text-[#4B6BFB] hover:text-[#3B5BEB]"
              >
                {/* WhatsApp SVG */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.566 4.24 1.632 6.07L0 24l6.068-1.593A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.001c-1.873 0-3.65-.52-5.177-1.43l-.373-.222-3.602.945.966-3.53-.233-.374C2.52 15.852 2 14.075 2 12.001 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10.001-10 10.001zm5.884-6.584l-1.252-.752a.833.833 0 00-.834-.052l-.315.157a5.833 5.833 0 01-2.67-.667 5.833 5.833 0 01-1.918-1.918 5.833 5.833 0 01-.667-2.67l.157-.315a.833.833 0 00-.052-.834l-.752-1.252a.833.833 0 00-.708-.375h-.834a.833.833 0 00-.833.833c0 2.5 1.25 4.584 3.334 5.834 2.083 1.25 4.584 1.25 5.834 0a.833.833 0 00.833-.833v-.834a.833.833 0 00-.375-.708z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-[#4B6BFB] hover:text-[#3B5BEB]"
              >
                {/* Instagram SVG */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.747.354-3.787 1.394s-1.328 2.334-1.394 3.787c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.453.354 2.747 1.394 3.787s2.334 1.328 3.787 1.394c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.747-.354 3.787-1.394s1.328-2.334 1.394-3.787c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.354-2.747-1.394-3.787s-2.334-1.328-3.787-1.394c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="text-[#4B6BFB] hover:text-[#3B5BEB]"
              >
                {/* Facebook SVG */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              Need help? Call us on{" "}
              <a
                href="tel:+3439977144"
                className="text-[#4B6BFB] hover:underline"
              >
                (343) 997-7144
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
