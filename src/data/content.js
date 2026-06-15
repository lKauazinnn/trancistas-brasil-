export const GALLERY_IMAGES = [
  { src: '/media/photos/imagem.png', alt: 'Folder Tranças no Mapa' },
  { src: '/media/photos/imagem 1.jpeg', alt: 'Pesquisadora com livro e acervo' },
  { src: '/media/photos/imagem 2.jpeg', alt: 'Oficina e roda de formação' },
  { src: '/media/photos/rapaz.png', alt: 'Retrato de entrevistado' },
  { src: '/media/photos/iomagm.jpeg', alt: 'Performance artística com tranças' },
  { src: '/media/photos/iamgem.jpeg', alt: 'Mapa da diáspora africana' },
  { src: '/media/photos/nmova.jpeg', alt: 'Roda de diálogo com trancistas' },
  { src: '/media/photos/moça.jpeg', alt: 'Laodicéia em seu salão' },
  { src: '/media/photos/Cópia de IMG_3937.jpg', alt: 'Encontro Tranças no Mapa' },
  { src: '/media/photos/Cópia de IMG_3844.jpg', alt: 'Trancistas em atividade' },
  { src: '/media/photos/Cópia de IMG_3750.jpg', alt: 'Registro autoral do projeto' },
]

export const CARROSSEL1_IMAGES = Array.from({ length: 13 }, (_, i) => ({
  src: `/media/carrossel1/c1-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Processo e técnica — foto ${i + 1}`,
}))

export const CARROSSEL2_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/media/carrossel2/c2-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Identidade e grupo — foto ${i + 1}`,
}))

export const MARKET_STATS = [
  { value: 700, suffix: 'bi', prefix: 'R$', label: 'Negócios anuais movimentados por mulheres negras (Sebrae)', category: 'renda' },
  { value: 72.9, suffix: '%', label: 'População preta e parda em favelas e comunidades urbanas (Censo 2022)', category: 'territorio' },
  { value: 122, suffix: '', label: 'Trancistas mapeadas no DF e Entorno (abr-jul/2023)', category: 'dados' },
  { value: 2025, suffix: '', label: 'Ano de inclusão da ocupação de trancista na CBO', category: 'reconhecimento' },
  { value: 7, suffix: 'd', label: 'Dias por semana em jornadas exaustivas para parte da categoria', category: 'trabalho' },
  { value: 12, suffix: 'h', label: 'Horas diárias de atendimento em rotinas intensas', category: 'saude' },
]

export const TIMELINE_EVENTS = [
  {
    fase: 'africa',
    periodo: 'Séc. XVI–XIX',
    titulo: 'Raízes no Continente Africano',
    descricao: 'Nas culturas iorubá, banto e outras, as tranças comunicavam status social, origem tribal, estado civil e espiritualidade. Cada padrão era uma linguagem viva.',
    icon: 'Globe',
    cor: '#D4A843',
  },
  {
    fase: 'brasil',
    periodo: '1500–1888',
    titulo: 'A Diáspora e a Resistência',
    descricao: 'Trazidas forçadamente ao Brasil, mulheres africanas escondiam sementes entre as tranças para sobreviver à travessia. O cabelo se tornava resistência material.',
    icon: 'Link2',
    cor: '#C0522A',
  },
  {
    fase: 'brasil',
    periodo: 'Séc. XIX',
    titulo: 'Proibição e Apagamento',
    descricao: 'Com o racismo estrutural do pós-escravidão, cabelos crespos e tranças foram associados à "falta de higiene". A pressão social impôs o alisamento como norma.',
    icon: 'Scissors',
    cor: '#8C4A2A',
  },
  {
    fase: 'resistencia',
    periodo: '1970–1990',
    titulo: 'Black Power e Reafirmação',
    descricao: 'O movimento negro brasileiro, influenciado pelo civil rights americano, resgata o crespo e as tranças como símbolos políticos e de orgulho identitário.',
    icon: 'Megaphone',
    cor: '#B8622A',
  },
  {
    fase: 'resistencia',
    periodo: '2000–2020',
    titulo: 'Movimento Natural e Mercado',
    descricao: 'A transição capilar vira fenômeno. Trancistas ganham visibilidade, criadores de conteúdo negros ensinam técnicas, e o mercado de beleza afro explode.',
    icon: 'Smartphone',
    cor: '#C0522A',
  },
  {
    fase: 'resistencia',
    periodo: '2024–2026',
    titulo: 'Debate de Regulamentação',
    descricao: 'O PL 1.747/2024 e o PL 2.831/2024 ampliam o debate sobre regulamentação: avanço em direitos, mas também risco de barreiras para quem aprendeu pelo saber comunitário.',
    icon: 'FileText',
    cor: '#D4A843',
  },
]

export const QUOTES = [
  {
    texto: 'No decorrer de me descobrir como mulher preta, a transição capilar me despertou o olhar para cuidar de mim e depois das outras. Foi aí que desenvolvi a habilidade de trançar.',
    autora: 'Maria Luiza Pereira',
    cargo: 'Trancista no Riacho Fundo II (DF)',
  },
  {
    texto: 'As tranças são minha forma de comunicação com outras mulheres.',
    autora: 'Laodicéia Nascimento',
    cargo: 'Trancista há mais de 48 anos no DF',
  },
  {
    texto: 'É comum sentir dor uma vez ou outra, mas não é normal viver com dor. A longo prazo, isso derruba desempenho, descanso e renda.',
    autora: 'David Souza',
    cargo: 'Fisioterapeuta entrevistado na reportagem',
  },
]

export const CREDITS = [
  { role: 'Reportagem e Texto', name: 'Texto aprovado da produção' },
  { role: 'Fotos Autorais', name: 'Acervo da reportagem' },
  { role: 'Captação de Áudio', name: 'Equipe de campo' },
  { role: 'Montagem Web', name: 'Laboratório Digital PI' },
  { role: 'Pesquisa', name: 'Tranças no Mapa e fontes públicas' },
  { role: 'Edição Final', name: 'Editoria do projeto' },
]
