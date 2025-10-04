import {Flame,Receipt,Trophy,Newspaper,Calculator} from "lucide-react"

const Navigation = () => {
    const navItems = [
        { icon: Flame, label: "Topup", active: true },
        { icon: Receipt, label: "Cek Transaksi", active: false },
        { icon: Trophy, label: "Leaderboard", active: false },
        { icon: Newspaper, label: "Artikel", active: false },
        { icon: Calculator, label: "Kalkulator", active: false },
    ];
    return (
        <nav className="border-b border-border bg-card">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-6 py-3 overflow-x-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
                            item.active
                            ? "text-primary bg-primary/10 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                        >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;