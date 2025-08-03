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
        className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/italian-lounge-bg.jpg')" }}
      >
        <div className="animate-ping-once text-diciccoGreen text-6xl mb-4">
          ✅
        </div>
        <h1 className="text-3xl font-cinzel text-diciccoRed mb-2">Grazie!</h1>
        <p className="text-zinc-200 mb-6">
          You’ll be added to the queue shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-diciccoGreen hover:bg-green-700 text-white font-bold px-6 py-2 rounded"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex justify-center items-center px-4"
      style={{ backgroundImage: "url('/italian-lounge-bg.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-80 p-6 rounded-lg shadow-xl w-full max-w-md border border-diciccoGreen"
      >
        <h1 className="text-3xl font-cinzel text-diciccoRed text-center mb-6">
          🎤 Karaoke Request
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">
            Your Name
          </label>
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
          <label className="block text-sm font-semibold text-white mb-1">
            Song Title
          </label>
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
          className="w-full bg-diciccoGreen hover:bg-green-700 text-white font-bold py-2 rounded shadow"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
