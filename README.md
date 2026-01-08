# AdymireWebsite
Adymire Website repo
# 🚀 Adymire Agency - Official Website

<div align="center">

![Adymire Logo](https://via.placeholder.com/200x80/6366f1/ffffff?text=ADYMIRE)

**Premium Digital Marketing | UI/UX Design | Performance Growth**

[![Website](https://img.shields.io/badge/Website-adymire.com-blue)](https://adymire.com)
[![Status](https://img.shields.io/badge/Status-Live-success)]()
[![Version](https://img.shields.io/badge/Version-2.0.0-orange)]()

</div>

---

## 📖 Table of Contents

- [About Adymire](#about-adymire)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Services](#services)
- [Company Profile](#company-profile)
- [Contact Us](#contact-us)
- [Contributing](#contributing)

---

## 🎯 About Adymire

**Adymire Agency** hai ek premium digital marketing aur creative powerhouse jo **performance-driven results** deliver karta hai. Founded by **Yash** (Engineer + Digital Marketer + UI/UX Strategist), Adymire part hai **ZooQ Group** ecosystem ka.

### Our Mission
Transform businesses through data-driven marketing, stunning design, aur strategic growth frameworks.

### Our Vision
Become the #1 performance marketing agency for Tier 1, Tier 2 countries aur European markets.

---

## ✨ Features

### 🎨 **Core Services**
- ✅ **UI/UX Design** - Professional interface design with user research
- ✅ **Performance Marketing** - Meta Ads, Google Ads, LinkedIn Ads
- ✅ **Funnel Building** - High-converting sales funnels
- ✅ **Branding & Identity** - Complete brand systems
- ✅ **Social Media Management** - Content + Posting + Analytics
- ✅ **Creative Production** - Video editing, motion graphics, graphics
- ✅ **Website Development** - Custom websites with CMS
- ✅ **Growth Strategy** - Business consulting aur scaling frameworks

### 🌐 **Website Features**
- ⚡ **Lightning Fast** - Optimized loading (< 2s)
- 📱 **Fully Responsive** - Mobile, tablet, desktop perfect
- 🎭 **Smooth Animations** - Framer Motion + GSAP
- 🔍 **SEO Optimized** - Complete on-page SEO
- 📊 **Analytics Integration** - Google Analytics + Hotjar
- 💬 **Live Chat** - Real-time customer support
- 📝 **Blog System** - Content management with categories
- 🎨 **Portfolio Showcase** - Dynamic case studies
- 📧 **Contact Forms** - Multi-step forms with validation
- 🔐 **Admin Dashboard** - Content management system

---

## 🛠️ Tech Stack

### **Frontend**
```
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP (GreenSock)
- Shadcn UI Components
```

### **Backend**
```
- Node.js + Express
- PostgreSQL (Database)
- Prisma ORM
- Redis (Caching)
- JWT Authentication
```

### **Tools & Services**
```
- Vercel (Hosting)
- AWS S3 (Media Storage)
- SendGrid (Email)
- Stripe (Payments)
- Google Analytics
- Hotjar (Heatmaps)
```

---

## 📁 Project Structure

```
adymire-website/
├── 📂 frontend/
│   ├── 📂 app/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # About page
│   │   ├── services/             # Services pages
│   │   ├── portfolio/            # Portfolio showcase
│   │   ├── blog/                 # Blog system
│   │   ├── contact/              # Contact page
│   │   └── api/                  # API routes
│   ├── 📂 components/
│   │   ├── ui/                   # Reusable UI components
│   │   ├── sections/             # Page sections
│   │   ├── layout/               # Layout components
│   │   └── forms/                # Form components
│   ├── 📂 lib/
│   │   ├── utils.ts              # Utility functions
│   │   ├── api.ts                # API client
│   │   └── validations.ts        # Form validations
│   ├── 📂 styles/
│   │   └── globals.css           # Global styles
│   ├── 📂 public/
│   │   ├── images/               # Static images
│   │   └── videos/               # Video assets
│   ├── package.json
│   └── tsconfig.json
│
├── 📂 backend/
│   ├── 📂 src/
│   │   ├── 📂 routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── contact.routes.ts
│   │   │   ├── blog.routes.ts
│   │   │   └── portfolio.routes.ts
│   │   ├── 📂 controllers/
│   │   ├── 📂 models/
│   │   ├── 📂 middleware/
│   │   ├── 📂 services/
│   │   └── server.ts
│   ├── 📂 prisma/
│   │   └── schema.prisma
│   ├── package.json
│   └── tsconfig.json
│
├── 📂 docs/                      # Documentation
├── .env.example                  # Environment template
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Installation

### Prerequisites
```bash
- Node.js 18+ installed
- PostgreSQL database
- Git
```

### Step 1: Clone Repository
```bash
git clone https://github.com/adymire/adymire-website.git
cd adymire-website
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Step 4: Setup Database
```bash
# Copy environment file
cp .env.example .env

# Update .env with your database credentials
# Then run migrations
npx prisma migrate dev
npx prisma generate
```

### Step 5: Run Development Servers

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

Frontend: `http://localhost:3000`  
Backend: `http://localhost:5000`

---

## 🔐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/adymire
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d
SENDGRID_API_KEY=your_sendgrid_key
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
AWS_BUCKET_NAME=adymire-media
STRIPE_SECRET_KEY=your_stripe_key
REDIS_URL=redis://localhost:6379
PORT=5000
```

---

## 📡 API Documentation

### Base URL
```
https://api.adymire.com/v1
```

### Endpoints

#### **Contact Form**
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "service": "UI/UX Design",
  "message": "I need a website redesign",
  "budget": "10000-25000"
}

Response: 200 OK
{
  "success": true,
  "message": "Message sent successfully!"
}
```

#### **Get Portfolio Projects**
```http
GET /api/portfolio?category=ui-ux&limit=10

Response: 200 OK
{
  "projects": [...],
  "total": 45,
  "page": 1
}
```

#### **Blog Posts**
```http
GET /api/blog?category=marketing&page=1

Response: 200 OK
{
  "posts": [...],
  "totalPages": 5
}
```

---

## 🌍 Deployment

### Vercel (Recommended for Frontend)
```bash
cd frontend
vercel --prod
```

### Backend Deployment (Railway/Render)
```bash
# Build
npm run build

# Start production
npm start
```

### Environment Setup
1. Add all environment variables in hosting platform
2. Connect PostgreSQL database
3. Setup Redis instance
4. Configure CDN for media

---

## 💼 Services

### 1️⃣ **UI/UX Design**
- User Research & Personas
- Wireframing & Prototyping
- High-Fidelity Design
- Design Systems
- Usability Testing

**Pricing:** ₹50,000 - ₹5,00,000

### 2️⃣ **Performance Marketing**
- Meta Ads Management
- Google Ads (Search + Display)
- LinkedIn Ads
- Funnel Optimization
- A/B Testing
- Conversion Rate Optimization

**Pricing:** ₹30,000/month + 10% ad spend

### 3️⃣ **Website Development**
- Custom Website Design
- E-commerce Development
- CMS Integration
- API Development
- Performance Optimization
- Maintenance & Support

**Pricing:** ₹1,00,000 - ₹10,00,000

### 4️⃣ **Branding & Identity**
- Logo Design
- Brand Guidelines
- Marketing Collateral
- Packaging Design
- Brand Strategy

**Pricing:** ₹75,000 - ₹3,00,000

---

## 🏢 Company Profile

### **Adymire Agency**
**Part of ZooQ Group Ecosystem**

**Founded:** 2022  
**Founder:** Yash (Engineer, Digital Marketer, UI/UX Strategist)  
**Headquarters:** India  
**Target Markets:** Tier 1 & 2 Countries, Europe, USA

### **Company Structure**

**Adymire Agency** (Main Brand)
├── **Adymire Studio** (Creative Production)
└── **Adymire Tech** (Development Division)

### **Sister Companies under ZooQ Group**
- **Cybertron AI** - AI Ecosystem Platform
- **Zooq Tech** - Technology & SaaS Development
- **Zooq Digital** - Marketing Operations
- **Zooq Media** - Content Production
- **Zooq Labs** - AI R&D

### **Our Numbers**
- ✅ **150+** Projects Completed
- ✅ **50+** Happy Clients
- ✅ **₹2Cr+** Revenue Generated for Clients
- ✅ **15+** Team Members
- ✅ **4.9/5** Average Rating

### **Industries We Serve**
- SaaS & Tech Startups
- E-commerce Brands
- Healthcare & Wellness
- Education & EdTech
- Real Estate
- Finance & Fintech
- Food & Beverage

---

## 📞 Contact Us

### **Get In Touch**

**🏢 Office Address**
Adymire Agency  
[Your Address]  
[City, State - PIN]  
India

**📧 Email**
- General Inquiries: hello@adymire.com
- Projects: projects@adymire.com
- Careers: careers@adymire.com
- Support: support@adymire.com

**📱 Phone**
- India: +91-XXXXXXXXXX
- USA: +1-XXX-XXX-XXXX

**🌐 Social Media**
- Website: [adymire.com](https://adymire.com)
- LinkedIn: [linkedin.com/company/adymire](https://linkedin.com/company/adymire)
- Instagram: [@adymire.agency](https://instagram.com/adymire.agency)
- Twitter: [@AdymireAgency](https://twitter.com/AdymireAgency)
- Dribbble: [dribbble.com/adymire](https://dribbble.com/adymire)
- Behance: [behance.net/adymire](https://behance.net/adymire)

**🕐 Business Hours**
- Monday - Friday: 10:00 AM - 7:00 PM IST
- Saturday: 10:00 AM - 3:00 PM IST
- Sunday: Closed

### **Quick Contact Form**
```html
<form action="/api/contact" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="tel" name="phone" required />
  <select name="service">
    <option>UI/UX Design</option>
    <option>Performance Marketing</option>
    <option>Website Development</option>
    <option>Branding</option>
  </select>
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Code Standards**
- Follow TypeScript best practices
- Use ESLint + Prettier
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation

---

## 📄 License

Copyright © 2024 Adymire Agency. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🙏 Acknowledgments

- **Founder:** Yash
- **Design System:** Shadcn UI
- **Animation:** Framer Motion, GSAP
- **Hosting:** Vercel
- **Database:** PostgreSQL + Prisma

---

<div align="center">

**Made with ❤️ by Adymire Agency**

[Website](https://adymire.com) • [Portfolio](https://adymire.com/portfolio) • [Contact](https://adymire.com/contact)

</div>
