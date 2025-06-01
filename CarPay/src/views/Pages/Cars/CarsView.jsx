// File: src/components/CarRequestForm.jsx
import { useState } from 'react'
import ProjectDetails from './utils/CarDetails'

const CarsView = (props) => {
    return <>
    <div className='page-container bg-white relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8 container mx-auto'> 
    <ProjectDetails/>
    </div> </>
}

export default CarsView
