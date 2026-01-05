"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Bot, 
  History, 
  CreditCard, 
  User, 
  ChevronLeft, 
  ChevronRight,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Workspace", href: "/dashboard" },
  { icon: Bot, label: "AI Tools", href: "/dashboard/ai-tools" },
  { icon: History, label: "My History", href: "/dashboard/history" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
  { icon: User, label: "Profile", href: "/dashboard/Profile" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      {...({
        initial: { width: 250 },
        animate: { width: isCollapsed ? 80 : 250 },
        transition: { duration: 0.3, type: "spring", stiffness: 100 },
        className: cn(
          "relative h-screen bg-card border-r border-border shadow-sm flex flex-col pt-6 pb-4",
           isCollapsed ? "items-center" : ""
        )
      } as any)}
    >
      <div className={cn("px-6 mb-8 flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
        {!isCollapsed && (
             <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent truncate">
                AI Career
             </h1>
        )}
         {isCollapsed && (
             <h1 className="text-xl font-bold text-primary hidden">AI</h1>
         )}

        <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
                "p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors",
                isCollapsed ? "" : "ml-auto"
            )}
        >
             {isCollapsed ? (
                 <ChevronRight className="h-5 w-5" />
             ) : (
                 <ChevronLeft className="h-5 w-5" />
             )}
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-x-3 p-3 rounded-xl transition-all duration-200 group hover:scale-[1.02]",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "group-hover:text-primary transition-colors")} />
              {!isCollapsed && (
                <span className="font-medium text-sm">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 mt-auto">
        <div className="border-t border-border my-4" />
      </div>
    </motion.aside>
  );
}
