import { useEffect, useState } from "react";

export default function Success() {
    const [countdown, setCountdown] = useState(5);

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
            <div className="bg-green-600 flex flex-col justify-start items-center 
                            w-full h-full sm:w-[350px] sm:h-[600px] sm:rounded-xl pt-39 sm:pt-39">
                <input
                    checked
                    type="checkbox"
                    className="w-20 h-20 rounded-full md:rounded-b-full"
                />
                <div className="text-2xl sm:text-3xl font-[popins] text-white pt-10">
                    Transfer Successful...
                </div>
                <div className="text-xl sm:text-lg font-[popins] text-white pt-60">
                    Redirecting in {countdown} sec.....
                </div>
            </div>
        </div>
    );
}
