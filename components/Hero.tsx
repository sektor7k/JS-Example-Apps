import React from 'react'
import Image from 'next/image'
import  CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll = () => {

    }



  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title '>
                Hızlı ve güvenilir freeleancer platformu
            </h1>

            <p className='hero__subtitle'> 
            Günevli bir şekilde kullanıcılara iş yapabilir 
            ve iş alabilirsiniz
            </p>

            <CustomButton
                title="Explore Cars"
                containerStyles = "bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll }
                />

        </div>
    </div>
  )
}

export default Hero