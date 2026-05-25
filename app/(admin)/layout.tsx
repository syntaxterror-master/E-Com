export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <main className="min-h-full flex flex-col">
        {children}
      </main>
  );
}
