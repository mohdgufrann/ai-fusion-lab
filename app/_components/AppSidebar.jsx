"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SignInButton, useUser } from "@clerk/nextjs";
import { Sun, Moon, User2, Zap } from "lucide-react"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import UsageCreditProgress from "./UsageCreditProgress";

export function AppSidebar() {
    const { theme, setTheme } = useTheme();
    const { user } = useUser();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Theme toggle component with hydration guard
    const ThemeToggle = () => {
        if (!mounted) {
            return (
                <Button variant="ghost" disabled>
                    <div className="w-4 h-4" /> {/* Placeholder with same dimensions */}
                </Button>
            );
        }

        return (
            <div>
                {theme === 'light' ? (
                    <Button variant="ghost" onClick={() => setTheme('dark')}>
                        <Sun />
                    </Button>
                ) : (
                    <Button onClick={() => setTheme('light')} variant="ghost">
                        <Moon />
                    </Button>
                )}
            </div>
        );
    };

    // Don't render anything until mounted to ensure consistent server/client render
    if (!mounted) {
        return (
            <Sidebar>
                <SidebarHeader>
                    <div className="p-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-[40px] h-[40px] bg-gray-200 rounded" /> {/* Logo placeholder */}
                                <div className="h-6 w-32 bg-gray-200 rounded" /> {/* Title placeholder */}
                            </div>
                            <ThemeToggle />
                        </div>
                        <div className="mt-7 h-10 bg-gray-200 rounded" /> {/* Button placeholder */}
                    </div>
                </SidebarHeader>
            </Sidebar>
        );
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img 
                                src={'/Logo.svg'} 
                                alt="logo" 
                                width={40} 
                                height={40}
                                className="w-[40px] h-[40px]" 
                            />
                            <h2 className="font-bold text-xl">AI Fusion Lab</h2>
                        </div>
                        <ThemeToggle />
                    </div>
                    
                    {user ? (
                        <Button className='mt-7 w-full' size="lg">+ New Chat</Button>
                    ) : (
                        <SignInButton>
                            <Button className='mt-7 w-full' size="lg">+ New Chat</Button>
                        </SignInButton>
                    )}
                </div>
            </SidebarHeader>
            
            <SidebarContent>
                <SidebarGroup>
                    <div className='p-3'>
                        <h2 className="font-bold text-lg">Chat</h2>
                        {!user && (
                            <p className="text-sm text-gray-400">
                                Sign in to start chatting with different AI models
                            </p>
                        )}
                    </div>
                </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
                <div className="p-3 mb-10">
                    {!user ? (
                        <SignInButton mode="modal">
                            <Button className='w-full' size={'lg'}>
                                Sign In / Sign Up
                            </Button>
                        </SignInButton>
                    ) : (
                        <div>
                            <UsageCreditProgress />
                            <Button className='w-full mb-3'>
                                <Zap className="mr-2" /> 
                                Upgrade Plan
                            </Button>
                            <Button className="flex w-full" variant={'ghost'}>
                                <User2 className="mr-2" />
                                <h2>Settings</h2>
                            </Button>
                        </div>
                    )}
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}