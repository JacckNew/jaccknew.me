// Guestbook page component

"use client";

import { useState } from "react";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setEntries([input, ...entries]);
    setInput("");
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Guestbook</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        Leave a message! Whether you're a friend, classmate, or curious visitor — I'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-neutral-300 rounded"
          placeholder="Say hi!"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <ul className="space-y-2">
        {entries.map((entry, index) => (
          <li key={index} className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded">
            {entry}
          </li>
        ))}
      </ul>
    </section>
  );
}
