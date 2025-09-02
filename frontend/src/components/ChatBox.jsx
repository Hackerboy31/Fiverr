import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "client", text: "Hello, I need a website done." },
    { sender: "freelancer", text: "Sure! I can help with that." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "me", text: input }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 h-80">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "me"
                ? "bg-indigo-600 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none focus:ring focus:ring-indigo-400"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
