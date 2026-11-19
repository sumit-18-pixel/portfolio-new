import { useState } from "react";
import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

const CATEGORY_ICONS: Record<string, string> = {
  All: "lucide:layers",
  Frontend: "lucide:layout",
  Backend: "lucide:server",
  "DevOps & Linux": "lucide:terminal",
  Cybersecurity: "lucide:shield-check",
  Automation: "lucide:bot",
};

const SKILL_ICONS: Record<string, string> = {
  HTML5: "logos:html-5",
  CSS3: "logos:css-3",
  JavaScript: "logos:javascript",
  "Responsive Design": "lucide:smartphone",

  "Node.js": "logos:nodejs-icon",
  "Express.js": "simple-icons:express",
  "REST APIs": "lucide:braces",
  MongoDB: "logos:mongodb-icon",

  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  Docker: "logos:docker-icon",
  Linux: "logos:linux-tux",
  "Kali Linux": "simple-icons:kalilinux",

  n8n: "simple-icons:n8n",
  Cybersecurity: "lucide:shield-check",
  "Ethical Hacking": "lucide:terminal-square",
  CTF: "lucide:flag",
  Networking: "lucide:network",
  Automation: "lucide:cpu",
};

const skillCategories: Record<string, string[]> = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
  ],

  "DevOps & Linux": [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Kali Linux",
  ],

  Cybersecurity: [
    "Cybersecurity",
    "Ethical Hacking",
    "CTF",
    "Networking",
    "Kali Linux",
    "Linux",
  ],

  Automation: [
    "Automation",
    "n8n",
    "Node.js",
    "REST APIs",
  ],
};

export function TechStack() {
  const [activeCategory, setActiveCategory] =
    useState<string>("All");

  if (!site.skills.length) return null;

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "DevOps & Linux",
    "Cybersecurity",
    "Automation",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? site.skills
      : site.skills.filter((skill) =>
          skillCategories[activeCategory]?.includes(skill)
        );

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />

      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {categories.map((cat) => {
            const iconName =
              CATEGORY_ICONS[cat] || "lucide:layers";

            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium cursor-pointer"
              >
                {/* Sliding Active Pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 rounded-md bg-[var(--fg)] shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  />
                )}

                {/* Content */}
                <span
                  className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-[var(--bg)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  <Icon
                    icon={iconName}
                    width={14}
                    height={14}
                    className="size-3.5"
                  />

                  {cat}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {filteredSkills.map((skill, index) => {
            const iconName =
              SKILL_ICONS[skill] || "lucide:code-2";

            return (
              <motion.span
                key={`${activeCategory}-${skill}`}
                initial={{
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                  ease: "easeOut",
                }}
                className="
                    flex
                    cursor-default
                    items-center
                    gap-2
                    rounded-md
                    border
                    border-[var(--line)]
                    bg-[var(--card)]
                    px-3
                    py-1.5
                    font-mono
                    text-[12px]
                    text-[var(--muted)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[var(--fg)]
                    hover:bg-[var(--fg)]
                    hover:text-[var(--bg)]
                    shadow-xs
                    group
                  "
              >
                <Icon
                  icon={iconName}
                  width={16}
                  height={16}
                  className="
                      size-4
                      shrink-0
                      transition-colors
                      group-hover:filter
                      group-hover:brightness-110
                    "
                />

                {skill}
              </motion.span>
            );
          })}
        </div>
      </Shell>
    </div>
  );
}

export default TechStack;