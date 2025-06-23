CRED-Inspired Frontend Dashboard
This is a frontend developer task to build a responsive, modern web dashboard inspired by CRED Garage. The application is built using Next.js, Tailwind CSS, and shadcn/ui, with a focus on great UI/UX, smooth animations, and attention to detail.

Live Deployment URL: https://cred-dashboard-demo.vercel.app/ (Replace with your Vercel deployment link)

✨ Features
This dashboard comes with a complete set of features as outlined in the project requirements:

User Profile Summary: A sleek card displaying the user's avatar, name, level, and a gamified XP progress bar.

Benefits Section: A responsive grid of cards showcasing various user benefits, each with a title, description, icon, and a call-to-action.

Reward Points Progress: A visually engaging radial progress bar (built with Recharts) to display the user's reward points.

Dark/Light Mode: A persistent theme toggle that respects the user's OS preference and saves their choice in localStorage.

Loading Skeletons: A polished loading experience using animated skeleton components that appear while data is being fetched from the mock API.

Smooth Animations: Subtle and professional animations using Framer Motion for layout transitions, hover effects, and component loading.

Responsive Design: A mobile-first design that ensures the dashboard looks and works great on all devices, from small phones to large desktops.

Mock API: A mock API endpoint built with Next.js Route Handlers to simulate real-world data fetching with a deliberate delay.

🛠️ Tech Stack
Framework: Next.js (React Framework)

Styling: Tailwind CSS

UI Components: shadcn/ui

Animations: Framer Motion

Charts: Recharts

Icons: Lucide React

Theming: next-themes

Language: TypeScript

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js (version 18.x or later) and npm installed on your machine.

Node.js

npm

Installation
Clone the repository:

git clone https://github.com/ashwin2926/cred-dashboard.git
cd cred-dashboard

Install dependencies:

npm install

Set up environment variables:
Create a .env.local file in the root of your project and add the following line:

NEXT_PUBLIC_APP_URL=http://localhost:3000

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
The project follows the standard Next.js app router structure, with a clear separation of concerns.

src/
├── app/
│   ├── api/                # Mock API endpoints
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── dashboard/          # Custom dashboard components
│   └── ui/                 # Auto-generated shadcn/ui components
├── lib/
│   ├── data.ts             # Mock data
│   └── utils.ts            # Utility functions
└── providers/
    └── theme-provider.tsx  # Theme management

🚢 Deployment
This project is configured for easy deployment on Vercel, the platform from the creators of Next.js.

To deploy, simply push your repository to GitHub and connect it to a new Vercel project. Vercel will automatically detect the Next.js framework, build the project, and deploy it. No additional configuration is needed.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
