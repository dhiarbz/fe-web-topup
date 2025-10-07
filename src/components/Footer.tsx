"use client";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                GAME
                            </span>
                            <span className="text-foreground">TOPUP</span>
                        </h3>
                        <p className="text-muted-foreground mb-4 max-w-md">
                            No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan channel pembayaran terlengkap Indonesia
                        </p>
                        <div className="flex gap-4">
                            <Link 
                                href="https://facebook.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link 
                                href="https://instagram.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link 
                                href="https://twitter.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link 
                                href="https://youtube.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Tentang Kami</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="/cara-pembelian" 
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Cara Pembelian
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/hubungi-kami" 
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/syarat-ketentuan" 
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/kebijakan-privasi" 
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Metode Pembayaran</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Kami menerima berbagai metode pembayaran: E-Wallet, Transfer Bank, Virtual Account, dan lainnya.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {/* Payment Icons - bisa ditambahkan gambar payment methods */}
                            <div className="bg-muted rounded px-2 py-1 text-xs text-muted-foreground">
                                BCA
                            </div>
                            <div className="bg-muted rounded px-2 py-1 text-xs text-muted-foreground">
                                BNI
                            </div>
                            <div className="bg-muted rounded px-2 py-1 text-xs text-muted-foreground">
                                BRI
                            </div>
                            <div className="bg-muted rounded px-2 py-1 text-xs text-muted-foreground">
                                Gopay
                            </div>
                            <div className="bg-muted rounded px-2 py-1 text-xs text-muted-foreground">
                                OVO
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} GameTopup. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                        Developed with ❤️ for Indonesian gamers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;