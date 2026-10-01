import { useEffect, type ReactNode } from "react";
import { ArrowRight, Clock3, Mail, PackageCheck, ShieldCheck, Truck } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const SUPPORT_WHATSAPP_URL = `https://wa.me/5519978042382?text=${encodeURIComponent(
  "Olá! Acabei de fazer meu pedido do *FIRMup Lifting Instantâneo* e gostaria de tirar uma dúvida.",
)}`;

type Step = { icon: ReactNode; title: string; text: string };

type ThankYouPageProps = {
  status: "approved" | "pending";
  eyebrow: string;
  title: ReactNode;
  lead: string;
  steps: Step[];
  note?: string;
};

export const stepIcons = {
  mail: <Mail size={20} />,
  clock: <Clock3 size={20} />,
  package: <PackageCheck size={20} />,
  truck: <Truck size={20} />,
  shield: <ShieldCheck size={20} />,
};

export function ThankYouPage({ status, eyebrow, title, lead, steps, note }: ThankYouPageProps) {
  useEffect(() => {
    // Só conta como compra no Pixel quando o pagamento foi aprovado.
    if (status !== "approved") return;
    // Evita contar a mesma compra duas vezes se a página for recarregada.
    const trackedKey = `firmup-purchase-tracked:${window.location.href}`;
    try {
      if (sessionStorage.getItem(trackedKey)) return;
      sessionStorage.setItem(trackedKey, "1");
    } catch {
      // sessionStorage indisponível (ex.: navegação privada): segue sem a proteção.
    }
    const params = new URLSearchParams(window.location.search);
    const value = Number(params.get("value") ?? params.get("valor"));
    window.fbq?.("track", "Purchase", {
      currency: "BRL",
      ...(Number.isFinite(value) && value > 0 ? { value } : {}),
    });
  }, [status]);

  return (
    <main className="firmup-page ty-page">
      <header className="lp-nav">
        <a className="lp-logo" href="/" aria-label="FIRMup, início">
          FIRM<span>up</span>
        </a>
        <div className="lp-nav-proof">
          <ShieldCheck size={16} /> Compra segura
        </div>
      </header>

      <section className="ty-hero">
        <div className="ty-content">
          <div className={`ty-badge ty-badge--${status}`}>
            {status === "approved" ? <PackageCheck size={26} /> : <Clock3 size={26} />}
          </div>
          <p className="ty-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="ty-lead">{lead}</p>

          <ol className="ty-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <span className="ty-step-icon">{step.icon}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {note && <p className="ty-note">{note}</p>}

          <a className="lp-cta" href={SUPPORT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            FALAR COM O SUPORTE NO WHATSAPP <ArrowRight size={17} />
          </a>
        </div>

        <div className="ty-visual">
          <img src="/images/product/firmup-produto-com-caixa.png" alt="FIRMup Lifting Instantâneo" />
        </div>
      </section>

      <footer className="ty-footer">
        © {new Date().getFullYear()} FIRMup · Lifting cosmético instantâneo
      </footer>
    </main>
  );
}
