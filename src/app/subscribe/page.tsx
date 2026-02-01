import NewsletterForm from "../components/NewsletterForm";
import Socials from "../components/Socials";
import { Spotlight } from "../components/ui/Spotlight";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen  mx-auto px-4 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="space-y-1">
        <h2 className="z-10 text-3xl pb-4 font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Subscribe to my Newsletter
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          Miran Ahmad
        </h1>
      </div>
      <NewsletterForm />
      <Socials />
      <div className="hidden lg:block w-[40rem] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px w-1/4" />
      </div>
    </main>
  );
}
