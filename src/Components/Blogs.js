import { getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
// import { Balance } from "./Balance";
// import { TransactionList } from "./TransactionList";
// import Stock from "./Stock"
import { Link } from 'react-router-dom'
// import News from "./News";
import bgImg from '../Assets/img/bg-removebg.png'


import { useHistory } from "react-router-dom";

const Blogs = () => {
    const history = useHistory();

    const auth = getAuth();
    const user = auth.currentUser;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);



    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    }, [])

    const openMenu = () => {
        if (isMenuOpen === false) {
            setIsMenuOpen(true)
        }
        else {
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            <div className="flex w-screen h-screen text-gray-400 bg-black">
                <div className={`${isSideBarOpen ? "" : "hidden"} absolute z-50 h-full lg:relative lg:z-0  bg-black lg:flex lg:flex-col w-56 border-r border-gray-800`}>
                    <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                        <img src="/kryptonlogo1.png" alt="" className="w-1/2" />
                        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                    </div>
                    <div class="flex flex-col flex-grow p-4 overflow-auto">
                        <Link class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard">
                            Dashboard
                        </Link>
                        <Link class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/ewallet">
                            E-wallet
                        </Link>
                        <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/stockinsight">
                            <span className="leading-none">Stock Insight</span>
                        </Link>
                        <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/news">
                            <span className="leading-none">News</span>
                        </Link>
                        <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/blogs">
                            <span className="leading-none">Blogs</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col flex-grow w-full ">
                    <div className="flex items-center h-16 px-8 border-b border-gray-800">
                        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
                            <Hamburger />
                        </button>
                        <h1 className="px-4 text-lg font-medium">Welcome</h1>
                        <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800" onClick={() => openMenu()} >
                            {user ? user.displayName : "Anonymous User"}
                            <i className="px-2 fas fa-angle-down"></i>
                        </button>
                    </div>
                    {/* Dropdown component */}
                    <div className={`absolute right-10 flex flex-col top-12 z-50  w-30 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex 
            ${isMenuOpen ? "" : "hidden"}`}>
                        <button onClick={logout} className="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Logout</button>
                    </div>
                    <div class="flex-grow p-6 bg-black overflow-y-auto h-full">
                        <img src={bgImg} alt="" srcset="" className="hidden mt-10 lg:block lg:absolute lg:right-0 lg:top-5 lg:opacity-30 lg:w-1/5 " />
                        <div class="grid lg:grid-cols-2  grid-flow-row gap-5">
                            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">
                                <h2 className="z-40 flex items-center justify-center py-4 mt-2 text-center text-white text-yellow-300 md:text-2xl" >GET WEEKLY INSIGHTS AND FACTS RIGHT IN YOUR INBOX</h2>
                                <form className="flex flex-col items-center w-full pb-4 mt-16 mb-4 border-opacity-0 gform pure-form pure-form-stacked mt- md:flex-row md:px-8" action="https://script.google.com/macros/s/AKfycbxr5o2KSj72H9YEBrI2EcmR7ylzqXOTe9sMuORvZidB012q_F8hEGMDlYsSVoJqhaGu1g/exec" method="POST" data-email="crypto@gmail.com">
                                    <input
                                        placeholder="Email"
                                        required=""
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline "
                                    />
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 bg-gray-200 rounded shadow-md hover:bg-yellow-300 md:w-auto "
                                    >
                                        Subscribe
                                    </button>
                                    <div class="thankyou_message hidden">
                                        <h2 className="font-bold text-white"><em>Thanks</em> for contacting us!
                                            We will get back to you soon!</h2>
                                    </div>
                                </form>
                            </div>
                            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl overflow-y-auto">
                                <h1 className="mt-2 ml-4 text-2xl text-yellow-300 ">शेयर चार्ट कैसे पढ़े</h1>
                                <p className="mx-4 my-4 leading-6">एक स्टॉक चार्ट किसी कंपनी या इंडेक्स के किसी विशेष स्टॉक का प्राइस चार्ट होता है, जिसे पूरे समय में आयोजित किया जाता है। एक्स-एक्सिस पर समय-सीमा (इंट्रा-डे, दैनिक, साप्ताहिक, मासिक या वार्षिक) है और वाई-एक्सिस पर स्टॉक की कीमत है। यह जानकारी के अन्य टुकड़ों का भी प्रतिनिधित्व करता है जो आपको बाजार में एक विशेष स्टॉक कैसे कर रहे हैं की पूरी जानकारी प्राप्त करने की आवश्यकता होगी।</p>
                                <h3 className="ml-4 text-lg text-white hover:text-yellow-300"><a href="https://www.fincash.com/l/hi/stock/how-to-read-stock-charts">Read Here..</a></h3>
                            </div>
                            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl overflow-y-auto" >
                                <h1 className="mt-2 ml-4 text-2xl text-yellow-300 ">स्टॉक चुनने का सही तरीका क्या है?</h1>
                                <p className="mx-4 my-4 leading-6">जब मैंने निवेश करना शुरू किया, तो मुझे स्टॉक मार्केट में पैसा कमाने का सिर्फ एक तरीका पता था।

शेयर उठाना। जिसका मतलब था कि किसी विशेष स्टॉक को लेना, और फिर आँख बंद करके झुंड का पालन करना, कभी-कभी किस्मत चमक जाती थी, और कई बार मैं नुकसान करने के बाद बाहर निकल गया।

अब सच्चाई यह थी कि मै अपने निवेश में कुछ महत्वपूर्ण बातें  भूल गया था। वह था अनुशासन और ज्ञान का अभाव और क्यों स्टॉक का चयन करना जरुरी है।</p>
                                <h3 className="ml-4 text-lg text-white hover:text-yellow-300"><a href="https://www.elearnmarkets.com/blog/what-is-the-right-method-of-selecting-stocks-hindi/">Read Here..</a></h3>
                            </div>
                            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl overflow-y-auto" >
                                <h1 className="mt-2 ml-4 text-2xl text-yellow-300">शेयर ट्रेडिंग में सफलता के लिए क्या ज़रूरी है?</h1>
                                <p className="mx-4 my-4 leading-6">आपने सुना होगा कि शेयर बाजार में बड़ी आसानी से पैसा बनाया जा सकता है। यह सच है कि शेयर बाजार में ट्रेडिंग का काम चालू करना बहुत आसान हो गया है। मगर आपको ध्यान रखना होगा कि ट्रेडिंग को लाभदायक बनाना एक कठिन परिश्रम है।  </p>
                                <h3 className="ml-4 text-lg text-white hover:text-yellow-300"><a href="https://zerodha.com/z-connect/hindi/%E0%A4%B6%E0%A5%87%E0%A4%AF%E0%A4%B0-%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%A1%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%A8%E0%A5%87-%E0%A4%95">Read Here..</a></h3>
                            </div>
                            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl overflow-y-auto">
                                <h1 className="mt-2 ml-4 text-2xl text-yellow-300 ">इंट्राडे ट्रेडिंग: यहां कुछ घंटों में मिल सकता है बंपर रिटर्न, लेकिन ध्यान रखें ये 5 टिप्स</h1>
                                <p className="mx-4 my-4 leading-6">अगर आप सही और सटीक शेयर चुन लेते हैं तो इंट्राउे ट्रेडिंग में मोटा मुनाफा कमा सकते हैं. बाजार में एक ही ट्रेडिंग डे पर शेयर खरीदने और बेचने को इंट्रा डे ट्रेडिंग कहते हैं. यहां शेयर खरीदा तो जाता है लेकिन उसका मकसद निवेश करना नहीं, बल्कि एक दिन में उसमें होने वाली बढ़त से मुनाफा कमाना होता है.  </p>
                                <h3 className="ml-4 text-lg text-white hover:text-yellow-300"><a href="https://www.financialexpress.com/hindi/business-news/what-is-intraday-trading-and-how-you-make-huge-money-within-some-hours-or-single-day-trading/2250446/#:~:text=%E0%A4%85%E0%A4%97%E0%A4%B0%20%E0%A4%86%E0%A4%AA%20%E0%A4%B8%E0%A4%B9%E0%A5%80%20%E0%A4%94%E0%A4%B0%20%E0%A4%B8%E0%A4%9F%E0%A5%80%E0%A4%95,%E0%A4%B8%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%AB%E0%A4%BE%20%E0%A4%95%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88.">Read Here..</a></h3>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Blogs