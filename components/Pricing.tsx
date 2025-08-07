"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");

  const prices = [
    {
      planName: "Starter Plan",
      price: 2,
      subtitle: "For individuals starting their productive journey",
      features: ["Tasks and event management", "Daily reminder for task", "Tasks and event management", "Daily reminder for task", "Daily reminder for task"],
      btntext: "Start Free Trial",
    },
    {
      planName: "Pro Plan",
      price: 4,
      subtitle: "For individuals starting their productive journey",
      isPopular: true,
      features: ["Tasks and event management", "Daily reminder for task", "Tasks and event management", "Daily reminder for task", "Daily reminder for task"],
      btntext: "Get Pro Now",
    },
    {
      planName: "Teams Plan",
      price: 8,
      subtitle: "For individuals starting their productive journey",
      features: ["Tasks and event management", "Daily reminder for task", "Tasks and event management", "Daily reminder for task", "Daily reminder for task"],
      btntext: "Start For Your Team",
    },
  ];

  return (
    <div  id='pricing' className="bg-gradient-to-r max-sm:px-2 from-white to-green-200/30">
      <p className="sm:text-5xl text-4xl font-semibold text-center py-2">
        Pick your plan and get started
      </p>
      <p className="sm:max-w-[60%] text-center mx-auto text-black/80 my-4 ">
        Connect Track Wise with the tools you rely on every day - email,
        calendars and more. It's quick, easy, and keeps everything running
        smoothly so you can focus on what really matters.{" "}
      </p>
      <div className="p-2 w-fit mx-auto bg-gray-200/50 rounded-full flex items-center gap-3 ">
        <span
          className={` ${
            activeTab === "monthly" ? "bg-white" : "bg-transparent"
          } cursor-pointer h-full px-5 rounded-full py-2 `}
          onClick={() => {
            setIsAnnual(false);
            setActiveTab("monthly");
          }}
        >
          Monthly
        </span>
        <span
          className={` ${
            activeTab === "annual" ? "bg-white" : "bg-transparent"
          } cursor-pointer h-full px-5 rounded-full py-2 flex items-center `}
          onClick={() => {
            setIsAnnual(true);
            setActiveTab("annual");
          }}
        >
          Annual{" "}
          <span className="px-3 bg-gray-100 mx-3 rounded-full ">save 30%</span>{" "}
        </span>
      </div>
      <div className="flex flex-row flex-wrap items-center pt-10 pb-20 justify-center gap-5 ">
        {prices.map((data) => (
          <span key={data.planName}>
            <PricingCard
            isAnnual={isAnnual}
              planName={data.planName}
              price={data.price}
              isPopular={data.isPopular}
              subtitle={data.subtitle}
              features={data.features}
              btnText={data.btntext}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
