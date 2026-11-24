# DoneStead Property Solutions — Website v1.0
## Property Ready. Done Right.

**Company:** DoneStead Property Solutions Ltd  
**Trading as:** DoneStead  
**Address:** 18, 149 Blackfriars Road, London SE1 8EF  
**Contact:** info@donestead.co.uk | 07867 776 421  
**Website:** www.donestead.co.uk

---

## Project Overview

Static HTML/CSS website for DoneStead Property Solutions Ltd.  
No framework, no build step, no dependencies. Pure HTML + CSS + vanilla JS.  
**Delivers instantly on any web host or WordPress page.**

---

## File Structure

```
DoneStead-Website-v1/
├── index.html              ← Homepage (main page)
├── css/
│   └── donestead.css       ← All styles (shared across all pages)
├── assets/
│   └── logo.png            ← DoneStead logo (transparent background, 480×240px)
├── pages/
│   ├── pricing.html                          ← /pricing/
│   ├── end-of-tenancy-void-works.html        ← /end-of-tenancy-void-works/
│   ├── damp-mould-solutions-london.html      ← /damp-mould-solutions-london/
│   ├── property-maintenance-london.html      ← /property-maintenance-london/
│   ├── gas-safety-eicr-compliance-london.html ← /gas-safety-eicr-compliance-london/
│   ├── refurbishments-extensions.html        ← /refurbishments-extensions/
│   ├── awaab-damp-check.html                 ← /awaab-damp-check/ (Awaab tool placeholder)
│   ├── about.html                            ← /about/
│   ├── contact.html                          ← /contact/
│   ├── client-login.html                     ← /client-login/ (placeholder)
│   └── pro-login.html                        ← /pro-login/ (placeholder)
└── README.md               ← This file
```

---

## How to Run Locally

**No installation needed.** Open any HTML file directly in a browser.

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended for proper link behaviour)
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

---

## WordPress Deployment (for Michał)

### Recommended approach: Full HTML theme

1. Upload all files to `/wp-content/themes/donestead/`
2. Create `functions.php` that enqueues `css/donestead.css`
3. Convert `index.html` → `index.php` (page template)
4. Create custom page templates for each subpage
5. Set up pretty URLs matching the `/page-slug/` pattern

### Alternative: Static host (fastest)
Upload entire folder to **Netlify / Vercel / Cloudflare Pages** — zero configuration needed.

### Alternative: WordPress + Elementor
Import each page's body content as an Elementor HTML widget.

---

## Configuration Required After Deployment

| Item | Where | Action |
|------|--------|--------|
| London background photo | `index.html` → CSS variable `--hero-bg-url` | Replace Unsplash URL with licensed/owned photo |
| Contact form | `index.html` + `pages/contact.html` | Connect to backend (WPForms / Gravity Forms / custom API) |
| Awaab Check tool | `pages/awaab-damp-check.html` | Connect to `/api/awaab-check` photo assessment endpoint |
| Client Portal | `pages/client-login.html` | Replace placeholder with FSM login (HiveSuite/Field Ascend) |
| DoneStead Pro | `pages/pro-login.html` | Replace placeholder with Pro portal login |
| Google Analytics | All pages `<head>` | Add GA4 tag |
| Favicon | All pages `<head>` | Add `<link rel="icon">` with DoneStead favicon |
| Sitemap | Root | Generate sitemap.xml for SEO |

---

## Photo/Asset Replacement

| Asset | Current | Replace with |
|-------|---------|-------------|
| Hero background | Unsplash Tower Bridge photo (free, requires attribution) | Licensed London skyline photo — city at dusk recommended. See `--hero-bg-url` in `index.html` CSS. |
| Logo | `assets/logo.png` (480×240, transparent PNG) | Already your new logo — replace if updated |
| Hero brightness | `--hero-bg-brightness: 0.45` | Adjust 0–1. 0.45 = medium dark. Increase for more visible photo. |
| Hero crop | `--hero-bg-pos: center 55%` | Adjust to shift vertical crop of background photo |

---

## Changes Made (July 2026)

### Pricing (v2 — July 2026)
- Call-out: £125 → **£145**
- Emergency: £265 → **£295**
- Half Day Labour: £225 → **£249**
- EOT Studio: £1,250 → **£1,395** (44% margin)
- EOT 1-Bed: £1,450 → **£1,625** (44% margin)
- EOT 2-Bed: £1,995 → **£2,225** (44% margin)
- EOT 3-Bed: £2,595 → **£2,895** (44% margin)
- CP12 (1-app): £115 → **£135**
- CP12 (2-3 app): £145 → **£165**
- CP12 + Boiler: £185 → **£200**
- EICR 1-bed: £180 → **£215**
- EICR 2-bed: £225 → **£255**
- EICR 3-bed: £285 → **£325**
- Compliance Pack: £495 → **£549**
- Damp Survey: £245 → **£295**
- Damp Programme: £1,295 → **£1,495**

### Design (v21 — July 2026)
- New logo (DoneStead Property Solutions, transparent background)
- Cyan darkened: #00C2FF → #009FCE
- Hero: London skyline as background image (behind text)
- Navigation: Client Login + DoneStead Pro Login only
- Coverage: postcode grid → borough descriptions
- EOT added to hero sub-description alongside Void
- Awaab Check navigation tab added (hero buttons)
- Who We Work With: card alignment fixed (equal heights)

---

## Brand Standards

| Token | Value |
|-------|-------|
| Navy | `#0D3B66` |
| Cyan | `#009FCE` |
| Green | `#00B67A` |
| Font — headings | Playfair Display (700, 900) |
| Font — body | Inter (300–900) |
| Border radius | 8–14px |
| Hero bg brightness | 0.45 (adjust via CSS variable) |

---

## Contact

**Maciej Malicki** — CEO & Founder  
info@donestead.co.uk | 07867 776 421  
www.donestead.co.uk
