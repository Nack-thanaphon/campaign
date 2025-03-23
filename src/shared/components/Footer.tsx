import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2023 campaign.com. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.facebook.com/taponit" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/taponit" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.line.me/R/ti/p/%40taponit" target="_blank" rel="noopener noreferrer">
              Line
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer