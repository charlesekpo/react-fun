import { useState } from "react"
import Popup from "./Popup";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');

    const[copied, setCopied] = useState(false);

    const handleCopy =()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            if(inputValue.trim() === '') return;
            setCopied(true);
            setTimeout(()=>setCopied(false), 5000);
        });
    }
  return (
    <div>
        {copied && (<p>Copied to clipboard</p>)}
        <h1>CopyInput</h1>
        <input type="text"
        value={inputValue}
        placeholder="Enter something to copy"
        onChange={(e)=>setInputValue(e.target.value)} />

        <button onClick={handleCopy}>Copy</button>

        <Popup copied={copied}/>
    </div>
  )
}

export default CopyInput