import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Request() {
  return (
    <Layout title="Request Car | M&A Motors">
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
      {/* Hero Section with Steps */}
      <div className="from-[#1A2238] to-[#2A3550] pt-20">
        <div>
          <h2 className="mt-5 text-4xl font-extrabold text-center text-white-700">Request Car Steps</h2>
          <p className="text-center text-white text-md">Work flow - How it works</p>
          <div className="content-center lg:flex lg:justify-center lg:items-center">
            {/* Step 1 */}
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
              <div className="relative w-80 h-56">
                <div className="absolute top-0 left-0 flex items-center w-80 h-56 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                  <div className="w-1/3 h-40"></div>
                  <div className="w-2/3 h-32 pr-4">
                    <h3 className="pt-1 text-xl font-semibold text-gray-700">Send Request</h3>
                    <p className="pt-1 text-sm text-gray-600 capitalize">Share your desired car details brand, model, year, features, and budget. We listen to your needs.</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e53e3e" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                </div>
                <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">01</div>
                <div className="absolute top-12 left-0 z-30 w-24 h-2 mt-40 ml-1 bg-red-600"></div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
              <div className="relative w-80 h-56">
                <div className="absolute top-0 left-0 flex items-center w-80 h-56 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                  <div className="w-1/3 h-40"></div>
                  <div className="w-2/3 h-32 pr-4">
                    <h3 className="pt-1 text-xl font-semibold text-gray-700">We Search & Analyze</h3>
                    <p className="pt-1 text-sm text-gray-600">Our team analyzes your request, searches the market, and negotiates to find the best options for you.</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38a169" width="32px" height="32px"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" /><path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" /><path d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" /></g></g></svg>
                </div>
                <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg">02</div>
                <div className="absolute top-12 left-0 z-30 w-24 h-2 mt-40 ml-1 bg-green-600"></div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
              <div className="relative w-80 h-56">
                <div className="absolute top-0 left-0 flex items-center w-80 h-56 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                  <div className="w-1/3 h-40"></div>
                  <div className="w-2/3 h-32 pr-4">
                    <h3 className="pt-1 text-xl font-semibold text-gray-700">Get Matched & Drive</h3>
                    <p className="pt-1 text-sm text-gray-600">Receive a shortlist of the best-matched cars. Choose your favorite and we’ll help you complete the purchase, stress-free.</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3182ce" width="32px" height="32px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>
                </div>
                <div className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg">03</div>
                <div className="absolute top-12 left-0 z-30 w-24 h-2 mt-40 ml-1 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section (repeated for request) */}
      <section className="bg-[#2A3550] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">How It <span className="gradient-text">Works</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInLeft">
              <img src="https://img.icons8.com/ios-filled/50/FFFFFF/car.png" alt="Tell Us" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tell Us About Your Car</h3>
              <p className="text-gray-400">Send your car details and schedule a car inspection.</p>
            </div>
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInUp">
              <img src="https://img.icons8.com/ios-filled/50/FFFFFF/money.png" alt="Receive Offer" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Receive Best Offer</h3>
              <p className="text-gray-400">We promote, handle calls, and negotiate for you.</p>
            </div>
            <div className="process-step p-6 text-center rounded-lg shadow-md animate__animated animate__fadeInRight">
              <img src="https://img.icons8.com/ios-filled/50/FFFFFF/checked.png" alt="Get Paid" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-gray-400">We guarantee safe payment </p>
            </div>
          </div>
        </div>
      </section>
      {/* ...add more content as needed... */}
    </Layout>
  );
}
