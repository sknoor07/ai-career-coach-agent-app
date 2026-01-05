import { Link } from 'lucide-react';
import React from 'react'
import AiToolCard from './AiToolCard';

function AiTools() {
    const aiToolsList = [
        {
            name: "AI Career Q&A Chat",
            description: "Get personalized career guidance",
            icon: "/chatbot.png",
            button:"Get Started",
            path: "/ai-chat"
        },
        {
            name: "AI Resume Analyzer",
            description: "Improve your resume with AI",
            icon: "/resume.png",
            button:"Get Started",
            path: "/ai-resume-analyzer"
        },
        {
            name: "Career Road Map Generator",
            description: "Build your career roadmap with AI",
            icon: "/roadmap.png",
            button:"Get Started",
            path: "/career-roadmap-generator"
        },
        {
            name: "Cover Letter Generator",
            description: "Generate a cover letter with AI",
            icon: "/cover.png",
            button:"Get Started",
            path: "/cover-letter-generator"
        },
    ]
    return (
        <div className='mt-6 p-5 bg-white border rounded-2xl'>
            <h1 className='text-xl font-bold'> Available AI Tools </h1>
            <p> Here you can find all the AI tools available for you to use. </p>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {aiToolsList.map((tool,index)=>{
                    return(<AiToolCard tool={tool} key={index}/>);
                })}
            </div>
        </div>
    )
}   

export default AiTools
