import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Menu, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sidebar } from "./sidebar";

interface HeaderProps {
  isMobile?: boolean;
}

export function Header({ isMobile = false }: HeaderProps) {
  if (isMobile) {
    return (
      <div className="lg:hidden flex h-16 items-center justify-between px-4  bg-white">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="flex-1 flex items-center max-w-xl mx-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search"
              className="pl-9 bg-gray-50 border-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gray-100 text-sm">IA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex h-16 items-center justify-between px-4  bg-white">
      <div className="flex-1 flex items-center max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search"
            className="pl-9 bg-gray-50 border-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gray-100 text-sm">IA</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium">
              Isaac Afful
            </DropdownMenuTrigger>
            <ChevronDown className="h-4 w-4" />
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
