'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminPage() {
  // サンプルデータ（後でデータベースから取得）
  const sampleStats = {
    totalProducts: 150,
    totalOrders: 45,
    totalUsers: 320,
    totalRevenue: 125000
  }

  const recentOrders = [
    { id: 1, customer: "田中太郎", total: 3500, status: "配送中" },
    { id: 2, customer: "佐藤花子", total: 2800, status: "処理中" },
    { id: 3, customer: "鈴木一郎", total: 4200, status: "完了" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Header currentPage="admin" />

        {/* メインコンテンツ */}
        <main>
          {/* ウェルカムセクション */}
          <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl shadow-2xl p-8 mb-8 border border-pink-200 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-5xl opacity-20 animate-float">⚙️</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-pulse-soft">👑</div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                🎛️ 管理者ダッシュボード ✨
              </h1>
              <p className="text-center text-gray-600 text-lg">
                CD Shopの運営状況を一目で確認できます 📊
              </p>
            </div>
          </section>

          {/* 統計情報 */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">📀</div>
                <div className="text-blue-600 text-sm font-semibold bg-blue-200 px-3 py-1 rounded-full">商品</div>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">総商品数</h3>
              <p className="text-3xl font-bold text-blue-600">{sampleStats.totalProducts}</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">📦</div>
                <div className="text-green-600 text-sm font-semibold bg-green-200 px-3 py-1 rounded-full">注文</div>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">総注文数</h3>
              <p className="text-3xl font-bold text-green-600">{sampleStats.totalOrders}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-lg p-6 border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">👥</div>
                <div className="text-purple-600 text-sm font-semibold bg-purple-200 px-3 py-1 rounded-full">ユーザー</div>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">総ユーザー数</h3>
              <p className="text-3xl font-bold text-purple-600">{sampleStats.totalUsers}</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-lg p-6 border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">💰</div>
                <div className="text-orange-600 text-sm font-semibold bg-orange-200 px-3 py-1 rounded-full">売上</div>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">総売上</h3>
              <p className="text-3xl font-bold text-orange-600">¥{sampleStats.totalRevenue.toLocaleString()}</p>
            </div>
          </section>

          {/* 管理メニュー */}
          <section className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border border-pink-100">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              🎯 管理メニュー
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/admin/products"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">💿</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">商品管理</h3>
                  <p className="text-blue-600">商品の追加・編集・削除</p>
                </div>
              </Link>
              
              <Link
                href="/admin/orders"
                className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">📋</div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">注文管理</h3>
                  <p className="text-green-600">注文の確認・ステータス更新</p>
                </div>
              </Link>
              
              <Link
                href="/admin/users"
                className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">👤</div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">ユーザー管理</h3>
                  <p className="text-purple-600">ユーザー情報の管理</p>
                </div>
              </Link>
              
              <Link
                href="/admin/analytics"
                className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">📊</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-3">売上分析</h3>
                  <p className="text-orange-600">売上データの分析・レポート</p>
                </div>
              </Link>
              
              <Link
                href="/admin/settings"
                className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-3xl p-8 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">⚙️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">システム設定</h3>
                  <p className="text-gray-600">サイト設定・システム管理</p>
                </div>
              </Link>
            </div>
          </section>

          {/* 最近の注文 */}
          <section className="bg-white rounded-3xl shadow-2xl p-10 border border-pink-100">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              📦 最近の注文
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 rounded-l-2xl">🆔 注文ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">👤 顧客名</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">💰 金額</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">📊 ステータス</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 rounded-r-2xl">🔧 操作</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={order.id} className={`border-t hover:bg-pink-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                      <td className="px-6 py-4 text-sm font-bold text-pink-600">¥{order.total.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-4 py-2 text-xs font-bold rounded-full ${
                          order.status === '完了' ? 'bg-green-200 text-green-800' :
                          order.status === '配送中' ? 'bg-blue-200 text-blue-800' :
                          'bg-yellow-200 text-yellow-800'
                        }`}>
                          {order.status === '完了' ? '✅ 完了' :
                           order.status === '配送中' ? '🚚 配送中' :
                           '⏳ 処理中'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                        >
                          👀 詳細
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}