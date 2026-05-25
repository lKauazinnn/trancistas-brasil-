-- =============================================================
-- Projeto: Trancistas — Reportagem Especial
-- Migração inicial: tabelas de conteúdo editorial e métricas
-- =============================================================

-- Trancistas em destaque (perfis)
CREATE TABLE IF NOT EXISTS public.trancistas (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome        text NOT NULL,
  apelido     text,
  cidade      text,
  estado      char(2),
  anos_exp    int,
  especialidade text,
  depoimento  text,
  foto_url    text,
  created_at  timestamptz DEFAULT now()
);

-- Depoimentos / Falas de especialistas
CREATE TABLE IF NOT EXISTS public.depoimentos (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  autor       text NOT NULL,
  cargo       text,
  fala        text NOT NULL,
  secao       text CHECK (secao IN ('historia','identidade','mercado','desafios','futuro')),
  destaque    boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);

-- Dados de mercado para infográficos
CREATE TABLE IF NOT EXISTS public.dados_mercado (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  indicador   text NOT NULL,
  valor       numeric,
  unidade     text,
  fonte       text,
  ano         int,
  categoria   text CHECK (categoria IN ('credito','renda','informalidade','saude','formacao')),
  created_at  timestamptz DEFAULT now()
);

-- Linha do tempo histórica (África → Brasil → Resistência)
CREATE TABLE IF NOT EXISTS public.timeline_eventos (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  periodo     text NOT NULL,
  titulo      text NOT NULL,
  descricao   text,
  icone       text,
  ordem       int NOT NULL,
  fase        text CHECK (fase IN ('africa','brasil','resistencia')),
  created_at  timestamptz DEFAULT now()
);

-- Galeria de imagens
CREATE TABLE IF NOT EXISTS public.galeria (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo      text,
  descricao   text,
  arquivo     text NOT NULL,
  secao       text,
  ordem       int,
  created_at  timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.trancistas    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.depoimentos   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dados_mercado ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timeline_eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.galeria       ENABLE ROW LEVEL SECURITY;

-- Políticas públicas de leitura (a reportagem é pública)
CREATE POLICY "Leitura pública - trancistas"        ON public.trancistas        FOR SELECT USING (true);
CREATE POLICY "Leitura pública - depoimentos"       ON public.depoimentos       FOR SELECT USING (true);
CREATE POLICY "Leitura pública - dados_mercado"     ON public.dados_mercado     FOR SELECT USING (true);
CREATE POLICY "Leitura pública - timeline_eventos"  ON public.timeline_eventos  FOR SELECT USING (true);
CREATE POLICY "Leitura pública - galeria"           ON public.galeria           FOR SELECT USING (true);

-- =============================================================
-- Seed: dados iniciais para a reportagem
-- =============================================================

INSERT INTO public.depoimentos (autor, cargo, fala, secao, destaque) VALUES
  ('Kamyla Santos', 'Trancista há 12 anos', 'Cada trança que faço carrega a memória das minhas avós. Isso não é só trabalho — é resistência.', 'historia', true),
  ('Dra. Aline Ferreira', 'Pesquisadora de Cultura Afro-Brasileira – USP', 'O cabelo negro nunca foi apenas estético. Ele foi alvo de opressão e hoje é símbolo de retomada de identidade.', 'identidade', true),
  ('Beatriz Lima', 'Trancista e empreendedora', 'Banco nenhum me deu crédito na primeira vez. Tive que começar com R$200 emprestados da minha mãe.', 'mercado', true),
  ('Prof. Cláudio Nascimento', 'Economista – UFBA', 'A informalidade no setor de beleza negra esconde um mercado bilionário sistematicamente excluído do crédito formal.', 'mercado', false),
  ('Fernanda Oliveira', 'Trancista — 8 anos de profissão', 'A dor no ombro começou no segundo ano. Hoje faço fisioterapia toda semana. Ninguém fala sobre isso.', 'desafios', true);

INSERT INTO public.dados_mercado (indicador, valor, unidade, fonte, ano, categoria) VALUES
  ('Salão de beleza voltados ao público negro', 600000, 'estabelecimentos', 'SEBRAE', 2024, 'renda'),
  ('Trancistas sem acesso a crédito formal', 78, '%', 'Pesquisa PI', 2025, 'credito'),
  ('Renda média mensal de trancistas', 2800, 'R$', 'Pesquisa PI', 2025, 'renda'),
  ('Atuam na informalidade', 65, '%', 'IBGE / Pesquisa PI', 2024, 'informalidade'),
  ('Mercado de beleza negra no Brasil', 3.5, 'bilhões R$', 'ABIHPEC', 2024, 'renda'),
  ('Relatam dores físicas ocupacionais', 71, '%', 'Pesquisa PI', 2025, 'saude'),
  ('Nunca fizeram curso de formação formal', 58, '%', 'Pesquisa PI', 2025, 'formacao');

INSERT INTO public.timeline_eventos (periodo, titulo, descricao, icone, ordem, fase) VALUES
  ('Século XVI–XIX', 'Raízes no Continente Africano', 'Nas culturas iorubá, banto e outras, as tranças comunicavam status social, origem tribal, estado civil e espiritualidade. Cada padrão era uma linguagem viva.', '🌍', 1, 'africa'),
  ('1500–1888', 'A Diáspora e a Resistência', 'Trazidas forçadamente ao Brasil, mulheres africanas escondiam sementes de alimento entre as tranças para sobreviver à travessia. O cabelo se tornava resistência material.', '⛓️', 2, 'brasil'),
  ('Século XIX', 'Proibição e Apagamento', 'Com o racismo estrutural do pós-escravidão, cabelos crespos e tranças foram associados à "falta de higiene". A pressão social impôs o alisamento como norma de aceitação.', '✂️', 3, 'brasil'),
  ('1970–1990', 'Black Power e Reafirmação', 'O movimento negro brasileiro, influenciado pelo civil rights americano, resgata o crespo e as tranças como símbolos políticos e de orgulho.', '✊', 4, 'resistencia'),
  ('2000–2020', 'Movimento Natural e Mercado', 'A transição capilar vira fenômeno. Trancistas ganham visibilidade, YouTubers negras ensinam técnicas, e o mercado de beleza afro explode.', '📱', 5, 'resistencia'),
  ('2023–Hoje', 'Reconhecimento Oficial e Futuro', 'A profissão de trancista entra no debate de regulamentação. O Mapa Afetivo e pesquisas como esta documentam a luta por direitos, crédito e reconhecimento.', '📜', 6, 'resistencia');

INSERT INTO public.galeria (titulo, arquivo, secao, ordem) VALUES
  ('Kamyla em processo', '/media/photos/_MG_0317.jpg', 'aprendizado', 1),
  ('Arte nas mãos', '/media/photos/_MG_0329.jpg', 'identidade', 2),
  ('Trança box braid', '/media/photos/_MG_0346.jpg', 'identidade', 3),
  ('Detalhes da trança', '/media/photos/_MG_0370.jpg', 'identidade', 4),
  ('Modelo com twist', '/media/photos/_MG_0398.jpg', 'identidade', 5),
  ('Finalização', '/media/photos/_MG_0527.jpg', 'identidade', 6),
  ('Retrato ancestral', '/media/photos/Cópia de IMG_3732.jpg', 'historia', 7);
