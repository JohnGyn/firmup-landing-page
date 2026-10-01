import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage, stepIcons } from "@/components/thank-you-page";

export const Route = createFileRoute("/obrigado/pix")({
  head: () => ({
    meta: [
      { title: "Pix gerado | FIRMup" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoPixPage,
});

function ObrigadoPixPage() {
  return (
    <ThankYouPage
      status="pending"
      eyebrow="Pix gerado"
      title={
        <>
          Pague o Pix e garanta seu <em>FIRMup</em> agora!
        </>
      }
      lead="Seu pedido está reservado. Assim que o Pix for pago, a confirmação é automática e seu kit já entra na fila de envio."
      steps={[
        {
          icon: stepIcons.clock,
          title: "Pague dentro do prazo",
          text: "O código Pix tem validade limitada. Use o QR Code ou o copia e cola que aparece no checkout e no seu e-mail.",
        },
        {
          icon: stepIcons.mail,
          title: "Confirmação na hora",
          text: "O pagamento via Pix é confirmado em segundos e você recebe o aviso no e-mail informado.",
        },
        {
          icon: stepIcons.truck,
          title: "Envio imediato",
          text: "Com o Pix confirmado, seu kit é despachado e você recebe o código de rastreio.",
        },
      ]}
      note="Se o código Pix expirar, é só voltar ao site e fazer um novo pedido."
    />
  );
}
