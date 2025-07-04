export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl">
      <div className="text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">🎵 CD Shop ✨</h3>
          <p className="text-pink-100">音楽で心を豊かに♪</p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📀</div>
            <p className="text-sm text-pink-100">豊富な品揃え</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <p className="text-sm text-pink-100">迅速配送</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💝</div>
            <p className="text-sm text-pink-100">丁寧梱包</p>
          </div>
        </div>

        <div className="border-t border-pink-300 pt-4">
          <p className="mb-3">&copy; 2024 CD Shop. All rights reserved. 💖</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-pink-200 hover:text-white transition-colors duration-300 px-3 py-1 rounded-full hover:bg-pink-400">
              📋 プライバシーポリシー
            </a>
            <a href="#" className="text-pink-200 hover:text-white transition-colors duration-300 px-3 py-1 rounded-full hover:bg-pink-400">
              📜 利用規約
            </a>
            <a href="#" className="text-pink-200 hover:text-white transition-colors duration-300 px-3 py-1 rounded-full hover:bg-pink-400">
              💌 お問い合わせ
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-pink-200 text-sm">
          <p>🌟 素敵な音楽ライフをお楽しみください 🌟</p>
        </div>
      </div>
    </footer>
  )
}