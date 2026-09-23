# Site da Jefil Business

Site estático (HTML/CSS/JS puro, sem build) para GitHub Pages.

## Como publicar no GitHub Pages

1. Certifica-te de que estes ficheiros (`index.html`, `styles.css`, `site.js`, a pasta `images/` e as restantes páginas `.html`) estão na **raiz** do repositório `jefilbusiness-cpu/Home` (ou numa pasta `/docs`, à tua escolha).
2. No repositório, vai a **Settings → Pages**.
3. Em "Build and deployment", escolhe **Deploy from a branch**, seleciona a branch `main` e a pasta `/ (root)` (ou `/docs`, se for o caso).
4. Guarda. Ao fim de 1–2 minutos o site fica disponível em `https://jefilbusiness-cpu.github.io/Home/`.

## Estrutura

- `index.html` — Home
- `marcenaria.html`, `moveis-planejados.html`, `estofaria.html` — páginas de serviço
- `catalogo.html` — catálogo de produtos com preços e fotos reais
- `projetos.html`, `sobre.html`, `contacto.html`
- `styles.css`, `site.js` — estilos e o script que monta os links de WhatsApp
- `images/` — todas as fotos e ícones usados no site

## Por confirmar / por fazer

- Várias secções (home, "Projetos", "Sobre") ainda usam caixas placeholder onde vai entrar fotografia real — ver ficheiro `jefil-copywriting.md` do projeto para a lista completa.
- Os links "Arquitetura & decoração", "Eletricidade" e "Design gráfico" no menu/rodapé apontam para `#` — ainda não têm página própria.
- **Confirmar o email de contacto**: o site usa `jefilbuiness@gmail.com` (sem "s" em "business") em todas as páginas. Verifica se é mesmo esse o endereço correto antes de publicar — se não for, é só substituir esse texto em todas as páginas.
