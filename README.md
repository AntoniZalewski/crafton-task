Crafton Task — Next.js (TS) + Tailwind + Docker

Implementacja frontendowa przygotowana na podstawie dostarczonego designu w ramach zadania rekrutacyjnego Crafton.
Aplikacja została zbudowana w Next.js 14+ (TypeScript), stylowana za pomocą Tailwind CSS, i w pełni konteneryzowana przy użyciu Dockera.

Podgląd

🔗 Live demo: https://crafton-task.vercel.app/

📦 Repozytorium: github.com/AntoniZalewski/crafton-task

Technologie

Next.js 14+ (App Router)

React 18

TypeScript

Tailwind CSS + PostCSS

ESLint

Docker / Docker Compose

Wymagania wstępne

Opcja A — Docker (zalecane):

Docker 24+

Docker Compose v2

Opcja B — Lokalnie:

Node.js 18.17+ lub 20+

npm (lub yarn/pnpm)

Szybki start
1️⃣ Uruchomienie w Dockerze (z hot-reloadem)
# Klonowanie repozytorium
git clone https://github.com/AntoniZalewski/crafton-task.git
cd crafton-task

# Uruchomienie kontenera developerskiego
docker compose -f docker-compose.dev.yml up --build


Aplikacja będzie dostępna pod adresem:
👉 http://localhost:3000

2️⃣ Uruchomienie lokalne (Node.js)
git clone https://github.com/AntoniZalewski/crafton-task.git
cd crafton-task

npm install
npm run dev


Aplikacja wystartuje pod:
👉 http://localhost:3000

Licencja

Projekt udostępniony na warunkach określonych w pliku LICENSE
.

Autor

Antoni Zalewski
GitHub: AntoniZalewski
