"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

type RewardPointsProps = {
  rewards: {
    points: number;
    target: number;
  };
};

export function RewardPoints({ rewards }: RewardPointsProps) {
  const { resolvedTheme } = useTheme();
  const percentage = Math.round((rewards.points / rewards.target) * 100);
  const data = [{ name: 'points', value: percentage }];
  const fill = resolvedTheme === 'dark' ? '#3b82f6' : '#60a5fa';

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <Card className="h-full glass-card">
        <CardContent className="pt-6 flex flex-col items-center justify-center h-full text-center">
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
             <ResponsiveContainer width="100%" height="100%">
               <RadialBarChart innerRadius="80%" outerRadius="100%" barSize={10} data={data} startAngle={90} endAngle={-270}>
                 <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                 <RadialBar background dataKey="value" angleAxisId={0} fill={fill} cornerRadius={10} />
               </RadialBarChart>
             </ResponsiveContainer>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-3xl font-bold text-foreground">{percentage}%</span>
             </div>
          </div>
          <h3 className="text-lg font-semibold mt-4 text-foreground">{rewards.points.toLocaleString()}</h3>
          <p className="text-sm text-muted-foreground">Reward Points</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
