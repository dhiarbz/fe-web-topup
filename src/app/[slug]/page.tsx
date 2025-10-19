import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {TopupForm} from "@/components/topupForm"
import NotFound from "@/app/not-found"

import ff from "@/assets/ff.webp"
import ml from "@/assets/ml.jpg"
import valorant from "@/assets/valorant.webp"
import pubg from "@/assets/Pubg.webp"
import cod from "@/assets/cod.webp"
import gi from "@/assets/gi.webp"

type Gameinfo = {
    name: string
    slug: string
    description: string
    image?: any
}

const GAMES: Record<string, Gameinfo> = {
    "free-fire": {
        name: "Free Fire",
        slug: "free-fire",
        description: "Top up Diamonds Free Fire cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: ff
    },
    "mobile-legends": {
        name: "Mobile Legends",
        slug: "mobile-legends",
        description: "Top up Diamonds Mobile legends cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: ml
    },
    "valorant": {
        name: "Valorant",
        slug: "valorant",
        description: "Beli Valorant Points dengan proses cepat dan aman. Login Riot ID Anda untuk konfirmasi top up.",
        image: valorant
    },
    "genshin-impact": {
        name: "Genshin Impact",
        slug: "genshin-impact",
        description: "Isi Genesis Crystals & Blessing of the Welkin Moon dengan mudah. Pastikan UID Anda benar sebelum checkout.",
        image: gi
    },
    "pubg-mobile": {
        name: "PUBG Mobile",
        slug: "pubg-mobile",
        description: "Top up UC PUBG cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: pubg
    },
    "call-of-duty-mobile": {
        name: "Call of Duty",
        slug: "call-of-duty-mobile",
        description: "Top up COD cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: cod
    },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const game = GAMES[params.slug]
  if (!game) return { title: "Game Tidak Ditemukan" }
  return {
    title: `${game.name} — Top Up`,
    description: game.description,
  }
}

export default function GameDetailPage({params}: {params: {slug:string}}) {
    const game = GAMES[params.slug]
    if(!game) return NotFound()

        const bannerSrc =
        game.image || `/placeholder.svg?height=540&width=1200&query=banner%20game%20${encodeURIComponent(game.name)}`

        return(
        <div className="min-h-screen bg-background">
            <Header/>
            <Navigation/>
            <main className="container mx-auto px-4 py-8 md:py-10">
                <section className="grid gap-6 md:gap-8 md:grid-cols-12">
                    <div className="md:col-span-full">
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="relative w-full aspect-[16/9]">
                                <Image 
                                    src={game.image}
                                    alt={`Image ${game.name}`}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <h1 className="text-2xl md:text-3xl font-semibold text-balance">{game.name}</h1>
                                <p className="mt-2 text-muted-foreground text-pretty">{game.description}</p>
                                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                    <Button asChild className="w-full sm:w-auto">
                                        <Link href="#topup-form">Topup Sekarang</Link>
                                    </Button>
                                    <Button asChild variant="secondary" className="w-full sm:w-auto">
                                        <Link href="/">Lihat Game Lain</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div id="topup-form" className="md:col-span-full">
                            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                                <h2 className="text-xl font-semibold">Form Topup</h2>
                                <p className="text-muted-foreground text-sm mt-1">Pastikan data akun {game.name} Anda benar.</p>
                                <div className="mt-4">
                                    <TopupForm />
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </section>
            </main>
            <Footer />     
        </div>    
        )
    }
    