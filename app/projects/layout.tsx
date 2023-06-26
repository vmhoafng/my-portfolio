import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
