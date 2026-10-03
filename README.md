# Site da Lanchonete Skinão

**Lanchonete SKINAO Neguinho do Peixe — Rolim de Moura, RO.**

Site one-page em HTML/CSS/JavaScript, com textos persuasivos, 27 itens em quatro categorias, quatro destaques, mapa, informações de contato e pedidos diretos pelo WhatsApp. Novo projeto independente do Espetinho do Mineiro.

## Abrir

Abra `index.html` no navegador. Não há build, fontes externas, dependências de produção ou necessidade de instalar pacotes. Para hospedagem estática, envie `index.html`, `styles.css`, `app.js` e `assets/` à raiz do site.

## Entregáveis

- [CONTEUDO-E-DESIGN.md](CONTEUDO-E-DESIGN.md): todos os blocos de copy, CTAs, paleta, hierarquia e orientações para o construtor.
- [CARDAPIO.md](CARDAPIO.md): textos individuais e preços dos 27 itens.
- [WORDPRESS-ASTRA.md](WORDPRESS-ASTRA.md): instalação e adaptação no WordPress/Astra.
- [IMAGENS.md](IMAGENS.md): origem das imagens e prompts de geração.
- `skinao-landing.php`: adaptador WordPress com shortcode `[lanchonete_skinao]`.

## Dados da marca

| Campo | Valor |
| --- | --- |
| WhatsApp | +55 69 99909-9161 / `5569999099161` |
| Endereço | Av. Norte Sul, 5493 — Centro, Rolim de Moura — RO |
| Instagram | @lanchoneteskinao |
| Banda de tambaqui recheada | R$ 70,00, com 2 pratos completos |
| X-Skinão | R$ 25,00 |
| Outros valores e horários | Sob consulta, pois não foram fornecidos |

Os dados comerciais seguem o briefing. Confirme horários, preços restantes, porções, composição dos pratos completos e regras de delivery antes de publicar. “Queijo prado” foi tratado como “queijo prato”, sujeito a confirmação.

## Recursos e funcionamento

Abas acessíveis no desktop e acordeões nativos no celular. As abas respondem às setas, Home e End. Os itens permanecem acessíveis sem JavaScript. Os botões abrem o WhatsApp com o nome do produto na mensagem; não enviam mensagens sozinhos e não criam pedidos em banco de dados.

As fotografias são ilustrações geradas por IA, identificadas na página. Não há fotos reais do salão, avaliações inventadas ou indicação automática de “aberto agora”. O mapa incorporado depende do Google Maps; o link de rota funciona como alternativa.

## Edição

- Textos, preços, itens e contatos: `index.html`.
- Paleta, espaçamento e responsividade: `styles.css`.
- Comportamento das abas e menu: `app.js`.
- Imagens e favicon: `assets/`.

A fonte do site é o HTML final. Alterações no catálogo devem ser refletidas também nos documentos entregues ao construtor. O plugin usa o mesmo `index.html`, sem manter uma segunda cópia do conteúdo.

## Estado da entrega

Código em repositório privado. Não foi configurado domínio nem publicada hospedagem. A versão HTML é testada no navegador; o adaptador WordPress ainda exige validação no ambiente do estabelecimento, incluindo a versão instalada do Astra. Não há afirmação de homologação de uma versão específica chamada “Astra 6”.
