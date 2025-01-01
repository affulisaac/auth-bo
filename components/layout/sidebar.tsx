// import { Button } from "@/components/ui/button"
// import { dashboardNav } from "@/config/dashboard"
// import Link from "next/link"
import {
  LayoutDashboard,
  // ArrowLeftRight,
  // Settings,
  HelpCircle,
  MessageCircle,
  Database,
  FolderKanban,
  Box,
  ArrowLeftRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard,
       title: "Dashboard",
        href: "/dashboard"
    },
    {
      title: "Integrations",
      href: "/integrations",
      icon: ArrowLeftRight,
    },
    {
      title: "Documentation",
      href: "/documentation",
      icon: Box,
    },
    {
      title: "Usage Analytics",
      href: "/usage-analytics",
      icon: FolderKanban,
    },
    {
      title: "OTHERS",
      classList: "mt-5",
      isDivider: true,
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      icon: Database,
    },
  ];

  return (
    <aside className="w-64 border-r h-full bg-white">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://hubtel.com/_nuxt/img/logo.4a996de.png"
            alt="Hubtel Logo"
            height={32}
            width={64}
          />
        </div>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) =>
          item.isDivider ? (
            <div
              key={item.title}
              className={`px-6 py-3 text-xs font-semibold leading-6 text-gray-400 ${
                item.classList || ""
              }`}
            >
              {item.title}
            </div>
          ) : (
            <Link
              key={item.title}
              href={item.href || ""}
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              {item.icon && <item.icon className="h-5 w-5 mr-3" />}
              {item.title}
            </Link>
          )
        )}
      </nav>
      <div className="absolute bottom-0 w-64 border-t">
        <Link
          href="/help"
          className="flex items-center px-6 py-4 text-gray-600 hover:bg-gray-50"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          Help Center
        </Link>
        <Link
          href="/feedback"
          className="flex items-center px-6 py-4 text-gray-600 hover:bg-gray-50"
        >
          <MessageCircle className="h-5 w-5 mr-3" />
          Provide Feedback
        </Link>
      </div>
    </aside>
  );
}
