import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage, stepIcons } from "@/components/thank-you-page";

export const Route = createFileRoute("/obrigado/processando")({
  head: () => ({
    meta: [
      { title: "Pedido em processamento | FIRMup" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoProcessandoPage,
});

function ObrigadoProcessandoPage() {
  return (
    <ThankYouPage
      status="pending"
      eyebrow="Pedido em processamento"
      title={
        <>
          Recebemos seu pedido! Agora é só <em>aguardar</em>.
        </>
      }
      lead="Seu pagamento está sendo analisado pela operadora. Isso costuma levar poucos minutos, mas pode levar até 48 horas."
      steps={[
        {
          icon: stepIcons.clock,
          title: "Análise do pagamento",
          text: "A operadora do cartão está verificando a transação. Você não precisa fazer nada agora.",
        },
        {
          icon: stepIcons.mail,
          title: "Aviso por e-mail",
          text: "Assim que o pagamento for aprovado, você recebe a confirmação no e-mail informado no checkout.",
        },
        {
          icon: stepIcons.truck,
          title: "Envio imediato",
          text: "Com o pagamento aprovado, seu kit é despachado e você recebe o código de rastreio.",
        },
      ]}
      note="Não faça uma nova compra enquanto o pedido estiver em análise, para evitar cobrança em dobro."
    />
  );
}
