import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage, stepIcons } from "@/components/thank-you-page";

export const Route = createFileRoute("/obrigado/")({
  head: () => ({
    meta: [
      { title: "Pedido confirmado | FIRMup" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <ThankYouPage
      status="approved"
      eyebrow="Pagamento aprovado"
      title={
        <>
          Obrigada! Seu <em>FIRMup</em> já está a caminho.
        </>
      }
      lead="Seu pedido foi confirmado com sucesso. Em instantes você recebe no seu e-mail todos os detalhes da compra."
      steps={[
        {
          icon: stepIcons.mail,
          title: "Confirmação por e-mail",
          text: "Enviamos o resumo do pedido para o e-mail informado no checkout. Confira também a caixa de spam.",
        },
        {
          icon: stepIcons.package,
          title: "Separação do pedido",
          text: "Seu kit é separado e enviado pelo Mercado Livre Full logo após a confirmação.",
        },
        {
          icon: stepIcons.truck,
          title: "Código de rastreio",
          text: "Assim que o pedido for despachado, você recebe o código para acompanhar a entrega.",
        },
      ]}
    />
  );
}
