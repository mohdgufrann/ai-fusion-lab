import React from 'react'
import { Progress } from "@/components/ui/progress";

function UsageCreditProgress() {
  return (
    <div className='p-5 border rounded-2xl mb-5 flex flex-col gap-2'>
        <h2 className='font-bold text-xl'> Free Plan</h2>
        <p className='text-gray-400'> 0/5 message Usage</p>
        <Progress value={33} />
      
    </div>
  )
}

export default UsageCreditProgress
