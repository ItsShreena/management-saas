"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopNav() {
  return (
    <header className="h-16 border-b border-white/5 glass sticky top-0 z-30 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-muted-foreground hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search tasks, teams, or AI generations..." 
            className="pl-9 bg-white/5 border-white/10 text-sm focus-visible:ring-primary/50 h-9"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-background"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none border-none bg-transparent p-0">
            <Avatar className="w-9 h-9 border border-white/10 hover:border-primary/50 transition-colors">
              <AvatarImage src="https://i.pravatar.cc/150?img=68" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass-card border-white/10">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Workspace Settings</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="focus:bg-destructive/20 text-destructive cursor-pointer">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
