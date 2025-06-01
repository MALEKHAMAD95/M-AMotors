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
  const [color, setColor] = useState('White');
  const [customColor, setCustomColor] = useState(null);

  const selectedBody = bodyTypes.find((b) => b.value === bodyType);
  const carImage = selectedBody ? selectedBody.image : '/svgs/sedan.svg';

  // Debug effect to check if mileage updates
  useEffect(() => {
    console.log('Current mileage:', mileage, 'Unit:', mileageUnit);
  }, [mileage, mileageUnit]);

  const handleColorChange = (c) => {
    setColor('');
    setCustomColor(c.hex);
  };

  const handleColorSelect = (option) => {
    setCustomColor(null);
    setColor(option ? option.value : '');
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
                  value={carColors.find((option) => option.value === color)}
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
                  <div className="flex-1">
                    <Slider
                      key={mileageUnit} // Force re-render when unit changes
                      value={displayMileage}
                      min={0}
                      max={mileageUnit === 'km' ? 300000 : 186411} // 300000 km = 186411 mi
                      step={1000}
                      onChange={(value) => {
                        const newMileage = mileageUnit === 'km'
                          ? value
                          : Math.round(value * 1.60934); // Convert mi to km for storage
                        handleMileageChange(newMileage);
                      }}
                    />
                    {/* Fallback Input for debugging */}
                    {/* <Input
                      type="number"
                      value={displayMileage}
                      min={0}
                      max={mileageUnit === 'km' ? 300000 : 186411}
                      step={1000}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        const newMileage = mileageUnit === 'km' ? val : Math.round(val * 1.60934);
                        handleMileageChange(newMileage);
                      }}
                      className="mt-2"
                    /> */}
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
                <p className="text-sm font-medium text-gray-600 mt-2">
                  {displayMileage.toLocaleString()} {mileageUnit}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6 flex flex-col items-center">
              <p className="font-semibold mb-4">Car Preview</p>
              <div
                className="w-64 h-40"
                style={{
                  backgroundImage: `url(${carImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: customColor || color.toLowerCase(),
                }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarSpecificationsPage;