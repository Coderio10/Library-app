import React from 'react';
// import Categories from './categories'
import "./css/index.css"
import Navbar from './Navbar';
import Hero from './Hero'
import CTAsection from './CTAsection'
import ServiceComponent from './serviceComponent';
import Testimonials from './testimonials'
import Footer from './footer'
import './css/index.css'

// Desktop
import imgBottle from './images/desktop/image-gallery-milkbottles.jpg'
import imgorange from './images/desktop/image-gallery-orange.jpg'
import imgCone from './images/desktop/image-gallery-cone.jpg'
import imgSugarcube from './images/desktop/image-gallery-sugarcubes.jpg'

// Mobile
import imgBottleMob from './images/mobile/image-gallery-milkbottles.jpg'
import imgorangeMob from './images/mobile/image-gallery-orange.jpg'
import imgConeMob from './images/mobile/image-gallery-cone.jpg'
import imgSugarcubeMob from './images/mobile/image-gallery-sugar-cubes.jpg'


export default function HeroSection() {

    const ImageSection = () => {
        return (
            <div className="ImageSection">
                <img src={imgBottle} alt="bottle" />
                <img src={imgorange} alt="half orange"/>
                <img src={imgCone} alt="Cone"/>
                <img src={imgSugarcube} alt="Sugar cube"/>
            </div>
        )
    } 

    const ImageSectionMobile = () => {
        return (
            <div className="ImageSectionMob">
                <img src={imgBottleMob} alt="bottle" />
                <img src={imgorangeMob} alt="half orange"/>
                <img src={imgConeMob} alt="Cone"/>
                <img src={imgSugarcubeMob} alt="Sugar cube"/>
            </div>
        )
    } 

    return (
        <div>
            <Navbar />
            <Hero />
            <CTAsection />
            <ServiceComponent />
            <Testimonials />
            <ImageSection />
            <ImageSectionMobile />
            <Footer />
        </div>

    )
} 