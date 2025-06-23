import { Suspense } from "react";
import { ThemeToggle } from "@/components/dashboard/theme-toggle";
import { UserProfile } from "@/components/dashboard/user-profile";
import { RewardPoints } from "@/components/dashboard/reward-points";
import { BenefitsSection } from "@/components/dashboard/benefits-section";
import { Skeleton } from "@/components/ui/skeleton";

// Define types for our data
type User = { name: string; avatarUrl: string; level: number; xp: number; };
type Rewards = { points: number; target: number; };
type Benefit = { 
  id: number;
  title: string; 
  description: string; 
  iconName: "Gift" | "ShieldCheck" | "Zap"; // Updated type
  cta: string; 
};
type DashboardData = { user: User; rewards: Rewards; benefits: Benefit[] };

async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dashboard`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// Skeletons for loading state with pulse animation
function DashboardSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
           <Skeleton className="h-[150px] w-full rounded-2xl glass-card animate-pulse" />
        </div>
        <div>
          <Skeleton className="h-[150px] w-full rounded-2xl glass-card animate-pulse" />
        </div>
      </div>
      <div>
        <Skeleton className="h-8 w-48 mb-4 rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
             <Skeleton key={i} className="h-[220px] w-full rounded-2xl glass-card animate-pulse" />
          ))}
        </div>
      </div>
    </>
  );
}

async function Dashboard() {
  const data = await getDashboardData();
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <UserProfile user={data.user} />
        </div>
        <div>
          <RewardPoints rewards={data.rewards} />
        </div>
      </div>
      <BenefitsSection benefits={data.benefits} />
    </>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 container mx-auto p-4 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          CRED Garage
        </h1>
        <ThemeToggle />
      </header>

      <main>
        <Suspense fallback={<DashboardSkeleton />}>
          <Dashboard />
        </Suspense>
      </main>
      
      <footer className="text-center mt-12 text-xs text-muted-foreground">
          <p>Frontend Developer Task - by [Your Name]</p>
      </footer>
    </div>
  );
}