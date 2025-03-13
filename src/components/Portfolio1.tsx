import React from 'react';
import { ShoppingCart, Play, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-4 bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-pink-600">Urakata</span>
          <span className="text-gray-800">Company</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="#">サービス</NavLink>
          <NavLink href="#">制作実績</NavLink>
          <NavLink href="#">料金プラン</NavLink>
          <NavLink href="#">会社概要</NavLink>
          <NavLink href="#">お知らせ</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2.5 rounded hover:bg-pink-700 transition-colors">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">お問い合わせ</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              デジタルの力で<br />ビジネスを加速する
            </h1>
            <p className="text-gray-600 text-lg mb-10">
              最新のテクノロジーと創造力で、あなたのビジネスに<br />新しい可能性を提供します。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors text-lg">
                <span>無料相談はこちら</span>
                <ChevronRight size={20} />
              </button>
              <button className="flex items-center gap-2 bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition-colors text-lg">
                <span>サービス詳細</span>
                <Play size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Webサイト制作",
                image: "/service.jpg",
                description: "最新のトレンドを取り入れた、魅力的なWebサイトを制作します。"
              },
              {
                title: "アプリケーション開発",
                image: "/caferaptop.jpg",
                description: "ユーザーフレンドリーで革新的なアプリケーションを開発します。"
              },
              {
                title: "デジタルマーケティング",
                image: "/city.jpg",
                description: "効果的なオンラインプレゼンスを構築し、成長を支援します。"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 text-pink-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳細を見る
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-pink-400">Urakata</span>
                <span>Company</span>
              </div>
              <p className="text-gray-400">
                最新のテクノロジーで、ビジネスの未来を創造する
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">サービス</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Webサイト制作</li>
                <li>アプリケーション開発</li>
                <li>デジタルマーケティング</li>
                <li>コンサルティング</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">会社情報</h3>
              <ul className="space-y-2 text-gray-400">
                <li>会社概要</li>
                <li>採用情報</li>
                <li>お知らせ</li>
                <li>お問い合わせ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <ul className="space-y-2 text-gray-400">
                    <li className="text-gray-400 hover:text-white transition-colors">Twitter</li>
                    <li className="text-gray-400 hover:text-white transition-colors">Facebook</li>
                    <li className="text-gray-400 hover:text-white transition-colors">Instagram</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 UrakataCompany. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-pink-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

export default App;