import Header from '../components/Header';
import About from '../components/About';
import GameList from '../components/GameList';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        <About />
        <GameList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
