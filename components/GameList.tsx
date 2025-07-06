import GameCard from './GameCard';

const games = [
  { title: 'Tetris', image: '/game1.svg', description: 'Klasik blok oyunu.' },
  { title: 'Yılan', image: '/game2.svg', description: 'Efsane yılan oyunu.' },
  { title: 'Bulmaca', image: '/game3.svg', description: 'Zihin açan bulmaca.' },
];

export default function GameList() {
  return (
    <section className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.title} {...game} />
      ))}
    </section>
  );
}
