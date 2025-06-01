import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SketchPicker } from 'react-color';
import Slider from '@/components/shared/Slider';

const engineSizes = [
  { value: '1.0L', label: '1.0L' },
  { value: '1.2L', label: '1.2L' },
  { value: '1.4L', label: '1.4L' },
  { value: '1.6L', label: '1.6L' },
  { value: '1.8L', label: '1.8L' },
  { value: '2.0L', label: '2.0L' },
  { value: '2.2L', label: '2.2L' },
  { value: '2.4L', label: '2.4L' },
  { value: '2.5L', label: '2.5L' },
  { value: '2.7L', label: '2.7L' },
  { value: '3.0L', label: '3.0L' },
  { value: '3.5L', label: '3.5L' },
  { value: '4.0L', label: '4.0L' },
  { value: '5.0L', label: '5.0L' },
];

const bodyTypes = [
  { value: 'coupe', label: 'Coupe', image: '/svgs/coupe.svg' },
  { value: 'hatchback', label: 'Hatchback', image: '/svgs/hatchback.svg' },
  { value: 'convertible', label: 'Convertible', image: '/svgs/convertible.svg' },
  { value: 'mpv', label: 'MPV', image: '/svgs/mpv.svg' },
  { value: 'crossover', label: 'Crossover', image: '/svgs/crossover.svg' },
  { value: 'suv', label: 'SUV', image: '/svgs/suv.svg' },
  { value: 'wagon', label: 'Wagon', image: '/svgs/wagon.svg' },
  { value: 'pickup_truck', label: 'Pickup truck', image: '/svgs/pickup_truck.svg' },
  { value: 'sedan', label: 'Sedan', image: '/svgs/sedan.svg' },
  { value: 'estate', label: 'Estate', image: '/svgs/estate.svg' },
  { value: 'minivan', label: 'Minivan', image: '/svgs/minivan.svg' },
  { value: 'sports_car', label: 'Sports car', image: '/svgs/sports_car.svg' },
  { value: 'suv_sports', label: 'SUV (sports utility vehicle)', image: '/svgs/suv_sports.svg' },
  { value: 'saloon', label: 'Saloon', image: '/svgs/saloon.svg' },
  { value: 'b_segment', label: 'B-segment', image: '/svgs/b_segment.svg' },
  { value: 'car_body_types', label: 'Car body types', image: '/svgs/car_body_types.svg' },
  { value: 'city_car', label: 'City car', image: '/svgs/city_car.svg' },
  { value: 'off_road_vehicle', label: 'Off-road vehicle', image: '/svgs/off_road_vehicle.svg' },
  { value: 'electric_vehicle', label: 'Electric vehicle', image: '/svgs/electric_vehicle.svg' },
  { value: 'jeep', label: 'Jeep', image: '/svgs/jeep.svg' },
  { value: 'commuter_car', label: 'Commuter car', image: '/svgs/commuter_car.svg' },
  { value: 'muv', label: 'MUV', image: '/svgs/muv.svg' },
  { value: 'roadster', label: 'Roadster', image: '/svgs/roadster.svg' },
];

const carColors = [
  { value: 'White', label: 'White' },
  { value: 'Black', label: 'Black' },
  { value: 'Silver', label: 'Silver' },
  { value: 'Gray', label: 'Gray' },
  { value: 'Red', label: 'Red' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Green', label: 'Green' },
  { value: 'Yellow', label: 'Yellow' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Brown', label: 'Brown' },
  { value: 'Beige', label: 'Beige' },
  { value: 'Gold', label: 'Gold' },
  { value: 'Purple', label: 'Purple' },
  { value: 'other', label: 'Other' }, // Add 'Other' option
];

const mileageUnits = [
  { value: 'km', label: 'Kilometers (km)' },
  { value: 'mi', label: 'Miles (mi)' },
];

const CarSpecificationsPage = () => {
  const [engineSize, setEngineSize] = useState('1.6L');
  const [bodyType, setBodyType] = useState('sedan');
  const [mileage, setMileage] = useState(50000); // Stored in kilometers
  const [mileageUnit, setMileageUnit] = useState('km'); // Default to kilometers
  const [color, setColor] = useState('Black');
  const [customColor, setCustomColor] = useState(null);

  const selectedBody = bodyTypes.find((b) => b.value === bodyType);
  const carImage = selectedBody ? selectedBody.image : '/svgs/sedan.svg';

  // Debug effect to check if mileage updates
  useEffect(() => {
    console.log('Current mileage:', mileage, 'Unit:', mileageUnit);
  }, [mileage, mileageUnit]);

  const handleColorChange = (c) => {
    setColor('other'); // Set select to 'Other' when custom color is picked
    setCustomColor(c.hex);
  };

  const handleColorSelect = (option) => {
    if (option && option.value === 'other') {
      // Keep custom color if already set, otherwise default to black
      setColor('other');
      setCustomColor(customColor || '#000000');
    } else {
      setCustomColor(null);
      setColor(option ? option.value : '');
    }
  };

  const handleMileageChange = (value) => {
    console.log('Mileage changed to:', value); // Debug log
    setMileage(value);
  };

  const handleMileageUnitChange = (option) => {
    const newUnit = option ? option.value : 'km';
    if (newUnit !== mileageUnit) {
      // Convert mileage when unit changes
      const newMileage = mileageUnit === 'km'
        ? Math.round(mileage * 0.621371) // km to mi
        : Math.round(mileage * 1.60934); // mi to km
      setMileage(newMileage);
      setMileageUnit(newUnit);
    }
  };

  // Display mileage in the selected unit
  const displayMileage = mileageUnit === 'km'
    ? mileage
    : Math.round(mileage * 0.621371); // Convert km to mi for display

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Car Specifications</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold mb-1 block">Engine Size</label>
                <Select
                  options={engineSizes}
                  value={engineSizes.find((option) => option.value === engineSize)}
                  onChange={(option) => setEngineSize(option ? option.value : '1.6L')}
                  placeholder="Select engine size"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Body Type</label>
                <Select
                  options={bodyTypes}
                  value={bodyTypes.find((option) => option.value === bodyType)}
                  onChange={(option) => setBodyType(option ? option.value : 'sedan')}
                  placeholder="Select body type"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Color</label>
                <Select
                  options={carColors}
                  value={
                    customColor ? carColors.find((c) => c.value === 'other') : carColors.find((option) => option.value === color)
                  }
                  onChange={handleColorSelect}
                  placeholder="Select color"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Or Pick Custom Color</label>
                <SketchPicker
                  color={customColor || color}
                  onChangeComplete={handleColorChange}
                />
              </div>
              <div className="col-span-2">
                <label className="font-semibold mb-1 block">Mileage</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700 font-medium">Drag to set mileage</span>
                      <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm shadow">
                        {displayMileage.toLocaleString()} {mileageUnit}
                      </span>
                    </div>
                    <Slider
                      key={mileageUnit}
                      value={displayMileage}
                      min={0}
                      max={mileageUnit === 'km' ? 300000 : 186411}
                      step={1000}
                      onChange={(value) => {
                        const newMileage = mileageUnit === 'km'
                          ? value
                          : Math.round(value * 1.60934);
                        handleMileageChange(newMileage);
                      }}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                      thumbClassName="h-6 w-6 bg-blue-600 border-4 border-white rounded-full shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-40">
                    <Select
                      options={mileageUnits}
                      value={mileageUnits.find((option) => option.value === mileageUnit)}
                      onChange={handleMileageUnitChange}
                      placeholder="Select unit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6 flex flex-col items-center">
              <p className="font-semibold mb-4">Car Preview</p>
              <div className="w-64 h-40 flex items-center justify-center bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill={customColor || color.toLowerCase()} width="120" height="60" viewBox="http://www.w3.org/2000/svg" style={{transition: 'fill 0.3s'}}> 
                  <g>
                    <path d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"/>
                  </g>
                </svg>
              </div>
              {/* <span className="mt-3 text-gray-600 text-sm">{selectedBody ? selectedBody.label : 'Car'}</span> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarSpecificationsPage;