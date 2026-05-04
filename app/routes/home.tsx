import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter"
import { useNavigate } from "react-router";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Smart resume analysis tool" },
  ];
}

export default function Home() {

  const { auth } = usePuterStore();
  const Navigate = useNavigate();

  useEffect(()=>{
    if(!auth.isAuthenticated) Navigate('/auth?next=/');
  },[auth.isAuthenticated])


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section" >
      <div className="page-heading">
        <h1>Track Your Applications & Resume Rating</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>

  </main>
}
