import React, { useRef } from "react";
import MainForm from "./MainForm";
import { FaLock,FaChartLine } from 'react-icons/fa';



const Hero = () => {
  // create a reference for the form elements
  const stakingFormRef = useRef(null);

  // Scroll to the form element with smooth scrolling behavior

  const handleStakeNowClick = () => {
    stakingFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // THE FIRST HERO SECTION
    <div className="container mx-auto">
      <div className="flex flex-wrap mt-8">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4">
            <h2 className="text-extra-large font-bold">
              Earn <span className="text-[#6837cf]">$PowerArk</span> Staking
              Rewards ✈️
            </h2>
            <p className="my-2 text-normal mt-4 text-[#191D32]">
              Stake your $PowerArk tokens and earn rewards! Empowering the
              Future with Sharded PoS Blockchain
            </p>
            <button
              className="bg-[#6837cf] rounded-full text-gray-300 px-5 py-2 mt-4"
              onClick={handleStakeNowClick}
            >
              Stake Now
            </button>
          </div>
        </div>
      </div>

      {/* REWARDS SECTION */}

      <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4">
            <h2 className="text-medium font-bold my-2 w-max">
              STAKE INFO
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="bg-[#C7E3E1] p-4">
                  <h3 className="font-medium">Rewards</h3>
                  <h4 className="text-extra-large mt-2">13.16%</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#C7E3E1] p-4">
                  <h3 className="font-medium">Lock-Up</h3>
                  <h4 className="text-extra-large mt-2">30d</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#C7E3E1] p-4">
                  <h3 className="font-medium">Slashing</h3>
                  <h4 className="text-extra-large mt-2">3.16%</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#C7E3E1] p-4">
                  <h3 className="font-medium">Exchanges</h3>
                  <h4 className="text-extra-large mt-2">4</h4>
                </div>
              </div>
            </div>
           
          </div>
        </div>

      {/* WHY STAKW WITH US SECTION */}
      <div className="mt-12 px-4 w-full">
              <div className="py-8">
                <h2 className="text-medium text-center font-bold mb-6">
                  Why Stake with Us?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <li className="bg-white p-4 rounded shadow">
                    <div className='flex justify-center items-center'>
                    <FaChartLine size={34} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">High Yield</h3>
                    <p>
                      Earn attractive staking rewards, with competitive rates
                      that outperform traditional investment options.
                    </p>
                  </li>
                  <li className="bg-white p-4 rounded shadow">
                    <div className="flex justify-center items-center">
                    <FaLock size={34}/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center" >
                      Secure and Trustworthy
                    </h3>
                    <p>
                      Our Dapp is built on a robust and secure blockchain
                      network, ensuring the safety of your assets and data.
                    </p>
                  </li>
                  <li className="bg-white p-4 rounded shadow">

                    <h3 className="text-xl font-bold mb-2 text-center">Flexibility</h3>
                    <p>
                      Stake your tokens for the desired duration and enjoy the
                      flexibility to withdraw or reinvest your rewards at any
                      time.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

      {/* MARKET,STAKE,YIELD SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-32">
              <div className="bg-gray-100 text-center p-4">
                <h4 className="text-normal">Market Cap</h4>
                <h4 className="text-medium mt-2">$28.32M</h4>
              </div>
              <div className="bg-gray-100 text-center p-4">
                <h4 className="text-normal">Stake Rate</h4>
                <h4 className="text-medium mt-2">45.69%</h4>
              </div>
              <div className="bg-gray-100 text-center p-4">
                <h4 className="text-normal">Normal Yield</h4>
                <h4 className="text-medium mt-2">10.16%</h4>
              </div>
        </div>


      {/* STAKE FORM */}
      <div className="mt-8" ref={stakingFormRef}>
        <MainForm />
      </div>
    </div>
  );
};

export default Hero;
