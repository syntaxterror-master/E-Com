import { ApplicationShell1 } from "@/components/admin/Sidebar"
import { getCurrentUser } from "@/lib/session";

export default async function AdminLayout({children}: {children: React.ReactNode}) {
  const user = await getCurrentUser();
  return (
      <main>
        <ApplicationShell1 user={user}>
          {children}
        </ApplicationShell1>
      </main>
  )
}