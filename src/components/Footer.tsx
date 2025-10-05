import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">
                        <span className="text-gradient">GAME</span>
                        <span className="text-foreground">TOPUP</span>
                        </h3>
                        <p className="text-muted-foreground mb-4">
                        No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan channel pembayaran terlengkap Indonesia
                        </p>
                        <div className="flex gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Youtube className="h-5 w-5" />
                        </a>
                        </div>
                    </div>

                        {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Tentang Kami</h4>
                        <ul className="space-y-2">
                        <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cara Pembelian</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hubungi Kami</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h4 className="font-semibold mb-4">Metode Pembayaran</h4>
                        <p className="text-muted-foreground text-sm">
                        Kami menerima berbagai metode pembayaran: E-Wallet, Transfer Bank, Virtual Account, dan lainnya.
                        </p>
                    </div>
                    </div>
                        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
                            <p>© 2025 GameTopup. All rights reserved.</p>
                        </div>
                </div>
        </footer>
    );
};

export default Footer;