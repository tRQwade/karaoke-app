import { useState } from "react";

export default function RequestForm() {
  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && song.trim()) {
      setSubmitted(true);
      setName("");
      setSong("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)",
      }}
    >
      <div className="w-full max-w-md bg-gray-900 bg-opacity-95 p-8 rounded-2xl shadow-2xl border border-red-800">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎤</div>
          <h1
            className="text-5xl font-bold text-red-500 mb-2"
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(255,0,0,0.4)",
            }}
          >
            KARAOKE
          </h1>
          <h2
            className="text-3xl font-semibold text-red-400"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Request
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-red-200 font-medium mb-2 text-sm uppercase tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Gianna"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-2 border-red-900 focus:border-red-500 focus:outline-none placeholder-gray-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-red-200 font-medium mb-2 text-sm uppercase tracking-wide">
              Song Title
            </label>
            <input
              type="text"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="e.g. That's Amore"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-2 border-red-900 focus:border-red-500 focus:outline-none placeholder-gray-400 transition-all"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            🎵 Submit Request 🎵
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mt-6 p-4 bg-green-800 bg-opacity-60 border-2 border-green-400 rounded-lg animate-pulse">
            <p className="text-green-300 font-bold text-center text-lg">
              ✅ Thank you! Your request was received.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
