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
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-ping-once text-green-400 text-7xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-2">Thanks for your request!</h1>
        <p className="text-lg text-zinc-300 mb-6">
          You’ll be added to the queue shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded-lg shadow max-w-sm w-full"
      >
        <h1 className="text-2xl font-bold mb-4 text-green-400 text-center">
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
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded font-bold"
        >
          Submit ➕
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
