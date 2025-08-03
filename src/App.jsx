import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

function App() {
  const [queue, setQueue] = useState(() => {
    const stored = localStorage.getItem("karaoke-queue");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, performer: "Jess", song: "Bohemian Rhapsody" },
          { id: 2, performer: "Mark", song: "Uptown Funk" },
        ];
  });

  const [performer, setPerformer] = useState("");
  const [song, setSong] = useState("");

  useEffect(() => {
    localStorage.setItem("karaoke-queue", JSON.stringify(queue));
  }, [queue]);
  useEffect(() => {
    const interval = setInterval(() => {
      const newRequests = JSON.parse(
        localStorage.getItem("karaoke-requests") || "[]"
      );
      if (newRequests.length > 0) {
        setQueue((prev) => [...prev, ...newRequests]);
        localStorage.removeItem("karaoke-requests");
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup if component unmounts
  }, []);

  const addToQueue = () => {
    if (performer && song) {
      const newEntry = {
        id: Date.now(),
        performer,
        song,
      };
      setQueue([...queue, newEntry]);
      setPerformer("");
      setSong("");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-400">
        🎤 Karaoke Queue
      </h1>

      <div className="max-w-md mx-auto bg-zinc-800 p-4 rounded-lg shadow">
        <h2 className="text-xl mb-2">Add Performer</h2>
        <input
          className="w-full mb-2 p-2 rounded text-black"
          type="text"
          placeholder="Performer Name"
          value={performer}
          onChange={(e) => setPerformer(e.target.value)}
        />
        <input
          className="w-full mb-2 p-2 rounded text-black"
          type="text"
          placeholder="Song Title"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded font-bold"
          onClick={addToQueue}
        >
          ➕ Add to Queue
        </button>
      </div>

      <div className="mt-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">🎶 Up Next</h2>

        <button
          className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold"
          onClick={() => {
            if (queue.length > 0) {
              setQueue(queue.slice(1));
            }
          }}
        >
          ⏭️ Next Singer
        </button>

        {queue.length > 0 && (
          <button
            className="mb-4 ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
            onClick={() => setQueue([])}
          >
            🗑️ Clear Queue
          </button>
        )}

        <DndContext
          sensors={useSensors(useSensor(PointerSensor))}
          collisionDetection={closestCenter}
          onDragEnd={({ active, over }) => {
            if (active.id !== over?.id) {
              const oldIndex = queue.findIndex((item) => item.id === active.id);
              const newIndex = queue.findIndex((item) => item.id === over?.id);
              setQueue(arrayMove(queue, oldIndex, newIndex));
            }
          }}
        >
          <SortableContext
            items={queue.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul className="space-y-2">
              {queue.map((entry, index) => (
                <SortableItem
                  key={entry.id}
                  id={entry.id}
                  performer={entry.performer}
                  song={entry.song}
                  isNowSinging={index === 0}
                  onRemove={() =>
                    setQueue(queue.filter((item) => item.id !== entry.id))
                  }
                  onTop={() =>
                    setQueue([
                      entry,
                      ...queue.filter((item) => item.id !== entry.id),
                    ])
                  }
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
