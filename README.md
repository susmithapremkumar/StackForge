# 🚀 StackForge

**StackForge** is a full-stack expense tracker built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Prisma**, **PostgreSQL**, and **Clerk** for secure authentication and role-based access. The app is deployed on **Vercel**, offering a clean, responsive UI and a scalable backend to manage personal finances efficiently.

---

## 🔧 Features

- 🔐 Secure login and signup with **Clerk**
- 👤 Role-based access control (User/Admin)
- ⚙️ Route protection using **Next.js Middleware**
- 📊 Track and manage expenses with structured entries
- 💅 Modern and responsive UI using **Tailwind CSS**
- 🧪 Robust input validation using **Zod**
- 📁 Clean and scalable folder structure

---

## 🛠 Tech Stack

| Area             | Tech Used                                  |
|------------------|--------------------------------------------|
| **Frontend**     | Next.js 14 (App Router), TypeScript        |
| **Styling**      | Tailwind CSS                               |
| **Backend**      | Next.js API Routes, Prisma ORM             |
| **Database**     | PostgreSQL                                 |
| **Authentication** | Clerk (RBAC with Admin/User roles)      |
| **Validation**   | Zod                                        |
| **Deployment**   | Vercel                                     |

---

## 📦 Getting Started

```bash
git clone https://github.com/susmithapremkumar/StackForge.git
cd StackForge
npm install
cp .env.example .env
npx prisma generate
npm run dev
