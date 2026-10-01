import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage, stepIcons } from "@/components/thank-you-page";

export const Route = createFileRoute("/obrigado/boleto")({
  head: () => ({
    meta: [
      { title: "Boleto gerado | FIRMup" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoBoletoPage,
});

function ObrigadoBoletoPage() {
  return (
    <ThankYouPage
      status="pending"
      eyebrow="Boleto gerado"
      title={
        <>
          Falta pouco para o seu <em>FIRMup</em> chegar!
        </>
      }
      lead="Seu pedido está reservado. Pague o boleto até a data de vencimento para garantir seu kit."
      steps={[
        {
          icon: stepIcons.mail,
          title: "Boleto no seu e-mail",
          text: "Enviamos o boleto para o e-mail informado no checkout. Você pode pagar pelo app do banco, lotérica ou internet banking.",
        },
        {
          icon: stepIcons.clock,
          title: "Compensação em até 3 dias úteis",
          text: "Depois do pagamento, o banco leva até 3 dias úteis para confirmar. Você recebe um aviso por e-mail.",
        },
        {
          icon: stepIcons.truck,
          title: "Envio após a confirmação",
          text: "Com o pagamento compensado, seu kit é despachado e você recebe o código de rastreio.",
        },
      ]}
      note="Pagar no mesmo dia garante que seu pedido seja enviado mais rápido."
    />
  );
}
