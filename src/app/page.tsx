import IntroSection from "../components/Intro-section";
import WorkShowcase from "../components/work-showcase";
import WorkExperience from "../components/work-Experiencet";
import TechStack from "../components/tech-stack";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <WorkShowcase />
      <WorkExperience />
      <TechStack />
    </main>
  );
}
