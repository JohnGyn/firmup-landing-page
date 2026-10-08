import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Droplets,
  Eye,
  Feather,
  FlaskConical,
  Leaf,
  LockKeyhole,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5519978042382?text=${encodeURIComponent(
  "Olá gostaria de saber mais sobre *FirmUP Lifiting Instantâneo*, vi sua LADINGPAGE a AMEI o produto!",
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIRMup | Lifting cosmético visível em 90 segundos" },
      {
        name: "description",
        content:
          "FIRMup Lift Instantâneo: biotecnologia K-Beauty com efeito tensor matte, ativos nanoencapsulados e garantia de 7 dias.",
      },
      {
        property: "og:title",
        content: "FIRMup | O efeito lifting que você vê em 90 segundos",
      },
      {
        property: "og:description",
        content:
          "Pele visivelmente mais firme, lisa e descansada — sem agulhas, sem paralisar a expressão e sem craquelar.",
      },
      { property: "og:url", content: "https://skincaredeimpacto.com.br/" },
      {
        property: "og:image",
        content: "https://skincaredeimpacto.com.br/images/results/mao-com-frasco.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1254" },
      { property: "og:image:height", content: "1254" },
      { property: "og:image:alt", content: "Mão segurando o sérum FIRMup Lift Instantâneo" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://skincaredeimpacto.com.br/images/results/mao-com-frasco.png",
      },
    ],
  }),
  component: FirmupLanding,
});

const checkoutLinks = {
  one: "https://ev.braip.com/checkout/plapzjkw/che4z80d?currency=BRL",
  three: "https://ev.braip.com/checkout/plamnjkj/che4z80d?currency=BRL",
  five: "https://ev.braip.com/checkout/pla98vo2/che4z80d?currency=BRL",
  twelve: "https://ev.braip.com/checkout/pla89lom/che4z80d?currency=BRL",
};

const timeline = [
  {
    time: "0 a 30 segundos",
    shortTime: "00—30s",
    title: "Aplicou: hidratação de alta permeação",
    description:
      "O NV Hyaluronic Acid 5%, em partículas nanoencapsuladas, começa a distribuir hidratação de alta permeação. A pele ganha aparência mais preenchida, macia e uniforme, especialmente nas regiões em que as linhas finas ficam mais aparentes.",
    icon: Droplets,
  },
  {
    time: "30 a 60 segundos",
    shortTime: "30—60s",
    title: "Relaxou: menos microtensão, expressão natural",
    description:
      "O NV Age Freeze 2%, obtido do fruto da Pimenta Sichuan e rico em α-hidroxi-sanshool, atua nas junções neuromusculares para suavizar a microtensão associada às linhas de expressão. Ele não paralisa o músculo: a expressão permanece natural, apenas com aparência mais descansada.",
    icon: Leaf,
  },
  {
    time: "A partir de 90 segundos",
    shortTime: "60—90s",
    title: "Firmou: efeito tensor matte",
    description:
      "Zeolita e Caulim formam uma película cosmética fina e uniforme. Conforme ela se acomoda, a pele ganha efeito tensor matte, e linhas, bolsas e áreas de flacidez ficam visivelmente suavizadas.",
    icon: Sparkles,
  },
];

const actives = [
  {
    concentration: "5%",
    name: "NV Hyaluronic Acid",
    subtitle: "Ácido Hialurônico Nanoencapsulado",
    description:
      "A nanoencapsulação favorece alta permeação e distribuição do ativo, levando hidratação profunda às camadas da pele. Isso ajuda a devolver maciez, viço e aparência preenchida às linhas finas.",
    benefits: [
      "Hidratação profunda e prolongada",
      "Aparência imediatamente mais preenchida",
      "Linhas finas visualmente suavizadas",
      "Mais conforto e flexibilidade durante o efeito tensor",
    ],
  },
  {
    concentration: "2%",
    name: "NV Age Freeze",
    subtitle: "Pimenta Sichuan + α-hidroxi-sanshool",
    description:
      "Extraído do fruto de Zanthoxylum bungeanum, atua nas junções neuromusculares e ajuda a relaxar suavemente as microtensões faciais ligadas às linhas de expressão — sem paralisar os músculos e sem apagar sua naturalidade.",
    benefits: [
      "Suavização da aparência de rugas de expressão",
      "Ação direcionada em testa, pés de galinha e bigode chinês",
      "Expressão mais leve e descansada",
      "Melhora cumulativa da textura e firmeza com uso contínuo",
    ],
  },
  {
    concentration: "90s",
    name: "Zeolita + Caulim",
    subtitle: "Argilominerais nobres de efeito tensor matte",
    description:
      "A Zeolita forma a trama cosmética que proporciona firmeza imediata e ajuda a evitar o craquelamento. O Caulim complementa a fórmula com acabamento matte e ação antioxidante natural.",
    benefits: [
      "Efeito tensor visível a partir de 90 segundos",
      "Acabamento matte natural",
      "Sem esfarelar ou deixar resíduos esbranquiçados",
      "Aparência mais lisa e uniforme por 6 a 8 horas",
    ],
  },
];

const clinicalMetrics = [
  ["90", "SEGUNDOS", "Início comprovado da ação cosmética imediata do Efeito Cinderela."],
  ["100%", "DE APROVAÇÃO", "33 voluntárias avaliaram o efeito imediato aos 90 segundos."],
  ["34", "VOLUNTÁRIAS", "Peles sensíveis avaliadas com 0% de reações durante o estudo."],
  ["32", "VOLUNTÁRIAS", "Teste oftalmológico com 0% de irritação ocular."],
  ["60", "VOLUNTÁRIAS", "Patch test confirmou o perfil hipoalergênico da fórmula."],
  ["0%", "FOTOSSENSIBILIZAÇÃO", "30 voluntárias avaliadas sem reação fototóxica."],
];

const testimonials = [
  {
    name: "Ricardo S.",
    focus: "Bolsas e olheiras",
    quote: "Minhas olheiras sumiram. Parece que dormi 10 horas!",
    image: "/images/testimonials/before-after-1.jpg",
  },
  {
    name: "Ana L.",
    focus: "Pés de galinha e linhas finas",
    quote: "Vi minhas rugas sumirem na frente do espelho. É surreal!",
    image: "/images/testimonials/before-after-2.jpg",
  },
  {
    name: "Marta C.",
    focus: "Flacidez facial e linhas da testa",
    quote: "Flacidez sumiu, e minha autoestima voltou. Obrigada, FIRMUP!",
    image: "/images/testimonials/before-after-3.jpg",
  },
  {
    name: "Débora M.",
    focus: "Efeito tensor natural sem agulhas",
    quote: "Minhas amigas acharam que eu fiz botox. Só usei o creme.",
    image: "/images/testimonials/before-after-5.jpg",
  },
  {
    name: "Paula R.",
    focus: "Rapidez e praticidade",
    quote: "Nunca pensei que um produto daria esse efeito em 2 minutos. Amei!",
    image: "/images/testimonials/before-after-6.jpg",
  },
];

const offers = [
  {
    id: "one",
    title: "Experimente",
    bottles: 1,
    image: "/images/offers/kit-1.png",
    duration: "RITUAL DE 1 MÊS",
    description: "Para conhecer o efeito lifting imediato e começar seu cuidado diário.",
    price: "157",
    benefits: [
      "1 frasco de FIRMup — 15 ml",
      "Uso diário por aproximadamente 1 mês",
      "Garantia Blindada de 7 Dias",
      "Envio prioritário Mercado Livre Full",
    ],
    cta: "QUERO EXPERIMENTAR 1 FRASCO",
    link: checkoutLinks.one,
  },
  {
    id: "three",
    title: "Campeão de Vendas",
    bottles: 3,
    image: "/images/offers/kit-3.png",
    duration: "TRATAMENTO RECOMENDADO",
    description:
      "A escolha ideal para acompanhar a evolução da textura, hidratação e firmeza por 3 meses.",
    discount: "50% OFF — CONDIÇÃO ESPECIAL",
    badge: "MAIS ESCOLHIDO",
    price: "247",
    benefits: [
      "3 frascos de FIRMup — 15 ml cada",
      "Ritual contínuo por aproximadamente 3 meses",
      "Melhor equilíbrio entre duração e investimento",
      "Garantia Blindada de 7 Dias",
      "Envio prioritário Mercado Livre Full",
    ],
    cta: "QUERO O TRATAMENTO RECOMENDADO",
    link: checkoutLinks.three,
    featured: true,
  },
  {
    id: "five",
    title: "Máxima Economia",
    bottles: 5,
    image: "/images/offers/kit-5.png",
    duration: "TRATAMENTO INTENSIVO",
    description:
      "Para quem deseja manter o ritual diário e garantir FIRMup por aproximadamente 5 meses.",
    discount: "60% OFF — MAIOR ECONOMIA",
    badge: "MELHOR CUSTO-BENEFÍCIO",
    price: "347",
    benefits: [
      "5 frascos de FIRMup — 15 ml cada",
      "Ritual contínuo por aproximadamente 5 meses",
      "Menor investimento por frasco entre os três kits",
      "Garantia Blindada de 7 Dias",
      "Envio prioritário Mercado Livre Full",
    ],
    cta: "QUERO A MÁXIMA ECONOMIA",
    link: checkoutLinks.five,
  },
];

const faqs = [
  [
    "Em quanto tempo FIRMup começa a agir?",
    "A ação cosmética imediata começa a ser percebida a partir de 90 segundos e pode chegar a 3 minutos, conforme a quantidade aplicada, a região e as características da pele. Para favorecer o melhor acabamento, mantenha o rosto relaxado enquanto o produto seca completamente.",
  ],
  [
    "Quanto tempo dura o efeito lifting?",
    "O efeito tensor cosmético dura, em média, de 6 a 8 horas. Oleosidade, suor excessivo, fricção, água e produtos muito líquidos aplicados por cima podem reduzir essa duração.",
  ],
  [
    "Como devo aplicar FIRMup?",
    "Com a pele limpa e completamente seca, agite o frasco. Aplique uma pequena quantidade nas áreas desejadas — como testa, pés de galinha, bolsas, olheiras e bigode chinês — usando leves batidinhas, sem esfregar. Mantenha a expressão relaxada até a secagem completa. Para o cuidado contínuo, use duas vezes ao dia, pela manhã e à noite.",
  ],
  [
    "Posso usar maquiagem por cima?",
    "Sim. Espere FIRMup secar completamente antes de aplicar maquiagem. Dê preferência a produtos secos ou de textura leve e aplique com batidinhas, sem arrastar a pele. Bases muito aquosas, óleos ou fricção excessiva podem reduzir o efeito tensor.",
  ],
  [
    "O produto craquela, esfarela ou deixa a pele branca?",
    "Quando aplicado corretamente e em pequena quantidade, não. A combinação entre Zeolita, Caulim e Ácido Hialurônico Nanoencapsulado foi desenvolvida para formar um filme tensor matte fino e flexível, sem craquelar, esfarelar ou deixar aspecto esbranquiçado. O excesso de produto pode comprometer o acabamento; por isso, menos é mais.",
  ],
  [
    "O uso contínuo traz benefícios além do efeito imediato?",
    "Sim. O efeito tensor é percebido desde a primeira aplicação, enquanto o ritual diário, duas vezes ao dia, oferece cuidado cumulativo. Ao longo de 21 dias, o NV Hyaluronic Acid 5% e o NV Age Freeze 2% ajudam na hidratação profunda, na síntese de colágeno, no relaxamento das microtensões e na melhora progressiva da textura e firmeza da pele.",
  ],
  [
    "É seguro para pele sensível e para a área dos olhos?",
    "FIRMup foi avaliado em 34 voluntárias com pele sensível, sem registro de reações, e em 32 voluntárias no teste oftalmológico, sem irritação ocular nas condições analisadas. Também foi submetido a patch test com 60 voluntárias e classificado como hipoalergênico. Aplique apenas na pele íntegra, respeite o modo de uso e evite contato direto com os olhos.",
  ],
  [
    "FIRMup substitui botox ou outros procedimentos estéticos?",
    "Não. FIRMup é um cosmético tópico e não substitui procedimentos ou tratamentos médicos. O NV Age Freeze 2% atua suavemente nas microtensões faciais sem paralisar os músculos, enquanto os argilominerais proporcionam efeito tensor superficial. É uma alternativa cosmética, não invasiva, para quem deseja aparência mais firme sem agulhas.",
  ],
  [
    "Em quanto tempo recebo meu pedido?",
    "A entrega é grátis para todo o Brasil, com código de rastreamento. O prazo estimado para seu CEP é informado no checkout e pode variar conforme a aprovação do pagamento, a disponibilidade de estoque e as condições logísticas.",
  ],
  [
    "Como funciona a Garantia Blindada de 7 Dias?",
    "Você tem 7 dias completos para testar FIRMup. Se não perceber o efeito lifting a partir de 90 segundos ou não ficar 100% satisfeita com a textura e firmeza da pele, entre em contato com o suporte oficial Le’Kéfir por WhatsApp ou e-mail dentro do prazo. O valor integral será reembolsado sem perguntas, conforme os termos da garantia.",
  ],
];

function SectionHeader({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`lp-section-header${light ? " lp-section-header--light" : ""}`}>
      <p className="lp-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="lp-section-lead">{text}</p>}
    </div>
  );
}

function Cta({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <a
      className={`lp-cta${secondary ? " lp-cta--secondary" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  return (
    <figure className="comparison">
      <div className="comparison-frame">
        <img
          src="/images/slider/clean-before.png"
          alt="Região dos olhos antes da aplicação de FIRMup"
        />
        <div className="comparison-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <img
            src="/images/slider/clean-after.png"
            alt="Região dos olhos depois da aplicação de FIRMup"
          />
        </div>
        <span className="comparison-label comparison-label--before">ANTES</span>
        <span className="comparison-label comparison-label--after">DEPOIS</span>
        <div className="comparison-line" style={{ left: `${position}%` }} aria-hidden="true">
          <span>‹ ›</span>
        </div>
        <input
          aria-label="Arraste para comparar antes e depois"
          className="comparison-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <figcaption>Arraste para revelar o efeito</figcaption>
    </figure>
  );
}

function Timeline90() {
  const [active, setActive] = useState(0);
  const CurrentIcon = timeline[active].icon;

  return (
    <div className="timeline-widget">
      <div className="timeline-tabs" role="tablist" aria-label="Etapas dos primeiros 90 segundos">
        {timeline.map((step, index) => (
          <button
            key={step.shortTime}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>{step.shortTime}</strong>
          </button>
        ))}
      </div>
      <article className="timeline-detail" role="tabpanel">
        <div className="timeline-icon">
          <CurrentIcon aria-hidden="true" />
        </div>
        <div>
          <p>{timeline[active].time}</p>
          <h3>{timeline[active].title}</h3>
          <p>{timeline[active].description}</p>
        </div>
      </article>
    </div>
  );
}

function BottleGroup({ amount, image }: { amount: number; image: string }) {
  return (
    <div className={`offer-product offer-product--${amount}`}>
      <img
        src={image}
        alt={`Kit com ${amount} frasco${amount > 1 ? "s" : ""} de FIRMup`}
        loading="lazy"
      />
    </div>
  );
}

function FirmupLanding() {
  const [kitsVisible, setKitsVisible] = useState(false);

  useEffect(() => {
    const kitsSection = document.getElementById("kits");
    if (!kitsSection) return;

    const observer = new IntersectionObserver(([entry]) => setKitsVisible(entry.isIntersecting), {
      threshold: 0.01,
    });

    observer.observe(kitsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="firmup-page">
      <div className="lp-topbar">
        <Truck size={16} aria-hidden="true" />
        <div>
          <strong>ENTREGA GRÁTIS PARA TODO O BRASIL!</strong>
        </div>
      </div>

      <nav className="lp-nav" aria-label="Navegação principal">
        <a className="lp-logo" href="#inicio" aria-label="FIRMup, início">
          FIRM<span>up</span>
        </a>
        <div className="lp-nav-proof">
          <ShieldCheck size={16} /> Compra segura
        </div>
        <a className="lp-nav-cta" href="#kits">
          ESCOLHER MEU KIT <ArrowRight size={15} />
        </a>
      </nav>

      <section id="inicio" className="lp-hero">
        <div className="lp-hero-copy">
          <p className="lp-eyebrow">BIOTECNOLOGIA K-BEAUTY · LIFTING COSMÉTICO IMEDIATO</p>
          <h1>
            O efeito lifting que você vê em <em>90 segundos</em> — agora com respaldo clínico.
          </h1>
          <p className="lp-hero-lead">
            FIRMup Lift Instantâneo combina ativos nanoencapsulados, Pimenta Sichuan e
            argilominerais nobres para suavizar visivelmente rugas, linhas e flacidez — sem agulhas,
            sem paralisar a expressão e sem craquelar a pele.
          </p>
          <ul className="lp-check-list">
            <li>
              <Check />{" "}
              <span>
                <strong>Ação visível a partir de 90 segundos,</strong> com efeito tensor matte que
                dura de 6 a 8 horas.
              </span>
            </li>
            <li>
              <Check />{" "}
              <span>
                <strong>Suaviza pés de galinha, linhas da testa, bolsas e bigode chinês</strong>{" "}
                desde a primeira aplicação.
              </span>
            </li>
            <li>
              <Check />{" "}
              <span>
                <strong>Testado em peles sensíveis e na região dos olhos,</strong> com 0% de reações
                e irritação ocular nos testes.
              </span>
            </li>
            <li>
              <Check />{" "}
              <span>
                <strong>Tratamento contínuo de firmeza e hidratação,</strong> com Ácido Hialurônico
                Nanoencapsulado 5% e NV Age Freeze 2%.
              </span>
            </li>
          </ul>
          <Cta href="#kits">QUERO VER MINHA PELE MAIS FIRME</Cta>
          <p className="lp-microcopy">
            <LockKeyhole size={14} /> Compra segura · Envio Mercado Livre Full · Garantia Blindada
            de 7 Dias
          </p>
        </div>
        <div className="lp-hero-visual">
          <div className="lp-hero-halo" />
          <img
            src="/images/product/firmup-produto-com-caixa.png"
            alt="Frasco e caixa FIRMup Lift Instantâneo"
            fetchPriority="high"
          />
          <div className="lp-hero-seal">
            <span>EFEITO VISÍVEL</span>
            <strong>90</strong>
            <span>SEGUNDOS</span>
          </div>
          <div className="lp-hero-note">
            <Sparkles size={16} />
            <span>
              <strong>6 a 8 horas</strong> de efeito tensor matte
            </span>
          </div>
        </div>
      </section>

      <div className="lp-proof-strip" aria-label="Selos de confiança">
        {[
          [ShieldCheck, "Dermatologicamente testado"],
          [Eye, "Oftalmologicamente testado"],
          [BadgeCheck, "Hipoalergênico"],
          [Leaf, "Cruelty-Free · Química Verde"],
          [RefreshCcw, "Garantia de 7 dias"],
        ].map(([Icon, label]) => {
          const ProofIcon = Icon as typeof ShieldCheck;
          return (
            <div key={label as string}>
              <ProofIcon />
              <span>{label as string}</span>
            </div>
          );
        })}
      </div>

      <section className="lp-before-after">
        <div className="lp-before-copy">
          <SectionHeader
            eyebrow="UMA APLICAÇÃO. UMA DIFERENÇA VISÍVEL."
            title="90 segundos entre você e uma pele visivelmente mais firme."
            text="Compare a aparência das linhas antes e depois de uma única aplicação."
          />
          <div className="lp-mini-stats">
            <span>
              <strong>90s</strong> início da ação
            </span>
            <span>
              <strong>6—8h</strong> efeito tensor
            </span>
            <span>
              <strong>100%</strong> aprovação*
            </span>
          </div>
          <p className="lp-legal-note">
            *Resultados individuais podem variar conforme as características da pele, a quantidade
            aplicada e o modo de uso.
          </p>
        </div>
        <BeforeAfterSlider />
      </section>

      <section className="lp-mechanism">
        <div className="lp-editorial-intro">
          <SectionHeader
            eyebrow="O EFEITO CINDERELA, EXPLICADO PELA CIÊNCIA COSMÉTICA"
            title="O que acontece na sua pele durante os primeiros 90 segundos?"
            text="FIRMup não tenta esconder as linhas com uma camada pesada. Sua fórmula cria uma ação cosmética coordenada: hidrata, suaviza as microtensões faciais e forma uma trama mineral ultrafina sobre a pele."
          />
          <figure className="lp-editorial-image">
            <img
              src="/images/generated/mulher-com-firmup.jpeg"
              alt="Modelo apresentando o frasco de FIRMup Lift Instantâneo"
              loading="lazy"
            />
            <figcaption>Aplicação precisa · Efeito 90 segundos</figcaption>
          </figure>
        </div>
        <Timeline90 />
        <div className="lp-difference">
          <div>
            <FlaskConical />
          </div>
          <div>
            <p className="lp-eyebrow">POR QUE FIRMup NÃO CRAQUELA?</p>
            <h3>Firma sem repuxar. Matifica sem esbranquiçar. Suaviza sem craquelar.</h3>
          </div>
          <p>
            Fórmulas tensoras convencionais podem formar uma camada rígida. FIRMup equilibra
            argilominerais nobres com hidratação nanoencapsulada para um acabamento mais natural,
            sem resíduos brancos e sem aspecto ressecado.
          </p>
        </div>
        <div className="lp-centered-cta">
          <strong>
            Você continua sendo você — apenas com a pele visivelmente mais firme, lisa e descansada.
          </strong>
          <Cta href="#kits" secondary>
            EXPERIMENTAR O EFEITO EM 90 SEGUNDOS
          </Cta>
        </div>
      </section>

      <section className="lp-actives">
        <div className="lp-editorial-intro lp-editorial-intro--dark">
          <SectionHeader
            eyebrow="PRECISÃO NANO. RESULTADO VISÍVEL."
            title="Três tecnologias que agem juntas — agora e ao longo do seu ritual diário."
            text="Inspirado na precisão da K-Beauty e desenvolvido pela Le’Kéfir, FIRMup reúne ativos em concentrações definidas para entregar lifting cosmético imediato e cuidado antienvelhecimento contínuo."
            light
          />
          <figure className="lp-editorial-image">
            <img
              src="/images/generated/kbeauty-skin-radiance.png"
              alt="Pele luminosa e uniforme inspirada no ritual K-Beauty"
              loading="lazy"
            />
            <figcaption>Radiância · Hidratação · Firmeza</figcaption>
          </figure>
        </div>
        <div className="active-table">
          {actives.map((active, index) => (
            <article key={active.name}>
              <div className="active-number">0{index + 1}</div>
              <div className="active-concentration">{active.concentration}</div>
              <div className="active-main">
                <p>{active.name}</p>
                <h3>{active.subtitle}</h3>
                <span>{active.description}</span>
              </div>
              <ul>
                {active.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check />
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="active-closing">
          Não é maquiagem pesada. Não é procedimento invasivo.{" "}
          <strong>É biotecnologia cosmética aplicada à sua rotina.</strong>
        </p>
      </section>

      <section className="lp-clinical">
        <SectionHeader
          eyebrow="NÚMEROS REAIS. TESTES REAIS. CONFIANÇA PARA USAR TODOS OS DIAS."
          title="A eficácia que aparece no espelho. A segurança que aparece nos laudos."
          text="Antes de chegar à sua pele, FIRMup passou por avaliações de eficácia cosmética, segurança dermatológica, compatibilidade oftalmológica, hipoalergenicidade e fotossensibilização."
        />
        <div className="clinical-grid">
          {clinicalMetrics.map(([number, label, text]) => (
            <article key={label}>
              <strong>{number}</strong>
              <h3>{label}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="green-chemistry">
          <Leaf />
          <div>
            <strong>Mais tecnologia, menos excessos.</strong>
            <p>
              FIRMup utiliza base aquosa e não contém solventes orgânicos tóxicos. Sua formulação
              segue princípios de química verde e não é testada em animais.
            </p>
          </div>
        </div>
        <p className="lp-legal-note centered-note">
          Dados fornecidos em laudos e materiais técnicos da marca, obtidos nas condições
          específicas de cada estudo. Resultados individuais podem variar.
        </p>
      </section>

      <section className="lp-botox-compare">
        <SectionHeader
          eyebrow="COMPARE E DECIDA"
          title="FIRMup Instantâneo vs. Botox Tradicional"
          text="O mesmo objetivo de firmeza e rejuvenescimento. Custos, segurança e rotinas completamente diferentes."
        />

        <div className="compare-grid">
          <article className="compare-card compare-card--firmup">
            <p className="compare-badge">FIRMup LIFT INSTANTÂNEO</p>
            <div className="compare-product">
              <img
                src="/images/product/firmup-produto-com-caixa.png"
                alt="Frasco e caixa FIRMup Lift Instantâneo"
                loading="lazy"
              />
            </div>
            <div className="compare-cost">
              <strong>R$ 0,50</strong>
              <span>por aplicação</span>
            </div>
            <ul className="compare-list compare-list--positive">
              {[
                "Resultado imediato (em 90 segundos)",
                "Não invasivo e totalmente indolor",
                "Sem efeitos colaterais e sem congelar a expressão",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="compare-vs" aria-hidden="true">
            VS.
          </div>

          <article className="compare-card compare-card--botox">
            <p className="compare-badge">BOTOX FULL FACE (CLÍNICA)</p>
            <div className="compare-procedure">
              <img
                src="/images/botox/procedimento-injetavel.png"
                alt="Procedimento injetável com agulha em clínica dermatológica"
                loading="lazy"
              />
              <small>PROCEDIMENTO INJETÁVEL COM AGULHA</small>
            </div>
            <div className="compare-cost">
              <strong>R$ 13,50</strong>
              <span>por dia (custo médio anual)</span>
            </div>
            <ul className="compare-list compare-list--negative">
              {[
                "Resultado demora de 3 a 7 dias",
                "Procedimento com agulhas e com dor",
                "Risco de expressão paralisada ou artificial",
              ].map((item) => (
                <li key={item}>
                  <X aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="compare-differentials">
          <h3>DIFERENCIAIS FIRMup</h3>
          <div>
            {[
              [Sparkles, "Tecnologia nanoencapsulada", "Alta permeação"],
              [Droplets, "Toque seco e confortável", "Sem oleosidade"],
              [Feather, "Não craquela a maquiagem", "Acabamento matte flexível"],
              [Clock3, "Resultado visível em minutos", "Efeito imediato"],
            ].map(([Icon, title, detail]) => {
              const DifferentialIcon = Icon as typeof Sparkles;
              return (
                <article key={title as string}>
                  <DifferentialIcon aria-hidden="true" />
                  <strong>{title as string}</strong>
                  <span>{detail as string}</span>
                </article>
              );
            })}
          </div>
        </div>

        <div className="compare-safety">
          <h3>
            <ShieldCheck aria-hidden="true" /> SEGURANÇA COMPROVADA
          </h3>
          <div>
            {[
              [BadgeCheck, "Hipoalergênico"],
              [ShieldCheck, "Dermatologicamente testado"],
              [Leaf, "Testado em peles sensíveis"],
              [Eye, "Oftalmologicamente testado"],
            ].map(([Icon, label]) => {
              const SafetyIcon = Icon as typeof ShieldCheck;
              return (
                <span key={label as string}>
                  <SafetyIcon aria-hidden="true" />
                  {label as string}
                </span>
              );
            })}
          </div>
        </div>

        <div className="compare-footer">
          <strong>
            Tecnologia que tensiona, suaviza e transforma sua pele na hora — sem agulhas e sem dor.
          </strong>
          <Cta href="#kits">QUERO O EFEITO FIRMup NO MEU ROSTO</Cta>
        </div>
      </section>

      <section className="lp-testimonials">
        <SectionHeader
          eyebrow="QUEM TESTOU, VIU A DIFERENÇA"
          title="O efeito é rápido. A reação diante do espelho também."
          text="Relatos documentados de clientes que incluíram FIRMup em seu ritual de beleza."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <img
                src={testimonial.image}
                alt={`Resultado relatado por ${testimonial.name}`}
                loading="lazy"
              />
              <div className="testimonial-content">
                <div className="testimonial-stars" aria-label="5 estrelas">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} size={13} fill="currentColor" />
                  ))}
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="testimonial-author">
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.focus}</small>
                  </span>
                  <em>
                    <BadgeCheck size={14} /> Comprador verificado
                  </em>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="lp-legal-note centered-note">
          Depoimentos individuais e espontâneos. A percepção dos resultados pode variar de pessoa
          para pessoa.
        </p>
      </section>

      <section className="lp-botox-effect">
        <header className="botox-effect-header">
          <p className="lp-eyebrow">TRANSFORMAÇÃO VISÍVEL EM MINUTOS</p>
          <h2>
            Sérum efeito botox <em>em 3 minutos</em>
          </h2>
          <p>É o tempo que sua pele precisa para parecer anos mais jovem.</p>
          <span aria-hidden="true" />
        </header>

        <div className="botox-effect-showcase">
          <div className="botox-effect-results">
            <figure>
              <img
                src="/images/results/olho-antes.png"
                alt="Região dos olhos antes da aplicação de FIRMup"
                loading="lazy"
              />
              <figcaption>ANTES</figcaption>
            </figure>

            <div className="botox-effect-time" aria-label="Resultado inicial após 3 minutos">
              <span>+3</span>
              <small>MIN</small>
            </div>

            <figure>
              <img
                src="/images/results/olho-depois.png"
                alt="Região dos olhos após a aplicação de FIRMup"
                loading="lazy"
              />
              <span className="botox-effect-after-time">+15 MIN</span>
              <figcaption>DEPOIS</figcaption>
            </figure>
          </div>

          <figure className="botox-effect-product">
            <img
              src="/images/results/mao-com-frasco.png"
              alt="Mão feminina segurando o frasco FIRMup Lift Instantâneo"
              loading="lazy"
            />
            <figcaption>FIRMup Lift Instantâneo</figcaption>
          </figure>
        </div>

        <div className="botox-effect-footer">
          <ul>
            {[
              "Reduz bolsas e linhas",
              "Pele mais firme e lisa",
              "Deixa a pele visivelmente rejuvenescida",
            ].map((benefit) => (
              <li key={benefit}>
                <Check aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="kits" className="lp-offers">
        <SectionHeader
          eyebrow="ESCOLHA O SEU RITUAL FIRMup"
          title="Um efeito que você vê hoje. Um cuidado que melhora com a constância."
          text="Escolha por quanto tempo deseja cuidar da firmeza da sua pele. Todos os kits incluem Garantia Blindada de 7 Dias, compra segura e envio prioritário com rastreamento."
          light
        />
        <div className="offer-grid-wrap">
          <div className="offer-editorial-callout" aria-hidden="true">
            <span>Mais escolhido</span>
            <svg viewBox="0 0 150 78" fill="none">
              <path d="M4 13C48 -3 112 7 125 49" />
              <path d="M111 42L126 51L131 34" />
            </svg>
          </div>
          <div className="offer-grid-new">
            {offers.map((offer) => (
              <article
                key={offer.id}
                className={`offer-new${offer.featured ? " offer-new--featured" : ""}`}
              >
                {offer.badge && <div className="offer-badge">{offer.badge}</div>}
                <p className="offer-overline">{offer.title}</p>
                <h3>
                  {offer.bottles} {offer.bottles === 1 ? "FRASCO" : "FRASCOS"}
                </h3>
                <p className="offer-duration">{offer.duration}</p>
                <BottleGroup amount={offer.bottles} image={offer.image} />
                <p className="offer-description">{offer.description}</p>
                <div className="offer-promo-slot">
                  {offer.discount && <strong className="offer-discount">{offer.discount}</strong>}
                </div>
                <div className="offer-price">
                  <span>R$</span>
                  <strong>{offer.price}</strong>
                  <sup>{offer.cents ?? ",00"}</sup>
                  <small>à vista</small>
                </div>
                <p className="offer-installment">
                  Ou parcele no cartão conforme as condições do checkout.
                </p>
                <ul>
                  {offer.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Check />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Cta href={offer.link} secondary={!offer.featured}>
                  {offer.cta}
                </Cta>
              </article>
            ))}
          </div>
        </div>
        <article className="offer-annual">
          <div className="offer-annual__image">
            <img
              src="/images/offers/kit-12.png"
              alt="Kit com 12 frascos de FIRMup"
              loading="lazy"
            />
          </div>
          <div className="offer-annual__copy">
            <p className="offer-overline">CUIDADO PARA O ANO TODO</p>
            <h3>TRATAMENTO PARA 1 ANO</h3>
            <p>
              12 frascos de FIRMup para manter seu ritual de cuidado diário por aproximadamente 12
              meses.
            </p>
            <ul>
              <li>
                <Check aria-hidden="true" /> 12 frascos de 15 ml
              </li>
              <li>
                <Check aria-hidden="true" /> Garantia Blindada de 7 Dias
              </li>
              <li>
                <Check aria-hidden="true" /> Entrega grátis com rastreamento
              </li>
            </ul>
          </div>
          <div className="offer-annual__action">
            <div className="offer-price">
              <span>R$</span>
              <strong>657</strong>
              <sup>,00</sup>
              <small>à vista</small>
            </div>
            <p className="offer-installment">
              Ou parcele no cartão conforme as condições do checkout.
            </p>
            <Cta href={checkoutLinks.twelve}>QUERO O TRATAMENTO DE 1 ANO</Cta>
          </div>
        </article>
        <div className="payment-band">
          <span>
            <CreditCard /> Até 10x sem juros
          </span>
          <span>
            <Banknote /> Pix ou boleto
          </span>
          <span>
            <Truck /> Mercado Livre Full
          </span>
          <span>
            <PackageCheck /> Código de rastreamento
          </span>
        </div>
        <p className="lp-legal-note centered-note">
          Preços, descontos, parcelamento, frete grátis e prazo de entrega devem corresponder às
          condições apresentadas no checkout e podem variar conforme região, estoque e campanha
          vigente.
        </p>
      </section>

      <section className="lp-guarantee">
        <div className="guarantee-seal">
          <ShieldCheck />
          <strong>7</strong>
          <span>DIAS DE GARANTIA</span>
        </div>
        <div className="guarantee-copy">
          <p className="lp-eyebrow">VOCÊ EXPERIMENTA. A LE’KÉFIR ASSUME O RISCO.</p>
          <h2>7 dias para testar FIRMup. Risco zero para você.</h2>
          <p>
            Nós poderíamos pedir que você confiasse apenas nos números. Preferimos que confie no seu
            próprio espelho.
          </p>
          <p>
            Por isso, cada compra de FIRMup é protegida pela{" "}
            <strong>Garantia Blindada de 7 Dias Le’Kéfir.</strong> Se não perceber o efeito lifting
            a partir de 90 segundos ou não ficar 100% satisfeita, basta entrar em contato com o
            suporte oficial dentro do prazo. O valor integral será reembolsado, sem perguntas.
          </p>
          <ol>
            {[
              "Escolha seu kit e finalize a compra em ambiente seguro.",
              "Receba e experimente FIRMup seguindo o modo de aplicação.",
              "Decida com tranquilidade durante os 7 dias de garantia.",
              "Se não ficar satisfeita, solicite o reembolso integral.",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <strong className="guarantee-close">
            Você não precisa imaginar como sua pele pode ficar. Pode experimentar sem assumir o
            risco.
          </strong>
          <Cta href="#kits">QUERO TESTAR FIRMup POR 7 DIAS</Cta>
          <p className="lp-microcopy">
            <LockKeyhole size={14} /> Garantia de reembolso integral · Compra segura · Suporte
            oficial Le’Kéfir
          </p>
        </div>
      </section>

      <section className="lp-faq">
        <SectionHeader
          eyebrow="TUDO O QUE VOCÊ PRECISA SABER"
          title="Suas dúvidas, respondidas com clareza."
        />
        <div className="faq-list-new">
          {faqs.map(([question, answer], index) => (
            <details key={question} name="firmup-faq">
              <summary>
                <span>
                  <em>{String(index + 1).padStart(2, "0")}</em>
                  {question}
                </span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="lp-final">
        <div className="lp-final-copy">
          <Sparkles />
          <h2>Sua pele pode parecer mais firme antes mesmo de você terminar de se arrumar.</h2>
          <p>
            FIRMup entrega o resultado cosmético imediato que você deseja hoje e o cuidado contínuo
            que sua pele merece todos os dias. Sem agulhas. Sem expressão congelada. Sem complicar
            sua rotina.
          </p>
          <Cta href="#kits">ESCOLHER MEU KIT FIRMup</Cta>
          <span>Compra segura · Envio Mercado Livre Full · Garantia Blindada de 7 Dias</span>
        </div>
        <img
          src="/images/product/firmup-produto-com-caixa.png"
          alt="Frasco e caixa FIRMup Lift Instantâneo"
          loading="lazy"
        />
      </section>

      <footer className="lp-footer">
        <a className="lp-logo lp-logo--footer" href="#inicio">
          FIRM<span>up</span>
        </a>
        <p>
          <strong>FIRMup Lift Instantâneo · Le’Kéfir Cosméticos</strong>
          <br />
          Biotecnologia K-Beauty para uma pele visivelmente mais firme, lisa e descansada.
        </p>
        <div className="footer-socials" aria-label="Redes sociais">
          <a
            href="https://www.instagram.com/skincaredeimpacto/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @skincaredeimpacto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@skincaredeimpacto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok @skincaredeimpacto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.5 2h2.6c.2 2.2 1.6 3.7 3.9 4v2.8a8.3 8.3 0 0 1-3.8-1.2v6.2a6.2 6.2 0 1 1-6.2-6.2c.5 0 .9 0 1.4.1v2.9a3.2 3.2 0 1 0 1.9 3V2z" />
            </svg>
            <span>TikTok</span>
          </a>
        </div>
        <div className="footer-divider" />
        <p className="footer-legal">
          Produto cosmético de uso externo. Não ingerir. Não aplicar sobre pele irritada ou
          lesionada. Evite contato direto com os olhos; em caso de contato, enxágue abundantemente.
          Suspenda o uso em caso de sensibilização e procure orientação profissional. Mantenha fora
          do alcance de crianças.
        </p>
        <p className="footer-legal">
          FIRMup não substitui procedimentos, diagnóstico ou tratamento médico. Resultados
          individuais podem variar conforme idade, características da pele, quantidade aplicada,
          frequência e modo de uso. Percentuais e resultados clínicos referem-se às condições
          específicas dos estudos fornecidos pela marca.
        </p>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.004 29C23.172 29 29 23.17 29 16S23.172 3 16.004 3Zm0 23.64c-1.95 0-3.86-.52-5.53-1.51l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.36 16c0-5.87 4.78-10.64 10.65-10.64 5.86 0 10.63 4.77 10.63 10.64 0 5.87-4.77 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.26-.75.26-1.39.18-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      {!kitsVisible && (
        <div className="mobile-buy-bar">
          <div>
            <small>A partir de</small>
            <strong>R$ 157,00</strong>
          </div>
          <a href="#kits">
            ESCOLHER MEU KIT <ArrowRight size={17} />
          </a>
        </div>
      )}
    </main>
  );
}
