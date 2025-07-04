import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Header currentPage="home" />

        {/* メインコンテンツ */}
        <main>
          {/* ヒーローセクション */}
          <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl shadow-2xl p-12 mb-12 border border-pink-200 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl opacity-20">🎵</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-20">✨</div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                🎶 音楽CD通販サイトへようこそ ✨
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                あらゆるジャンルの音楽CDを取り扱っております。💿<br />
                お気に入りのアーティストの作品を見つけて、<br />
                素敵な音楽ライフをお楽しみください♪
              </p>
              <Link
                href="/products"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg"
              >
                🛍️ 商品を見る
              </Link>
            </div>
          </section>

          {/* 特集セクション */}
          <section className="bg-white rounded-3xl shadow-xl p-10 border border-pink-100">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              🌟 今週の特集 🌟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🆕</div>
                  <h4 className="font-bold text-pink-800 mb-3 text-xl">新着アルバム</h4>
                  <p className="text-pink-600">最新リリースをチェック✨</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🏆</div>
                  <h4 className="font-bold text-purple-800 mb-3 text-xl">人気ランキング</h4>
                  <p className="text-purple-600">今売れているCDをご紹介🎵</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">💰</div>
                  <h4 className="font-bold text-blue-800 mb-3 text-xl">セール情報</h4>
                  <p className="text-blue-600">お得な価格でお買い求めいただけます🎁</p>
                </div>
              </div>
            </div>
          </section>

          {/* おすすめ商品セクション */}
          <section className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-xl p-10 border border-yellow-200">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-8">
              💖 スタッフおすすめ 💖
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-4xl">💿</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">おすすめアルバム {item}</h4>
                  <p className="text-gray-600 text-sm mb-2">人気アーティスト</p>
                  <p className="text-orange-600 font-bold">¥2,500</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}