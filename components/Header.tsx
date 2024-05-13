"use client"

import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { headerLanguageMap } from "@/lib/data"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useLocale } from "next-intl"

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const activeLocale = useLocale()
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 h-[4rem] w-full rounded-full border-opacity-40 bg-gray-800 bg-opacity-40
  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:bottom-[3.4rem] sm:h-[4rem] sm:w-[34rem] sm:rounded-full dark:bg-zinc-100 dark:bg-opacity-60"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed bottom-0 left-1/2 h-12 -translate-x-1/2 py-2 sm:bottom-[3.5rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1.2rem] font-medium text-gray-00 sm:w-[initial] sm:flex-nowrap sm:gap-4  ">
          {links.map((link, index) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative break-keep"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-4 text-gray-200 dark:text-gray-600 no-wrap hover:text-gray-50 dark:hover:text-gray-900 transition",
                  {
                    "text-gray-50": activeSection === link.name,
                    "dark:text-gray-1000": activeSection == link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {activeLocale === "zh"
                  ? headerLanguageMap[link.name]
                  : link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-900 rounded-full absolute inset-0 -z-10 dark:bg-gray-50"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
