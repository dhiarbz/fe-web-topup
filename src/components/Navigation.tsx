"use client";

import { Flame, Receipt, Trophy, Newspaper, Calculator } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    
    const navItems = [
        { 
            icon: Flame, 
            label: "Topup", 
            href: "/",
            active: pathname === "/"
        },
        { 
            icon: Receipt, 
            label: "Cek Transaksi", 
            href: "/cek-transaksi",
            active: pathname === "/cek-transaksi"
        },
        { 
            icon: Trophy, 
            label: "Leaderboard", 
            href: "/leaderboard",
            active: pathname === "/leaderboard"
        },
    ];

    return (
        <nav className="border-b border-border bg-card sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                                item.active
                                ? "text-primary bg-primary/10 font-semibold border border-primary/20"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
                            }`}
                        >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;