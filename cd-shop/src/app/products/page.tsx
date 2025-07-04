'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useShoppingCart } from '@/components/ShoppingCart'

export default function ProductsPage() {
  const { addToCart } = useShoppingCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  // サンプルデータ（後でデータベースから取得）
  const sampleProducts = [
    {
      id: 1,
      title: "Sweet Dreams ✨",
      artist: "Luna & Stars 🌙",
      price: 2500,
      image: "/placeholder-cd.jpg",
      genre: "pop"
    },
    {
      id: 2,
      title: "Rainbow Melody 🌈",
      artist: "Colorful Band 🎨",
      price: 3000,
      image: "/placeholder-cd.jpg",
      genre: "rock"
    },
    {
      id: 3,
      title: "Gentle Breeze 🍃",
      artist: "Nature Sounds 🌿",
      price: 2800,
      image: "/placeholder-cd.jpg",
      genre: "jazz"
    },
    {
      id: 4,
      title: "Starlight Serenade ⭐",
      artist: "Midnight Orchestra 🎼",
      price: 3200,
      image: "/placeholder-cd.jpg",
      genre: "classical"
    },
    {
      id: 5,
      title: "Happy Vibes 😊",
      artist: "Sunshine Crew ☀️",
      price: 2700,
      image: "/placeholder-cd.jpg",
      genre: "pop"
    },
    {
      id: 6,
      title: "Electric Dreams ⚡",
      artist: "Neon Lights 💫",
      price: 2900,
      image: "/placeholder-cd.jpg",
      genre: "rock"
    }
  ]

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artist.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === '' || product.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Header currentPage="products" />

        {/* メインコンテンツ */}
        <main>
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-pink-100">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              💿 商品一覧 ✨
            </h2>
            
            {/* 検索・フィルター */}
            <div className="mb-10 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="🔍 アーティスト名、アルバム名で検索"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 min-w-64 px-6 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white shadow-sm"
                />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="px-6 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white shadow-sm"
                >
                  <option value="">🎵 すべてのジャンル</option>
                  <option value="pop">🎤 ポップス</option>
                  <option value="rock">🎸 ロック</option>
                  <option value="jazz">🎷 ジャズ</option>
                  <option value="classical">🎼 クラシック</option>
                </select>
                <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                  🔍 検索
                </button>
              </div>
            </div>

            {/* 商品グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gradient-to-br from-white to-pink-50 border-2 border-pink-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center relative">
                    <span className="text-6xl">💿</span>
                    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                      <span className="text-sm">✨</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">{product.title}</h3>
                    <p className="text-gray-600 mb-3">{product.artist}</p>
                    <p className="text-2xl font-bold text-pink-600 mb-4">¥{product.price.toLocaleString()}</p>
                    <div className="space-y-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="block w-full text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-2xl hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md font-semibold"
                      >
                        👀 詳細を見る
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md font-semibold"
                      >
                        🛒 カートに追加
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-8xl mb-4">😢</div>
                <p className="text-gray-500 text-xl">該当する商品が見つかりませんでした</p>
                <p className="text-gray-400 mt-2">検索条件を変更してお試しください</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}