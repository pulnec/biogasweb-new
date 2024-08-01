import React from 'react';
import img from '../images/web-01.png'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#307539] uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#307539]'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#307539]">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Custom Biogas Tank Design</h2>
                                    <p className="text-md font-medium">
                                        Tailored to meet specific project requirements, our custom biogas tank designs ensure optimal performance and efficiency. We utilize advanced engineering techniques to create tanks that maximize storage capacity and functionality.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Biogas Storage Solutions</h2>
                                    <p className="text-md font-medium">
                                        Our biogas storage solutions provide secure and reliable options for storing biogas generated from anaerobic digestion processes. We offer a variety of tank sizes and designs to accommodate different production scales and operational needs.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Biogas Tank Installation Services</h2>
                                    <p className="text-md font-medium">
                                        BiogasCover offers professional installation services for biogas tanks, ensuring that every component is set up correctly and efficiently. Our experienced team oversees the entire installation process, adhering to industry standards and safety regulations.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Maintenance and Repair for Biogas Tanks</h2>
                                    <p className="text-md font-medium">
                                        We provide comprehensive maintenance and repair services to keep your biogas tanks operating at peak performance. Our expert technicians conduct regular inspections, preventive maintenance, and timely repairs to extend the lifespan and efficiency of your tanks.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

        
        </div>
    )
}

export default Services;