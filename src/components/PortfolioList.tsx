import Link from "next/link";

const portfolios = [
  { id: "1", title: "コーポレートサイト", url: "./portfolio/1" },
  { id: "2", title: "ポートフォリオB", url: "./portfolio" },
  { id: "3", title: "ポートフォリオC", url: "./portfolio" },
];

export default function PortfolioList() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">開発実績一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">{portfolio.title}</h2>
            <div className="mt-4">
              <Link
                href={`/portfolio/${portfolio.id}`}
                className="text-blue-600 hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}