import React, { useState, useEffect } from "react";
// import ethersjs libary
import { ethers } from "ethers";
// import staking contract ABI
import StakingABI from "./StakingABI";
// notifier
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UnstakeForm = () => {
  // set state for the form
  const [amount, setAmount] = useState(0);
  const [stakedBalance, setStakedBalance] = useState(0);
  const [unStakeStatus, setUnstakeStatus] = useState("idle");

  // call out stake balance function using useEffect
  useEffect(() => {
    getStakedBalance();
  }, []);
  
  // create a function to handle input
  const handleAmount = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };

  // store staking addresss
  const stakingContractAddress = "0x5a75863d73904E9a0680cDB40B6E002EFb8af9D8";

  // write a function to withdraw the stakedBalance
  async function getStakedBalance() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const stakingContract = new ethers.Contract(
        stakingContractAddress,
        StakingABI,
        signer
      );

      // Get staked tokens balance
      const balance = await stakingContract.balanceOf(address);
      // convert it to integer
      const balanceInt = parseInt(balance);
      setStakedBalance(balanceInt);

      console.log(balanceInt);
    } catch (error) {
      console.log(error);
    }
  }

  // function to unstake token rewards
  async function unStakeToken() {
    try {
      setUnstakeStatus("unStaking");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractAddress,
        StakingABI,
        signer
      );

      // Stake tokens
      const stake = await stakingContract.withdraw(amount);
      await stake.wait();
      console.log(stake);

      toast.success(`Unstaking Successful`, stake);
      setUnstakeStatus("unStaked");
    } catch (error) {
      console.log(error);
      setUnstakeStatus("error");
      toast.error(`UnStaking Failed`, error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2">
        <form className="bg-white rounded px-4 md:px-8 pt-6 pb-8 mb-4 shadow-md mx-2 md:mx-auto">
          <h2 className="text-extra-large font-bold my-4 text-center">
            Stake <span className="text-[#6837cf] mt-4">$PowerArk</span>
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 mt-2"
              htmlFor="amount"
            >
              Enter Amount To Unstake:
            </label>
            <span className="text-gray-500">{stakedBalance} $PowerArk</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              id="amount"
              type="number"
              placeholder="Enter amount to Unstake ($PowerArk)"
              onChange={handleAmount}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#6837cf] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={unStakeToken}
            >
              {unStakeStatus === "unStaking" ? "UnStaking..." : "Unstake Token"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default UnstakeForm;
