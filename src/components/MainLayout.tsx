"use client";
import {useState} from 'react';
import type React from 'react';
import { Book, Home, MessageSquare, Moon, Sparkles, Sun, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();


  const navigation = [
    { name: "Feed", href: "/", icon: Home },
    { name: "Messages", href: "/messages", icon: MessageSquare },
    { name: "Bible", href: "/bible", icon: Book },
    { name: "Assistant", href: "/assistant", icon: Sparkles },
    { name: "Profile", href: "/profile", icon: User },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 min-h-screen">
        <div className="flex flex-col flex-grow px-4 py-5 border-r border-border">
          <div className="flex items-center h-16 flex-shrink-0 px-4">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">Koinonia</h1>
            </Link>
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    } flex items-center px-4 py-3 text-sm font-medium rounded-md`}
                  >
                    <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex mt-auto items-center justify-between p-4 ">
            <div className="flex items-center">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://picsum.photos/20/20" alt="User Profile Picture" />
                    <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="ml-4 flex">
                    <p className="text-sm font-medium text-clip text-nowrap">Araoluwa Akinyemi</p>
                </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}>
                {theme === "dark" ? (
                    <Sun className='w-5 h-5'/>
                ) : (
                    <Moon className='w-5 h-5'/>
                )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
