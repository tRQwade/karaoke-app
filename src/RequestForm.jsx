import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const RequestForm = () => {
  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !song) return;
    console.log(`Submitted: ${name} wants to sing ${song}`);
    setSubmitted(true);
    setName("");
    setSong("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/italian-lounge-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-2xl text-white w-full max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold flex items-center justify-center gap-2">
            <FaMicrophone className="text-red-500" /> Karaoke Request
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Gianna"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white bg-opacity-90 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Song Title</label>
            <input
              type="text"
              placeholder="e.g. That's Amore"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white bg-opacity-90 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all"
          >
            Submit Request
          </button>
          {submitted && (
            <p className="text-center text-green-300 font-medium mt-2">
              ✅ Thank you! Your request was sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
