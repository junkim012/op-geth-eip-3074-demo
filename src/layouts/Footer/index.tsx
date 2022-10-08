import React from 'react'
import { Link } from 'react-router-dom'

import holaLogo from '../../assets/hola.svg'
import xHolasLogo from '../../assets/xHolas.svg'

export default function Footer() {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center p-6 md:py-10 md:px-8 max-w-6xl m-auto">
        <div>
          <Link to="/" className="block p-1">
            <img className="h-16 w-auto" src={xHolasLogo} alt="xHolas" />
          </Link>
        </div>
      </div>
    </div>
  )
}
