"use client";

const locations = [
  {
    id: 1,
    name: "Athens pizza (sector 6)",
    address: "Shop no. 81, Huda market, Sector 6, Bahadurgarh, HR (124507)",
    phone: "9896584492",
    mapUrl: "https://maps.app.goo.gl/zvKcFHmpXpTtmZgN7",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d76.9!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: 2,
    name: "Athens Pizza & Café",
    address:
      "TOLL PLAZA, NH-44, Next to Mojoland Water Park, Murthal, Bhigan, Haryana 131039",
    phone: "09911111800",
    mapUrl: "https://maps.app.goo.gl/6x2Yez5kMP3BujDd8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d76.9!3d29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: 3,
    name: "New Location",
    address: "Location details will be announced soon.",
    phone: "Coming Soon",
    isComingSoon: true, // Flag to adjust the UI for this specific card
  },
];

export default function LocationsSection() {
  const handleMapOpen = (url: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCall = (phone: string) => {
    if (phone === "Coming Soon") return;
    window.open(`tel:+91${phone}`, "_self");
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span
          className="inline-block text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          style={{ background: "#dc2626", fontFamily: "'Titan One', cursive" }}
        >
          Our Locations
        </span>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ color: "#1a237e", fontFamily: "'Titan One', cursive" }}
        >
          You Can Find Us{" "}
          <span style={{ color: "#dc2626" }}>Here</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
          Freshly made pizzas, served with passion — visit us at one of our locations.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="rounded-2xl overflow-hidden border border-gray-200 flex flex-col"
            style={{ boxShadow: "0 4px 24px rgba(26,35,126,0.08)" }}
          >
            {/* Card Header */}
            <div
              className="px-6 pt-6 pb-5"
              style={{
                background: loc.id === 1 ? "#1a237e" : loc.isComingSoon ? "#4b5563" : "#283593",
              }}
            >
              <h3
                className="text-white text-lg font-bold leading-tight"
                style={{ fontFamily: "'Titan One', cursive" }}
              >
                {loc.name}
              </h3>
            </div>

            {/* Map Preview or Coming Soon Placeholder */}
            {loc.isComingSoon ? (
              <div
                className="w-full flex items-center justify-center bg-gray-100"
                style={{ height: "160px" }}
              >
                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                  Opening Soon
                </span>
              </div>
            ) : (
              <div
                className="relative w-full cursor-pointer group"
                style={{ height: "160px" }}
                onClick={() => handleMapOpen(loc.mapUrl!)}
              >
                <iframe
                  title={`Map for ${loc.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed&z=15`}
                  width="100%"
                  height="160"
                  style={{ border: 0, display: "block", pointerEvents: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay to make whole area clickable */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(26,35,126,0.55)" }}
                >
                  <span
                    className="text-white text-sm font-bold flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ background: "#dc2626" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Open in Google Maps
                  </span>
                </div>
              </div>
            )}

            {/* Card Body */}
            <div className="px-6 py-5 flex flex-col gap-4 flex-1 bg-white">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: loc.isComingSoon ? "#f3f4f6" : "#e8eaf6" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={loc.isComingSoon ? "#9ca3af" : "#1a237e"}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Address
                  </p>
                  <p className={`text-sm font-semibold leading-snug ${loc.isComingSoon ? "text-gray-400 italic" : "text-gray-700"}`}>
                    {loc.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: loc.isComingSoon ? "#f3f4f6" : "#e8eaf6" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={loc.isComingSoon ? "#9ca3af" : "#1a237e"}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <button
                    onClick={() => handleCall(loc.phone)}
                    disabled={loc.isComingSoon}
                    className={`text-sm font-bold transition-colors ${loc.isComingSoon ? "text-gray-400 cursor-not-allowed" : ""}`}
                    style={{ color: loc.isComingSoon ? undefined : "#1a237e" }}
                    onMouseEnter={(e) => {
                      if (!loc.isComingSoon) e.currentTarget.style.color = "#dc2626";
                    }}
                    onMouseLeave={(e) => {
                      if (!loc.isComingSoon) e.currentTarget.style.color = "#1a237e";
                    }}
                  >
                    {loc.phone}
                  </button>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div
              className="px-6 py-4 flex items-center justify-between border-t border-gray-100"
              style={{ background: "#fafafa" }}
            >
              {loc.isComingSoon ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-yellow-600">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-500" />
                  Opening Soon
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-semibold text-green-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  Open Now
                </div>
              )}

              {!loc.isComingSoon && (
                <button
                  onClick={() => handleMapOpen(loc.mapUrl!)}
                  className="text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  style={{ background: "#1a237e", fontFamily: "inherit" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#dc2626")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#1a237e")
                  }
                >
                  Get Directions →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}