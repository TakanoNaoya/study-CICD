import './App.css'
import logo from './assets/sci-logo.svg'

function App() {
  return (
    <div className="hero">
      <nav className="nav">
        <div className="brand">
          <a href="https://www.sci-it.co.jp/" target="_blank" rel="noopener noreferrer" className="brand-link">
            <img src={logo} alt="SCI" className="brand-logo" />
            <span className="sr-only">株式会社 エス・シー・アイ</span>
          </a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-ghost" href="https://www.sci-it.co.jp/" target="_blank" rel="noopener noreferrer">会社サイト</a>
        </div>
      </nav>

      <header className="hero-content">
        <h1 className="title">お客様の期待を超えるシステムソリューションを</h1>
        <p className="subtitle">これまでの経験・実績と最新のIT技術を融合し、お客様のビジネス上の課題に対し、ご満足いただける高品質のサービスをお届けします。</p>
        <div className="cta">
          <a className="btn btn-primary" href="https://www.sci-it.co.jp/" target="_blank" rel="noopener noreferrer">会社ホームページを見る</a>
          <a className="btn btn-secondary" href="https://www.sci-it.co.jp/contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a>
        </div>
      </header>

      <div className="hero-decoration" aria-hidden="true">
        <span className="circle c1"></span>
        <span className="circle c2"></span>
        <span className="circle c3"></span>
      </div>
    </div>
  )
}

export default App
