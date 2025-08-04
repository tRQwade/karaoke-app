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
        backgroundImage: "url('/italian-lounge-bg.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-black/70 p-6 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl text-center font-cinzel mb-6">
          <span className="text-4xl mr-2">🎤</span>
          <span
            className="font-bold text-red-500"
            style={{
              WebkitTextStroke: "0.6px black",
              textShadow: "1px 1px 3px black",
            }}
          >
            Karaoke
          </span>{" "}
          <span
            className="font-semibold text-red-500"
            style={{
              WebkitTextStroke: "0.6px black",
              textShadow: "1px 1px 3px black",
            }}
          >
            Request
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Gianna"
              className="w-full px-3 py-2 rounded bg-white/90 text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Song Title</label>
            <input
              type="text"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="e.g. That's Amore"
              className="w-full px-3 py-2 rounded bg-white/90 text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
          >
            Submit Request
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-300 font-semibold text-center">
            ✅ Thank you! Your request was received.
          </p>
        )}
      </div>
    </div>
  );
}
