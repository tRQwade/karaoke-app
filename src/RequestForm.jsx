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
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-green-400 mb-4">
          Request Submitted 🎉
        </h1>
        <p>Thank you! You’ll be added to the queue shortly.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
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
