"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import ChatInputBox from "./_components/ChatInputBox";

export default function Home() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
     <ChatInputBox />
    </div>
  );
}
