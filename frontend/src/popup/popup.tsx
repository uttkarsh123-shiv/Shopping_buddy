import React, { useState } from "react";

export default function Popup() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    setLoading(true);

    // 🔹 Replace with real backend call later
    setTimeout(() => {
      setResult({
        product: {
          name: "Samsung Galaxy S24",
          image: "https://via.placeholder.com/120",
          price: "₹69,999",
        },
        reviews: {
          rating: 4.2,
          pros: ["Excellent camera", "Smooth performance"],
          cons: ["Battery drains fast", "Bit expensive"],
          verdict: "Worth Buying ✅",
        },
        price: {
          current: 69999,
          average: 72999,
          lowest: 65999,
          advice: "Current price close to all-time low. Buy Now ✅",
        },
        festive: {
          upcoming: "Diwali Sale in 20 days",
          note: "Phones usually drop 8-12% during Diwali sales. Waiting could save ~₹5,000.",
        },
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-[350px] p-4 bg-white text-gray-800 font-sans">
      {/* Header */}
      <h1 className="text-lg font-bold mb-3 text-center">
        🛍️ Smart Shopping Assistant
      </h1>

      {/* Input */}
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Paste product URL..."
          className="flex-1 border p-2 rounded-lg text-sm focus:ring focus:ring-blue-400"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          disabled={!url || loading}
          className={`px-3 py-2 rounded-lg text-sm text-white
            ${!url || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          {/* Product Info */}
          <div className="flex items-center gap-3 border p-2 rounded-lg shadow-sm">
            <img
              src={result.product.image}
              alt={result.product.name}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h2 className="font-semibold text-sm">{result.product.name}</h2>
              <p className="text-blue-600 font-bold">{result.product.price}</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="border p-3 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">
              ⭐ Reviews ({result.reviews.rating}/5)
            </h3>
            <ul className="text-sm list-disc pl-5 text-green-600">
              {result.reviews.pros.map((pro: string, i: number) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
            <ul className="text-sm list-disc pl-5 text-red-600 mt-1">
              {result.reviews.cons.map((con: string, i: number) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">{result.reviews.verdict}</p>
          </div>

          {/* Price Advice */}
          <div className="border p-3 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">📉 Price Analysis</h3>
            <p className="text-sm">Current: ₹{result.price.current}</p>
            <p className="text-sm">Average: ₹{result.price.average}</p>
            <p className="text-sm">Lowest: ₹{result.price.lowest}</p>
            <p className="mt-1 font-semibold text-blue-600">
              {result.price.advice}
            </p>
          </div>

          {/* Festive Advice */}
          <div className="border p-3 rounded-lg shadow-sm bg-yellow-50">
            <h3 className="font-semibold mb-1">🎉 Festive Sale Insight</h3>
            <p className="text-sm">{result.festive.upcoming}</p>
            <p className="text-sm">{result.festive.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
