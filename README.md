# Landing Page FIRMup

Landing page oficial do **FIRMup Lifting Instantâneo**, disponibilizada para afiliados autorizados divulgarem o produto com seus próprios links de venda.

> **Afiliado:** faça uma cópia do projeto, substitua os quatro links de checkout pelos seus links de afiliado e publique. Todo o restante da página já está configurado.

[![Prévia da landing page FIRMup](public/images/results/mao-com-frasco-og.jpg)](https://skincaredeimpacto.com.br/)

## Página publicada

**Landing page:** https://skincaredeimpacto.com.br/

## O que você precisa alterar

Todos os links de compra estão centralizados no arquivo [`src/routes/index.tsx`](src/routes/index.tsx), no objeto `checkoutLinks`:

```tsx
const checkoutLinks = {
  one: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
  three: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
  five: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
  twelve: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
};
```

Substitua somente o conteúdo entre aspas. Mantenha a vírgula no final de cada linha.

Cada campo corresponde a uma oferta:

| Campo | Oferta exibida na página |
|---|---|
| `one` | 1 frasco · ritual de 1 mês |
| `three` | 3 frascos · tratamento recomendado |
| `five` | 5 frascos · tratamento intensivo |
| `twelve` | 12 frascos · tratamento para 1 ano |

Use o link de afiliado correspondente a cada oferta. Depois da alteração, teste os quatro botões de compra antes de divulgar a página.

## Como copiar o projeto

### Opção 1: criar seu próprio repositório

1. Clique em **Fork** no topo deste repositório.
2. Crie a cópia na sua conta do GitHub.
3. Abra `src/routes/index.tsx` no seu repositório.
4. Clique no ícone de lápis para editar.
5. Troque os quatro valores de `checkoutLinks`.
6. Salve em **Commit changes**.

Essa opção é a mais simples para publicar na Vercel sem instalar ferramentas no computador.

### Opção 2: baixar o arquivo ZIP

1. Clique em **Code**.
2. Clique em **Download ZIP**.
3. Extraia o arquivo no computador.
4. Abra `src/routes/index.tsx` em um editor de código.
5. Troque os quatro links de checkout.

### Opção 3: clonar com Git

```bash
git clone https://github.com/JohnGyn/firmup-landing-page.git
cd firmup-landing-page
```

## Como testar no computador

O projeto usa React, TanStack Start, TypeScript e Vite. Com o [Node.js](https://nodejs.org/) instalado, execute:

```bash
npm install
npm run dev
```

O terminal mostrará o endereço local da página, normalmente `http://localhost:3000`.

Para verificar a versão de produção:

```bash
npm run build
```

## Como publicar na Vercel

1. Faça um **fork** deste repositório.
2. Entre em https://vercel.com/ com sua conta do GitHub.
3. Clique em **Add New → Project**.
4. Importe o repositório criado na sua conta.
5. Mantenha as configurações detectadas automaticamente.
6. Clique em **Deploy**.

Quando você enviar novas alterações para a branch `main`, a Vercel publicará uma nova versão automaticamente.

Também é possível hospedar o projeto em qualquer serviço compatível com aplicações Node.js.

## Páginas de retorno do checkout

O projeto inclui páginas para os diferentes estados de pagamento:

| Situação | Caminho no seu domínio | Exemplo oficial |
|---|---|---|
| Pagamento aprovado | `/obrigado/` | https://skincaredeimpacto.com.br/obrigado/ |
| Pix gerado | `/obrigado/pix` | https://skincaredeimpacto.com.br/obrigado/pix |
| Boleto gerado | `/obrigado/boleto` | https://skincaredeimpacto.com.br/obrigado/boleto |
| Pagamento em processamento | `/obrigado/processando` | https://skincaredeimpacto.com.br/obrigado/processando |

Ao publicar em outro domínio, troque apenas o domínio dos exemplos. Se a sua página estiver em `https://meusite.com.br`, a URL de pagamento aprovado será `https://meusite.com.br/obrigado/`.

## Rastreamento

O projeto contém o Meta Pixel usado na página oficial:

- `PageView` é disparado nas páginas;
- `Purchase` é disparado apenas na página de pagamento aprovado;
- o evento `Purchase` usa `?value=` ou `?valor=` quando o checkout envia um desses parâmetros;
- a mesma compra não é contada novamente se a página for recarregada na mesma sessão.

O ID do Pixel fica na constante `META_PIXEL_ID` do arquivo [`src/routes/__root.tsx`](src/routes/__root.tsx). Afiliados que precisarem usar um pixel próprio podem substituir esse valor antes de publicar. Essa alteração é opcional para quem precisa apenas trocar os links de venda.

## Estrutura do projeto

```text
.
├── public/
│   └── images/                    # imagens dos produtos e da landing page
├── src/
│   ├── components/
│   │   └── thank-you-page.tsx     # layout das páginas de retorno
│   ├── routes/
│   │   ├── index.tsx              # landing page e links de checkout
│   │   ├── __root.tsx             # metadados e Meta Pixel
│   │   └── obrigado/              # páginas de retorno do checkout
│   └── styles.css                 # estilos visuais
├── package.json                   # comandos e dependências
└── vite.config.ts                 # configuração de desenvolvimento e build
```

## Personalizações opcionais

| Alteração | Arquivo principal |
|---|---|
| Links de checkout, WhatsApp, ofertas, preços e textos | `src/routes/index.tsx` |
| Meta Pixel e metadados gerais | `src/routes/__root.tsx` |
| WhatsApp de suporte das páginas de retorno | `src/components/thank-you-page.tsx` |
| Páginas de aprovado, Pix, boleto e processamento | `src/routes/obrigado/` |
| Cores, fontes, espaçamentos e responsividade | `src/styles.css` |

Alterar preços, promessas, instruções de uso ou informações regulatórias pode deixar a página diferente da comunicação oficial do produto. Para divulgação como afiliado, a recomendação é trocar apenas os links de checkout.

## Uso do material

Este projeto é disponibilizado para divulgação do FIRMup por afiliados autorizados. A marca, os textos, as imagens dos produtos e os demais materiais comerciais continuam pertencendo aos seus respectivos titulares.

Não remova informações obrigatórias do produto nem use a página para divulgar produtos de terceiros como se fossem o FIRMup.

## Suporte

Em caso de dúvida sobre cadastro, aprovação ou geração dos links de afiliado, fale com o responsável pelo programa de afiliados do FIRMup.
