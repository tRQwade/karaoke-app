import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, performer, song, isNowSinging, onRemove, onTop }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-3 rounded flex justify-between items-center ${
        isNowSinging ? "bg-yellow-400 text-black font-bold" : "bg-zinc-700"
      }`}
    >
      <div>
        {performer} — <em>{song}</em>
        {isNowSinging && <span className="ml-2">(Now Singing)</span>}
      </div>
      <div className="flex gap-2 ml-4">
        <button
          className="text-red-400 hover:text-red-600 font-bold"
          onClick={onRemove}
        >
          ❌
        </button>
        <button
          className="text-blue-400 hover:text-blue-600 font-bold"
          onClick={onTop}
        >
          🔼
        </button>
      </div>
    </li>
  );
}

export { SortableItem };
