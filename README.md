# 🛒 SmartBuy Assistant - Chrome Extension

A Chrome Extension that helps users decide **whether a product is worth buying** by analyzing its reviews, ratings, and historical price trends.  
It even suggests the **best time to buy** (festive sales, seasonal offers, etc.) so you don’t overspend.  

---

## ✨ Features
- 🔍 **Paste Product URL** → Instantly analyze reviews and ratings  
- ⭐ **Sentiment Analysis** → Understand what thousands of buyers are really saying  
- 📉 **Price Prediction** → Find if the price may drop soon (festive/seasonal insights)  
- 🛒 **Smart Decision** → Helps you decide *“Buy Now or Wait”*  

---

## 🚀 Demo
(Add screenshots or a GIF of your extension in action here)

---

## 🛠️ Tech Stack
- **React + Vite + TypeScript** (UI framework)  
- **Manifest V3** (Chrome Extension standard)  
- **TailwindCSS** (styling)  
- **Node/Express API (Optional)** → for review scraping + analysis  
- **Python/ML (Optional)** → for sentiment analysis & price prediction  

---

## 📂 Project Structure
```bash
smartbuy-extension/
├── public/                # Manifest.json + icons
├── src/
│   ├── components/        # React UI components
│   ├── popup/             # Popup UI (main extension window)
│   ├── background/        # Background scripts
│   ├── content/           # Content scripts
│   └── utils/             # Helper functions
├── package.json
└── vite.config.ts
