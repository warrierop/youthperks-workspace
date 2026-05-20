# YouthPerks Workspace

A premium, role-based internal management system designed for founders, executives, and staff to manage operations, tasks, documents, hiring, reporting, and brand partnerships.

## 🚀 Features

### Core System
- **Role-Based Access Control**: Super Admin, Admin, Executive, Staff roles with granular permissions
- **Authentication**: Secure login system with no public signup (admin-only user creation)
- **Premium UI**: Clean, minimal, enterprise-grade interface inspired by aerospace/financial SaaS

### Modules
- **Task Management**: Create, assign, and track tasks with different submission types
- **Document Management**: Upload and organize documents with role-based visibility
- **Team Management**: User management with role and rank assignments
- **Budget Management**: Track and allocate budgets across departments and projects
- **Brand & Pitch Tracker**: Manage partnership opportunities and follow-ups
- **Reporting System**: Monthly/quarterly reports with role-based access
- **Announcements**: Role-targeted internal communications
- **Polls System**: Create and manage team polls
- **Ideas Channel**: Collaborative brainstorming and idea tracking
- **Notifications**: Smart notification system for important updates

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern, clean styling
- **Lucide React** for icons
- **Radix UI** for accessible components

### Backend
- **Next.js API Routes** for server-side logic
- **NextAuth.js** for authentication
- **MongoDB** for flexible NoSQL database

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Configure your `.env.local` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/youthperks
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

3. **Set up MongoDB**
   - Install and start MongoDB on your machine
   - Create a database named `youthperks`

4. **Seed the database**
   ```bash
   curl -X POST http://localhost:3000/api/seed
   ```
   
   This will create the default Super Admin account:
   - **Email**: abcsuperyouthperks@youthperks.com
   - **Password**: 1234Aa5678mc

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Open http://localhost:3000 in your browser
   - Login with the Super Admin credentials

## 👥 Role System

### Super Admin
- Full system control
- User management (create/edit/delete users)
- Role and permission management
- Access to all modules and data
- System analytics and configuration

### Admin
- Operational control
- Task management and assignment
- Document management
- Team performance oversight
- Budget allocation and tracking
- Brand partnership management

### Executive
- Strategic oversight
- Task assignment and tracking
- Document access and management
- Report review and analysis
- Brand partnership tracking
- Team performance monitoring

### Staff
- Task-focused interface
- View assigned tasks only
- Submit reports and forms
- Access allowed documents
- Participate in polls and ideas

## 🔐 Security Features

- **No public registration** - admin-only user creation
- **Role-based permissions** - granular access control
- **Data visibility controls** - team/own/all access levels
- **Secure password hashing** - bcrypt with salt rounds
- **Session management** - secure JWT tokens

## 🎨 UI/UX Principles

- **Minimal and clean** design
- **Data-focused** interface
- **Enterprise-grade** aesthetics
- **Responsive** design for all devices
- **Accessibility** compliance with Radix UI

## 📊 Database Schema

### Collections
- **users** - User accounts and profiles
- **roles** - Role definitions and permissions
- **tasks** - Task management and assignments
- **documents** - File management and metadata
- **budgets** - Financial tracking
- **brands** - Partnership management
- **reports** - Performance and activity reports
- **announcements** - Internal communications
- **polls** - Team voting system
- **notifications** - Alert system
- **ideas** - Innovation tracking

---

**YouthPerks Workspace** - Premium Internal Management System
