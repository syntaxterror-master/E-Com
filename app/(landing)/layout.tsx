import {Footer} from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function LandingLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navbar className="flex items-center justify-center"/>
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}