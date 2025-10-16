import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {TopupForm} from "@/components/topupForm"
import NotFound from "@/app/not-found"

type Gameinfo = {
    name: string
    slug: string
    description: string
    image?: string
}

const GAMES: Record<string, Gameinfo> = {
    "free-fire": {
        name: "Free Fire",
        slug: "free-fire",
        description: "Top up Diamonds Free Fire cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: "./assets/ff.webp"
    },
    "mobile-legend": {
        name: "Mobile Legends",
        slug: "mobile-legend",
        description: "Top up Diamonds Mobile legends cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: "./assets/ml.jpg"
    },
    "valorant": {
        name: "Valorant",
        slug: "valorant",
        description: "Beli Valorant Points dengan proses cepat dan aman. Login Riot ID Anda untuk konfirmasi top up.",
        image: "./assets/valorant.webp"
    },
    "genshin-impact": {
        name: "Genshin Impact",
        slug: "genshin-impact",
        description: "Isi Genesis Crystals & Blessing of the Welkin Moon dengan mudah. Pastikan UID Anda benar sebelum checkout.",
        image: "./assets/gi.webp"
    },
    "pubg": {
        name: "PUBG",
        slug: "pubg",
        description: "Top up UC PUBG cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: "./assets/Pubg.webp"
    },
    "cod": {
        name: "Call of Duty",
        slug: "cod",
        description: "Top up COD cepat dan resmi. Masukkan Player ID, pilih nominal, dan selesaikan pembayaran.",
        image: "./assets/cod.webp"
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
        game.image || '/placeholder.svg?height=540&width=1200&query=banner%20game%20${encodeURIComponent(game.name)}'

        return(
            <div className="min-h-screen bg-background">
                <Header/>
                <Navigation/>

                <section className="grid gap-6 md:gap-8 md:grid-cols-12">
                    <div className="md-cols-span-7">
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="relative w-full aspect-[16/9]">
                                <Image 
                                    src={Image || "/placeholder.svg"}
                                    alt={`Image ${game.name}`}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    