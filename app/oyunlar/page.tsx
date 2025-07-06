import Header from '../../components/Header';
import GameList from '../../components/GameList';
import Footer from '../../components/Footer';

export default function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">Oyunlar</h1>
        <GameList />
      </main>
      <Footer />
    </div>
  );
}
