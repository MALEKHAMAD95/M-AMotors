import { useState } from 'react'
import { Input, Button, FormItem, Select } from '@/components/ui'
import { Card } from '@/components/ui'
import { HiOutlineSave } from 'react-icons/hi'
import Container from '@/components/shared/Container'

const CarBasicInfoPage = () => {
    const [formData, setFormData] = useState({
        carbrand: '', // Initialize with an empty string, will be updated to a name
        carType: '',
        modelYear: '',
        model: '',
        vinNumber: '',
        plateNumber: '',
    })
    const years = Array.from(
        { length: new Date().getFullYear() - 1960 + 2 },
        (_, index) => {
            const year = new Date().getFullYear() + 1 - index
            return {
                value: year.toString(),
                label: year.toString(),
            }
        },
    )
    // Map brands to { value, label } format compatible with Select
    const brands = [
        { value: 1, label: 'AC' },
        { value: 2, label: 'AC PROPULSION' },
        { value: 3, label: 'ACURA' },
        { value: 4, label: 'A.D. TRAMONTANA' },
        { value: 5, label: 'ALFA ROMEO' },
        { value: 6, label: 'ALMAC' },
        { value: 7, label: 'ALTERNATIVE CARS' },
        { value: 8, label: 'AMUZA' },
        { value: 9, label: 'ANTEROS' },
        { value: 10, label: 'ARASH' },
        { value: 11, label: 'ARIEL' },
        { value: 12, label: 'ARRINERA' },
        { value: 13, label: 'ASL' },
        { value: 14, label: 'ASTERIO' },
        { value: 15, label: 'ASTON MARTIN' },
        { value: 16, label: 'AUDI' },
        { value: 17, label: 'BAC' },
        { value: 18, label: 'BAJAJ' },
        { value: 19, label: 'BEIJING AUTOMOBILE WORKS' },
        { value: 20, label: 'BENTLEY' },
        { value: 21, label: 'BMW' },
        { value: 22, label: 'BOLLORÉ' },
        { value: 23, label: 'BOLWELL' },
        { value: 24, label: 'BRILLIANCE / HUACHEN' },
        { value: 25, label: 'BRISTOL' },
        { value: 26, label: 'BRITISH LEYLAND' },
        { value: 27, label: 'BRM BUGGY' },
        { value: 28, label: 'BROOKE' },
        { value: 29, label: 'BUDDY' },
        { value: 30, label: 'BUFORI' },
        { value: 31, label: 'BUGATTI' },
        { value: 32, label: 'BUICK' },
        { value: 33, label: 'BYD' },
        { value: 34, label: 'CADILLAC' },
        { value: 35, label: 'CAPARO' },
        { value: 36, label: 'CARBONTECH' },
        { value: 37, label: 'CARICE' },
        { value: 38, label: "CHANG'AN" },
        { value: 39, label: 'CHANGHE' },
        { value: 40, label: 'CHERY' },
        { value: 41, label: 'CHEVROLET' },
        { value: 42, label: 'CHEVRON' },
        { value: 43, label: 'CITROËN' },
        { value: 44, label: 'CHRYSLER' },
        { value: 45, label: 'COMMUTER CARS' },
        { value: 46, label: 'CONNAUGHT' },
        { value: 47, label: 'COVINI' },
        { value: 48, label: 'DACIA' },
        { value: 49, label: 'DAIHATSU' },
        { value: 50, label: 'DATSUN' },
        { value: 51, label: 'DE LA CHAPELLE' },
        { value: 52, label: 'DMC' },
        { value: 53, label: 'DIARDI' },
        { value: 54, label: 'DODGE' },
        { value: 55, label: 'DONKERVOORT' },
        { value: 56, label: 'DONGFENG' },
        { value: 57, label: 'DONTO' },
        { value: 58, label: 'DS AUTOMOBILES' },
        { value: 59, label: 'DYNASTI ELECTRIC CAR CORP.' },
        { value: 60, label: 'E-VADE' },
        { value: 61, label: 'EFFEDI' },
        { value: 62, label: 'EGY-TECH ENGINEERING' },
        { value: 63, label: 'ELECTRIC RACEABOUT' },
        { value: 64, label: 'ELFIN' },
        { value: 65, label: 'EMGRAND' },
        { value: 66, label: 'ENGLON' },
        { value: 67, label: 'ETERNITI' },
        { value: 68, label: 'ETOX' },
        { value: 69, label: 'EQUUS' },
        { value: 70, label: 'EXAGON' },
        { value: 71, label: 'FARALLI & MAZZANTI' },
        { value: 72, label: 'FAW' },
        { value: 73, label: 'FERRARI' },
        { value: 74, label: 'FIAT' },
        { value: 75, label: 'FISKER' },
        { value: 76, label: 'FODAY' },
        { value: 77, label: 'FORCE' },
        { value: 78, label: 'FORD' },
        { value: 79, label: 'FORD AUSTRALIA' },
        { value: 80, label: 'FORD GERMANY' },
        { value: 81, label: 'FORNASARI' },
        { value: 82, label: 'FRASER' },
        { value: 83, label: 'GAC GROUP' },
        { value: 84, label: 'GALPIN' },
        { value: 85, label: 'GEELY' },
        { value: 86, label: 'GENESIS' },
        { value: 87, label: 'GIBBS' },
        { value: 88, label: 'GILLET' },
        { value: 89, label: 'GINETTA' },
        { value: 90, label: 'GMC' },
        { value: 91, label: 'GONOW' },
        { value: 92, label: 'GREAT WALL / CHANGCHENG' },
        { value: 93, label: 'GREENTECH AUTOMOTIVE' },
        { value: 94, label: 'GRINNALL' },
        { value: 95, label: 'GTA MOTOR' },
        { value: 96, label: 'GUMPERT' },
        { value: 97, label: 'GURGEL' },
        { value: 98, label: 'HENNESSEY' },
        { value: 99, label: 'HINDUSTAN' },
        { value: 100, label: 'HOLDEN' },
        { value: 101, label: 'HONDA' },
        { value: 102, label: 'HONGQI' },
        { value: 103, label: 'HRADYESH' },
        { value: 104, label: 'HTT TECHNOLOGIES' },
        { value: 105, label: 'HULME' },
        { value: 106, label: 'HYUNDAI' },
        { value: 107, label: 'ICML' },
        { value: 108, label: 'IFR' },
        { value: 109, label: 'IRAN KHODRO' },
        { value: 110, label: 'IKCO' },
        { value: 111, label: 'IMPERIA' },
        { value: 112, label: 'INFINITI' },

        { value: 113, label: 'IVM' },
        { value: 114, label: 'INVICTA' },
        { value: 115, label: 'ISDERA' },
        { value: 116, label: 'ISUZU' },
        { value: 117, label: 'JAC' },
        { value: 118, label: 'JAGUAR' },
        { value: 119, label: 'JEEP' },
        { value: 120, label: 'JENSEN MOTORS' },
        { value: 121, label: 'JETCAR' },
        { value: 122, label: 'LAMBORGHINI' },
        { value: 199, label: 'Others' },
        { value: 200, label: 'Unknown' },
    ]

    const bodyTypes = [
        { value: 'coupe', label: 'Coupe', image: '/svgs/coupe.svg' },
        {
            value: 'hatchback',
            label: 'Hatchback',
            image: '/svgs/hatchback.svg',
        },
        {
            value: 'convertible',
            label: 'Convertible',
            image: '/svgs/convertible.svg',
        },
        { value: 'mpv', label: 'MPV', image: '/svgs/mpv.svg' },
        {
            value: 'crossover',
            label: 'Crossover',
            image: '/svgs/crossover.svg',
        },
        { value: 'suv', label: 'SUV', image: '/svgs/suv.svg' },
        { value: 'wagon', label: 'Wagon', image: '/svgs/wagon.svg' },
        {
            value: 'pickup_truck',
            label: 'Pickup truck',
            image: '/svgs/pickup_truck.svg',
        },
        { value: 'sedan', label: 'Sedan', image: '/svgs/sedan.svg' },
        { value: 'estate', label: 'Estate', image: '/svgs/estate.svg' },
        { value: 'minivan', label: 'Minivan', image: '/svgs/minivan.svg' },
        {
            value: 'sports_car',
            label: 'Sports car',
            image: '/svgs/sports_car.svg',
        },
        {
            value: 'suv_sports',
            label: 'SUV (sports utility vehicle)',
            image: '/svgs/suv_sports.svg',
        },
        { value: 'saloon', label: 'Saloon', image: '/svgs/saloon.svg' },
        {
            value: 'b_segment',
            label: 'B-segment',
            image: '/svgs/b_segment.svg',
        },
        {
            value: 'car_body_types',
            label: 'Car body types',
            image: '/svgs/car_body_types.svg',
        },
        { value: 'city_car', label: 'City car', image: '/svgs/city_car.svg' },
        {
            value: 'off_road_vehicle',
            label: 'Off-road vehicle',
            image: '/svgs/off_road_vehicle.svg',
        },
        {
            value: 'electric_vehicle',
            label: 'Electric vehicle',
            image: '/svgs/electric_vehicle.svg',
        },
        { value: 'jeep', label: 'Jeep', image: '/svgs/jeep.svg' },
        {
            value: 'commuter_car',
            label: 'Commuter car',
            image: '/svgs/commuter_car.svg',
        },
        { value: 'muv', label: 'MUV', image: '/svgs/muv.svg' },
        { value: 'roadster', label: 'Roadster', image: '/svgs/roadster.svg' },
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSelectChange = (name) => (option) => {
        setFormData((prev) => ({
            ...prev,
            [name]: option ? option.label : '',
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // TODO: connect with API
    }

    return (
        <Container className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Create New Car</h3>
                <Button
                    icon={<HiOutlineSave />}
                    variant="solid"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </div>

            <Card>
                <form
                    className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                    onSubmit={handleSubmit}
                >
                    <FormItem label="Car Brand" required>
                        <Select
                            options={brands}
                            value={
                                brands.find(
                                    (option) =>
                                        option.label === formData.carbrand,
                                ) || null
                            }
                            onChange={handleSelectChange('carbrand')}
                            placeholder="Select a brand"
                        />
                    </FormItem>

                    <FormItem label="Car Type" required>
                        <Select
                            options={bodyTypes}
                            value={
                                bodyTypes.find(
                                    (option) =>
                                        option.label === formData.carType,
                                ) || null
                            }
                            onChange={handleSelectChange('carType')}
                            placeholder="Select a car type"
                        />
                    </FormItem>
                    <FormItem label="Model Year" required>
                        <Select
                            options={years}
                            value={
                                years.find(
                                    (option) =>
                                        option.label === formData.modelYear,
                                ) || null
                            }
                            onChange={handleSelectChange('modelYear')}
                            placeholder="Select a year"
                        />
                    </FormItem>

                    <FormItem label="Model" required>
                        <Input
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            placeholder="ex :K3,K5,Forte,Cerato"
                        />
                    </FormItem>

                    <FormItem label="VIN Number" required>
                        <Input
                            name="vinNumber"
                            value={formData.vinNumber}
                            onChange={handleChange}
                            placeholder="1HGCM82633A123456"
                        />
                    </FormItem>

                    <FormItem label="Plate Number" required>
                        <Input
                            name="plateNumber"
                            value={formData.plateNumber}
                            onChange={handleChange}
                            placeholder="1234 XYZ"
                        />
                    </FormItem>
                </form>
            </Card>
        </Container>
    )
}

export default CarBasicInfoPage
