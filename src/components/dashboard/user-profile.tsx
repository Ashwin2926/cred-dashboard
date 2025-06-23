"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

type UserProfileProps = {
  user: {
    name: string;
    avatarUrl: string;
    level: number;
    xp: number;
  };
};

export function UserProfile({ user }: UserProfileProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full glass-card">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <motion.img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="w-16 h-16 rounded-full border-2 border-primary/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <div>
              <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">Level {user.level}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-muted-foreground">XP Progress</span>
              <span className="text-xs font-bold text-primary">{user.xp}%</span>
            </div>
            <Progress value={user.xp} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"/>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}