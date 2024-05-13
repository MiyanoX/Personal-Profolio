"use client"  // Next.js 12+ 的指示，用于标记整个模块只在客户端运行

import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
} from "react"  // 导入 React 和必需的 Hooks
import { links } from "@/lib/data"  // 导入链接数据，可能用于构建导航菜单

export type SectionName = (typeof links)[number]["name"]  // 利用 TypeScript 推导 links 数组中对象的 "name" 属性类型

type ActionSectionContextProviderProps = {
  children: React.ReactNode  // 用于类型化 children，允许传递任何可渲染的 React 节点
}

type ActionSectionContextType = {
  activeSection: SectionName  // 当前活动部分的名称
  setActiveSection: Dispatch<SetStateAction<"Home" | "About" | "Projects" | "Skills" | "Experience">>
  // 更新活动部分状态的函数
  timeOfLastClick: number  // 记录上一次用户点击导航的时间戳
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>  // 更新时间戳的函数
}


const ActionSectionContext = createContext<ActionSectionContextType | null>(
  null  // 初始化一个空的上下文
)

export function ActionSectionContextProvider({
  children,
}: ActionSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")  // 状态：当前活动的部分，默认为 "Home"
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)  // 状态：最后一次点击的时间，默认为 0

  return (
    <ActionSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}  
    </ActionSectionContext.Provider> // 渲染子组件，允许这个上下文下的任何组件访问这些状态
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActionSectionContext)  // 使用 useContext Hook 来访问上下文
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActionSectionContextProvider"
    )  // 如果不在提供者内部使用这个 Hook，抛出错误
  }
  return context  // 返回上下文内容
}

