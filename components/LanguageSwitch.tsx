"use client"  // Next.js 12+ 的指示，标明这个模块应该只在客户端运行，不在服务器端渲染。

import { useLocale } from "next-intl"  // 导入用于获取当前语言环境的 Hook。
import { usePathname, useRouter } from "next/navigation"  // 导入用于获取路由和路径的 Next.js Hooks。


export default function LanguageSwitch() {
  const localActive = useLocale()  // 获取当前激活的语言环境。
  const router = useRouter()  // 获取 Next.js 路由器对象，用于处理路由跳转。
  const pathname = usePathname()  // 获取当前的路径名。

  const onChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLocale = localActive === "en" ? "zh" : "en"  // 根据当前语言环境决定切换后的语言。
    const newPath = pathname.replace(/^\/(en|zh)/, `/${nextLocale}/`)  // 创建新的路径，替换路径中的语言部分。
    router.replace(newPath, {
      scroll: true,  // 使用 replace 方法更新路径，滚动到页面顶部。
    })
  }


  return (
    <>
      <button
        onClick={onChangeLanguage}  // 点击按钮时执行语言切换。
        className="w-[4rem] h-[4rem]  flex items-center justify-center gap-1 transition-all hover:scale-[1.6] scale-[1.4]"
      >
        <span className="sr-only">Change Language</span> {/* 辅助阅读设备的隐藏文本，说明按钮功能 */}

        <span className="text-sm active:scale-105 transition-all">  {/* 根据当前语言显示相应的文本，同时定义了鼠标悬停和点击的缩放动效。 */}
          {localActive == "en" ? "EN" : "ZH"}  
        </span>
      </button> 
    </>
  )
}

