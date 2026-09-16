/* oxlint-disable next/no-html-link-for-pages -- GitHub Pages static export needs full-document navigation. */
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  FileCheck2,
  Gauge,
  GitBranch,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { ExternalLink, SiteFooter, SiteHeader } from '@/components/portfolio-chrome';
import { Reveal } from '@/components/reveal';

export const dynamic = 'force-static';

const repo = 'https://github.com/graymaple/amazon-us-operations-agent';

export const metadata: Metadata = {
  title: 'Amazon US Operations Agent · Graymaple',
  description: 'Amazon US 运营决策工作台项目案例：固定业务工作流、MCP 数据、质量门禁与离线评测。',
};

const workflows = [
  ['01', '商品机会验证', '以种子关键词与人工确认的候选 ASIN 为输入，验证市场、竞争与趋势证据。'],
  ['02', '竞品诊断', '聚合单 ASIN 的基础、趋势、流量与关键词信息，并保留工具级状态。'],
  ['03', '关键词增长', '比较自家 ASIN 与 1–3 个确认竞品，输出覆盖矩阵和行动优先级。'],
  ['04', 'Listing 优化', '检查标题和反查词覆盖，只基于已有证据提出优化建议。'],
  ['05', 'Listing 草稿', '使用人工确认事实与关键词生成三版待审核草稿，永不自动发布。'],
];

export default function AmazonProjectPage() {
  return (
    <main className="detail-page">
      <SiteHeader detail />

      <section className="section case-hero">
        <div className="case-hero-copy">
          <a className="back-link" href="/#work"><ArrowLeft size={15} /> 返回项目列表</a>
          <p className="eyebrow">PROJECT 01 / CROSS-BORDER E-COMMERCE</p>
          <h1>Amazon US<br /><span>Operations Agent</span></h1>
          <p className="case-lead">把商品、竞品、关键词与 Listing 数据组织成五条可追踪的运营工作流；用程序控制取数、约束与质量门禁，让模型专注于证据解读和表达。</p>
          <div className="case-actions">
            <ExternalLink href={repo}>GitHub 源码</ExternalLink>
            <ExternalLink href="/amazon/interactive/system-architecture.html" subtle>交互式架构图</ExternalLink>
          </div>
        </div>
        <div className="case-stat-panel" aria-label="项目关键事实">
          <div className="case-stat-head"><span>PROJECT / FACTS</span><b>VERIFIED IN REPO</b></div>
          <div><strong>05</strong><span>主业务工作流</span><small>WORKFLOWS</small></div>
          <div><strong>24h</strong><span>竞品数据缓存</span><small>CACHE TTL</small></div>
          <div><strong>20</strong><span>单次流程工具预算上限</span><small>CALL BUDGET</small></div>
        </div>
      </section>

      <section className="section case-section">
        <Reveal>
          <div className="case-section-head"><p className="eyebrow">01 / PROBLEM & SCOPE</p><h2>不是“让 Agent 自由操作”，而是把运营任务固化成可靠流程</h2></div>
        </Reveal>
        <Reveal delay={80}>
          <div className="case-triad">
            <article><span>业务问题</span><h3>数据分散，结论难追溯</h3><p>商品研究、竞品诊断、关键词和 Listing 交付来自不同数据面，若直接让模型自主路由，成本和输出边界都难控制。</p></article>
            <article><span>实现范围</span><h3>从入口到审计的完整链路</h3><p>实现 FastAPI 接口、固定业务 Workflow、MCP Provider、SQLite 缓存、质量门禁、Markdown 报告和回归评测。</p></article>
            <article><span>交付边界</span><h3>建议可执行，但不替人发布</h3><p>关键 ASIN、商品事实和目标关键词由用户确认；草稿带事实溯源和声明核验，最终发布仍由人工完成。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section case-section">
        <Reveal>
          <div className="case-section-head split"><div><p className="eyebrow">02 / SYSTEM VIEW</p><h2>确定性骨架包住模型能力</h2></div><p>主链路不依赖无限 ReAct 循环。Workflow 决定需要哪些证据、调用顺序和停止条件；LLM 只在综合解读与文案表达阶段介入。</p></div>
        </Reveal>
        <Reveal delay={80}>
          <div className="interactive-diagram-shell">
            <div className="visual-bar"><span><i /> system-architecture.html</span><span>INTERACTIVE · ARCHIFY</span></div>
            <iframe
              className="interactive-diagram-frame"
              src="/amazon/interactive/system-architecture.html"
              title="Amazon US Operations Agent 可交互系统架构图"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-downloads allow-popups"
              allow="clipboard-write"
              allowFullScreen
            />
            <div className="interactive-diagram-footer">
              <p>可缩放、搜索节点、查看上下游关系并追踪有向路径；面试演示建议打开全屏版本。</p>
              <div className="interactive-diagram-actions" aria-label="交互式架构资料">
                <ExternalLink href="/amazon/interactive/system-architecture.html">全屏系统架构</ExternalLink>
                <ExternalLink href="/amazon/interactive/request-lifecycle.html" subtle>请求生命周期</ExternalLink>
                <ExternalLink href="/amazon/interactive/five-workflows.html" subtle>五条业务工作流</ExternalLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head"><p className="eyebrow">03 / FIVE WORKFLOWS</p><h2>围绕交付结果组织，而不是堆功能</h2></div></Reveal>
        <div className="workflow-list">
          {workflows.map(([index, title, description], itemIndex) => (
            <Reveal delay={itemIndex * 55} key={index}>
              <article className="workflow-row"><span>{index}</span><h3>{title}</h3><p>{description}</p><ArrowRight size={17} aria-hidden="true" /></article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head split"><div><p className="eyebrow">04 / ENGINEERING DECISIONS</p><h2>可靠性来自明确边界</h2></div><p>外部数据可能超时、限流或缺失；模型也可能补充未经确认的卖点。系统把这些风险变成可检测、可降级、可回归的代码路径。</p></div></Reveal>
        <Reveal delay={80}>
          <div className="decision-grid">
            <article><Workflow /><span>固定 Workflow</span><h3>路由与调用次序由程序控制</h3><p>对昂贵工具设置并发、重试与单次流程预算；鉴权、参数与额度错误不盲目重试。</p></article>
            <article><Database /><span>证据与缓存</span><h3>24 小时缓存保留来源状态</h3><p>MCP 数据按工具记录来源、命中与失败信息；无可用数据时使用演示快照并明确标注边界。</p></article>
            <article><ShieldCheck /><span>质量门禁</span><h3>未经确认的声明不会伪装成事实</h3><p>材质、尺寸、禁用词和关键词覆盖通过规则核验，模型补充的效果表述会被逐项标记。</p></article>
            <article><FileCheck2 /><span>可审计输出</span><h3>结论、证据和风险一起交付</h3><p>每次运行可写入审计记录并导出 Markdown 报告，便于复盘具体工具状态与生成边界。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section case-section" id="verification">
        <Reveal><div className="case-section-head"><p className="eyebrow">05 / VERIFICATION</p><h2>评测的是风险处理，不是漂亮回答</h2></div></Reveal>
        <Reveal delay={80}>
          <div className="evidence-layout">
            <div className="evidence-list">
              <div><CheckCircle2 /><p><strong>Listing 安全边界</strong><span>覆盖凭空卖点、用户禁用词、重复 Search Terms 与关键词缺口。</span></p></div>
              <div><Clock3 /><p><strong>外部服务韧性</strong><span>固定回归 MCP 超时、额度失败、缓存命中与安全快照降级。</span></p></div>
              <div><Gauge /><p><strong>无外部费用的离线回归</strong><span>临时 SQLite、伪造 Provider 与固定 LLM 输出，不读取真实 Key。</span></p></div>
              <div><GitBranch /><p><strong>失败结果仍可解释</strong><span>工具级状态、风险标志和生成方式随报告返回，不用空洞成功提示掩盖失败。</span></p></div>
            </div>
            <figure className="demo-video-card amazon-demo-video">
              <div className="visual-bar"><span><i /> amazon-agent-demo.webm</span><span>00:56 / DEMO</span></div>
              <video controls preload="metadata" playsInline poster="/amazon/product-opportunity.png" aria-label="Amazon US 运营决策工作台五条工作流演示">
                <source src="/amazon/agent-demo.webm" type="video/webm" />
                <track kind="captions" src="/amazon/agent-demo.zh-CN.vtt" srcLang="zh-CN" label="中文场景说明" />
                当前浏览器不支持视频播放。
              </video>
              <figcaption><strong>五条 Workflow 端到端演示</strong><span>商品机会验证 → 竞品诊断 → 关键词增长 → Listing 优化 → Listing 草稿</span></figcaption>
            </figure>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="media-disclosure"><CheckCircle2 /> 以下界面由数据库中已成功运行的真实历史 Workflow 输出重新渲染；录制过程未重新调用 MCP 或 LLM。数值用于展示流程和证据结构，不作为业务成绩。</p>
          <div className="amazon-workflow-gallery" aria-label="Amazon 运营工作流运行截图">
            <figure className="evidence-media-card amazon-proof-card">
              <a className="evidence-media-frame" href="/amazon/product-opportunity.png" target="_blank" rel="noreferrer" aria-label="打开完整的商品机会验证截图">
                <Image src="/amazon/product-opportunity.png" alt="商品机会验证界面，展示人工确认候选 ASIN、市场指标与证据不足提示" width={1440} height={900} sizes="(max-width: 760px) 100vw, 34vw" />
              </a>
              <figcaption><span>01 / PRODUCT OPPORTUNITY</span><h3>先验证候选，不自动声称发现爆品</h3><p>以种子关键词和人工确认的 ASIN 为输入，保留市场指标、候选依据与证据不足状态。</p><a href="/amazon/product-opportunity.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card amazon-proof-card">
              <a className="evidence-media-frame" href="/amazon/competitor-analysis.png" target="_blank" rel="noreferrer" aria-label="打开完整的竞品诊断截图">
                <Image src="/amazon/competitor-analysis.png" alt="竞品诊断界面，展示 ASIN 指标、三条观察、风险与下一步建议" width={1440} height={900} sizes="(max-width: 760px) 100vw, 34vw" />
              </a>
              <figcaption><span>02 / COMPETITOR DIAGNOSIS</span><h3>指标、判断和风险一起交付</h3><p>缓存数据进入固定分析模板，结果同时保留流量结构、关键词表现、风险与下一步动作。</p><a href="/amazon/competitor-analysis.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card amazon-proof-card">
              <a className="evidence-media-frame" href="/amazon/keyword-actions.png" target="_blank" rel="noreferrer" aria-label="打开完整的关键词行动看板截图">
                <Image src="/amazon/keyword-actions.png" alt="关键词增长行动看板，展示多个候选词的覆盖、搜索量、竞争度和优先级" width={1440} height={900} sizes="(max-width: 760px) 100vw, 34vw" />
              </a>
              <figcaption><span>03 / KEYWORD GROWTH</span><h3>从词表比较落到行动优先级</h3><p>跨 ASIN 检查覆盖关系，再结合搜索量、竞争度与趋势生成可人工确认的行动看板。</p><a href="/amazon/keyword-actions.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card amazon-proof-card">
              <a className="evidence-media-frame" href="/amazon/listing-checks.png" target="_blank" rel="noreferrer" aria-label="打开完整的 Listing 优化检查截图">
                <Image src="/amazon/listing-checks.png" alt="Listing 优化界面，展示标题规则、关键词覆盖和历史数据检查" width={1440} height={900} sizes="(max-width: 760px) 100vw, 34vw" />
              </a>
              <figcaption><span>04 / LISTING OPTIMIZATION</span><h3>建议前先做规则与证据检查</h3><p>标题长度、反查词覆盖及历史趋势由代码校验，避免模型把短期变化直接解释成因果。</p><a href="/amazon/listing-checks.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card amazon-proof-card">
              <a className="evidence-media-frame" href="/amazon/listing-drafts.png" target="_blank" rel="noreferrer" aria-label="打开完整的 Listing 草稿截图">
                <Image src="/amazon/listing-drafts.png" alt="Listing 草稿界面，展示标题、五点卖点、描述、搜索词和事实溯源" width={1440} height={900} sizes="(max-width: 760px) 100vw, 34vw" />
              </a>
              <figcaption><span>05 / LISTING DRAFT</span><h3>草稿绑定人工确认事实</h3><p>标题、卖点和 Search Terms 带关键词覆盖与事实溯源，生成后仍需人工审核发布。</p><a href="/amazon/listing-drafts.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
          </div>
          <div className="amazon-runtime-gallery" aria-label="运行可观测性与失败处理截图">
            <figure className="evidence-media-card amazon-runtime-card">
              <a className="evidence-media-frame" href="/amazon/observability.png" target="_blank" rel="noreferrer" aria-label="打开完整的工具可观测性截图">
                <Image src="/amazon/observability.png" alt="工具执行记录界面，展示数据来源、缓存命中、调用预算、耗时和上下文预算" width={1440} height={900} sizes="(max-width: 760px) 100vw, 50vw" />
              </a>
              <figcaption><span>RUNTIME / OBSERVABILITY</span><h3>每次取数都留下来源与预算</h3><p>逐工具记录 cache/provider 状态、外部请求、耗时与上下文消耗，方便解释报告如何产生。</p><a href="/amazon/observability.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card amazon-runtime-card failure-proof">
              <a className="evidence-media-frame" href="/amazon/failure-isolation.png" target="_blank" rel="noreferrer" aria-label="打开完整的工具失败隔离截图">
                <Image src="/amazon/failure-isolation.png" alt="工具失败隔离界面，展示关键词工具调用失败被标记为 fallback，其他结果仍保留" width={1440} height={900} sizes="(max-width: 760px) 100vw, 50vw" />
              </a>
              <figcaption><span>RUNTIME / FAILURE ISOLATION</span><h3>单工具失败不会伪装成全链成功</h3><p>失败工具被标为 fallback 并保留错误信息；该截图专门展示降级路径，不属于五条主流程的正常结果。</p><a href="/amazon/failure-isolation.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      <section className="section next-project">
        <p className="eyebrow">NEXT PROJECT / 02</p>
        <a href="/projects/feishu/"><span>Feishu RAG Customer Service Agent</span><ArrowRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
