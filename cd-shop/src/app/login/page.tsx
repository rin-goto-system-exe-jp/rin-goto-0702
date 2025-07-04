'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ログイン処理をここに実装
    console.log('Login attempt:', { email, password, rememberMe })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Header currentPage="login" />

        {/* メインコンテンツ */}
        <main className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-10 border border-pink-200 relative overflow-hidden">
            {/* 装飾的な要素 */}
            <div className="absolute top-4 right-4 text-4xl opacity-20 animate-float">✨</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-pulse-soft">💖</div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
                🔐 ログイン
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    📧 メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white shadow-sm transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    🔑 パスワード
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white shadow-sm transition-all duration-300"
                    placeholder="パスワードを入力"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-pink-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      💝 ログイン状態を保持
                    </label>
                  </div>
                  <a href="#" className="text-sm text-pink-600 hover:text-pink-800 transition-colors">
                    🤔 パスワードを忘れた方
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg"
                >
                  🚀 ログイン
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-pink-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gradient-to-br from-white to-pink-50 text-gray-500">または</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-white border-2 border-pink-200 text-gray-700 py-3 px-4 rounded-2xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-sm font-medium">
                    🌸 Googleでログイン
                  </button>
                  <button className="w-full bg-white border-2 border-purple-200 text-gray-700 py-3 px-4 rounded-2xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-sm font-medium">
                    🍎 Appleでログイン
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 mt-6">
                  アカウントをお持ちでない方は{' '}
                  <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold transition-colors">
                    ✨ 新規登録
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}