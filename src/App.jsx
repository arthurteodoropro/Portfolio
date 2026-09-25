import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import foto1 from './assets/Foto1.jpeg'
import foto2 from './assets/Foto2.jpeg'

const projects = [
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
    title: 'UFV em dados',
    type: 'Python · Análise estatística',
    year: '2025',
    category: 'Dados',
    description: 'Análise visual e estatística do conjunto de dados de ingressantes da UFV.',
    color: 'green',
    visual: 'data',
    url: 'https://github.com/arthurteodoropro/Analysis-of-incoming-UFV-students',
  },
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
    title: 'SPSafe',
    type: 'Java · Spring Boot · MySQL',
    year: '2025',
    category: 'Web',
    description: 'Solução de software aplicada à segurança e organização de informações.',
    color: 'red',
    visual: 'spsafe',
    url: 'https://github.com/arthurteodoropro/SPSafe',
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
]

const heroPhrases = ["I'm Arthur Teodoro", "I'm a Developer", "I'm dreamer."]

function HeroRotator() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState(heroPhrases[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = heroPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 45 : 85

    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayText.length + 1)
        setDisplayText(nextText)

        if (nextText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1100)
        }
      } else {
        const nextText = currentPhrase.slice(0, displayText.length - 1)
        setDisplayText(nextText)

        if (nextText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((currentIndex) => (currentIndex + 1) % heroPhrases.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [displayText, isDeleting, phraseIndex])

  useEffect(() => {
    const currentPhrase = heroPhrases[phraseIndex]
    if (!isDeleting && displayText === currentPhrase) {
      return undefined
    }
    if (isDeleting && displayText.length === 0) {
      return undefined
    }
    return undefined
  }, [displayText, isDeleting, phraseIndex])

  useEffect(() => {
    setDisplayText(heroPhrases[phraseIndex].slice(0, 1))
  }, [phraseIndex])

  return <span className="hero-rotator"><span className="hero-word">{displayText}</span><span className="typing-cursor" aria-hidden="true">|</span></span>
}

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
  const [menuOpen, setMenuOpen] = useState(false)
  const carouselRef = useRef(null)

  const moveCarousel = (direction) => {
    carouselRef.current?.scrollBy({ left: direction * carouselRef.current.clientWidth, behavior: 'smooth' })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <svg className="social-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>
      <header className="site-header">
        <a className="logo" href="#top" onClick={closeMenu}>AT<span>.</span></a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#trabalho" onClick={closeMenu}>Trabalho</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <h1>
              <em className="hello-world">HELLO WORLD</em>
              <br />
              <span className="hero-name"><HeroRotator /></span>
            </h1>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-gallery" aria-label="Fotos de Arthur">
            <div className="polaroid polaroid-main">
              <img src={foto1} alt="Arthur quando criança" />
            </div>
            <div className="polaroid polaroid-secondary">
              <img src={foto2} alt="Retrato atual de Arthur" />
            </div>
            <span className="gallery-mark mark-plus" aria-hidden="true">+</span>
            <span className="gallery-mark mark-star" aria-hidden="true">✳</span>
            <span className="gallery-mark mark-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="about-text">
            <h2><em>Olá!</em></h2>
            <p>Meu nome é Arthur Teodoro e sou estudante de Ciência da Computação, trabalho com desenvolvimento de software, inteligência artificial, análise de dados e tecnologia aplicada à resolução de problemas. Ao longo da minha formação, venho desenvolvendo projetos utilizando linguagens como C, Java, JavaScript e TypeScript, além de tecnologias como React, Spring Boot, MySQL e Python. Tenho experiência acadêmica e prática com desenvolvimento web, estruturas e análise de dados, arquitetura de computadores e fundamentos da computação, buscando sempre transformar conhecimentos teóricos em soluções funcionais. Gosto de soluções criativas, design e cibersegurança.</p>
            <div className="social-links" aria-label="Redes sociais">
              <a className="social-button social-github" href="https://github.com/arthurteodoropro" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12 24 5.373 18.627 0 12 0Z" /></svg>
              </a>
              <a className="social-button social-linkedin" href="https://www.linkedin.com/in/arthurteodorob/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /></svg>
              </a>
            </div>
          </div>
        </section>

        <section className="work-section" id="trabalho">
          <div className="section-heading">
            <div><p className="section-kicker">Código em público</p><h2>Projetos selecionados<span>.</span></h2></div>
            <div className="carousel-controls" aria-label="Navegar pelos projetos">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Projetos anteriores"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Próximos projetos"><ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="project-carousel" ref={carouselRef}>
            {projects.map((project) => (
              <article
                className={`project-carousel-card ${project.color}`}
                key={project.title}
                role="link"
                tabIndex="0"
                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') window.open(project.url, '_blank', 'noopener,noreferrer')
                }}
              >
                <div className="terminal-tools" aria-hidden="true">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <div className="terminal-content">
                  <span className="terminal-path">~/projects/{project.title.toLowerCase()}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-type">{project.type}</span>
                  <span className="project-open-icon" aria-hidden="true"><ArrowUpRight size={16} /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato">
          <h2>Vamos construir<br /><em>juntos.</em></h2><a className="contact-email" href="https://github.com/arthurteodoropro" target="_blank" rel="noreferrer">github.com/arthurteodoropro <ArrowUpRight size={24} /></a>
        </section>
      </main>
    </div>
  )
}

export default App
