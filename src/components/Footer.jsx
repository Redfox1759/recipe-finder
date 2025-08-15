import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        <p className="footer-text" style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
          &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
