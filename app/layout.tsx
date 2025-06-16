import type React from "react"
import "./globals.css"
import { Cairo } from "next/font/google"
import CrispChat from "@/components/chat"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata = {
  title: "مدرسة التميز لتعليم القيادة",
  description: "تدريب قيادة مهني لجميع أنواع الرخص",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
          {children}
          <CrispChat />

      </body>
    </html>
  )
}
