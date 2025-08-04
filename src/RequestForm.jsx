import { useState } from "react";

function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [performer, setPerformer] = useState("");
  const [song, setSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { performer, song, id: Date.now() };
    const pending = JSON.parse(
      localStorage.getItem("karaoke-requests") || "[]"
    );
    pending.push(entry);
    localStorage.setItem("karaoke-requests", JSON.stringify(pending));

    setSubmitted(true);
    setPerformer("");
    setSong("");
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 relative"
        style={{ backgroundImage: "url('/italian-lounge-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center p-6 bg-black/60 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full">
          <div className="text-6xl animate-ping-once text-diciccoGreen mb-4">
            ✅
          </div>
          <h2 className="text-3xl font-cinzel text-diciccoRed mb-2">Grazie!</h2>
          <p className="text-white mb-6">Your request has been submitted.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-diciccoGreen hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow transition duration-200"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 relative"
      style={{ backgroundImage: "url('/italian-lounge-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-black/70 backdrop-blur-md border border-diciccoGreen p-8 rounded-xl shadow-2xl"
      >
        <h1 className="text-3xl font-cinzel text-diciccoRed text-center mb-6">
          🎤 Karaoke Request
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Your Name</label>
          <input
            type="text"
            placeholder="e.g. Gianna"
            value={performer}
            onChange={(e) => setPerformer(e.target.value)}
            className="w-full p-2 rounded bg-white text-black"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Song Title</label>
          <input
            type="text"
            placeholder="e.g. That's Amore"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="w-full p-2 rounded bg-white text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-diciccoGreen hover:bg-green-700 text-white font-bold py-2 rounded shadow-md transition duration-200"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
