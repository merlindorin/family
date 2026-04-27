import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "SSHark",
    tagline: "Search public SSH keys across platforms",
    href: "https://sshark.app",
  },
  {
    name: "OpenOtters",
    tagline: "OCI-style build & runtime for AI agents",
    href: "https://github.com/openotters/openotters",
  },
];

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
        <section
          aria-labelledby="side-projects-title"
          className="border-t border-dashed border-[#5c4f43]/20 px-8 py-10 text-center"
        >
          <h2
            className="text-xs font-normal tracking-[0.25em] uppercase text-[#5c4f43]/70"
            id="side-projects-title"
          >
            A few things I tinker with
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm italic text-[#5c4f43]/60">
            Between bedtime stories and family adventures, I build small tools.
            Coffee-fueled, otter-approved.
          </p>
          <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-4">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  className="group block rounded-sm border border-dashed border-[#5c4f43]/30 px-5 py-4 text-left transition-all hover:border-[#5c4f43]/60 hover:bg-[#5c4f43]/[0.03]"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="block text-base font-medium tracking-wide text-[#5c4f43] group-hover:underline">
                    {project.name}
                  </span>
                  <span className="mt-0.5 block text-xs italic text-[#5c4f43]/60">
                    {project.tagline}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
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
