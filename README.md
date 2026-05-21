# Desi Film Club — SJSU Website

Official website for the Desi Film Club at San Jose State University.

**Live:**
[website](https://sjsudfc.com)
[instagram](https://instagram.com/sjsu_dfc)
[linktree](https://linktr.ee/DesiFilmClub)

---


## make sure you have npm installed

verify npm installation:

```bash
npm --version
```

## make sure you have node installed

verify node installation:

```bash
node --version
```

if not installed, install using homebrew:

```bash
brew install node
```

### Running the website

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── ExecBoard.jsx
│   │   ├── JoinCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── DFCLogo.jsx
│   │   ├── FilmReelSVG.jsx
│   │   └── MandalaSVG.jsx
│   ├── assets/
│   │   └── officers/    # exec board headshots
│   ├── App.jsx
│   └── index.css
└── package.json
```

## For any changes made:


- always make a PR
- request review to @sujan30
- in PR write details of changes made 

## NEVER MERGE YOUR CHANGES TO MAIN BRANCH


