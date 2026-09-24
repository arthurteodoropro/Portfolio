import { useState } from 'react'
import { ArrowUpRight, GitBranch, Menu, X } from 'lucide-react'

const projects = [
  {
    title: 'PhyzicsGame',
    type: 'React + Vite · JavaScript',
    year: '2025',
    category: 'Web',
    description: 'Jogo de simulação física em que código e movimento se encontram na tela.',
    color: 'peach',
    visual: 'physics',
    url: 'https://github.com/arthurteodoropro/PhyzicsGame',
  },
  {
    title: 'Bytecraft',
    type: 'TypeScript · Java · Educação',
    year: '2025',
    category: 'Educação',
    description: 'Jogo infantil que ensina os fundamentos de uma linguagem assembly simplificada.',
    color: 'blue',
    visual: 'bytecraft',
    url: 'https://github.com/arthurteodoropro/Bytecraft',
  },
  {
    title: 'HateBERT',
    type: 'Python · Jupyter · Redes neurais',
    year: '2025',
    category: 'IA',
    description: 'Atualização de um modelo HateBERT desenvolvida para a disciplina de Redes Neurais.',
    color: 'yellow',
    visual: 'bert',
    url: 'https://github.com/arthurteodoropro/HateBERT-atualization',
  },
  {
    title: 'UFV em dados',
    type: 'Python · Análise estatística',
    year: '2025',
    category: 'Dados',
    description: 'Análise visual e estatística do conjunto de dados de ingressantes da UFV.',
    color: 'green',
    visual: 'data',
    url: 'https://github.com/arthurteodoropro/Analysis-of-incoming-UFV-students',
  },
]

const filters = ['Todos', 'Web', 'IA', 'Dados', 'Educação']

function ProjectVisual({ project }) {
  if (project.visual === 'physics') {
    return (
      <div className="visual-physics" aria-hidden="true">
        <span className="physics-equation">F = m · a</span><span className="physics-ball" /><span className="physics-line" /><span className="physics-label">simular / observar</span>
      </div>
    )
  }
  if (project.visual === 'bytecraft') {
    return <div className="visual-bytecraft" aria-hidden="true"><span className="byte-title">BYTE<br /><em>CRAFT</em></span><div className="byte-grid">{Array.from({ length: 16 }, (_, index) => <i key={index} />)}</div><span className="byte-cursor">_</span></div>
  }
  if (project.visual === 'bert') {
    return <div className="visual-bert" aria-hidden="true"><span className="bert-tag">MODEL / 01</span><span className="bert-word">HATE<br /><em>BERT</em></span><div className="bert-node node-one" /><div className="bert-node node-two" /><div className="bert-node node-three" /></div>
  }
  return <div className="visual-data" aria-hidden="true"><span className="data-label">UFV / 2025</span><div className="data-bars"><i /><i /><i /><i /><i /></div><span className="data-caption">dados contam<br />histórias</span></div>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleProjects = activeFilter === 'Todos' ? projects : projects.filter((project) => project.category === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="logo" href="#top" onClick={closeMenu}>AT<span>.</span></a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#trabalho" onClick={closeMenu}>Trabalho</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <a className="header-cta" href="https://github.com/arthurteodoropro" target="_blank" rel="noreferrer">GitHub <GitBranch size={15} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <h1><em className="hello-world">HELLO WORLD</em><br /><span className="hero-name">I´m Arthur Teodoro</span></h1>
            <a className="primary-button" href="#trabalho">Ver projetos <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-art" aria-label="Composição abstrata em amarelo e coral">
            <div className="art-sun" />
            <div className="art-disc" />
            <div className="art-caption">01 / 04</div>
            <div className="art-vertical">CURIOSIDADE É MÉTODO</div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Números do estúdio">
          <p>Ferramentas que uso para construir <span>↘</span></p>
          <div className="proof-item"><strong>JS</strong><span>interfaces e jogos</span></div>
          <div className="proof-item"><strong>TS</strong><span>projetos web</span></div>
          <div className="proof-item"><strong>PY</strong><span>dados e inteligência</span></div>
        </section>

        <section className="work-section" id="trabalho">
          <div className="section-heading">
            <div><p className="section-kicker">Código em público</p><h2>Projetos selecionados<span>.</span></h2></div>
            <div className="filter-list" role="tablist" aria-label="Filtrar projetos">
              {filters.map((filter) => <button className={activeFilter === filter ? 'active' : ''} type="button" key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className={`project-card ${project.color}`} key={project.title}>
                <a className="project-visual" href={project.url} target="_blank" rel="noreferrer"><ProjectVisual project={project} /><span className="project-arrow"><ArrowUpRight size={18} /></span></a>
                <div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span className="project-year">{project.year}</span></div>
                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-sticker">feito com<br /><strong>curiosidade</strong> <span>✳</span></div>
          <div className="about-text"><p className="section-kicker">Por trás do código</p><h2>Olá, eu sou<br /><em>Arthur.</em></h2><p>Sou estudante e desenvolvedor interessado em criar coisas que ensinam, explicam e funcionam. Transito entre interfaces, simulações, análise de dados e inteligência artificial.</p><a className="text-link" href="https://github.com/arthurteodoropro" target="_blank" rel="noreferrer">Ver perfil no GitHub <GitBranch size={16} /></a></div>
          <div className="about-note"><span>Stack atual</span><p>JavaScript · TypeScript · Python · Java · React · Vite · Jupyter</p><div className="available"><i /> Aberto a aprender e construir</div></div>
        </section>

        <section className="contact-section" id="contato">
          <p className="section-kicker">Quer acompanhar?</p><h2>Vamos construir<br /><em>juntos.</em></h2><a className="contact-email" href="https://github.com/arthurteodoropro" target="_blank" rel="noreferrer">github.com/arthurteodoropro <ArrowUpRight size={24} /></a>
          <div className="contact-foot"><span>AT © 2025</span><span>Feito com curiosidade e bastante código.</span><a href="#top">Voltar ao topo ↑</a></div>
        </section>
      </main>
    </div>
  )
}

export default App
