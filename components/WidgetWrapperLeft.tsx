"use client"
import { motion } from "framer-motion"

export default function WidgetWrapperLeft({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      key="{WidgetWrapperLeft}"
      className="fixed bottom-[3.4rem] right-1/2  sm:bottom-[3.4rem] sm:right-1/2 sm:rounded-full h-[4rem] w-[4rem] mr-[20rem] flex flex-col items-center justify-between p-1 bg-gray-800 bg-opacity-40 backdrop-blur-[0.5rem] shadow-2xl  dark:bg-zinc-100 dark:bg-opacity-60"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>

  )
}
