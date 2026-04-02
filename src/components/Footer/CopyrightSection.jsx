import React from "react";

const CopyrightSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-4   mb-2 md:mb-20  overflow-hidden">

            <h1 className=" text-[20vw] font-bold text-gray-300 opacity-40 select-none pointer-events-none">
                Adymire
            </h1>

            <div className="text-center z-10 px-4 space-y-4">
                <p className="text-lg md:text-2xl text-gray-900">
                    A Product{" "}
                    <span className="font-bold">
                        Adymire Technologies Pvt. Ltd.
                    </span>
                </p>

                <p className="mt-3 text-sm md:text-base text-gray-900">
                    © Copyright{" "}
                    <span className="font-medium">Adymire.com</span> 2025 All right Reserved
                </p>
            </div>
        </div>
    );
};

export default CopyrightSection;