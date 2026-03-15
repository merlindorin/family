import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f5] font-serif text-[#5c4f43]">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-dashed border-[#5c4f43]/20 md:border-x">
        <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
          <Image
            src="/family-funny-picture-ghibli-inspired-transparent-bg.png"
            alt="The Dary Family"
            width={560}
            height={560}
            className="max-w-full w-[560px] h-auto mb-10 drop-shadow-[0_8px_24px_rgba(92,79,67,0.12)]"
            priority
          />
          <h1 className="text-[2rem] font-normal tracking-[0.15em] uppercase">
            Dary Family
          </h1>
          <p className="mt-3 text-base italic text-[#5c4f43]/60">
            Where every chapter is written together
          </p>
        </main>
        <footer className="flex items-center justify-center gap-3 border-t border-dashed border-[#5c4f43]/20 px-4 py-6 font-[family-name:var(--font-geist)]">
          <p className="text-base">
            <span>Built by</span>{" "}
            <a
              aria-label="Visit Merlindorin's GitHub profile (opens in new tab)"
              className="font-medium text-foreground transition-all hover:text-primary hover:underline"
              href="https://github.com/merlindorin"
              rel="noopener noreferrer"
              target="_blank"
              title="Merlindorin - Software Engineer"
            >
              Merlindorin
            </a>
          </p>
          <a
            aria-label="View source on GitHub (opens in new tab)"
            className="text-[#5c4f43] transition-all hover:text-primary"
            href="https://github.com/merlindorin/family"
            rel="noopener noreferrer"
            target="_blank"
            title="View source on GitHub"
          >
            <FaGithub size={20} />
          </a>
        </footer>
      </div>
    </div>
  );
}
