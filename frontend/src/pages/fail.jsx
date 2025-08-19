import { useEffect, useState } from "react";

export default function Fail() {
    const [countdown, setCountdown] = useState(6);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-[#060606]">
            <div className="bg-red-600 flex flex-col justify-start items-center 
                            w-full h-full sm:w-[350px] sm:h-[600px] sm:rounded-xl pt-39 sm:pt-39">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-white bg-white text-red-600 text-4xl font-bold">
                        ✕
                    </div>
                <div className="text-2xl sm:text-3xl font-[popins] text-white pt-10">
                    Transfer Unsuccessful...
                </div>
                <div className="text-xl sm:text-lg font-[popins] text-white pt-60">
                    Redirecting in {countdown} sec.....
                </div>
            </div>
        </div>
    );
}
