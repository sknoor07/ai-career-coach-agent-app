import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600">
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative mx-auto max-w-5xl px-6 py-32 text-center text-white">
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
      Land Your Dream Job with
      <span className="block text-indigo-200">AI Career Guru</span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
      AI-powered career coaching, resume analysis, interview preparation,
      and personalized roadmaps to accelerate your career growth.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
        Get Started
      </Button>
    </div>
  </div>
</section>


      {/* Features */}
      <section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-center text-4xl font-bold text-slate-900">
      Everything You Need to Succeed
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
      Powerful AI tools designed to guide you at every stage of your career.
    </p>

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "AI Career Chat",
          desc: "Ask career questions and receive instant, actionable AI guidance.",
        },
        {
          title: "Resume Analyzer",
          desc: "Optimize your resume with AI-driven feedback and scoring.",
        },
        {
          title: "Career Roadmap",
          desc: "Personalized step-by-step plans tailored to your goals.",
        },
        {
          title: "Cover Letter Generator",
          desc: "Create tailored, professional cover letters in seconds.",
        },
      ].map((item) => (
        <Card key={item.title} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
