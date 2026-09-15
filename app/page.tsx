import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  MapPin,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, SiteFooter, SiteHeader } from '@/components/portfolio-chrome';
import { Reveal } from '@/components/reveal';

const amazonRepo = 'https://github.com/graymaple/amazon-us-operations-agent';
const feishuRepo = 'https://github.com/graymaple/feishu-rag-customer-service-agent';

const tech = ['Python', 'FastAPI', 'LangGraph', 'RAG', 'SQLite', 'Chroma', 'BM25 + RRF', 'MCP', 'Feishu Bot', 'LLM Evaluation'];

const flow = [
  ['01', '飞书消息', 'EVENT'],
  ['02', '意图路由', 'AGENT'],
  ['03', '混合检索', 'RAG'],
  ['04', '订单工具', 'TOOLS'],
  ['05', '质量门禁', 'GUARD'],
  ['06', '交互卡片', 'OUTPUT'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-layer layer-1"><span className="status-dot" /> OPEN TO 2026 OPPORTUNITIES</p>
          <h1 className="hero-layer layer-2">把大模型能力，<br /><span>做成可验证的业务流程。</span></h1>
          <p className="hero-intro hero-layer layer-3">
            面向真实业务场景构建 AI Agent：从工作流编排、RAG 检索和工具调用，
            到质量门禁、评测与可观测性，让系统不止“能回答”，更能可靠地完成任务。
          </p>
          <div className="hero-actions hero-layer layer-4">
            <a className="primary-button" href="#work">查看项目 <ArrowRight size={17} /></a>
            <a className="secondary-button" href="https://github.com/graymaple" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
          </div>
          <div className="hero-meta hero-layer layer-4">
            <span><MapPin size={15} /> 深圳</span>
            <span><Braces size={15} /> AI 应用 / Python 后端</span>
          </div>
        </div>

        <aside className="signal-panel hero-layer layer-panel" aria-label="工程能力概览">
          <div className="panel-head"><span>SYSTEM / PROFILE</span><span className="online">ONLINE</span></div>
          <div className="terminal-line"><span>01</span><p>固定工作流控制确定性</p><b>PASS</b></div>
          <div className="terminal-line"><span>02</span><p>LLM 负责证据综合与表达</p><b>PASS</b></div>
          <div className="terminal-line"><span>03</span><p>评测集验证端到端链路</p><b>PASS</b></div>
          <div className="signal-map">
            <div className="signal-node core"><Bot size={22} /><small>AGENT</small></div>
            <div className="signal-node one"><Database size={17} /><small>DATA</small></div>
            <div className="signal-node two"><Workflow size={17} /><small>FLOW</small></div>
            <div className="signal-node three"><ShieldCheck size={17} /><small>GUARD</small></div>
            <span className="signal-line line-one" /><span className="signal-line line-two" /><span className="signal-line line-three" />
          </div>
        </aside>
      </section>

      <section className="section projects" id="work">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK / 02</p><h2>两个项目，两条真实业务链路</h2></div>
            <p>主页用于快速判断，项目详情页保留业务背景、系统设计、验证证据与局限。</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <article className="project-card project-amazon">
            <div className="project-copy">
              <div className="project-index">PROJECT 01 <span>CROSS-BORDER E-COMMERCE</span></div>
              <h3>Amazon US<br />Operations Agent</h3>
              <p className="project-lead">把分散的商品、竞品、关键词与 Listing 数据，组织成可追溯的运营决策工作台。</p>
              <div className="project-summary" aria-label="项目摘要">
                <div><span>业务场景</span><p>运营分析与 Listing 交付</p></div>
                <div><span>核心方案</span><p>固定 Workflow + MCP 证据</p></div>
                <div><span>验证证据</span><p>离线质量回归 + 审计报告</p></div>
              </div>
              <div className="feature-list">
                <p><CheckCircle2 size={17} /> 5 条主工作流覆盖机会验证、竞品诊断、关键词增长、Listing 优化与草稿生成</p>
                <p><CheckCircle2 size={17} /> 程序控制校验、路由与质量门禁；LLM 专注证据综合</p>
              </div>
              <div className="project-links">
                <Link className="text-link" href="/projects/amazon">阅读项目案例 <ArrowRight size={14} /></Link>
                <ExternalLink href={amazonRepo} subtle>查看源码</ExternalLink>
              </div>
            </div>
            <Link className="project-visual architecture-frame visual-link" href="/projects/amazon" aria-label="阅读 Amazon US Operations Agent 项目案例">
              <div className="visual-bar"><span><i /> architecture.html</span><span>CASE STUDY →</span></div>
              <Image src="/amazon-architecture.png" alt="Amazon 运营 Agent 系统架构图预览" width={1440} height={900} sizes="(max-width: 900px) 100vw, 56vw" priority />
              <div className="visual-note"><Network size={16} /> 架构、请求生命周期与五项业务工作流</div>
            </Link>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="project-card project-feishu">
            <div className="project-copy">
              <div className="project-index">PROJECT 02 <span>INTELLIGENT CUSTOMER SERVICE</span></div>
              <h3>Feishu RAG<br />Customer Service Agent</h3>
              <p className="project-lead">让飞书里的客户问题经过意图识别、知识检索与订单工具调用，回到可执行的交互卡片。</p>
              <div className="project-summary" aria-label="项目摘要">
                <div><span>业务场景</span><p>中英双语企业客服</p></div>
                <div><span>核心方案</span><p>Agent + 分层记忆 + 混合 RAG</p></div>
                <div><span>验证证据</span><p>检索与端到端黄金集</p></div>
              </div>
              <div className="metric-row">
                <div><strong>4/4</strong><span>Recall@3</span></div>
                <div><strong>8/8</strong><span>Agent E2E</span></div>
                <div><strong>30d</strong><span>Memory TTL</span></div>
              </div>
              <p className="metric-note">* 来自仓库演示黄金集的回归基线，不代表生产环境效果。</p>
              <div className="project-links">
                <Link className="text-link" href="/projects/feishu">阅读项目案例 <ArrowRight size={14} /></Link>
                <ExternalLink href={feishuRepo} subtle>查看源码</ExternalLink>
              </div>
            </div>
            <Link className="project-visual flow-frame visual-link" href="/projects/feishu" aria-label="阅读飞书 RAG 客服 Agent 项目案例">
              <div className="visual-bar"><span><i /> live_request.trace</span><span>CASE STUDY →</span></div>
              <div className="flow-diagram">
                {flow.map(([n, title, tag], index) => (
                  <div className="flow-item" key={n}>
                    <span className="flow-number">{n}</span><div><strong>{title}</strong><small>{tag}</small></div>
                    {index < 5 && <ArrowRight size={15} />}
                  </div>
                ))}
              </div>
              <div className="trace-footer"><span><i /> request_id: demo_0827</span><b>COMPLETED · TRACEABLE</b></div>
            </Link>
          </article>
        </Reveal>
      </section>

      <section className="section approach" id="approach">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">ENGINEERING APPROACH</p><h2>模型之外，更重要的三件事</h2></div>
            <p>把 Agent 变成可交付系统，需要约束、证据和可复跑的验证。</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="principle-grid">
            <article><span>01</span><ShieldCheck /><h3>确定性优先</h3><p>业务规则、校验与失败处理交给代码，模型只负责需要语义判断的环节。</p></article>
            <article><span>02</span><Layers3 /><h3>证据驱动</h3><p>建议来自可定位的数据或知识片段，并保留来源、状态与追踪线索。</p></article>
            <article><span>03</span><Workflow /><h3>端到端验证</h3><p>用最小黄金集覆盖关键分支，让每次修改都能复跑，而不是凭感觉验收。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section stack" id="stack">
        <Reveal className="stack-heading"><p className="eyebrow">TOOLBOX / CURRENT</p><h2>技术栈</h2></Reveal>
        <Reveal delay={80}><div className="tag-cloud">{tech.map((item) => <span key={item}>{item}</span>)}</div></Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
