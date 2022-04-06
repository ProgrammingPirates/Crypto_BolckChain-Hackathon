import pileOfMoney from '../Assets/img/Pile of money.png'
import Ethereum from '../Assets/img/Ethereum.png'
import PieChart from '../Assets/img/Pie Chart.png'
import Wallet from '../Assets/img/Wallet.png'
import CreditCard from '../Assets/img/Credit Card.png'

import bgImg from '../Assets/img/bg-removebg.png'


export const Service = () => {
    return (
      <div className = "relative" id = "services">
        <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 lg:bottom-5 lg:opacity-30 lg:w-1/4"/>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-0 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                WHAT WE DO?
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
              <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                      />
                    </svg>

                <span className="relative text-white">Our Services</span>
              </span>{' '}
            </h2>
            <p className="text-base text-gray-200 md:text-lg">
            हम आपके लिए सबसे अधिक क्यूरेट की गई सेवाओं के साथ वित्तीय विकास की आपकी यात्रा को आसान और अधिक विश्वसनीय बनाने के लिए सर्वोत्तम संभव सेवाएं प्रदान करते हैं
            </p>
          </div>
          {/* our services */}
          <div className = "flex flex-col md:flex-row md:gap-8 ">
            <div className = "flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-xl">
              <img src={pileOfMoney} alt="" srcset="" className = ""/>
              <h2 className = "pb-8 font-bold text-center text-white uppercase md:pb-0">व्यक्तिगत वित्त प्रबंधन</h2>
            </div>
            <div className = "">
              <div className = "flex flex-col items-center justify-center mt-8 bg-white bg-opacity-10 rounded-xl md:mt-0">
                <img src={Ethereum} alt="" srcset=""  className = "w-1/2"/>
                <h2 className = "pb-8 font-bold text-center text-white uppercase">स्टॉक अवलोकन</h2>
              </div>
              <div className = "flex flex-col items-center justify-center mt-8 bg-white bg-opacity-10 rounded-xl">
                <img src={PieChart} alt="" srcset=""  className = "w-1/2"/>
                <h2 className = "pb-8 font-bold text-center text-white uppercase">निवेश रडार</h2>
              </div>
            </div>
            <div>
              <div className = "flex flex-col items-center justify-center mt-8 bg-white bg-opacity-10 rounded-xl md:mt-0">
                <img src={Wallet} alt="" srcset=""  className = "w-1/2"/>
                <h2 className = "pb-8 font-bold text-center text-white uppercase ">वित्तीय समाचार</h2>
              </div>
              <div className = "flex flex-col items-center justify-center mt-8 bg-white bg-opacity-10 rounded-xl">
                <img src={CreditCard} alt="" srcset=""  className = "w-1/2"/>
                <h2 className = "pb-8 font-bold text-center text-white uppercase">वित्तीय ज्ञान</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };