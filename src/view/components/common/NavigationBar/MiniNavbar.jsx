import React from "react";
import { BsCurrencyExchange } from "react-icons/bs";
import { FiHelpCircle, FiMail, FiPhone } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import Select from "react-select";

const languageOptions = [
  { value: "en", label: "English", icon: <IoLanguage /> },
  { value: "bn", label: "Bangla", icon: <IoLanguage /> },
];

const currencyOptions = [
  { value: "usd", label: "USD", icon: <BsCurrencyExchange /> },
  { value: "taka", label: "Taka", icon: <BsCurrencyExchange /> },
];

const customSelectStyles = {
  control: (base) => ({
    ...base,
    background: "linear-gradient(to right, #4F6EF7, #4A8CF7)",
    border: "none",
    boxShadow: "none",
    padding: "0 10px",
    borderRadius: "4px",
    cursor: "pointer",
    height: "32px",
    accentColor: undefined,
  }),
  option: (base, state) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    padding: "4px 10px",
    cursor: "pointer",
    background: state.isSelected ? "#4F6EF7" : "transparent",
    color: state.isSelected ? "white" : "inherit",
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    color: "white",
  }),
};

const MiniNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 lg:py-2 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <a href="tel:123456789" className="flex items-center text-gray-100">
          <FiPhone className="mr-1" />
          <span>123456789</span>
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center text-gray-100"
        >
          <FiMail className="mr-1" />
          <span>info@example.com</span>
        </a>
        <a href="/help" className="flex items-center text-gray-100">
          <FiHelpCircle className="mr-1" />
          <span>Need Help</span>
        </a>
      </div>
      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
        <div className="flex items-center text-gray-100">
          <IoLanguage className="mr-1" />
          <Select
            options={languageOptions}
            defaultValue={languageOptions[0]}
            components={{ IndicatorSeparator: null }}
            styles={customSelectStyles}
          />
        </div>
        <div className="flex items-center text-gray-100">
          <BsCurrencyExchange className="mr-1" />
          <Select
            options={currencyOptions}
            defaultValue={currencyOptions[0]}
            components={{ IndicatorSeparator: null }}
            styles={customSelectStyles}
          />
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
