# Crafton Frontend Task

A fully responsive **Next.js 15** application implemented as a recruitment task for **Crafton**.  
The project reproduces the provided Figma design with pixel-perfect precision, uses **TypeScript**, **Tailwind CSS**, and a modular component architecture organized under `src/components/`.

> **Live demo:** [https://crafton-task.vercel.app/](https://crafton-task.vercel.app/)

---

##  Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started (local)](#getting-started-local)
- [Running with Docker](#running-with-docker)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Conventions & Notes](#conventions--notes)

---

## Project Overview

The goal of this project was to implement the **frontend layer** of a real-estate landing page using **Next.js App Router**, while maintaining strict design fidelity with the Figma source.  
Key features include:

- Responsive layout (desktop / tablet / mobile)
- Shared design tokens (colors, spacing, typography) defined in `globals.css`
- Modular section-based structure (`/sections/home/…`)
- Reusable UI components (`/components/ui/`)
- Typed forms and interaction logic with validation
- Docker-based development environment for reproducibility

---

## Tech Stack

| Layer | Technology |
| ------ | ----------- |
| Framework | [Next.js 15](https://nextjs.org/) with App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| UI Components | Custom modular components |
| Containerization | Docker + docker-compose (dev) |
| Deployment | Vercel (Production) |

---

## Project Structure

crafton-task/
│
├── src/
│ ├── app/ # Next.js app router structure
│ │ ├── layout.tsx # Root layout
│ │ ├── globals.css # Global tokens and Tailwind imports
│ │ └── fonts.ts # Local font injection (Clash Display, Instrument Sans)
│ │
│ ├── components/
│ │ ├── common/ # Shared layout components (Header, Footer, etc.)
│ │ ├── sections/home/ # Page sections (Hero, Investments, Contact, etc.)
│ │ └── ui/ # Reusable UI primitives (Button, EditText, TextArea)
│ │
│ └── styles/ # Typography and local overrides
│
├── public/ # Static assets (icons, images)
├── .dockerignore
├── Dockerfile.dev
├── docker-compose.dev.yml
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── README.md

yaml
Skopiuj kod

---

## Getting Started (local)

### 1. Clone the repository
```bash
git clone https://github.com/AntoniZalewski/crafton-task.git
cd crafton-task
2. Install dependencies
bash
Skopiuj kod
npm install
# or
yarn install
# or
pnpm install
3. Start the development server
bash
Skopiuj kod
npm run dev
Application will be available at:

arduino
Skopiuj kod
http://localhost:3000
Running with Docker
The repository includes a ready-to-use Docker development setup.

Build and run
bash
Skopiuj kod
docker compose -f docker-compose.dev.yml up --build
Then open http://localhost:3000.

Stop the container
bash
Skopiuj kod
docker compose -f docker-compose.dev.yml down
This setup provides:

Automatic hot-reload (bind mount of your local files)

Node 20 Alpine base image

Consistent environment across machines

Deployment
The production build is deployed on Vercel.
Every push to the main branch triggers an automatic redeploy.

Production URL:
👉 https://crafton-task.vercel.app/

Manual build (optional)
bash
Skopiuj kod
npm run build
npm run start
Scripts
Command	Description
npm run dev	Start local development server
npm run build	Create optimized production build
npm run start	Run built application locally
npm run lint	Run ESLint checks

Conventions & Notes
Type safety: all components are written in strict TypeScript mode.

Code style: ESLint + Prettier (enforced by Next.js defaults).

Line endings: normalized via .gitattributes (LF).

Docker: .dockerignore excludes build artifacts and environment files.

Images: all visual content uses next/image for optimization.

Author
Antoni Zalewski
Frontend Developer / Creative Technologist
