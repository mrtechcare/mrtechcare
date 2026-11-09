# MRTECH CARE — Official Website

> **Your Tech. Our Care.**  
> Domain: [mrtechcare.in](https://mrtechcare.in)  
> Business Owner & Technician: **Raja Kumar**  
> Direct Phone & WhatsApp: **+91 99909 46044**  
> Email: **rajamister710@gmail.com**  
> Service Coverage: **Doorstep Service across Delhi NCR** (Delhi, Noida, Ghaziabad, Greater Noida) & **Remote IT Support across India**.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with Midnight Navy (`#080E19`) & Electric Blue (`#1677FF`) theme
- **Icons**: [Lucide React](https://lucide.dev/) (lightweight, zero runtime baggage)
- **Internationalization**: Pure client-side English & Hindi (`EN` / `HI`) language switch with persistent user preference
- **Communication & Booking**: 100% client-side privacy-first WhatsApp message composer (zero server logging or customer data storage)
- **SEO & Structured Data**: Built-in Open Graph metadata, Twitter Cards, semantic HTML5, `robots.txt`, `sitemap.xml`, and valid Schema.org `LocalBusiness` JSON-LD

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`) with Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified static build inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
mrtechcare/
├── index.html                   # Entry HTML with SEO & LocalBusiness JSON-LD
├── package.json                 # Project dependencies & build scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Midnight Navy & Electric Blue design system
├── postcss.config.js            # PostCSS configuration
├── public/
│   ├── _redirects               # SPA routing rule for Netlify / Cloudflare Pages
│   ├── favicon.svg              # Brand monogram favicon
│   ├── robots.txt               # Search engine crawler instructions
│   └── sitemap.xml              # Search engine XML sitemap for mrtechcare.in
├── src/
│   ├── App.jsx                  # Main application structure
│   ├── main.jsx                 # React root bootstrap
│   ├── index.css                # Global styles, glassmorphism & tech grid effects
│   ├── context/
│   │   └── LanguageContext.jsx  # English / Hindi state and translation helper
│   ├── data/
│   │   ├── content.js           # Complete bilingual text dictionaries
│   │   ├── servicesData.js      # Catalogue of 11 authentic services
│   │   └── pricingData.js       # Indicative starting prices & policies
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky blur header with language toggle & WhatsApp CTA
│   │   ├── Hero.jsx             # Headline, workstation console & key highlights
│   │   ├── SafetyNotice.jsx     # Legitimate & authorized repair policy banner
│   │   ├── ServicesSection.jsx  # Category filtering & 11 service cards
│   │   ├── ServiceCard.jsx      # Reusable service card with direct WhatsApp link
│   │   ├── PricingSection.jsx   # Indicative rates & transparent pricing policy
│   │   ├── RemoteSupportSection.jsx # 5-step AnyDesk / TeamViewer workflow
│   │   ├── DoorstepSection.jsx  # Delhi NCR coverage & scheduling notice
│   │   ├── AboutSection.jsx     # Authentic introduction of Raja Kumar
│   │   ├── ContactSection.jsx   # Working WhatsApp form & direct coordinates
│   │   ├── QuickFloatingContact.jsx # Floating instant WhatsApp action button
│   │   ├── Footer.jsx           # Navigation, coverage, disclaimer & copyright
│   │   └── NotFound.jsx         # Custom 404 fallback page
│   └── utils/
│       └── whatsapp.js          # Pre-formatted, URL-encoded WhatsApp message builders
└── README.md
```

---

## 🌐 Free Deployment Guide (Custom Domain: `mrtechcare.in`)

You can deploy this website for **100% free** without any ongoing server costs or credit cards using **Cloudflare Pages** or **Netlify**.

---

### Option A: Deploying on Cloudflare Pages (Recommended for India)

Cloudflare has ultra-fast edge data centers in Delhi, Mumbai, Chennai, and Bengaluru, giving maximum speed across Delhi NCR and India.

1. **Push your code to GitHub / GitLab**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for MrTech Care website"
   # Create a repo on github.com and push:
   git remote add origin https://github.com/YOUR_USERNAME/mrtechcare.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Log in to your free account at [dash.cloudflare.com](https://dash.cloudflare.com/).
   - Navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select your `mrtechcare` repository.
   - Configure build settings:
     - **Framework preset**: `Vite`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click **Save and Deploy**.

3. **Attach your custom domain (`mrtechcare.in`)**:
   - In Cloudflare Pages, go to **Custom domains** tab > **Set up a custom domain**.
   - Enter `mrtechcare.in` and `www.mrtechcare.in`.
   - If your domain DNS is managed by Cloudflare, it will automatically route traffic and generate free SSL/TLS certificates.
   - If your domain is registered elsewhere (e.g. GoDaddy, Namecheap, Hostinger):
     - Add a **CNAME** record:
       - Type: `CNAME` | Name: `@` or `mrtechcare.in` | Target: `<your-project>.pages.dev`
       - Type: `CNAME` | Name: `www` | Target: `<your-project>.pages.dev`

---

### Option B: Deploying on Netlify (Drag & Drop or Git)

1. **Method 1: Manual Drag & Drop (Fastest - 2 minutes)**:
   - Run `npm run build` locally. This creates the `dist` folder.
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
   - Drag and drop the `dist` folder directly into Netlify.
   - Netlify will instantly provide a live URL!

2. **Method 2: Git Continuous Deployment**:
   - Connect your GitHub repo to Netlify.
   - Set Build command: `npm run build`
   - Set Publish directory: `dist`
   - Click **Deploy Site**.

3. **Add custom domain `mrtechcare.in`**:
   - In Netlify, go to **Site settings** > **Domain management** > **Add custom domain**.
   - Enter `mrtechcare.in`.
   - Update your domain DNS records:
     - **Apex domain A Record**: Point `@` to `75.2.60.5`
     - **Subdomain CNAME Record**: Point `www` to your Netlify subdomain (e.g., `mrtechcare.netlify.app`).

---

## 🛡️ Business Principles & Compliance

- **No Unauthorized Access**: MrTech Care does not crack security passwords, bypass stolen device locks, or perform unauthorized intrusions.
- **Privacy First**: We never ask for client passwords, banking OTPs, or UPI PINs. Screen control remains strictly with the user during remote sessions.
- **Transparent Billing**: All prices displayed are indicative starting rates. Final billing is confirmed after physical/remote diagnosis. Parts and travel charges are billed at actuals.
- **Authenticity**: No fake customer reviews, fabricated years of experience, or manufactured certifications.

---

## 📞 Support & Inquiries

For changes, updates or technical consultation:
- **Phone / WhatsApp**: [+91 99909 46044](https://wa.me/919990946044)
- **Email**: [rajamister710@gmail.com](mailto:rajamister710@gmail.com)
- **Website**: [https://mrtechcare.in](https://mrtechcare.in)
