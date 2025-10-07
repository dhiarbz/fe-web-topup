
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import Footer from "@/components/Footer";
import { Flame } from "lucide-react";

import gameML from "@/assets/ml.jpg";
import gamePUBG from "@/assets/Pubg.webp";
import gameFF from "@/assets/ff.webp";
import gameGenshin from "@/assets/gi.webp";
import gameValorant from "@/assets/valorant.webp";
import gameCODM from "@/assets/cod.webp";

const Home = () => {
  const trendingGames = [
    { id: 1, title: "Mobile Legends", image: gameML, category: "MOBA", discount: "-20%" },
    { id: 2, title: "PUBG Mobile", image: gamePUBG, category: "Battle Royale" },
    { id: 3, title: "Free Fire", image: gameFF, category: "Battle Royale", discount: "-15%" },
    { id: 4, title: "Genshin Impact", image: gameGenshin, category: "RPG" },
    { id: 5, title: "Valorant", image: gameValorant, category: "FPS" },
    { id: 6, title: "Call of Duty Mobile", image: gameCODM, category: "FPS", discount: "-10%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Carousel */}
        <section className="mb-12">
          <Hero />
        </section>

        {/* Trending Games */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">TRENDING</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Berikut adalah beberapa produk yang paling populer saat ini.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                image={game.image}
                category={game.category}
                discount={game.discount}
              />
            ))}
          </div>
        </section>

        {/* Popular Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Game Populer</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingGames.map((game) => (
              <GameCard
                key={`popular-${game.id}`}
                title={game.title}
                image={game.image}
                category={game.category}
              />
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-card border border-border rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Kenapa Pilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">⚡ Proses Cepat</h3>
              <p className="text-muted-foreground text-sm">
                Top up otomatis dalam hitungan detik setelah pembayaran berhasil
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">🔒 Aman & Terpercaya</h3>
              <p className="text-muted-foreground text-sm">
                Legal 100% dan sudah dipercaya oleh jutaan gamers Indonesia
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">💰 Harga Terbaik</h3>
              <p className="text-muted-foreground text-sm">
                Dapatkan harga termurah dengan promo dan diskon menarik setiap hari
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
