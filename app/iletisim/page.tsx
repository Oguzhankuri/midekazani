import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
