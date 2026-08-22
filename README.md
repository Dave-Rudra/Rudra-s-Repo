# GlobeTrotter — Smart Travel Planning 🌍

GlobeTrotter is an editorial travel planner for creating thoughtful, browser-saved itineraries. The itinerary starts with a feeling—turning the places you care about into calm, useful routes.

Built for the **Odoo x LDCE Ahmedabad Hackathon 26**.

## 🚀 Features
* **Follow the Pull:** Search destinations by the things you want more of: culture, food, nature, or design.
* **Make it Workable:** Choose dates, collect essential stops, and let a simple budget reveal the shape of the trip.
* **Keep it Close:** Pin your routes directly to the browser so your useful details are there when it's time to leave.
* **Clean UI:** A calm, responsive, and beautifully structured user interface.

## 👥 Team Members
* **Rudra (Dave-Rudra)** - Developer
* **Pushkar Patel (Pushkar-1505)** - Developer
* **Karan Limbadiya (Karanlimbadiya777)** - Testing and Bug Reporting
# ✈️ GlobeTrotter — Smart Travel Planning 🌍

> An editorial travel route builder and intelligent itinerary planner engineered to transform destination discovery into organized, calm, and actionable journeys.

Built for the **Odoo x LDCE Ahmedabad Hackathon 26**.
## 📌 Executive Summary & Problem Statement
Modern travel planning is fragmented across dozens of browser tabs, social media video clips, and scattered notes. **GlobeTrotter** eliminates planning fatigue by providing a centralized, distraction-free web workspace. 
Whether an explorer is seeking an international luxury getaway to Paris or Tokyo, or planning a cultural tour across Gujarat (Ahmedabad, Salangpur, Botad), GlobeTrotter consolidates high-definition imagery, embedded video previews, real-time budget forecasting, and interactive route management into a single, seamless web application.
## 🚀 Key Features & Capabilities
### 1. 🔍 Intelligent Exploration & Filtering
* **Vibe & Category Search:** Discover locations based on specific trip themes—culture, cuisine, nature, or architectural design.
* **Tiered Cost Filtering:** Filter destinations by **Budget**, **Moderate**, or **Luxury** tiers to align with personal financial parameters.
* **Global & Regional Coverage:** Features curated destinations ranging from Gujarat regional hubs (Ahmedabad, Salangpur, Botad) to top international locations (Paris, Tokyo, Rome, Bangkok, Goa).
### 2. 🎦 Rich Media City Detail Modals
* **High-Resolution Visuals:** Imagery showcasing regional geography and landmarks.
* **Embedded Video Tours:** Access YouTube video previews directly inside modal popups without leaving the app.
* **Resource Optimization:** Closing the modal automatically halts video playback to save bandwidth and system resources.

### 3. 🗓️ Dynamic Itinerary & Budget Planner

* **Chronological Timeline Builder:** Organize multi-day stops and activities step-by-step.
* **Automated Cost Estimation:** Dynamically totals estimated expenses to provide real-time budget clarity.
* **Browser Persistence:** Pin itineraries directly to local browser storage (`localStorage`) for instant access without losing setup state.

### 4. 🔗 Export & Social Sharing

* **One-Click Share Links:** Generates shareable itinerary URLs (`https://globetrotter.app/share/...`) for instant distribution to friends, family, or trip partners.
* **Clipboard Integration:** Easily copy unique shareable links with a single click.
### 🛠️ GlobeTrotter — Technical Status Overview

**System Health:** `ONLINE / STABLE`

**Live Demo:** [GlobeTrotter Application](https://globetrottr-9pmhanek.manus.space/)

**Repository:** [Dave-Rudra/Rudra-s-Repo](https://github.com/Dave-Rudra/Rudra-s-Repo/edit/main/README.md)

---

#### 📐 Technical Architecture & Stack

| Component | Technology | Implementation Detail |
| --- | --- | --- |
| **Frontend UI** | HTML5 / Tailwind CSS CDN | Utility-first, responsive, single-page architecture |
| **Core Logic** | Vanilla JavaScript (ES6+) | State management, DOM manipulation, custom event routing |
| **Data Persistence** | Web Storage API (`localStorage`) | Client-side user sessions and trip data persistence |
| **Data Analytics** | Chart.js | Dynamic budget estimation & expense rendering |
| **Workflow Diagrams** | Mermaid.js | Architecture visualization |
| **Media Delivery** | YouTube Embed API & Unsplash CDN | Asynchronous media loading & auto-halting video modals |

---

#### ⚡ Core Technical Capabilities

* **Client-Side SPA Routing:** Pure JS tab switching (`dashboard`, `my-trips`, `explore`, `profile`) without full page reloads.
* **Memory & Resource Optimization:** Automatic cleanup of iframe source elements upon closing detail modals to halt background video audio and preserve memory.
* **Reactive Budget Engine:** Dynamically calculates cost aggregations in real-time as users add, edit, or remove itinerary stops.
* **Multivariate Filtering:** Instant array filtering based on geographical parameters (e.g., Gujarat, International) and budget tiers (*Budget, Moderate, Luxury*).

---

#### 📊 Performance Metrics

* **Backend Overhead:** 0% (Fully functional offline/client-side architecture)
* **Asset Loading:** CDN-cached styles and dynamic lightweight assets
* **Cross-Browser Compatibility:** Verified on Google Chrome, Microsoft Edge, Brave, and Safari

## 👥 Team Members

| Name | Role | GitHub Profile |
| --- | --- | --- |
| **Rudra** | Developer | [@Dave-Rudra](https://github.com/Dave-Rudra) |
| **Pushkar Patel** | Developer | [@Pushkar-1505](https://www.google.com/search?q=https://github.com/Pushkar-1505) |
| **Karan Limbadiya** | Developer, Testing and Bug Reporting | [@Karanlimbadiya777](https://www.google.com/search?q=https://github.com/Karanlimbadiya777) |
| **Ryyser** | Developer / UI | — |

---

## 💻 Installation & Local Setup

### Prerequisites

* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave).
* Git installed on your system.
* VS Code with the **Live Server** extension (recommended).

### Step-by-Step Instructions

1. **Clone the Repository:**
```bash
git clone [https://github.com/Dave-Rudra/Rudra-s-Repo.git](https://github.com/Dave-Rudra/Rudra-s-Repo.git)

```


2. **Navigate into the Project Directory:**
```bash
cd Rudra-s-Repo

```


3. **Launch the Application:**
* Open `index.html` in your browser, **OR**
* Right-click `index.html` inside VS Code and select **"Open with Live Server"**.
## 📊 Destination Data Matrix

| Destination | Region / Country | Cost Tier | Primary Highlights |
| --- | --- | --- | --- |
| **Paris** | France | Luxury | Eiffel Tower, Louvre Museum, fashion, gastronomy |
| **Tokyo** | Japan | Moderate | Modern skyline, Shinto shrines, culinary arts |
| **Rome** | Italy | Moderate | Colosseum, Vatican City, historical landmarks |
| **Bangkok** | Thailand | Budget | Grand Palace, floating markets, street cuisine |
| **Goa** | India | Budget | Coastal beaches, tropical nightlife, colonial history |
| **Ahmedabad** | Gujarat, India | Budget | Sabarmati Ashram, heritage architecture, textiles |
| **Salangpur** | Gujarat, India | Budget | Kashtabhanjan Hanumanji Temple pilgrimage |
| **Botad** | Gujarat, India | Budget | Gateway to Saurashtra, trade & agriculture hub |
## 📈 Key Benefits & Real-World Utility
* **⏱️ Saves Time:** Replaces multiple search tabs with a single workspace containing guides, video previews, and expense tracking.
* **💰 Financial Control:** Real-time expense tracking keeps trip planning aligned with financial goals.
* **📱 Responsive Design:** Optimized for mobile screens, tablets, and desktop devices.
* **🔒 Privacy-First:** User trip data remains locally stored in the browser without mandatory external tracking.
## 📄 How to Export as PDF
To convert this `README.md` into a PDF document:
1. Open this `README.md` file in **VS Code**.
2. Install the **Markdown PDF** extension.
3. Right-click anywhere in the editor and select **Markdown PDF: Export (pdf)**.
*Designed and engineered with precision for the modern explorer.* 🌍

