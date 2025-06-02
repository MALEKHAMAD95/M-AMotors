import React, { useState } from 'react';
import { FaStar, FaSlidersH, FaTachometerAlt, FaUser, FaHeart, FaRegHeart, FaEdit, FaTruckMoving, FaEye } from 'react-icons/fa';

const carsData = [
    {
        id: 1,
        rating: 4.7,
        comments: 109,
        available: true,
        status: 'إيجار', // حالات: إيجار، بيع، آخر
        img: "https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png",
        brand: "فورد",
        model: "Focus",
        price: 500,
        transmission: "يدوي",
        mileage: "كيلومترات غير محدودة",
        seats: 5,
        details: "هذه السيارة ممتازة للرحلات العائلية وتتمتع بكفاءة عالية في استهلاك الوقود."
    },
    {
        id: 2,
        rating: 4.6,
        comments: 58,
        available: true,
        status: 'بيع',
        img: "https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/kia_forte.png",
        brand: "نيسان",
        model: "Sentra",
        price: 420,
        transmission: "يدوي",
        mileage: "كيلومترات غير محدودة",
        seats: 5,
        details: "نيسان سنترا تتميز بتصميم أنيق وتقنيات أمان متطورة."
    },
    {
        id: 3,
        rating: 4.5,
        comments: 77,
        available: false,
        status: 'آخر',
        img: "https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/nissan_sentra.png",
        brand: "كيا",
        model: "Forte",
        price: 600,
        transmission: "يدوي",
        mileage: "كيلومترات غير محدودة",
        seats: 5,
        details: "كيا فورتي سيارة رياضية تجمع بين الأداء والقوة مع راحة القيادة."
    }, {
        id: 3,
        rating: 4.5,
        comments: 77,
        available: false,
        status: 'آخر',
        img: "https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/nissan_sentra.png",
        brand: "كيا",
        model: "Forte",
        price: 600,
        transmission: "يدوي",
        mileage: "كيلومترات غير محدودة",
        seats: 5,
        details: "كيا فورتي سيارة رياضية تجمع بين الأداء والقوة مع راحة القيادة."
    },
];

const statusColors = {
    إيجار: 'bg-blue-100 text-blue-700',
    بيع: 'bg-yellow-100 text-yellow-700',
    آخر: 'bg-gray-100 text-gray-700',
};

const CarCard = ({ car }) => {
    const [liked, setLiked] = useState(false);

    return (
        <article
            className="bg-white rounded-xl shadow-md transition-all duration-300 transform hover:scale-95 hover:shadow-lg hover:bg-gray-100 cursor-pointer max-w-[280px]"
        >
            {/* Header */}
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <a href="#" className="flex items-center text-yellow-400 text-sm font-semibold">
                        <FaStar className="mr-1" />
                        <span>{car.rating}</span>
                        <span className="text-gray-400 mr-2">({car.comments})</span>
                    </a>
                    <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${car.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}
                    >
                        {car.available ? 'متاح' : 'غير متاح'}
                    </span>

                    <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[car.status] || statusColors['آخر']}`}
                    >
                        {car.status}
                    </span>
                </div>
                <button
                    onClick={() => setLiked(!liked)}
                    className={`focus:outline-none text-xl ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500 transition-colors duration-200'
                        }`}
                    aria-label="Like button"
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>

            {/* Image */}
            <a href="#" className="block p-4 pt-2">
                <img
                    src={car.img}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full max-h-32 object-contain mx-auto"
                    loading="lazy"
                />
            </a>

            {/* Basic Info */}
            <div className="px-4 pb-2 space-y-1">
                <p className="text-gray-500 text-xs">{car.brand}</p>
                <h2 className="text-lg font-semibold text-gray-900 truncate">{car.model}</h2>
                <p className="text-md font-bold text-gray-900">
                    ${car.price}.00 <span className="text-xs text-gray-500">/ساعة</span>
                </p>
            </div>

            {/* Characteristics */}
            <div className="border-t border-gray-200 px-4 pb-3 pt-2 text-xs text-gray-600">
                <ul className="flex justify-between">
                    <li className="flex items-center space-x-1 rtl:space-x-reverse" title="ناقل الحركة">
                        <FaSlidersH className="text-sm" />
                        <span>{car.transmission}</span>
                    </li>
                    <li className="flex items-center space-x-1 rtl:space-x-reverse" title="عدد الكيلومترات">
                        <FaTachometerAlt className="text-sm" />
                        <span>{car.mileage}</span>
                    </li>
                    <li className="flex items-center space-x-1 rtl:space-x-reverse" title="عدد المقاعد">
                        <FaUser className="text-sm" />
                        <span>{car.seats}</span>
                    </li>
                </ul>
            </div>

            {/* Details */}
            <div className="px-4 pb-4 text-sm text-gray-700">
                <p>{car.details}</p>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-200 px-4 py-3 flex justify-between space-x-2 rtl:space-x-reverse">
                <button className="flex items-center space-x-1 rtl:space-x-reverse text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold text-sm">
                    <FaEye />
                    <span>عرض التفاصيل</span>
                </button>
                <button className="flex items-center space-x-1 rtl:space-x-reverse text-yellow-600 hover:text-yellow-800 transition-colors duration-200 font-semibold text-sm">
                    <FaEdit />
                    <span>تعديل</span>
                </button>
                <button className="flex items-center space-x-1 rtl:space-x-reverse text-gray-600 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm">
                    <FaTruckMoving />
                    <span>ترحيل</span>
                </button>
            </div>
        </article>
    );
};

const SingleMenuView = () => {
    return (
        <main className="py-8 px-6 bg-gray-50 min-h-screen font-sans flex justify-center">
            <div className="max-w-screen-xl w-full">
                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                    {carsData.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default SingleMenuView;
