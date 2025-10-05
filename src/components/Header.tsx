import {Search, Globe,LogIn} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/50 backdrop-blur support-[backdrop-filter]:bg-background/80">
            <div className="container mx-auto px-4">
                <div className="flex h-15 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <h1 className="text-2xl font-bold">
                        <span className="text-gradient text-2xl font-bold">GAME</span>
                        <span className="text-foreground text-2xl font-bold">TOPUP</span>
                        </h1>
                    </div>
                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Cari game, voucher, dll..." className="pl-10 bg-secondary border-border focus:border-primary" />
                        </div>
                    </div>
                    {/* User Actions */}
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <Globe className="h-4 w-4" />
                            <span className="hidden sm:inline">ID / IDR</span>
                        </Button>
                        <Button variant="default" size="sm" className="gap-2">
                            <LogIn className="h-4 w-4" />
                            <span className="hidden sm:inline">Masuk</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;