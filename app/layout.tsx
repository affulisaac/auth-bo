import { Sidebar } from "@/components/layout/sidebar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hubtel Dashboard",
  description: "Engineer management dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen flex bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64">
        {/* Fixed Header */}
        <div className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white border-b">
          <Header isMobile={true} />
          <Header  />
        </div>

        {/* Scrollable Content with top padding for header */}
        <main className="pt-16">
          <div className="">
            {children}
          </div>
        </main>
      </div>
    </div>

      </body>
    </html>
  )
}