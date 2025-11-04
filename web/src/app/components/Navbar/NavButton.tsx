"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function NavButton() {
  const [user, setUser] = useState<{ name: string; image: string } | null>(null);

  const handleLogin = () => {
    // Simulasi login
    setUser({
      name: "Fadly Mustofainal",
      image: "https://i.pravatar.cc/40",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          type="button"
          className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{user.name}</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
