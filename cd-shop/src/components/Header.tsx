'use client'

import Link from 'next/link'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 shadow-xl rounded-3xl p-6 mb-8 border border-pink-200">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            🎵 CD Shop ✨
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold shadow-md'
                  : 'text-purple-600 hover:bg-pink-100 hover:text-purple-800'
              }`}
            >
              🏠 ホーム
            </Link>
            <Link
              href="/products"
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'products'
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold shadow-md'
                  : 'text-purple-600 hover:bg-pink-100 hover:text-purple-800'
              }`}
            >
              💿 商品一覧
            </Link>
            <Link
              href="/login"
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'login'
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold shadow-md'
                  : 'text-purple-600 hover:bg-pink-100 hover:text-purple-800'
              }`}
            >
              👤 ログイン
            </Link>
            <Link
              href="/admin"
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'admin'
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold shadow-md'
                  : 'text-purple-600 hover:bg-pink-100 hover:text-purple-800'
              }`}
            >
              ⚙️ 管理者
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛒 カート
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                0
              </span>
            </button>
          </nav>
        </div>
      </header>
      
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}