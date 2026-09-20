import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Clapperboard, Layers3, Mail,
  MapPin, MonitorSmartphone, Package, Palette, Phone, Target, Wand2, X,
} from 'lucide-react';
import './styles.css';

const stats = [
  { value: '6+', label: '年设计与品牌策划经验' }, { value: '805K+', label: '自媒体内容推广曝光' },
  { value: '200+', label: '线下机构采纳案例' }, { value: '19.7W', label: '618 联合上海玫瑰医美项目卡战役营收' },
];

const experience = [
  { period: '2023 — NOW', company: '上海逸润生物科技有限公司', role: '品牌策划运营', description: '负责品牌视觉传播与落地执行，覆盖宣传册、海报、展板、社交媒体、活动视觉与 PPT 模板；协同销售和线下医美机构，为业务增长提供稳定的视觉支持。' },
  { period: '2021 — 2022', company: '艾一生命科技（广东）有限公司', role: '平面设计师', description: '负责品牌形象的视觉传达与执行，策划并产出品牌宣传物料，对接线下医美机构，参与品牌活动沙龙与传播。' },
  { period: '2018 — 2021', company: '天键电声股份有限公司', role: '平面设计师', description: '完成品牌宣传册、海报、展板及周边物料，参与大型展会主视觉与宣传物料的策划筹备。' },
];

const profileDetails = [
  { label: '教育背景', value: '中山火炬职业技术学院 · 数字媒体应用技术', note: '专科 · 2016.09 — 2018.06' },
  { label: '职业方向', value: '视觉设计 / 品牌策划运营', note: '品牌视觉、数字页面、包装与传播物料' },
  { label: '专业能力', value: '品牌视觉与多端设计', note: 'Logo / 字体 / Icon / 海报 / 网页 / 包装 / 视频剪辑' },
];

const designTools = [
  { short: 'Ps', name: 'Photoshop', tone: 'photoshop' },
  { short: 'Ai', name: 'Illustrator', tone: 'illustrator' },
  { short: 'K', name: 'KeyShot', tone: 'keyshot', icon: './assets/keyshot-icon.png' },
  { short: 'Pr', name: 'Premiere', tone: 'premiere' },
  { short: 'C4D', name: 'Cinema 4D', tone: 'cinema4d' },
];

const caseStudies = [
  { code: 'P.01', title: '小红书内容推广', text: '胶原 B5 次抛精华种草项目，24 天完成内容投放与视觉传播。', metric: '805,955', label: '总曝光量', detail: '阅读 85,905 · 互动率 9.15% · 话题阅读增长 110,000 · 粉丝增长 400+' },
  { code: 'P.02', title: '医美机构沙龙会', text: '为院内医美机构制作品牌宣传物料，支持销售与线下活动传播。', metric: '200+', label: '合作机构采纳', detail: '设计方案覆盖集团医美机构及多所目标机构，助力新品快速触达。' },
  { code: 'P.03', title: '618 玫瑰医美买卡', text: '负责重点战役的整体视觉创意、活动物料与执行落地。', metric: '197,820', label: '活动营收', detail: '视觉方案支撑销售目标达成，活动期间售出项目卡 180 张。' },
];

const projects = [
  { title: '海报 / 易拉宝', type: '空间物料', index: '01', image: './assets/project-display.svg', result: '品牌海报 · 产品传播 · 视觉系列延展' },
  {
    title: '详情页 / 网页专题',
    type: '数字设计',
    index: '02',
    image: './assets/web-page-cover.jpg',
    result: 'Web 与移动端规范 · 专题页独立设计',
    galleryType: 'image-wide',
    gallery: [
      { title: '定制耳机配置页面', src: './assets/web-page-01.jpg' },
      { title: '耳机产品详情页', src: './assets/web-page-02.jpg' },
      { title: '品牌服务网点页面', src: './assets/web-page-03.jpg' },
      { title: '定制耳机商城首页', src: './assets/web-page-04.jpg' },
      { title: '品牌企业介绍页面', src: './assets/web-page-05.jpg' },
      { title: '助听器品牌官网首页', src: './assets/web-page-06.jpg' },
    ],
  },
  { title: '品牌视觉系统', type: '品牌', index: '03', image: './assets/project-brand.svg', result: 'Logo · 字体 · Icon · 社媒与活动主视觉' },
  {
    title: '包装与画册设计',
    type: '包装',
    index: '04',
    image: './assets/packaging-cover.jpg',
    result: '印刷工艺 · 包装流程 · 供应商落地',
    galleryType: 'image',
    gallery: [
      { title: '敏肌洁面慕斯', src: './assets/packaging-01.jpg' },
      { title: '医用透明质酸钠敷料', src: './assets/packaging-02.jpg' },
      { title: '胶原 B5 次抛精华', src: './assets/packaging-03.jpg' },
      { title: '仿生胶原 B5 霜', src: './assets/packaging-04.jpg' },
    ],
  },
  {
    title: '短视频剪辑',
    type: '视频',
    index: '05',
    video: './assets/short-video-edit.mp4',
    result: '素颜计划视频 · 节奏剪辑 · 品牌传播',
    gallery: [
      { title: '素颜计划', src: './assets/short-video-edit.mp4' },
      { title: '短视频作品 02', src: './assets/short-video-02.mp4' },
      { title: '短视频作品 03', src: './assets/short-video-03.mp4' },
    ],
  },
  {
    title: '产品 3D 渲染',
    type: '3D 渲染',
    index: '06',
    image: './assets/render-cover.jpg',
    result: '产品建模 · 材质灯光 · 空间视觉表现',
    galleryType: 'image-wide',
    gallery: [
      { title: '蓝色产品场景渲染', src: './assets/render-01.jpg' },
      { title: '黑色耳机场景渲染', src: './assets/render-02.jpg' },
      { title: '冻干粉产品场景 01', src: './assets/render-03.jpg' },
      { title: 'AI 冻膜海报渲染', src: './assets/render-04.jpg' },
      { title: '耳机产品渲染', src: './assets/render-05.png' },
      { title: '冻干粉产品场景 02', src: './assets/render-06.jpg' },
      { title: '冻干粉单品渲染', src: './assets/render-07.png' },
    ],
  },
  { title: '电商视觉设计', type: '电商视觉', index: '07', image: './assets/project-ecommerce.svg', result: '产品主图 · 卖点提炼 · 活动页面延展' },
];

const strengths = [
  { icon: Palette, code: 'A.01', title: '品牌视觉落地', text: '从主视觉到宣传物料、社媒配图与演示模板，建立一致且可执行的品牌表达。' },
  { icon: MonitorSmartphone, code: 'A.02', title: '多端页面设计', text: '熟悉移动端与 PC 端界面规范，可独立完成网页、专题页与基础产品界面。' },
  { icon: Layers3, code: 'A.03', title: '内容转化意识', text: '理解推广节奏与阅读路径，让信息层级、视觉吸引力和业务目标彼此配合。' },
  { icon: Package, code: 'A.04', title: '制作落地经验', text: '了解包装制作及印刷工艺，能把视觉方案持续推进到真实生产和线下场景。' },
  { icon: Wand2, code: 'A.05', title: 'AI 创意与策略分析', text: '运用 AIGC、TapNow、Lovart 与 GPT-5.6 快速验证和迭代创意方向，前期创意产出效率提升 40%；结合 DeepSeek 深挖行业趋势，构建覆盖核心能力、成本结构与差异化优势的竞品分析框架，为团队战略决策提供数据支撑与可行建议。' },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

const starPaths = [
  'M27.15 17.40L28.05 3.45A2.05 2.05 0 0 0 23.95 3.45L24.85 17.40Z',
  'M30.35 18.49L36.52 5.95A2.05 2.05 0 0 0 32.74 4.38L28.23 17.61Z',
  'M32.89 20.73L43.39 11.50A2.05 2.05 0 0 0 40.50 8.61L31.27 19.11Z',
  'M34.39 23.77L47.62 19.26A2.05 2.05 0 0 0 46.05 15.48L33.51 21.65Z',
  'M34.60 27.15L48.55 28.05A2.05 2.05 0 0 0 48.55 23.95L34.60 24.85Z',
  'M33.51 30.35L46.05 36.52A2.05 2.05 0 0 0 47.62 32.74L34.39 28.23Z',
  'M31.27 32.89L40.50 43.39A2.05 2.05 0 0 0 43.39 40.50L32.89 31.27Z',
  'M28.23 34.39L32.74 47.62A2.05 2.05 0 0 0 36.52 46.05L30.35 33.51Z',
  'M24.85 34.60L23.95 48.55A2.05 2.05 0 0 0 28.05 48.55L27.15 34.60Z',
  'M21.65 33.51L15.48 46.05A2.05 2.05 0 0 0 19.26 47.62L23.77 34.39Z',
  'M19.11 31.27L8.61 40.50A2.05 2.05 0 0 0 11.50 43.39L20.73 32.89Z',
  'M17.61 28.23L4.38 32.74A2.05 2.05 0 0 0 5.95 36.52L18.49 30.35Z',
  'M17.40 24.85L3.45 23.95A2.05 2.05 0 0 0 3.45 28.05L17.40 27.15Z',
  'M18.49 21.65L5.95 15.48A2.05 2.05 0 0 0 4.38 19.26L17.61 23.77Z',
  'M20.73 19.11L11.50 8.61A2.05 2.05 0 0 0 8.61 11.50L19.11 20.73Z',
  'M23.77 17.61L19.26 4.38A2.05 2.05 0 0 0 15.48 5.95L21.65 18.49Z',
];

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setOpen(false);
    const tablet = window.matchMedia('(max-width:1080px) and (max-aspect-ratio:0.91/1), (max-width:620px) and (min-height:480px)');
    const closeDesktopMenu = () => !tablet.matches && setOpen(false);
    window.addEventListener('keydown', close);
    tablet.addEventListener('change', closeDesktopMenu);
    return () => {
      window.removeEventListener('keydown', close);
      tablet.removeEventListener('change', closeDesktopMenu);
    };
  }, []);
  return (
      <nav className={`gateway-nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
        <div className="nav-links" onClick={(event) => event.target === event.currentTarget && setOpen(false)}>
          <a className="nav-link" href="#experience" onClick={() => setOpen(false)}>关于</a>
          <a className="nav-link" href="#projects" onClick={() => setOpen(false)}>项目</a>
          <a className="nav-link" href="#strengths" onClick={() => setOpen(false)}>能力</a>
          <a className="nav-link" href="#contact" onClick={() => setOpen(false)}>联系</a>
        </div>
        <a className="mark" href="#" aria-label="Home">
          <svg viewBox="0 0 52 52" fill="none" aria-hidden="true"><g fill="#fff" stroke="#fff" strokeWidth=".9" strokeLinejoin="round">{starPaths.map((path) => <path d={path} key={path} />)}</g></svg>
        </a>
        <button className="gateway-burger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </nav>
  );
}

function Hero() {
  useEffect(() => {
    const cta = document.querySelector('.cta');
    const finish = () => {
      document.documentElement.classList.remove('ent');
      if (cta) {
        const display = cta.style.display;
        cta.style.display = 'none';
        void cta.offsetHeight;
        cta.style.display = display;
      }
    };
    cta?.addEventListener('animationend', (event) => event.animationName === 'entPanel' && finish(), { once: true });
    const timer = window.setTimeout(finish, 2600);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <section className="hero gateway-stage" id="hero">
      <div className="gateway-scene" aria-hidden="true"><video autoPlay muted loop playsInline poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/dd434947-66e8-4157-9a51-e69b6fab4913.webp"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124917_8316313b-031e-44c7-90fa-d660944081e1.mp4" type="video/mp4" /></video></div>
      <div className="gateway-veil" aria-hidden="true" />
      <Header />
      <div className="gateway-stack">
        <h1 className="portfolio-title"><span className="l1"><span>Brand<span className="title-dot">·</span>Planning</span></span></h1>
        <p className="gateway-sub">Step through and&nbsp; host real-time, multilingual conversations - no extra <br className="brk" />Apps or plugins needed</p>
        <a className="cta" href="#contact"><span>contact sales</span><i className="tl" /><i className="tr" /><i className="bl" /><i className="br" /></a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section about-section" id="experience">
      <span className="anchor-target" id="solutions" aria-hidden="true" />
      <div className="section-index" data-reveal><span>01</span><p>PERSONAL PROFILE</p></div>
      <div className="about-intro" data-reveal>
        <div className="portrait-shell"><img src="./assets/profile-wide-optimized.jpg" alt="关维聪户外人物照" decoding="async" /><span>AVAILABLE FOR PROJECTS</span></div>
        <div className="profile-copy">
          <p className="eyebrow">ABOUT ME</p>
          <h2>让设计清晰地表达，<br />也切实地抵达。</h2>
          <p className="profile-lead">我是关维聪，一名专注于品牌视觉与商业传播的设计师。擅长把策略转译为可识别、可延展、可落地的视觉系统。</p>
          <div className="contact-list"><a href="tel:13189288776"><Phone size={17} />13189288776</a><a href="mailto:979114406@qq.com"><Mail size={17} />979114406@qq.com</a><span><MapPin size={17} />广东中山</span></div>
        </div>
      </div>
      <div className="profile-details" data-reveal>
        {profileDetails.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.value}</h3><p>{item.note}</p></article>)}
        <article className="software-panel">
          <span>专业工具</span>
          <div className="software-grid">{designTools.map((tool) => <div className={`software-item ${tool.tone}`} key={tool.name}><i>{tool.icon ? <img src={tool.icon} alt="" /> : tool.short}</i><b>{tool.name}</b></div>)}</div>
        </article>
      </div>
      <div className="stats-grid" data-reveal>{stats.map((item) => <div className="stat-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      <div className="resume-heading" data-reveal><span>EXPERIENCE</span><h2>工作经历</h2></div>
      <div className="experience-list">
        {experience.map((item, index) => <article className="experience-row" key={item.company} data-reveal><span className="experience-number">0{index + 1}</span><div><p>{item.period}</p><h3>{item.company}</h3></div><div><p className="experience-role">{item.role}</p><p>{item.description}</p></div></article>)}
      </div>
      <div className="resume-heading" data-reveal><span>SELECTED CASES</span><h2>项目经验</h2></div>
      <div className="case-grid">
        {caseStudies.map((item) => <article className="case-card" key={item.code} data-reveal><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p><strong>{item.metric}</strong><small>{item.label}</small><p className="case-detail">{item.detail}</p></article>)}
      </div>
    </section>
  );
}

function LazyProjectVideo({ src, label }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { rootMargin: '300px 0px', threshold: 0.05 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={shouldLoad ? src : undefined} autoPlay={shouldLoad} muted loop playsInline preload="none" aria-label={label} />;
}

function Projects() {
  const [filter, setFilter] = useState('全部');
  const [activeGallery, setActiveGallery] = useState(null);
  const filters = ['全部', ...new Set(projects.map((project) => project.type))];
  const visible = filter === '全部' ? projects : projects.filter((project) => project.type === filter);

  useEffect(() => {
    if (!activeGallery) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setActiveGallery(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeGallery]);

  return (
    <section className="section projects-section" id="projects">
      <span className="anchor-target" id="product" aria-hidden="true" />
      <div className="section-index" data-reveal><span>02</span><p>SELECTED WORKS</p></div>
      <div className="projects-heading" data-reveal><h2>精选作品</h2><p>从品牌、数字页面到线下物料，把每一种媒介都当作品牌体验的一部分。</p></div>
      <div className="project-filters" data-reveal>{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className={`project-card project-card-${index % 5 + 1} is-visible ${project.gallery ? 'has-gallery' : ''} ${project.video ? '' : 'color-thumbnail-card'} tone-${project.index}`} key={project.title} data-reveal>
            {project.video ? <LazyProjectVideo src={project.video} label={`${project.title}作品预览`} /> : <img src={project.image} alt={`${project.title}作品预览`} loading="lazy" decoding="async" />}
            <div className="project-overlay"><div><span>{project.index} / {project.type}</span><h3>{project.title}</h3><p>{project.result}</p></div><span className="project-arrow"><ArrowUpRight size={24} /></span></div>
            {project.gallery && <button className="project-open" type="button" aria-label={`打开${project.title}作品详情`} onClick={() => setActiveGallery(project)} />}
          </article>
        ))}
      </div>
      {activeGallery && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="work-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActiveGallery(null)}>
          <div className="video-modal-panel">
            <div className="video-modal-header">
              <div><span>{activeGallery.galleryType === 'image' ? 'POSTER COLLECTION' : activeGallery.galleryType === 'image-wide' ? '3D RENDER WORKS' : 'VIDEO WORKS'}</span><h3 id="work-modal-title">{activeGallery.title}</h3></div>
              <button type="button" aria-label="关闭作品详情" onClick={() => setActiveGallery(null)}><X size={24} /></button>
            </div>
            <div className={`video-gallery ${activeGallery.galleryType === 'image' ? 'poster-gallery' : activeGallery.galleryType === 'image-wide' ? 'render-gallery' : ''}`}>
              {activeGallery.gallery.map((item) => (
                <article key={item.src}>
                  {activeGallery.galleryType?.startsWith('image') ? <img src={item.src} alt={item.title} loading="lazy" decoding="async" /> : <video src={item.src} controls playsInline preload="none" />}
                  <h4>{item.title}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <span className="anchor-target" id="pricing" aria-hidden="true" />
      <div className="section-index" data-reveal><span>03</span><p>CORE CAPABILITIES</p></div>
      <div className="strengths-layout">
        <div className="strengths-title" data-reveal><p className="eyebrow">WHAT I DO</p><h2>策略、视觉与落地，保持在同一条线上。</h2></div>
        <div className="strength-list">{strengths.map(({ icon: Icon, code, title, text }) => <article className="strength-row" key={title} data-reveal><span>{code}</span><div className="strength-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} /></article>)}</div>
      </div>
      <div className="skill-marquee" aria-label="专业技能"><div>PHOTOSHOP · ILLUSTRATOR · KEYSHOT · BRAND IDENTITY · WEB DESIGN · PACKAGING · VIDEO EDITING ·&nbsp;</div><div aria-hidden="true">PHOTOSHOP · ILLUSTRATOR · KEYSHOT · BRAND IDENTITY · WEB DESIGN · PACKAGING · VIDEO EDITING ·&nbsp;</div></div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <span className="anchor-target" id="recourses" aria-hidden="true" />
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-inner" data-reveal><p className="eyebrow">START A PROJECT</p><h2>有好的想法？<br /><span>一起把它做出来。</span></h2><a className="contact-mail" href="mailto:979114406@qq.com">979114406@qq.com <ArrowUpRight size={34} /></a><div className="contact-foot"><span><BriefcaseBusiness size={16} />BRAND CAMPAIGN</span><span><Target size={16} />VISUAL EXECUTION</span><span><Clapperboard size={16} />SHORT VIDEO</span><span><Wand2 size={16} />DIGITAL DESIGN</span></div></div>
      <footer><span>© 2026 GUAN WEICONG</span><a href="#hero">BACK TO TOP ↑</a></footer>
    </section>
  );
}

function App() { useReveal(); return <><Hero /><main><Experience /><Projects /><Strengths /><Contact /></main></>; }

createRoot(document.getElementById('root')).render(<App />);
