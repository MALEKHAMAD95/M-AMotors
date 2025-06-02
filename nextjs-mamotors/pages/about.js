import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Us | M&A Motors">
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
      <div className="from-[#1A2238] to-[#2A3550] pt-20">
        {/* ...hero content if any... */}
      </div>
      {/* How It Works Section */}
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
      {/* Popular Car Brands Carousel */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">Popular <span className="gradient-text">Car Brands</span> in Canada</h2>
        <div className="relative">
          <div className="carousel" id="brandCarousel">
            {/* ...carousel items for car brands... */}
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/toyota.png" alt="Toyota" className="logo-img" /><p className="mt-2">Toyota</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/kia.png" alt="Kia" className="logo-img" /><p className="mt-2">Kia</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/mercedes-benz.png" alt="Mercedes-Benz" className="logo-img" /><p className="mt-2">Mercedes-Benz</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/hyundai.png" alt="Hyundai" className="logo-img" /><p className="mt-2">Hyundai</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/mitsubishi.png" alt="Mitsubishi" className="logo-img" /><p className="mt-2">Mitsubishi</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/nissan.png" alt="Nissan" className="logo-img" /><p className="mt-2">Nissan</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/bmw.png" alt="BMW" className="logo-img" /><p className="mt-2">BMW</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/ford.png" alt="Ford" className="logo-img" /><p className="mt-2">Ford</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/porsche.png" alt="Porsche" className="logo-img" /><p className="mt-2">Porsche</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/lexus.png" alt="Lexus" className="logo-img" /><p className="mt-2">Lexus</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/audi.png" alt="Audi" className="logo-img" /><p className="mt-2">Audi</p></div>
            <div className="carousel-item car-card p-4"><img src="https://img.icons8.com/color/50/000000/honda.png" alt="Honda" className="logo-img" /><p className="mt-2">Honda</p></div>
          </div>
          {/* Carousel arrows (non-functional placeholder) */}
          <button className="carousel-arrow left-arrow" id="brandLeft"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
          <button className="carousel-arrow right-arrow" id="brandRight"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </section>
      {/* Newsletter/Contact Section */}
      <section className="newsletter">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp">How <span className="gradient-text">Contact Us </span></h2>
        <form>
          <div className="flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto max-w-[1300px] rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
            {/* ...SVGs and contact info as in original... */}
            {/* ...address, phone, email blocks... */}
          </div>
        </form>
      </section>
      {/* SVG Backgrounds and Footer (as in index.js/contact.js) */}
      {/* ...SVGs and footer JSX... */}
    </Layout>
  );
}
