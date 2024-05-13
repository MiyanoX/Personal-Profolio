"use client"

import { useTheme } from "@/context/theme-context"
import React from "react"
import { BsMoon, BsSun } from "react-icons/bs"

export default function ThemeSwitch() {

  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className="w-[4rem] h-[4em] bg-opacity-80  flex items-center justify-center hover:scale-[1.7] active:scale-105 transition-all scale-[1.5]"
      onClick={toggleTheme}
    >
      <span className="sr-only">change dark mode</span>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}
