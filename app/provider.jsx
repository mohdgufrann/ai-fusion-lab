"use client"
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import App from 'next/app'
import AppHeader from './_components/AppHeader'
import { CirclePoundSterling } from 'lucide-react'
import { db } from '@/config/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
// import { EmailAddress } from '@clerk/nextjs/dist/types/server'



function Provider({
     children,
  ...props
    }
) {


  const {user} = useUser();
  useEffect(() => {
    if(user){
       CreateNewUser();
    }
  }, [user]);

  const CreateNewUser = async() => {

    const userRef = doc(db ,"user",user ?.primaryEmailAddressId?.emailAddress); 
    const useSnap=await getDoc(userRef);
    if(!useSnap.exists()){
      console.log("Existing User");
    }
    else{
      const userData={
        name: user ?.fullName,
        email: user ?.primaryEmailAddressId?.emailAddress,
        createdAt: new Date(),
        remainingMsgs:5,
        plan:"Free",
        credits:1000
      }
      await setDoc(userRef,userData);
      console.log("new user data saved")
    }



  }
  return (
    <NextThemesProvider 
     attribute="class"
      enableSystem="true"
       ssr="false"
            defaultTheme="System"
            
            disableTransitionOnChange
            {...props}>
    
    <SidebarProvider>
      <AppSidebar/>
      
       <div className='w-full'>
        <AppHeader/>
      {children}
    </div>
    </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider
