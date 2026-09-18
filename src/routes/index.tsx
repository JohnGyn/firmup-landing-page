import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ChevronDown,
  CreditCard,
  Droplets,
  Eye,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import bottlePhoto from "@/assets/firmup-bottle.png";
import resultOne from "@/assets/firmup-11.png.asset.json";
import resultTwo from "@/assets/firmup-12.png.asset.json";
import ingredients from "@/assets/firmup-13.png.asset.json";
import product from "@/assets/firmup-14.png.asset.json";
import howTo from "@/assets/firmup-15.png.asset.json";
import clinical from "@/assets/firmup-16.png.asset.json";
import women from "@/assets/firmup-19.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIRMup | Sérum Lifting Instantâneo" },
      {
        name: "description",
        content:
          "Conheça FIRMup, o sérum lifting instantâneo para uma aparência mais firme e linhas visivelmente suavizadas.",
      },
      { property: "og:title", content: "FIRMup | Pele mais firme em minutos" },
      {
        property: "og:description",
        content:
          "Escolha seu tratamento FIRMup e aproveite as condições especiais de hoje.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FirmupLanding,
});

const offers = [
  {
    bottles: "1 frasco",
    treatment: "Tratamento de 1 mês",
    price: "147",
    link: "https://payfast.greenn.com.br/redirect/243668",
  },
  {
    bottles: "3 frascos",
    treatment: "Tratamento de 3 meses",
    price: "247",
    link: "https://payfast.greenn.com.br/redirect/243672",
    note: "Mais escolhido",
  },
  {
    bottles: "5 frascos",
    treatment: "Tratamento de 5 meses",
    price: "347",
    link: "https://payfast.greenn.com.br/redirect/232238",
    note: "Melhor custo-benefício",
    featured: true,
  },
  {
    bottles: "12 frascos",
    treatment: "Tratamento de 1 ano",
    price: "647",
    link: "https://payfast.greenn.com.br/redirect/232239",
    note: "Tratamento completo",
  },
];

const faqs = [
  ["O que é o FIRMup?", "FIRMup é um sérum cosmético de efeito tensor imediato, desenvolvido para suavizar visualmente linhas e deixar a pele com aparência mais firme."],
  ["Em quanto tempo percebo o efeito?", "O produto foi desenvolvido para oferecer efeito cosmético imediato após a secagem. A percepção pode variar de pessoa para pessoa."],
  ["Como devo aplicar?", "Com a pele limpa e completamente seca, agite o frasco e aplique uma pequena quantidade com leves batidinhas. Aguarde de 3 a 5 minutos sem fazer expressões."],
  ["Posso usar maquiagem depois?", "Sim. Aguarde o sérum secar completamente e prefira produtos secos. Bases muito líquidas ou aquosas podem comprometer o efeito tensor."],
  ["Quais são as formas de pagamento?", "Você pode pagar por cartão em até 10x sem juros, Pix ou boleto."],
  ["O frete grátis vale para todo o Brasil?", "A condição promocional de hoje oferece frete grátis para as regiões Sul e Sudeste."],
];

function BuyLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={dark ? "cta cta-dark" : "cta"}
    >
      {children}
      <ArrowRight aria-hidden="true" size={19} />
    </a>
  );
}

function FirmupLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="promo-strip">
        <span>Somente hoje</span>
        <strong><Truck size={17} aria-hidden="true" /> Frete grátis para Sul e Sudeste</strong>
      </div>

      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label="FIRMup, início">FIRM<span>up</span></a>
        <a href="#ofertas" className="nav-buy">Escolher tratamento <ArrowRight size={16} aria-hidden="true" /></a>
      </nav>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} aria-hidden="true" /> Sérum lifting instantâneo</div>
          <h1>Pele mais firme.<br /><em>Linhas mais suaves.</em><br />Em minutos.</h1>
          <p className="hero-lead">Um cuidado inteligente para suavizar visualmente linhas na testa e ao redor dos olhos — sem agulhas e sem interromper a sua rotina.</p>
          <div className="hero-points">
            <span><Check size={17} /> Efeito tensor imediato</span>
            <span><Check size={17} /> Aplicação simples</span>
            <span><Check size={17} /> Para todos os tons de pele</span>
          </div>
          <BuyLink href="#ofertas">Quero escolher meu tratamento</BuyLink>
          <p className="microcopy"><ShieldCheck size={15} /> Compra processada em ambiente seguro</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={product.url} alt="Frasco do sérum lifting instantâneo FIRMup" fetchPriority="high" />
          </div>
          <div className="hero-stamp"><span>15 ml</span><strong>Cuidado<br />preciso</strong></div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Diferenciais">
        <div><PackageCheck /><span><strong>Envio cuidadoso</strong> para sua região</span></div>
        <div><CreditCard /><span><strong>Até 10x sem juros</strong> no cartão</span></div>
        <div><BadgeCheck /><span><strong>Checkout seguro</strong> pela Greenn</span></div>
      </section>

      <section className="benefit-section">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div><p className="kicker">Precisão onde importa</p><h2>O seu filtro da vida real.</h2></div>
        </div>
        <div className="benefit-grid">
          <div className="benefit-image"><img src={women.url} alt="Duas mulheres segurando o sérum FIRMup" loading="lazy" /></div>
          <div className="benefit-copy">
            <p className="large-copy">Um acabamento mais descansado para os momentos em que você quer que a pele acompanhe como se sente por dentro.</p>
            <div className="benefit-list">
              <article><Eye /><div><h3>Olhar visivelmente suavizado</h3><p>Ajuda a reduzir a aparência de bolsas e linhas finas na região dos olhos.</p></div></article>
              <article><Sparkles /><div><h3>Aparência mais firme</h3><p>Forma um filme cosmético tensor que age após a secagem.</p></div></article>
              <article><Droplets /><div><h3>Pequena quantidade</h3><p>Uma aplicação pontual é suficiente para incluir o produto na rotina.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="formula-section">
        <div className="formula-copy">
          <span className="section-number light">02</span>
          <p className="kicker light-text">Tecnologia cosmética</p>
          <h2>Dois ativos.<br />Um efeito que você vê.</h2>
          <div className="formula-items">
            <div><strong>01</strong><h3>Acetil Hexapeptídeo</h3><p>Auxilia na suavização visual de linhas na testa e na área dos olhos.</p></div>
            <div><strong>02</strong><h3>Tecnologia Biotensor-P</h3><p>Promove um efeito tensor cosmético logo após a aplicação e secagem.</p></div>
          </div>
        </div>
        <div className="formula-image"><img src={ingredients.url} alt="FIRMup com destaque para seus principais ativos" loading="lazy" /></div>
      </section>

      <section className="results-section">
        <div className="section-heading centered">
          <div><p className="kicker">Resultados apresentados pela marca</p><h2>Veja o efeito em ação.</h2><p>Registros de percepção e aparência após uma única aplicação.</p></div>
        </div>
        <div className="results-grid">
          <figure><img src={resultTwo.url} alt="Comparação visual da região dos olhos antes e após três minutos" loading="lazy" /><figcaption>Percepção de efeito lifting imediato</figcaption></figure>
          <figure><img src={resultOne.url} alt="Comparação visual de linhas ao redor dos olhos" loading="lazy" /><figcaption>Aparência de linhas mais suaves</figcaption></figure>
          <figure><img src={clinical.url} alt="Informações de resultados apresentadas pela marca FIRMup" loading="lazy" /><figcaption>Dados informados no material da marca</figcaption></figure>
        </div>
        <p className="results-note">*Imagens e percentuais fornecidos pela marca. Resultados individuais podem variar conforme pele, quantidade aplicada e modo de uso.</p>
      </section>

      <section className="how-section">
        <div className="how-image"><img src={howTo.url} alt="Instruções completas de aplicação do sérum FIRMup" loading="lazy" /></div>
        <div className="how-copy">
          <span className="section-number">03</span>
          <p className="kicker">Ritual FIRMup</p>
          <h2>3 passos.<br />3 a 5 minutos.</h2>
          <ol>
            <li><span>1</span><div><strong>Prepare</strong><p>Limpe o rosto e deixe a região completamente seca.</p></div></li>
            <li><span>2</span><div><strong>Aplique</strong><p>Agite e dê leves batidinhas com uma pequena quantidade.</p></div></li>
            <li><span>3</span><div><strong>Aguarde</strong><p>Fique sem fazer expressões até a secagem completa.</p></div></li>
          </ol>
        </div>
      </section>

      <section id="ofertas" className="offers-section">
        <div className="offers-header">
          <p className="kicker light-text">Escolha o seu tratamento</p>
          <h2>Quanto mais completo,<br />melhor o valor por mês.</h2>
          <div className="shipping-pill"><Truck size={18} /> Hoje: frete grátis para Sul e Sudeste</div>
        </div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className={`offer-card${offer.featured ? " featured" : ""}`} key={offer.bottles}>
              {offer.note && <div className="offer-tag">{offer.note}</div>}
              <p className="offer-treatment">{offer.treatment}</p>
              <h3>{offer.bottles}</h3>
              <div className="bottle-motif" aria-hidden="true">
                {Array.from({ length: Math.min(Number.parseInt(offer.bottles), 5) }, (_, index) => <span key={index} />)}
                {offer.bottles.startsWith("12") && <b>+7</b>}
              </div>
              <p className="price-prefix">à vista por</p>
              <div className="price"><sup>R$</sup><strong>{offer.price}</strong><span>,00</span></div>
              <p className="installment">ou no cartão em até 12x</p>
              <BuyLink href={offer.link} dark={offer.featured ?? false}>Comprar agora</BuyLink>
            </article>
          ))}
        </div>
        <div className="payment-row">
          <span><CreditCard /> Cartão em 10x sem juros</span>
          <span><Banknote /> Pix</span>
          <span><Banknote /> Boleto</span>
        </div>
      </section>

      <section className="testimonial-placeholder">
        <div>
          <p className="kicker">Histórias reais em breve</p>
          <h2>Este espaço será das clientes FIRMup.</h2>
        </div>
        <p>Novos depoimentos e experiências verificadas serão adicionados aqui. Sem nomes inventados, sem avaliações genéricas.</p>
      </section>

      <section className="faq-section">
        <div className="faq-heading"><p className="kicker">Dúvidas frequentes</p><h2>Antes de escolher o seu.</h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <a href="#inicio" className="brand footer-brand">FIRM<span>up</span></a>
        <p>Sérum lifting instantâneo · 15 ml</p>
        <p className="legal">Produto cosmético. Não substitui procedimentos ou tratamentos médicos. Os efeitos percebidos podem variar de pessoa para pessoa.</p>
      </footer>

      <a href="#ofertas" className="mobile-sticky">Ver tratamentos <ArrowRight size={18} /></a>
    </main>
  );
}