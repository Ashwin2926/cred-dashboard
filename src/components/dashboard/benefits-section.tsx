"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Gift, ShieldCheck, Zap } from 'lucide-react';

// Map string names to actual icon components
const iconMap = {
  Gift,
  ShieldCheck,
  Zap,
};

type Benefit = {
  id: number;
  title: string;
  description: string;
  iconName: keyof typeof iconMap; // Use keyof to ensure type safety
  cta: string;
};

type BenefitsSectionProps = {
  benefits: Benefit[];
};

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
      <h2 className="text-2xl font-bold mb-4 text-foreground">Your Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, i) => {
          const IconComponent = iconMap[benefit.iconName];
          return (
            <motion.div key={benefit.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * i }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="flex flex-col h-full glass-card transition-all duration-300 hover:border-white/20">
                <CardHeader className="flex-grow">
                   <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent size={24} />
                  </div>
                  <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary group">
                    {benefit.cta}
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  );
}