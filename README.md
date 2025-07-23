# StackForge

**StackForge** is a full-stack, role-based dashboard application built with modern technologies including **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Prisma**, **PostgreSQL**, and **Clerk** for authentication and RBAC.

## 🔧 Features

- 🔐 Secure authentication with **Clerk**
- 👤 Role-based access (Admin & User)
- ⚙️ Protected routes using **Next.js Middleware**
- 📦 Scalable Prisma + PostgreSQL DB setup
- 💅 Clean, responsive UI using Tailwind CSS
- 🧪 Zod validation for safe input
- 📁 Modular file and folder architecture

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **Auth**: Clerk (User, Admin roles)
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Validation**: Zod

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/stackforge.git
cd stackforge
npm install
cp .env.example .env
npx prisma generate
npm run dev
