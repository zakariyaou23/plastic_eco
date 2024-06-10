import Appbar from "@/components/guest/appbar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        <Appbar/>
      {children}
    </main>
  );
}
