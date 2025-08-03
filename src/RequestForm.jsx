import { useState } from "react";

function RequestForm() {
  const [performer, setPerformer] = useState("");
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-ping-once text-diciccoGreen text-7xl mb-4">
          ✅
        </div>
        <h1 className="text-3xl font-cinzel text-diciccoRed mb-2">Grazie!</h1>
        <p className="text-lg text-zinc-300 mb-6">
          Your song request has been sent to the DJ.
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
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded-lg shadow max-w-sm w-full border border-diciccoGreen"
      >
        <h1 className="text-3xl font-cinzel text-diciccoRed mb-4 text-center">
          🎤 Song Request
        </h1>
        <input
          className="w-full mb-3 p-2 rounded text-black"
          type="text"
          placeholder="Your Name"
          value={performer}
          onChange={(e) => setPerformer(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 p-2 rounded text-black"
          type="text"
          placeholder="Song Title"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-diciccoGreen hover:bg-green-700 p-2 rounded font-bold text-white shadow"
        >
          Submit ➕
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
