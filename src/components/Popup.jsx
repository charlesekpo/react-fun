import { createPortal } from "react-dom";

const Popup = ({ copied }) => {
  return createPortal(
    copied ? (
      <div className="popup">
        Copied to clipboard!
      </div>
    ) : null,
    document.querySelector("#popup")
  );
};

export default Popup;