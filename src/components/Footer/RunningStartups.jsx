import { adytlymedia, adylabsai, apporra, yreelz, zylobit } from "@/assets";

const RunningStartups = () => {
    const startups = [
        {
            name: "Adytly Media",
            icon: adytlymedia,
        },
        {
            name: "AdyLabs  AI",
            icon: adylabsai,
        },
        {
            name: "Zylobit",
            icon: zylobit,
        },
        {
            name: "Apporaa.com",
            icon: apporra,
        },
        {
            name: "Yreelz.com",
            icon: yreelz,
        },
    ];

    return (
        <section className="w-full bg-white py-4">
            <div className="h-0.5 w-full px-10 bg-gray-300 mb-5"></div>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                    Our Running Startups
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {startups.map((startup, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 bg-[#fcf1f1] border border-gray-200 rounded-lg shadow-sm min-w-40"
                        >
                            <img
                                src={startup.icon}
                                alt={startup.name}
                                className="w-6 h-6 object-contain"
                            />
                            <span className="text-gray-800 font-medium text-sm">
                                {startup.name}
                            </span>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default RunningStartups;
