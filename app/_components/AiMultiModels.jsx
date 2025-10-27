"use client";

import AiModelList from '@/AiModelList';
import { LockIcon } from 'lucide-react';
import React, { use, useContext, useState } from 'react';
import Image from 'next/image';
import { Lock, MessageSquare } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { SelectGroup } from '@radix-ui/react-select';

import { SelectLabel } from '@radix-ui/react-select';
import { AiSelectedModelContext } from '@/config/context/AiSelectedModelContext';
import { useUser } from '@clerk/nextjs';

function AiMultiModels() {
  const {user}=useUser();
  const [AiModeList, setAiModelList] = useState(AiModelList);
  const {AiSelectedModels, setAiSelectedModels} = useContext(AiSelectedModelContext);

  const onToggleChange = (model, value) => {
    setAiModelList((prev) =>
      prev.map((m) =>
        m.model === model ? { ...m, enable: value } : m
      )
    );
  };

  const onSelectvalue= async (parentModel, value)=>{
    setAiSelectedModels(prev=>({
      ...prev,
      [parentModel]:{
        modelId: value
      }
      }))
      // update to suprabse  database

      const docRef = doc(db,"users",user?.primaryEmailAddress?.emailAddress);
      await updateDoc(docRef,{
        selectedModelpref: AiSelectedModels

    })

  }

  return (
    <div className='flex flex-1 h-[75vh] border-b'>
      {AiModeList.map((model, index) => (
        <div
          key={model.name || index}
          className={`flex flex-col border-r h-full overflow-auto ${
  model.enable ? 'flex-1 min-w-[400px]' : 'w-[100px] flex-none'
}`}
             >
          <div className='flex w-full h-[70px] items-center justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <Image
                src={model.icon}
                alt={model.model}
                width={24}
                height={24}
              />

              {model.enable && (
                <Select disabled= {model.premium} >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={AiSelectedModels[model.model]?.modelId || "Select model"}  />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup  className='px-3'>
                <SelectLabel>Free</SelectLabel>
             {model.subModel.map((subModel, i) => 

        subModel.premium === false && (
        <SelectItem key={i} value={subModel.id}>
         {subModel.name}
           </SelectItem>
        )
           )}
         </SelectGroup>
           <SelectGroup className="px-3">
                      <SelectLabel>Free</SelectLabel>
                    {model.subModel.map((subModel, index) =>subModel.premium== true && (
                      <SelectItem key={index} value={subModel.name} disabled={subModel.premium}>
                        {subModel.name} {subModel.premium && <LockIcon className='inline-block ml-2 w-4 h-4'/>}
                      </SelectItem>
                    ))}
                    </SelectGroup>
                  </SelectContent>
                         </Select>
                           )}
                        </div>

                             <div>
              {model.enable? <Switch
                checked={model.enable}
                onCheckedChange={(v) => onToggleChange(model.model, v)}
              />
              :<MessageSquare onClick={()=> onToggleChange(model.model, true)} />}
            </div>
          </div>
          {model.premium&&model.enable&&<div className='flex items-center justify-center h-full '>
            <Button><Lock/> Upgrade to Unlock</Button>
          </div>}


        </div>
      ))}
    </div>
  );
}

export default AiMultiModels;
