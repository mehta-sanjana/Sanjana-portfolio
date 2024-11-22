import React from 'react';
import amazon from "../assets/portfolio/amazon.jpeg";
const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: amazon,
            href1: "https://mehta-sanjana.github.io/Amazon-clone/",
            href2: "https://github.com/mehta-sanjana/Amazon-clone"
        }

    ];
    const handleDemoClick = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    const handleCodeClick = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };
    return (
        <div name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out my works here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href1, href2 }) => (

                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt=""
                                className="rounded-md duration-200 hover:class-105" />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    onClick={() => handleDemoClick(href1)}>Demo</button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    onClick={() => handleCodeClick(href2)}>Code</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;