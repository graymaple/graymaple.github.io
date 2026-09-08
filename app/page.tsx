import {
  ArrowRight,
  ArrowUpRight,
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

const amazonRepo = 'https://github.com/graymaple/amazon-us-operations-agent';
const feishuRepo = 'https://github.com/graymaple/feishu-rag-customer-service-agent';

const tech = [
  'Python',
  'FastAPI',
  'LangGraph',
  'RAG',
  'SQLite',
  'Chroma',
  'BM25 + RRF',
  'MCP',
  'Feishu Bot',
  'LLM Evaluation',
];

function ExternalLink({ href, children, subtle = false }: { href: string; children: React.ReactNode; subtle?: boolean }) {
  return (
    <a className={subtle ? 'text-link subtle' : 'text-link'} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-mark">GM</span>
          <span>GRAYMAPLE / AI BUILDER</span>
        </a>
        <nav aria-label="主导航">
          <a href="#work">项目</a>
          <a href="#approach">方法</a>
          <a href="#stack">技术栈</a>
          <a className="nav-github" href="https://github.com/graymaple" target="_blank" rel="noreferrer">
            <Code2 size={16} /> GitHub
          </a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> OPEN TO 2026 OPPORTUNITIES</p>
          <h1>把大模型能力，<br /><span>做成可验证的业务流程。</span></h1>
          <p className="hero-intro">
            面向真实业务场景构建 AI Agent：从工作流编排、RAG 检索和工具调用，
            到质量门禁、评测与可观测性，让系统不止“能回答”，更能可靠地完成任务。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">查看项目 <ArrowRight size={17} /></a>
            <a className="secondary-button" href="https://github.com/graymaple" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> 深圳</span>
            <span><Braces size={15} /> AI 应用 / Python 后端</span>
          </div>
        </div>

        <aside className="signal-panel" aria-label="工程能力概览">
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
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK / 02</p><h2>两个项目，两条真实业务链路</h2></div>
          <p>不是功能堆叠，而是围绕业务决策和交付结果组织的端到端系统。</p>
        </div>

        <article className="project-card project-amazon">
          <div className="project-copy">
            <div className="project-index">PROJECT 01 <span>CROSS-BORDER E-COMMERCE</span></div>
            <h3>Amazon US<br />Operations Agent</h3>
            <p className="project-lead">把分散的选品、竞品、关键词与 Listing 数据，组织成可追溯的运营决策工作台。</p>
            <div className="feature-list">
              <p><CheckCircle2 size={17} /> 5 条固定业务工作流：机会验证、竞品诊断、关键词增长、Listing 优化与草稿生成</p>
              <p><CheckCircle2 size={17} /> FastAPI + SQLite + MCP 数据接入，并对外部数据做缓存与质量校验</p>
              <p><CheckCircle2 size={17} /> 程序控制校验、路由与门禁；LLM 专注于证据综合，降低不可控输出</p>
            </div>
            <div className="project-links">
              <ExternalLink href={amazonRepo}>查看源码</ExternalLink>
              <ExternalLink href={`${amazonRepo}/tree/main/docs/architecture`} subtle>浏览架构图</ExternalLink>
            </div>
          </div>
          <div className="project-visual architecture-frame">
            <div className="visual-bar"><span><i /> architecture.html</span><span>1440 × 900</span></div>
            <Image
              src="/amazon-architecture.png"
              alt="Amazon 运营 Agent 系统架构图预览"
              width={1440}
              height={900}
              sizes="(max-width: 900px) 100vw, 56vw"
              priority
            />
            <div className="visual-note"><Network size={16} /> 交互式架构文档覆盖工作流、数据流与失败处理</div>
          </div>
        </article>

        <article className="project-card project-feishu">
          <div className="project-copy">
            <div className="project-index">PROJECT 02 <span>INTELLIGENT CUSTOMER SERVICE</span></div>
            <h3>Feishu RAG<br />Customer Service Agent</h3>
            <p className="project-lead">让飞书里的客户问题经过意图识别、知识检索与订单工具调用，回到可执行的交互卡片。</p>
            <div className="metric-row">
              <div><strong>4/4</strong><span>Recall@3</span></div>
              <div><strong>8/8</strong><span>Agent E2E</span></div>
              <div><strong>30d</strong><span>Memory TTL</span></div>
            </div>
            <p className="metric-note">* 指标来自仓库内置演示评测集，用于验证工程链路，不代表生产环境效果。</p>
            <div className="feature-list compact">
              <p><CheckCircle2 size={17} /> Chroma + BM25 + RRF 融合检索与重排</p>
              <p><CheckCircle2 size={17} /> LangGraph Agent、分层会话记忆与演示 OMS 工具</p>
              <p><CheckCircle2 size={17} /> 飞书事件入口、幂等处理与交互式卡片闭环</p>
            </div>
            <div className="project-links"><ExternalLink href={feishuRepo}>查看源码</ExternalLink></div>
          </div>
          <div className="project-visual flow-frame">
            <div className="visual-bar"><span><i /> live_request.trace</span><span>6 STAGES</span></div>
            <div className="flow-diagram">
              {[
                ['01', '飞书消息', 'EVENT'],
                ['02', '意图路由', 'AGENT'],
                ['03', '混合检索', 'RAG'],
                ['04', '订单工具', 'TOOLS'],
                ['05', '质量门禁', 'GUARD'],
                ['06', '交互卡片', 'OUTPUT'],
              ].map(([n, title, tag], index) => (
                <div className="flow-item" key={n}>
                  <span className="flow-number">{n}</span><div><strong>{title}</strong><small>{tag}</small></div>
                  {index < 5 && <ArrowRight size={15} />}
                </div>
              ))}
            </div>
            <div className="trace-footer"><span><i /> request_id: demo_0827</span><b>COMPLETED · 1.42s</b></div>
          </div>
        </article>
      </section>

      <section className="section approach" id="approach">
        <div className="section-heading">
          <div><p className="eyebrow">ENGINEERING APPROACH</p><h2>我关注的不只是模型效果</h2></div>
          <p>Agent 的价值，最终要落在稳定的输入、可解释的过程和可验证的输出上。</p>
        </div>
        <div className="principle-grid">
          <article><span>01</span><ShieldCheck /><h3>确定性优先</h3><p>把业务规则、校验与失败处理放回代码，让模型只处理需要语义判断的环节。</p></article>
          <article><span>02</span><Layers3 /><h3>证据驱动</h3><p>答案与建议必须来自可定位的数据或知识片段，并保留足够的追踪线索。</p></article>
          <article><span>03</span><Workflow /><h3>端到端验证</h3><p>用最小评测集覆盖关键分支，验证从入口、工具调用到最终交付的完整链路。</p></article>
        </div>
      </section>

      <section className="section stack" id="stack">
        <div><p className="eyebrow">TOOLBOX / CURRENT</p><h2>技术栈</h2></div>
        <div className="tag-cloud">{tech.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <footer>
        <div><span className="brand-mark">GM</span><p>正在寻找 AI 应用、Agent 工程与 Python 后端方向的应届机会。</p></div>
        <a href="https://github.com/graymaple" target="_blank" rel="noreferrer"><Code2 size={17} /> github.com/graymaple <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
