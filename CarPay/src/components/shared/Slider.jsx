import { FaTachometerAlt } from 'react-icons/fa'

import { FaCar } from 'react-icons/fa'

const Slider = ({ value, min = 0, max = 100, step = 1, onChange }) => {
    // Calculate the position of the thumb (as a percentage)
    const percentage = ((value - min) / (max - min)) * 100

    return (
        <div className="w-full relative">
            {/* Label with Icon */}
            <div className="flex items-center gap-2 mb-2">
                <FaTachometerAlt
                    className="text-white-600 w-6 h-6 drop-shadow-md 
                       hover:text-red-800 transition-colors duration-200"
                />

                <span className="text-sm font-medium text-gray-700">
                    Mileage
                </span>
            </div>

            {/* Slider Track with Filled Section */}
            <div className="relative w-full h-3 bg-gray-200 rounded-lg overflow-hidden">
                {/* Filled Track (before thumb) */}
                <div
                    className="absolute h-full bg-blue-600 rounded-lg"
                    style={{ width: `${percentage}%` }}
                />
                {/* Input Range (invisible thumb) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute w-full h-3 opacity-0 cursor-pointer"
                />
                {/* Custom Thumb (Icon) */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${percentage}%` }}
                >
                    <FaCar
                        className="text-blue-600 w-6 h-6 drop-shadow-md 
                       hover:text-blue-800 transition-colors duration-200"
                    />
                </div>
            </div>

            {/* Min/Max Labels and Value Display */}
            <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
                <span>{min.toLocaleString()}</span>
                <span>{max.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default Slider
