# WordPress / Astra e orientação para o construtor

## Opção 1 — usar o site pronto

1. Em **Plugins → Adicionar novo → Enviar plugin**, envie `site-lanchonete-skinao.zip` e ative **Lanchonete Skinão — Landing Page**.
2. Crie a página **Início** no Gutenberg.
3. Adicione um bloco **Shortcode** contendo:

```text
[lanchonete_skinao]
```

4. Nas opções da página do Astra, configure largura total, sem barra lateral e sem título da página. Desative cabeçalho e rodapé do tema somente nessa página para não duplicar os do Skinão.
5. Ajuste os espaçamentos externos do contêiner para zero, conforme as opções da versão instalada.
6. Em **Configurações → Leitura**, escolha esta página como página inicial estática.
7. Configure título SEO, descrição e favicon nas opções do WordPress ou no plugin de SEO usado. O shortcode não replica as tags `<head>` do HTML estático.

O adaptador usa `add_shortcode` e `wp_enqueue_scripts` e carrega os assets apenas na página cujo conteúdo principal contém o shortcode. Use uma instância por página. A instalação requer WordPress 6.3+ e PHP 7.4+; validar no ambiente final. Não pressupõe recursos do Astra Pro.

**Edição:** altere o conteúdo em `index.html` na pasta do plugin. O adaptador lê apenas o trecho entre `SKINAO:START` e `SKINAO:END`. O CSS está isolado sob `.skinao`. Após atualizações, limpe o cache e incremente a versão dos assets no PHP quando necessário.

## Opção 2 — reconstruir no construtor visual

Use [CONTEUDO-E-DESIGN.md](CONTEUDO-E-DESIGN.md) como documento de produção e [CARDAPIO.md](CARDAPIO.md) como catálogo de textos. Estruture os blocos nesta ordem:

| Seção / âncora | Blocos ou elementos |
| --- | --- |
| Hero | Grupo de largura total → duas colunas → título, parágrafo e botões / imagem |
| Destaques / `destaques` | Grupo → título + apoio → grid de quatro cards |
| Cardápio / `cardapio` | Grupo → abas no desktop / acordeões no celular → listas de produtos |
| Ambiente / `ambiente` | Duas colunas → texto da marca / diferenciais numerados |
| Contato / `contato` | Duas colunas → endereço, horários, WhatsApp / mapa |
| Chamada final | Faixa laranja → título + botão vermelho |
| Rodapé | Marca + atalhos + Instagram + direitos |

O shortcode pronto não transforma cada trecho em blocos Gutenberg editáveis. Para editar visualmente, use os blocos nativos disponíveis ou os equivalentes do construtor instalado. O suporte a abas varia por construtor; se necessário, priorize acordeões acessíveis. Não é fornecido JSON genérico, pois o esquema depende dos blocos e plugins reais.

## Especificação técnica

- Um H1 na página, H2 por seção, H3 para destaques e títulos das categorias, H4 para itens do cardápio.
- Texto de pelo menos 14–16 px no corpo principal; descrições compactas com espaçamento e contraste suficientes.
- Um CTA por item, com `phone=5569999099161` e mensagem codificada com o produto.
- Botões de toque com altura mínima de 44 px.
- Foco visível, nomes acessíveis e navegação por teclado.
- Imagens WebP locais, dimensões reservadas, prioridade para o hero e mapa com carregamento adiado.
- Fontes locais e nenhuma dependência de Tailwind CDN.
- Testar em desktop, 390 px e 320 px, inclusive transição entre abas e acordeões.
- Confirmar preços, contatos, endereço e marcador do mapa antes da publicação.

## Fontes oficiais

- [WordPress — Shortcode API](https://developer.wordpress.org/apis/shortcode/)
- [WordPress — wp_enqueue_script](https://developer.wordpress.org/reference/functions/wp_enqueue_script/)
- [Astra — desativar cabeçalho e rodapé em landing pages](https://wpastra.com/docs/disable-header-footer-landing-page-post/)
- [Astra — configurações individuais de página](https://wpastra.com/docs/page-meta-settings/)
