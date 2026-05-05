# 🎯 Prept - AI-Powered Interview Marketplace

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React.js-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-gray?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-red?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-white?style=flat-square&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk" alt="Clerk" />
  <img src="https://img.shields.io/badge/Stream-0052CC?style=flat-square&logo=stream" alt="Stream" />
  <img src="https://img.shields.io/badge/Tailwind-black?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
</div>

## 📋 Overview

Prept is a modern interview marketplace platform that connects interviewees with expert interviewers for practice sessions. Featuring AI-powered feedback, real-time video calls, and tiered subscription plans, Prept helps candidates prepare for technical interviews with personalized guidance.

## 🚀 Key Features

### 🤖 AI-Powered Features
- **🎥 AI Question Generator**: Role-specific questions generated live during interviews
- **📊 AI Feedback Reports**: Comprehensive post-interview analysis covering:
  - Technical depth assessment
  - Communication skills evaluation  
  - Problem-solving approach analysis
  - Personalized recommendations
- **⭐ Performance Ratings**: Automated rating system (Poor, Average, Good, Excellent)

### 💼 User Roles
- **🎯 Interviewees**: Browse experts, book sessions, receive AI feedback
- **🧑‍💼 Interviewers**: Set availability, earn credits, provide expertise

### 📞 Communication Features
- **🎬 HD Video Calls**: Built with Stream video SDK
- **💬 Persistent Chat**: Message between sessions
- **📹 Session Recordings**: Automatic recording and playback (Pro plan)
- **📅 Smart Scheduling**: Timezone-aware booking system

### 💳 Subscription Plans

| Plan | Price | Credits | Features |
|------|--------|----------|----------|
| **Free** | $0 | 1/month | • 1 mock interview<br>• HD video calls<br>• Persistent chat |
| **Starter** | $29 | 5/month | • 5 mock interviews<br>• AI feedback reports<br>• Credits roll over |
| **Pro** | $69 | 15/month | • 15 mock interviews<br>• AI feedback reports<br>• Session recordings<br>• Credits roll over |

## 🛠 Tech Stack

### Frontend
- **⚛️ Next.js 16** - React framework with App Router
- **🎨 React 18** - UI library
- **📘 TypeScript** - Type-safe development
- **🎭 Tailwind CSS** - Utility-first styling
- **🎨 Shadcn/ui** - Modern UI components
- **🎯 Lucide React** - Icon library
- **🔐 Clerk** - Authentication & user management

### Backend
- **🗄️ Supabase** - Dashboard to manage user and application data
- **🗄️ PostgreSQL** - Primary database
- **🔮 Prisma** - ORM & database toolkit
- **🔐 Clerk** - User authentication
- **📹 Stream Video API** - Real-time video calls
- **🤖 OpenAI API** - AI feedback generation

### Development Tools
- **📦 npm** - Package management
- **🔧 ESLint** - Code linting
- **⚡ Turbopack** - Fast development builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- PostgreSQL database

### Clone & Setup

1. **📥 Clone the repository**
```bash
git clone https://github.com/asifcuber08/Prept--Ai-Interview-Marketplace.git
cd Prept--Ai-Interview-Marketplace
```

2. **📦 Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **⚙️ Environment Variables**
Create a `.env.local` file in the root directory:

```env
# Sign up in Supabase and get your Database and Direct URL

DATABASE_URL="postgresql://....."
DIRECT_URL="postgresql://postgres......"

# Sign up in Clerk and get your Authentication keys

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in #use as it is
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up #use as it is

# Sign up in Arcjet and get your API key

ARCJET_KEY="your_arcjet_key"

# Sign up in Stream Video API and get your API key

NEXT_PUBLIC_STREAM_API_KEY="your_stream_api_key"
STREAM_SECRET_KEY="your_stream_secret_key"

# Sign up in Google AI Studio and get your API key

GEMINI_API_KEY="your_gemini_api_key"

# Sign up in Resend and get your API key

RESEND_API_KEY="your_resend_api_key"

# Admin payout password (for admin-only payout functionality)

ADMIN_PAYOUT_PASSWORD="your_admin_payout_password" #use any strong password

# App URL (for redirects and emails)

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Sign up and get all the Environment Variables from [Supabase](https://supabase.com), [Clerk](https://clerk.com), [Arcjet](https://arcjet.com), [Resend](https://resend.com), [Stream](https://getstream.io), and [Google AI Studio](https://aistudio.google.com) (Gemini API Key).


4. **🗄️ Setup Database**
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed with sample data
npx prisma db seed
```

5. **🚀 Start Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **🌐 Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)


## 🔗 Stream Webhook Setup

To enable **recordings and transcription events**, you must configure a webhook in Stream Dashboard.

### Steps:

1. Go to your Stream Dashboard  
2. Navigate to **Webhooks**
3. Click **Create Webhook**

### 📌 Select Events:
- `call.recording_ready`
- `call.transcription_ready`

### 🌐 Webhook URL:
- **Production:** https://your-domain.com/api/webhook/stream


- **Local Development (using ngrok):**
```bash
#
npx ngrok http 3000

# Then copy the URL and use it as your webhook URL:
https://your-ngrok-url/api/webhook/stream
```


## 📁 Project Structure

```
prept/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main application routes
│   │   ├── dashboard/      # User dashboard
│   │   ├── explore/        # Browse interviewers
│   │   ├── interviewers/    # Interviewer profiles
│   │   └── appointments/   # User appointments
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
│   ├── ui/              # Base UI components
│   └── reusables/      # Custom components
├── lib/                 # Utilities & configurations
│   ├── generated/        # Prisma generated files
│   └── prisma.ts        # Database client
├── prisma/              # Database schema & migrations
│   └── schema.prisma    # Database definition
└── public/              # Static assets
```

## 🎯 How It Works

### For Interviewees
1. **🔍 Browse** expert interviewers by category
2. **📅 Book** sessions using monthly credits
3. **🎥 Join** video calls at scheduled time
4. **📊 Receive** AI-powered feedback reports
5. **📹 Review** session recordings (Pro plan)

### For Interviewers
1. **⚙️ Set** availability and session rates
2. **🤖 Use** AI question generator during interviews
3. **📈 Track** earnings and manage schedule
4. **💰 Earn** credits per completed session
5. **💸 Withdraw** earned credits via payout system (admin-controlled)

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npx prisma studio       # Open database browser
npx prisma generate     # Generate Prisma client
npx prisma migrate dev   # Run migrations
npx prisma db seed     # Seed database

```

## 🌟 Key Components

### Authentication & Authorization
- **🔐 Clerk Integration**: Complete auth system with social logins
- **👥 Role-Based Access**: Interviewer vs Interviewee permissions
- **🛡️ Route Protection**: Secure API endpoints and pages

### Real-Time Features
- **📹 Video Calls**: Stream SDK integration for HD video
- **💬 Live Chat**: Persistent messaging system
- **📅 Smart Notifications**: Email and in-app alerts

### AI Integration
- **🧠 Smart Questions**: Context-aware question generation
- **📈 Performance Analysis**: Multi-dimensional feedback system
- **🎯 Personalized Tips**: Tailored improvement suggestions


## 📥 Contributing
Pull requests are welcome!
If you find a bug or want to add a feature, feel free to open an issue.


## 👤 Author
Made with ❤️ by [Asif Shamim](https://github.com/asifcuber08)