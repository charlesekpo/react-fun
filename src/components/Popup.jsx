import {createPortal} from 'react-dom';
const Popup = ({copied}) => {
  return createPortal(
    <section>
        {copied && (<p>Copied to clipboard! </p>)}
    </section>,
    document.querySelector('#popup')
  )
}

export default Popup