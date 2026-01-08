const VisionValues = () => {
  const values = [
    {
      title: "Innovation",
      desc: "We design modern solutions that elevate everyday living with creativity.",
    },
    {
      title: "Quality",
      desc: "Premium materials and skilled craftsmanship ensure long-lasting, reliable results.",
    },
    {
      title: "Transparency",
      desc: "Clear communication and honest processes build trust throughout every project.",
    },
    {
      title: "Customer-First",
      desc: "Your needs guide every decision to deliver spaces you truly love.",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf2] py-4">
      <div className="text-center mb-22">
        <h2 className="text-3xl font-bold text-gray-900 tracking-wider">
          Our Vision & Values
        </h2>
        <div className="w-38 h-0.75 bg-yellow-400 mx-auto mt-2 rounded" />
        <p className="mt-4 text-gray-500 font-semibold text-xl tracking-wider">
          What We Stand For
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl border border-gray-200 pt-20 pb-10 px-6 text-center shadow-sm"
          >
            <div className="absolute -top-15 left-1/2 -translate-x-1/2">
              <div className="w-30 h-30 rounded-full bg-[#fff0c2] flex items-center justify-center">
                <img
                  src=""
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 text-base font-semibold">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionValues;
