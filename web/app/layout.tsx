import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "数字文学空间",
    template: "%s｜数字文学空间",
  },
  description: "诗词、散文、草木、山河与人间心事。一个可以漫游的数字文学空间。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
