import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  FileSearch,
  Gauge,
  MemoryStick,
  MessageSquareText,
  Network,
  PackageSearch,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { ExternalLink, SiteFooter, SiteHeader } from '@/components/portfolio-chrome';
import { Reveal } from '@/components/reveal';

export const dynamic = 'force-static';

const repo = 'https://github.com/graymaple/feishu-rag-customer-service-agent';

export const metadata: Metadata = {
  title: 'Feishu RAG Customer Service Agent · Graymaple',
  description: '飞书智能客服 Agent 项目案例：分层记忆、父子块混合检索、业务工具、可观测性与黄金集评测。',
};

const stages = [
  ['01', '飞书事件', '长连接接收消息，识别线程与用户上下文。'],
  ['02', 'Agent 路由', 'LangGraph 判断知识问答、订单查询、计算或业务兜底。'],
  ['03', '上下文组装', '精确读取用户事实、近期摘要与滑动窗口，控制 Prompt 预算。'],
  ['04', '检索 / 工具', '按意图调用父子块 RAG、模拟 OMS 或边界明确的辅助工具。'],
  ['05', '生成与追踪', '组合证据生成中英双语回答，同时记录节点、耗时与工具状态。'],
  ['06', '交互卡片', 'PATCH 卡片呈现流式内容，失败时降级为完整文本。'],
];

export default function FeishuProjectPage() {
  return (
    <main className="detail-page">
      <SiteHeader detail />

      <section className="section case-hero">
        <div className="case-hero-copy">
          <Link className="back-link" href="/#work"><ArrowLeft size={15} /> 返回项目列表</Link>
          <p className="eyebrow">PROJECT 02 / INTELLIGENT CUSTOMER SERVICE</p>
          <h1>Feishu RAG<br /><span>Customer Service Agent</span></h1>
          <p className="case-lead">从飞书消息入口到交互式卡片输出，把混合检索、用户记忆、订单工具、Trace 和评测组织成一条可复跑的企业客服链路。</p>
          <div className="case-actions"><ExternalLink href={repo}>GitHub 源码</ExternalLink></div>
        </div>
        <div className="case-stat-panel feishu-stats" aria-label="演示黄金集回归基线">
          <div className="case-stat-head"><span>DEMO / BASELINE</span><b>NOT PRODUCTION SLA</b></div>
          <div><strong>4/4</strong><span>检索稳定题 Recall@3</span><small>RETRIEVAL</small></div>
          <div><strong>8/8</strong><span>Agent 端到端黄金题</span><small>END TO END</small></div>
          <div><strong>30d</strong><span>记忆生命周期</span><small>MEMORY TTL</small></div>
        </div>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head"><p className="eyebrow">01 / PROBLEM & SCOPE</p><h2>客服 Agent 的难点，不只在回答问题</h2></div></Reveal>
        <Reveal delay={80}>
          <div className="case-triad">
            <article><span>业务问题</span><h3>知识、订单与用户状态属于不同数据类型</h3><p>政策适合语义检索，订单需要精确工具调用，用户偏好和授权又不能依赖模糊向量召回。</p></article>
            <article><span>实现范围</span><h3>入口、Agent、数据与治理一起实现</h3><p>覆盖飞书长连接、LangGraph Agent、父子块 RAG、分层记忆、模拟 OMS、可观测后台与评测脚本。</p></article>
            <article><span>数据边界</span><h3>所有业务数据均为公开演示数据</h3><p>知识资料和 DEMO 订单不代表真实店铺或客户；Trace 元数据不保存用户消息正文。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head split"><div><p className="eyebrow">02 / REQUEST LIFECYCLE</p><h2>一条消息经过六个阶段</h2></div><p>每个阶段都有清晰职责，既能在面试中逐层解释，也能在日志和 Trace 中定位具体失败位置。</p></div></Reveal>
        <div className="stage-grid">
          {stages.map(([index, title, description], itemIndex) => (
            <Reveal delay={itemIndex * 45} key={index}>
              <article className="stage-card"><span>{index}</span><h3>{title}</h3><p>{description}</p></article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head"><p className="eyebrow">03 / SYSTEM VIEW</p><h2>一套 Agent，三类受控上下文</h2></div></Reveal>
        <Reveal delay={80}>
          <figure className="feishu-system" aria-label="飞书客服 Agent 架构：飞书事件进入 LangGraph Agent，再连接分层记忆、混合检索和业务工具，最终输出卡片与 Trace">
            <div className="system-source"><MessageSquareText /><span>Feishu Event</span><small>长连接 / 线程 / 用户</small></div>
            <ArrowRight className="system-arrow" />
            <div className="system-core"><Bot /><span>LangGraph Agent</span><small>意图 · 工具 · 回答</small></div>
            <ArrowRight className="system-arrow" />
            <div className="system-branches">
              <div><MemoryStick /><p><strong>Context Manager</strong><span>Ledger / Profile / Summary</span></p></div>
              <div><FileSearch /><p><strong>Hybrid RAG</strong><span>Vector + BM25 + RRF</span></p></div>
              <div><PackageSearch /><p><strong>Business Tools</strong><span>Demo OMS / Calculator</span></p></div>
            </div>
            <ArrowRight className="system-arrow" />
            <div className="system-output"><BarChart3 /><span>Card + Trace</span><small>输出 / 耗时 / 状态</small></div>
          </figure>
        </Reveal>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head split"><div><p className="eyebrow">04 / ENGINEERING DECISIONS</p><h2>数据类型决定存储与检索方式</h2></div><p>系统没有把所有上下文都塞进一个向量库，而是根据“是否需要精确读取、是否需要语义召回、是否有业务副作用”分层处理。</p></div></Reveal>
        <Reveal delay={80}>
          <div className="decision-grid">
            <article><Database /><span>记忆分层</span><h3>确定性用户事实存 SQLite</h3><p>订单号、语言偏好与授权状态按 user_id + key 精确读取，避免召回相似但过期的信息。</p></article>
            <article><Network /><span>父子块 RAG</span><h3>小块命中，大块补齐上下文</h3><p>向量与 BM25 各取 Top12，经 RRF 和 CrossEncoder 重排，再扩展同父块相邻内容。</p></article>
            <article><ShieldCheck /><span>工具边界</span><h3>知识问答与业务动作明确分流</h3><p>订单查询走模拟 OMS；重复扣款等高风险请求进入业务兜底，不让模型自行承诺处理结果。</p></article>
            <article><Gauge /><span>可观测性</span><h3>把体验问题落到阶段耗时</h3><p>Trace 记录节点与工具状态，后台汇总成功率、P95 总耗时和 P95 首包时间。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section case-section">
        <Reveal><div className="case-section-head"><p className="eyebrow">05 / VERIFICATION</p><h2>小型黄金集，先验证关键链路</h2></div></Reveal>
        <Reveal delay={80}>
          <div className="evidence-layout media-evidence-layout">
            <div className="eval-board">
              <div><strong>100%</strong><span>Retrieval Recall@3</span><small>4 / 4 稳定检索题</small></div>
              <div><strong>100%</strong><span>Tool accuracy</span><small>演示黄金集</small></div>
              <div><strong>100%</strong><span>Answer keyword pass</span><small>演示黄金集</small></div>
              <div><strong>100%</strong><span>End-to-end pass</span><small>8 / 8 Agent 题</small></div>
              <p><CheckCircle2 /> 这些数字是当前演示黄金集的回归基线，用来发现改动是否破坏既有链路，不代表开放问题中的生产正确率。</p>
            </div>
            <figure className="demo-video-card">
              <div className="visual-bar"><span><i /> feishu-agent-demo.mp4</span><span>01:26 / DEMO</span></div>
              <video controls preload="metadata" playsInline poster="/feishu/rag-answer.png" aria-label="飞书智能客服 Agent 端到端演示视频">
                <source src="/feishu/agent-demo.mp4" type="video/mp4" />
                <track kind="captions" src="/feishu/agent-demo.zh-CN.vtt" srcLang="zh-CN" label="中文场景说明" />
                你的浏览器暂不支持播放该演示视频。
              </video>
              <figcaption><strong>端到端演示</strong><span>系统架构 → RAG 来源引用 → 订单工具 → 上下文记忆 → 管理员后台 → 回归评测</span></figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="evidence-gallery" aria-label="飞书智能客服运行截图">
            <figure className="evidence-media-card rag-proof">
              <a className="evidence-media-frame" href="/feishu/rag-answer.png" target="_blank" rel="noreferrer" aria-label="打开完整的英文 RAG 回答截图">
                <Image src="/feishu/rag-answer.png" alt="飞书智能客服使用英文回答取消订单问题，并引用知识库源文件及版本" width={1626} height={1322} sizes="(max-width: 760px) 100vw, 38vw" />
              </a>
              <figcaption><span>01 / RAG EVIDENCE</span><h3>回答带可定位来源</h3><p>英文政策回答附带源文件名和资料版本，便于核查结论依据。</p><a href="/feishu/rag-answer.png" target="_blank" rel="noreferrer">查看完整截图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card tall-proof">
              <a className="evidence-media-frame" href="/feishu/order-memory.png" target="_blank" rel="noreferrer" aria-label="打开完整的订单和上下文记忆截图">
                <Image src="/feishu/order-memory.png" alt="飞书智能客服先查询 DEMO-1001 订单，再记住英文偏好并在后续回答中保留订单上下文" width={1625} height={4175} sizes="(max-width: 760px) 100vw, 29vw" />
              </a>
              <figcaption><span>02 / CONTEXT MEMORY</span><h3>记住语言偏好与订单状态</h3><p>切换英文后，后续回答仍能准确引用 DEMO-1001 的物流信息。</p><a href="/feishu/order-memory.png" target="_blank" rel="noreferrer">查看完整长图 ↗</a></figcaption>
            </figure>
            <figure className="evidence-media-card tall-proof">
              <a className="evidence-media-frame" href="/feishu/conversation-full.png" target="_blank" rel="noreferrer" aria-label="打开完整的飞书多轮对话截图">
                <Image src="/feishu/conversation-full.png" alt="飞书智能客服完整多轮演示记录，包含 RAG、订单工具、语言偏好和海关延误问答" width={1634} height={5669} sizes="(max-width: 760px) 100vw, 29vw" />
              </a>
              <figcaption><span>03 / FULL TRACE</span><h3>完整多轮交互链路</h3><p>从政策检索到订单查询，再到语言偏好和后续政策问答的连续记录。</p><a href="/feishu/conversation-full.png" target="_blank" rel="noreferrer">查看完整长图 ↗</a></figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      <section className="section case-section limitations">
        <Reveal>
          <div className="case-section-head"><p className="eyebrow">06 / LIMITS & NEXT</p><h2>演示链路完整，不等于已经生产化</h2></div>
          <div className="limits-grid">
            <article><TriangleAlert /><h3>当前限制</h3><p>OMS 与订单均为模拟数据；黄金集规模较小；单机 SQLite 和内存状态不承担真实多租户服务承诺。</p></article>
            <article><ArrowRight /><h3>生产化方向</h3><p>接入真实 OMS 的权限隔离与审计，增加人工转接队列、分布式持久化，并用真实失败样本持续扩展评测集。</p></article>
          </div>
        </Reveal>
      </section>

      <section className="section next-project previous">
        <p className="eyebrow">PREVIOUS PROJECT / 01</p>
        <Link href="/projects/amazon"><ArrowLeft /><span>Amazon US Operations Agent</span></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
