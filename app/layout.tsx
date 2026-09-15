import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Graymaple · AI 应用作品集',
  description: '面向 AI Agent、Python 后端与跨境电商场景的技术作品集，包含系统设计、验证证据与工程取舍。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
