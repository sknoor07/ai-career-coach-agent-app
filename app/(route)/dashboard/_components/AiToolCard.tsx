import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Tool={
    name: string;
    description: string;
    icon: string;
    path: string;
    button: string;
}
type Props={
    tool: Tool;
}

function AiToolCard({tool}: Props) {
    return (
        <div className='p-3 border rounded-2xl'>
            <Image src={tool.icon} alt={tool.name} width={40} height={40} /> 
            <h2 className='mt-2 font-bold'>{tool.name}</h2>
            <p className='mt-2 text-gray-400'>{tool.description}</p>
            <Link href={tool.path}>
            <Button className='w-full mt-4 cursor-pointer'>{tool.button}</Button>
            </Link>
        </div>
    )
}

export default AiToolCard