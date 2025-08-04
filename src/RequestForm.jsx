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
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
      }}
    >
      <div className="w-full max-w-md bg-black bg-opacity-80 p-8 rounded-xl shadow-2xl text-white border border-red-900">
        <h1 className="text-center mb-8">
          <div className="text-6xl mb-2">🎤</div>
          <div
            className="text-4xl font-bold text-red-500 drop-shadow-lg"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,0,0,0.3)",
            }}
          >
            Karaoke
          </div>
          <div
            className="text-3xl font-semibold text-red-400 drop-shadow-lg"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Request
          </div>
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-red-200">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Gianna"
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 border-2 border-red-900 focus:border-red-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-red-200">
              Song Title
            </label>
            <input
              type="text"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="e.g. That's Amore"
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 border-2 border-red-900 focus:border-red-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white py-3 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Request
          </button>
        </div>

        {submitted && (
          <div className="mt-6 p-4 bg-green-900 bg-opacity-50 border border-green-500 rounded-lg">
            <p className="text-green-300 font-semibold text-center">
              ✅ Thank you! Your request was received.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
