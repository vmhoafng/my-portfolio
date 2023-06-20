import Navigation from "../components/navigation/Navigation";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navigation>{children}</Navigation>
    </div>
  );
}
