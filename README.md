# Crafton Frontend Task

A fully responsive **Next.js 15** application implemented as a recruitment task for **Crafton**.  
The project reproduces the provided Figma design with pixel-perfect precision, using **TypeScript**, **Tailwind CSS**, and a modular component architecture organized under `src/components/`.

**Live demo:** [https://crafton-task.vercel.app/](https://crafton-task.vercel.app/)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started (Local)](#getting-started-local)
- [Running with Docker](#running-with-docker)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [Conventions and Notes](#conventions-and-notes)
- [Author](#author)

---

## Project Overview

The goal of this project was to implement the **frontend layer** of a real-estate landing page using **Next.js App Router**, while maintaining strict design fidelity with the provided Figma source.

### Key Features
- Fully responsive layout (desktop / tablet / mobile)
- Shared design tokens (colors, spacing, typography)
- Modular, section-based architecture
- Typed forms and event handlers
- Dockerized development environment for consistency
- Deployed on Vercel with automatic redeploys from `main` branch

---

## Tech Stack

| Layer | Technology |
| ------ | ----------- |
| Framework | [Next.js 15](https://nextjs.org/) with App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| UI Components | Custom React components |
| Containerization | Docker + docker-compose |
| Deployment | Vercel |

---

## Project Structure

crafton-task/
│
├── src/
│ ├── app/ # App Router structure
│ │ ├── layout.tsx # Root layout
│ │ ├── globals.css # Global styles and design tokens
│ │ └── fonts.ts # Local font injection
│ │
│ ├── components/
│ │ ├── common/ # Shared layout components (Header, Footer)
│ │ ├── sections/home/ # Page sections (Hero, Investments, Contact)
│ │ └── ui/ # Reusable UI elements (Button, EditText, etc.)
│ │
│ └── styles/ # Typography and overrides
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

## Getting Started (Local)

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
The application will be available at http://localhost:3000.

Running with Docker
The repository includes a complete Docker setup for development.

Build and start
bash
Skopiuj kod
docker compose -f docker-compose.dev.yml up --build
Then open http://localhost:3000.

Stop the container
bash
Skopiuj kod
docker compose -f docker-compose.dev.yml down
This setup provides:

Automatic hot-reload with bind mounts

Node 20 (Alpine) base image

Reproducible environment across systems

Deployment
The production build is deployed on Vercel.
Every push to the main branch triggers an automatic redeploy.

Production URL:
https://crafton-task.vercel.app/

Manual build (optional)
bash
Skopiuj kod
npm run build
npm run start
Available Scripts
Command	Description
npm run dev	Start local development server
npm run build	Create optimized production build
npm run start	Run the built application locally
npm run lint	Run ESLint checks

Conventions and Notes
Type safety: All components use strict TypeScript typing.

Code style: Enforced via ESLint and Prettier (Next.js defaults).

Line endings: Normalized through .gitattributes (LF).

Docker: .dockerignore excludes build artifacts and environment files.

Images: All visuals use next/image for optimization.

Accessibility: Labels and focus states follow WCAG recommendations.

Author
Antoni Zalewski
