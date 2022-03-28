import React from "react";

const TextInput = ({ placeholder, label, type }) => {
    return (
        <div className="flex flex-col text-gray-600 text-sm">
            <span className="text-sm font-medium mb-3">{label}</span>
            <input
                type={type}
                className="border border-gray-300 px-5 py-3 focus:outline-none rounded-full focus:border-blue-500 focus:border-2"
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
