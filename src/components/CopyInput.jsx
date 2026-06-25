import { useState } from "react";
import Popup from "./Popup";
import "./styles.css";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (inputValue.trim() === "") return;

    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Clipboard App</h2>
        {copied && <span className="copied-badge">Copied ✓</span>}
      </nav>

      <div className="container">
        <h1>Copy Input</h1>

        <input
          type="text"
          value={inputValue}
          placeholder="Enter something to copy"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleCopy}>Copy</button>
      </div>

      <Popup copied={copied} />
    </div>
  );
};

export default CopyInput;