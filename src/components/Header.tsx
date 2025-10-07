"use client";
import { Search, Globe, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                    GAME
                                </span>
                                <span className="text-foreground">TOPUP</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                                type="search" 
                                placeholder="Cari game, voucher, dll..." 
                                className="pl-10 pr-4 bg-background border-border focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-3">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="gap-2 text-muted-foreground hover:text-foreground"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="hidden sm:inline">ID / IDR</span>
                        </Button>
                        
                        <Button 
                            variant="default" 
                            size="sm" 
                            className="gap-2 bg-primary hover:bg-primary/90"
                            asChild
                        >
                            <Link href="/login">
                                <LogIn className="h-4 w-4" />
                                <span className="hidden sm:inline">Masuk</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                            type="search" 
                            placeholder="Cari game, voucher, dll..." 
                            className="pl-10 bg-background border-border"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;