"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <h1> hey boss </h1>
      <Button>Subscribe</Button>
      <Button onClick={()=>setTheme('dark')}>Dark Mode</Button>
      <Button onClick={()=>setTheme('light')}>Light Mode</Button>
      
     
    </div>
  );
}
