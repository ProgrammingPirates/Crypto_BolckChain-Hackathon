import headerImg from '../Assets/img/Illustration.png'
import bgImg from '../Assets/img/bgxl-removebg.png'
import { Link } from 'react-router-dom';

export const Content = () => {
    return (
    <div className="img-comp" id = "home">
      <img src={bgImg} alt="" className = "hidden lg:block lg:absolute lg:opacity-30 lg:w-3/4 "/>
      <div className="relative flex flex-col-reverse px-10 py-16 lg:py-0 lg:flex-col ">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-10 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-11 xl:pr-6 ">
         
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:py-2 c">
            𝙈𝙚𝙚𝙩 𝙏𝙝𝙚 𝙉𝙚𝙬 𝙎𝙩𝙖𝙣𝙙𝙖𝙧𝙙 𝙁𝙤𝙧 
              <br className="hidden md:block " />
              𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝙁𝙞𝙣𝙖𝙣𝙘𝙚 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩
            </h2>
            <p className="z-50 mb-5 text-base text-gray-300 md:text-lg">
            लोगों को उनके लेन-देन के बारे में अधिक जागरूक बनाना और लोगों को आर्थिक रूप से अधिक बनाना
               ध्वनि के रूप में हम एक प्रगतिशील और अधिक सूचित भविष्य की ओर बढ़ते हैं
            </p>
            <div className="mb-10 md:mb-16 lg:mb-20">
              <Link
                to ="/login"
                className="inline-flex items-center justify-center w-full h-10 px-6 mt-4 font-medium tracking-wide transition duration-200 bg-white rounded-full shadow-md md:w-auto focus:shadow-outline focus:outline-none hover:bg-yellow-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
         <div className="inset-y-0 top-0 px-4 mx-auto mb-6 right-40 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 md:w-1/3 lg:w-1/4 lg:absolute xl:px-0">
         <img  src={headerImg} alt=""/>
         </div>
      </div>
    </div>
    );
  };