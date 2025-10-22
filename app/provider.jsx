"use client"
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase' // Make sure this file exists

function Provider({
  children,
  ...props
}) {
  const { user } = useUser();

const CreateNewUser = async () => {
  try {
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    
    if (!userEmail) {
      console.log("No email address found");
      return;
    }

    // Use maybeSingle() which doesn't throw error for no rows
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', userEmail)
      .maybeSingle(); // ← Changed to maybeSingle

    if (fetchError) {
      console.error('Error checking user:', fetchError);
      return;
    }

    // If user exists, return early
    if (existingUser) {
      console.log("Existing User:", existingUser);
      return;
    }

    // Create new user
    const userData = {
      id: userEmail,
      name: user?.fullName,
      email: userEmail,
      created_at: new Date().toISOString(),
      remaining_msgs: 5,
      plan: "Free",
      credits: 1000
    };
    console.log(
      'userbdata',[userData]
    )

    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single();

    if (insertError) {
      console.error('Error creating user:', insertError);
      return;
    }

    console.log("New user data saved:", newUser);

  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);

  return (
    <NextThemesProvider 
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        <AppSidebar />
        <div className='w-full'>
          <AppHeader />
          {children}
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider