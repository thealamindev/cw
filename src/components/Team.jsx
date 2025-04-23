import React from 'react'
import Container from './Container'
import Image from './Image'
import alamin from '../../public/images.jpg'

const Team = () => {
  return (
    <>
        <section id='team'>
        <div className="py-20 bg-gray-100">
            <h3 className="text-3xl font-bold text-center text-black">Meet Our Team</h3>
            <p className="text-center mt-4 text-black">We are a group of passionate individuals dedicated to making a difference.</p>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <Image imgSrc={alamin} imgAlt={"Team"} className={'w-full'}/>
                        <h4 className="text-xl font-semibold text-black mt-4">Al-Amin</h4>
                        <p className="mt-2 text-black">Lead Developer</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                    <Image imgSrc={alamin} imgAlt={"Team"} className={'w-full'}/>
                        <h4 className="text-xl font-semibold text-black mt-4">Salim Sadman Siam</h4>
                        <p className="mt-2 text-black">Chemistry Head</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                    <Image imgSrc={alamin} imgAlt={"Team"} className={'w-full'}/>
                        <h4 className="text-xl font-semibold text-black mt-4">Mashrafee Rahim</h4>
                        <p className="mt-2 text-black">ICT Head</p>
                    </div>
                </div>
            </Container>
        </div>
        </section>
    </>
  )
}

export default Team