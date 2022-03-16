import React from 'react'
import "./SideMail.css"

function SideMail() {
  return (
    <div className="side-mail-wrapper">
      <div className="side-mail">
        <a href="mailto:putte.karlsson@gmail.com">
          <span>putte.karlsson@gmail.com</span>
        </a>
      </div>
      <div className='side-mail-line'></div>
    </div>
  )
}

export default SideMail