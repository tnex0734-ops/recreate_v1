# CampusCode ReBuild '26 - Round 1 Recreation

Frontend recreation of CampusCode (campuscode.co.in) for Round 1 of the ReBuild '26 Hackathon.

Built with pure HTML5, CSS3, and vanilla JavaScript. Zero frameworks, zero build steps, and zero npm dependencies.

## Pages Built

- `index.html`: Landing page matching the desktop reference layout. Includes the three-slashes brand mark, hero section with outlined typography, animated marquee ticker, interactive video showcase with audio toggle, 4-step workflow, active hackathon cards, and responsive navigation drawer.
- `login.html`: Auth page with split layout, password visibility toggle, functional captcha generator with refresh, vehicle status stage, and a quick demo login button for testing without credentials.
- `register.html`: 2-step registration flow. Step 1 collects student info, password check, captcha, and 18+ confirmation. Step 2 simulates email OTP verification (`694218`).
- `student.html`: Student dashboard matching the live platform:
  - Sticky topbar with breadcrumb, notifications button, refresh button, and clickable profile pill.
  - Sidebar with all 13 workspace sections, active indicator arrow, and user account status.
  - Overview tab with ReBuild '26 hero card, backend counter metrics (3, 1, 2, 1), and discovery links.
  - My Events tab with registered event cards, UUIDs, team tags, and journey links.
  - Event Hub with tabbed submission form (GitHub repo, live demo, organizer notes) and leaderboard.
  - Profile tab with 2-column view mode and interactive edit mode (including quick skill suggestions).
  - Digital ID card with QR badge, Certificates verification, HackMate AI, and RuleBot AI.

## Running Locally

No installation needed. Double-click `index.html` in your file explorer, or run a local static server:

```bash
# Using Python
python -m http.server 8080

# Or Node
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Deployment

Since there is no build step, you can deploy by dragging this folder directly onto Netlify Drop (app.netlify.com/drop) or connecting the GitHub repository to GitHub Pages / Vercel Static.

## Design Tokens

- Background: `#f7f7f4`
- Cards / Surface: `#ffffff`
- Base text: `#111111`
- Accent Purple: `#7665ff`
- Accent Lime: `#a8e62e` / `#82b91a`
- Borders: `#deded8`
- Fonts: Inter & DM Mono
