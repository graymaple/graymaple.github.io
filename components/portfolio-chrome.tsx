/* oxlint-disable next/no-html-link-for-pages -- GitHub Pages static export needs full-document navigation. */
import { ArrowUpRight, Code2 } from 'lucide-react';

export function SiteHeader({ detail = false }: { detail?: boolean }) {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="返回作品集首页">
        <span className="brand-mark">GM</span>
        <span>GRAYMAPLE / AI BUILDER</span>
      </a>
      <nav className="site-nav" aria-label="主导航">
        <a href="/#work">项目</a>
        {!detail && <a href="/#approach">方法</a>}
        {!detail && <a href="/#stack">技术栈</a>}
        <a className="nav-github" href="https://github.com/graymaple" target="_blank" rel="noreferrer">
          <Code2 size={16} /> GitHub
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="brand-mark">GM</span><p>正在寻找 AI 应用、Agent 工程与 Python 后端方向的机会。</p></div>
      <a href="https://github.com/graymaple" target="_blank" rel="noreferrer">
        <Code2 size={17} /> github.com/graymaple <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}

export function ExternalLink({ href, children, subtle = false }: { href: string; children: React.ReactNode; subtle?: boolean }) {
  return (
    <a className={subtle ? 'text-link subtle' : 'text-link'} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}
