import React from 'react'
import './alert.css'
const Alert = () => {
  return (
    <div className="alert-container  container custom-container d-flex justify-content-between align-items-center">
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
            class="btn-close h-100"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
  )
}

export default Alert
