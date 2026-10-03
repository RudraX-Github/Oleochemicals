# Gujarat Castor Oleochemicals — Global Intelligence & Sourcing Platform

An enterprise-grade, multi-application digital intelligence platform and 3D digital twin simulation suite for international industrial consumers of high-purity **Sebacic Acid (CAS 111-20-6)**, **12-Hydroxystearic Acid (12-HSA, CAS 106-14-9)**, and **2-Octanol (CAS 123-96-6)**, originating from the integrated continuous manufacturing facility in **Bhada, Gujarat, India**.

---

## 🌟 Executive Summary

This platform integrates **12 production-ready web applications** into a cohesive, zero-configuration **Vercel-ready** web portal:
1. **Interactive 3D Digital Twin & Process Topology (`factory-3d.html`)**: Real-time WebGL/Three.js simulation with full PBR (Physically Based Rendering), kinetic fluid pipeline arrows, automated cinematic camera tours, and real-time equipment telemetry for the continuous castor derivative plant in Bhada, Gujarat.
2. **B2B Castor Market Research & Price Intelligence Dashboard (`market-dashboard.html`)**: Comprehensive macro-economic analytics covering seed pricing dynamics, derivative yield stoichiometry, export hub logistics, and global competitor matrices.
3. **Lubricant Expo Europe 2027 Exhibitor Intelligence (`lubricant-expo-2027.html`)**: 276 verified European tribology and lubricant supply chain exhibitors categorized with booth stands, product categories, and procurement contacts.
4. **9 Sector-Specific Global Sourcing Directories (4,060 Verified Entities Across 10 Hubs)**:
   - **Agrochemical Industry Directory** (500 companies)
   - **Aviation & Automotive Directory** (400 companies)
   - **Chemical Manufacturing Directory** (350 companies)
   - **Cosmetics & Personal Care Directory** (500 companies)
   - **Flavors & Fragrances Directory** (500 companies)
   - **Lubricants & Automotive Directory** (500 companies)
   - **Paints, Inks & Coatings Directory** (500 companies)
   - **Plastics & Rubber Directory** (500 companies)
   - **Polymers & Plastics Top 50 Directory** (310 companies)
5. **Universal Enterprise Navigation & Global Search**:
   - Universal sticky topbar (`assets/nav.css`, `assets/nav.js`) on every page with active module tracking and responsive mobile drawer.
   - Instant client-side global search (`assets/global-search.json`) indexing all **4,336+ companies, exhibitors, and hubs** with instantaneous debounce matching.

---

## 📊 Complete Data Integrity Audit (Zero Data Lost)

| File / Route | Module Name | Verified Records | Core Derivatives Utilized |
| :--- | :--- | :---: | :--- |
| `index.html` (`/`) | Executive Portal & Global Search | **4,336** (All) | Sebacic Acid, 12-HSA, 2-Octanol |
| `factory-3d.html` (`/factory-3d`) | 3D PBR Plant Digital Twin | **10 Units** | Complete Continuous Flow Simulation |
| `market-dashboard.html` (`/market-dashboard`) | B2B Market Intelligence | **10 Hubs** | Yield Economics & Pricing Tickers |
| `lubricant-expo-2027.html` (`/lubricant-expo-2027`) | Lubricant Expo Europe 2027 | **276** | Base Oils, Additives, Greases |
| `agrochemical-directory.html` (`/agrochemical`) | Agrochemical Industry | **500** | 2-Octanol Solvents, Sebacic Coating |
| `aviation-automotive-directory.html` (`/aviation-automotive`) | Aviation & Automotive | **400** | Sebacic Turbine Oils, 12-HSA Greases |
| `chemical-manufacturing-directory.html` (`/chemical-manufacturing`) | Chemical Manufacturing | **350** | Sebacate Esters (DOS, DBS), Polyamides |
| `cosmetics-personal-care-directory.html` (`/cosmetics-personal-care`) | Cosmetics & Personal Care | **500** | 12-HSA Stick Gelling, 2-Octanol Esters |
| `flavors-fragrances-directory.html` (`/flavors-fragrances`) | Flavors & Fragrances | **500** | 2-Octanol / Capryl Aroma Esters |
| `lubricants-automotive-directory.html` (`/lubricants-automotive`) | Lubricants & Grease | **500** | Lithium 12-HSA Complex Greases |
| `paints-coatings-directory.html` (`/paints-coatings`) | Paints, Inks & Coatings | **500** | 12-HSA Thixotropes, Polyester Resins |
| `plastics-rubber-directory.html` (`/plastics-rubber`) | Plastics & Rubber | **500** | Sebacate Plasticizers, TPU Elastomers |
| `polymers-plastics-top50.html` (`/polymers-plastics-top50`) | Polymers & Plastics Top 50 | **310** | High-Purity Nylon 6,10 & 10,10 |
| **TOTAL ECOSYSTEM INTELLIGENCE** | **12 Integrated Applications** | **4,336+** | **100% Data Preservation Verified** |

---

## 🚀 Vercel Deployment Instructions

This repository is optimized for **zero-configuration instant deployment on Vercel**.

### Option A: Deploy via Vercel CLI (Fastest)

1. Open your terminal in the website project directory:
   ```bash
   cd vercel_project
   ```
2. Log in and deploy directly:
   ```bash
   npx vercel
   ```
3. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

### Option B: Deploy via GitHub / GitLab / Bitbucket

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Vercel-ready Castor Oleochemicals Platform"
   ```
2. Push the repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/castor-oleochemicals-platform.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), select the repository, and click **Deploy**.
4. Vercel will automatically read `vercel.json` and deploy with clean URLs, security headers, and asset caching enabled.

---

## 💻 Local Development & Testing

You can preview the entire website locally using any standard HTTP server:

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node / npx
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🛠️ Architecture & Project Structure

```text
vercel_project/
├── index.html                               # Flagship Executive Portal & Global Search Engine
├── factory-3d.html                          # 3D PBR Continuous Process Digital Twin (Bhada, Gujarat)
├── market-dashboard.html                    # B2B Castor Market Research & Price Intelligence
├── lubricant-expo-2027.html                 # Lubricant Expo Europe 2027 Exhibitor Intelligence
├── agrochemical-directory.html              # Global Agrochemical Directory (500 companies)
├── aviation-automotive-directory.html       # Global Aviation & Automotive Directory (400 companies)
├── chemical-manufacturing-directory.html    # Global Chemical Manufacturing Directory (350 companies)
├── cosmetics-personal-care-directory.html   # Global Cosmetics & Personal Care Directory (500 companies)
├── flavors-fragrances-directory.html        # Global Flavors & Fragrances Directory (500 companies)
├── lubricants-automotive-directory.html     # Global Lubricants & Automotive Directory (500 companies)
├── paints-coatings-directory.html           # Global Paints, Inks & Coatings Directory (500 companies)
├── plastics-rubber-directory.html           # Global Plastics & Rubber Directory (500 companies)
├── polymers-plastics-top50.html             # Global Polymers & Plastics Top 50 Directory (310 companies)
├── assets/
│   ├── nav.css                              # Universal sticky navigation & responsive drawer styles
│   ├── nav.js                               # Universal navigation logic, dropdowns & search modal
│   └── global-search.json                   # Consolidated search index (4,336 entities)
├── vercel.json                              # Vercel routing, clean URLs & security headers
├── package.json                             # Package metadata and local serve scripts
└── README.md                                # Platform documentation & deployment guide
```

---

## 🧪 Chemical Feedstock Technical Summary

### 1. Sebacic Acid (CAS 111-20-6)
- **Formula:** $C_{10}H_{18}O_4$ | **MW:** 202.25 g/mol
- **Melting Point:** 131.0 – 134.5 °C | **Refined Purity:** $\ge$ 99.5%
- **Commercial Applications:** Monomer for Nylon 6,10 and Nylon 10,10; Dioctyl Sebacate (DOS) low-temperature plasticizers; synthetic aviation turbine oils.

### 2. 12-Hydroxystearic Acid / 12-HSA (CAS 106-14-9)
- **Formula:** $C_{18}H_{36}O_3$ | **MW:** 300.48 g/mol
- **Melting Point:** 75.0 – 81.0 °C | **Acid Value:** 175 – 185 mg KOH/g
- **Commercial Applications:** High-performance Lithium 12-HSA and Lithium Complex greases; cosmetic antiperspirant sticks; coatings thixotropic additives.

### 3. 2-Octanol / Capryl Alcohol (CAS 123-96-6)
- **Formula:** $C_8H_{18}O$ | **MW:** 130.23 g/mol
- **Boiling Point:** 178.0 – 180.0 °C | **Purity:** $\ge$ 99.0%
- **Commercial Applications:** Specialty fragrance esters (octyl acetate); mineral flotation frother; agricultural solvent and anti-foaming agent.

---
© 2026–2027 Gujarat Castor Oleochemicals. Continuous Operations, Bhada, Gujarat, India.
