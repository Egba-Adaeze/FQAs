import React, { useEffect } from 'react';

export default function Acc() {
  useEffect(() => {
    const handleClick = (event) => {
      event.target.classList.toggle('active');
      const panel = event.target.nextElementSibling;
      if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    };

    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', handleClick);
    }

    return () => {
      // Clean up the event listeners when the component unmounts
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <div>
      <p className='FQAs'> FREQUENTLY QUESTIONS AND ANSWERS</p>
<button className="accordion">Log out from your computer</button>
<div className="panel">
<p>  1. Open WhatsApp Web or WhatsApp Desktop.
     2. Click Menu or above your chats list.</p>
</div>

<button className="accordion">Log out from your primary phone</button>
<div className="panel">
<p> 1. Open WhatsApp on your primary phone.
    2. Tap a device.
    3. Tap LOG OUT</p>
</div>

<button className="accordion">Log out from your primary phone</button>
<div className="panel">
<p> 1. Open WhatsApp on your primary phone.</p>
  </div>

    </div>
  )
}
