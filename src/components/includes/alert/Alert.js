import React from 'react'
import './alert.css'
const Alert = () => {
  return (
<div className='alert-parent-container'>
<div className="alert-container position-relative gx-0  container custom-container d-flex justify-content-between align-items-center">
        <div
          class="alert w-100 alert-light mx-0 mb-0 alert-dismissible fade show"
          role="alert"
        >
          <p className="text-center alert_text">
            First time order get
            <span class="fw-bold span-discount mx-1 mx-sm-2">20% discount</span>use
            <span class="header-top-span2 mx-1 px-1 px-sm-2 mx-sm-2">CEW24</span>apply code
          </p>
          <button
            type="button"
            class="alert-close-btn bg-transparent border-0 position-absolute"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>


          </button>
        </div>
      </div>
</div>
  )
}

export default Alert
