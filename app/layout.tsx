import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Graymaple · AI 应用作品集',
  description: '面向 AI 应用、Python 后端与跨境电商场景的个人项目作品集。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
