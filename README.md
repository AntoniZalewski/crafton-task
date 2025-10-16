# Crafton Task — Next.js (TypeScript) + Tailwind + Docker

Implementacja frontendowa przygotowana na podstawie dostarczonego designu w ramach zadania rekrutacyjnego Crafton.
Aplikacja została zbudowana w Next.js 14+ (TypeScript), stylowana przy użyciu Tailwind CSS i w pełni konteneryzowana za pomocą Dockera.

## Podgląd

Live demo: https://crafton-task.vercel.app/

Repozytorium: https://github.com/AntoniZalewski/crafton-task

## Technologie

Next.js 14+ (App Router)

React 18

TypeScript

Tailwind CSS + PostCSS

ESLint

Docker / Docker Compose

## Wymagania wstępne

Docker (zalecane): Docker 24+, Docker Compose v2
Lokalnie: Node.js 18.17+ lub 20+, npm/yarn/pnpm

## Szybki start

### 1. Uruchomienie w Dockerze

git clone https://github.com/AntoniZalewski/crafton-task.git

cd crafton-task

docker compose -f docker-compose.dev.yml up --build


Aplikacja: http://localhost:3000

### 2. Uruchomienie lokalne

git clone https://github.com/AntoniZalewski/crafton-task.git

cd crafton-task

npm install

npm run dev

Aplikacja: http://localhost:3000

## Licencja

Zobacz plik LICENSE.

# Autor:

# Antoni Zalewski — https://github.com/AntoniZalewski
