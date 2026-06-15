import { Globe, Link2, Scissors, Megaphone, Smartphone, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import AfroPattern from '../ui/AfroPattern'
import SectionLabel from '../ui/SectionLabel'
import StatCard from '../ui/StatCard'
import StarDivider from '../ui/StarDivider'
import TiltCard from '../ui/TiltCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { MARKET_STATS, TIMELINE_EVENTS } from '../../data/content'

const ICON_MAP = { Globe, Link2, Scissors, Megaphone, Smartphone, FileText }
const FASE_COLORS = { africa: '#D4A843', brasil: '#C0522A', resistencia: '#B8622A' }
const FASE_LABELS = { africa: 'África', brasil: 'Brasil Colonial', resistencia: 'Resistência Atual' }

// Coluna editorial central
const COL = { maxWidth: '720px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }

export default function MercadoCredito() {
  return (
    <section id="mercado" style={{ background: 'var(--bg-primary)' }}>
      {/* ── Cabeçalho ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem' }}>
        <ScrollReveal variant="fade-up">
          <SectionLabel number={3} text="Abrindo caminhos · Onde estão os dados?" />
        </ScrollReveal>
        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-2"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            MERCADO VIVO,<br />
            <span className="wood-text-verde">DADOS AUSENTES</span>
          </h2>
        </ClipReveal>
      </div>

      {/* ── Coluna editorial — abertura ── */}
      <div style={COL}>
        <ScrollReveal variant="fade-up">
          <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500 }}>
            Acostumados a ver e difundir as tranças como obras de arte com senso estético
            apurado, esquecemos de olhar com aprofundamento para o sujeito. Estamos falando
            primordialmente de mulheres negras e periféricas com histórias individuais, mas
            com um ponto em comum: a necessidade de independência financeira.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            O antropólogo Cláudio Ferreira, com mais de 20 anos de experiência, entende que
            as tranças viram empreendimentos no século XXI, com a influência do modo de vida
            capitalista, que transforma cultura em produto. Deste modo, as tranças não ficam
            de fora — o trabalho das trancistas começa quase sempre na informalidade, nos
            quintais, salas de casa ou pequenos salões de bairros, vendo a mãe, a avó, as
            tias trançando.
          </p>
        </ScrollReveal>
      </div>

      {/* ── Stats grid ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {MARKET_STATS.map((stat, i) => (
            <TiltCard key={i} intensity={5}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ''}
                label={stat.label}
                delay={i * 70}
              />
            </TiltCard>
          ))}
        </div>
      </div>

      <StarDivider className="mb-10" style={{ maxWidth: '720px', margin: '0 auto' }} />

      {/* ── Perfil editorial: Laodicéia Nascimento ── */}
      <div style={COL}>
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-2">Perfil</p>
          <h3
            className="font-display font-black uppercase mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Laodicéia Nascimento,<br />48 anos de tranças
          </h3>
        </ScrollReveal>

        {/* Foto Laodicéia */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/imagem 5.jpeg"
              alt="Laodicéia Nascimento em seu salão"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500 }}>
            O mercado das trancistas no Distrito Federal tem em sua biografia o nome de
            Laodicéia Nascimento, professora por formação, mas que se destaca por estar
            no mundo das tranças há mais de 48 anos. Ela, por ser uma mulher negra retinta
            com cabelos crespos, não tentava se enquadrar nos padrões de beleza eurocêntricos
            impostos na época. Em sua adolescência, buscava formas de fortalecer sua autoestima
            e foi observando Dona Lourdes, trancista no Guará, região administrativa de
            Brasília, que nasceu uma proposta: ela ajudaria Lourdes como trançadeira — ofício
            de fazer trança sem cobrar pelo serviço — como forma de pagar por suas tranças,
            já que seus pais não tinham condições financeiras.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Apaixonada pelo serviço, foram surgindo clientes que se identificavam com a
            filosofia de Laodicéia, que acreditava no penteado como uma forma de resistência
            ao racismo. A escolha de se dedicar integralmente se relaciona por entender a
            profissão como um encontro e deixa claro que a maior sensação foi de liberdade.
          </p>
        </ScrollReveal>

        {/* Pull quote — Laodicéia */}
        <ScrollReveal variant="fade-up">
          <blockquote style={{ margin: '0 0 2.5rem', paddingLeft: '1.5rem', borderLeft: '4px solid var(--terracota)' }}>
            <p style={{ fontSize: '1.45rem', lineHeight: 1.65, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              "As tranças são minha forma de comunicação com outras mulheres."
            </p>
            <footer style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--terracota)', flexShrink: 0 }} />
              <div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>Laodicéia Nascimento</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)' }}>Trancista há mais de 48 anos no DF</span>
              </div>
            </footer>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            O sustento das tranças criou seus três filhos, uma delas Thanan Barreto que
            seguiu os passos profissionais da mãe. Como a tradição já prevê, a memória mais
            antiga de Thanan é o cuidado da mãe trançando seus cabelos. Thanan afirma que
            as tranças significam amor na nossa família, o mesmo afeto que passa de geração
            em geração e chega em sua filha e neta de Laodicéia, Lara Beatriz da Silva, que
            também escolheu ser trancista.
          </p>
        </ScrollReveal>

        {/* Foto Laodicéia e Thanan */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/imagem.png"
              alt="Laodicéia e Thanan — mãe e filha trancistas"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>

        <StarDivider className="mb-8" />

        {/* Perfil — Kamyla Vieira */}
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-2">Perfil</p>
          <h3
            className="font-display font-black uppercase mb-5"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Kamyla Vieira,<br />seis anos na profissão
          </h3>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            No outro lado da cidade, Kamyla Vieira de 23 anos, completa seu sexto ano
            engajada na profissão. Em seu salão autêntico pintado em amarelo, decorado
            com grafites de flores e com desenhos que remetem elementos da beleza negra,
            localizado na Cidade Estrutural, região administrativa do DF. Kamyla ficou em
            primeiro lugar em uma competição de trancistas no prêmio Latinidades, festival
            que exalta a cultura da Mulher Afro-Latino Americana, Caribenha e da Diáspora
            há 19 anos.
          </p>
        </ScrollReveal>

        {/* Foto Kamyla */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/Cópia de IMG_3937.jpg"
              alt="Kamyla Vieira em seu salão na Cidade Estrutural"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      {/* ── Infográfico de crédito — largura maior ── */}
      <div className="section-padding max-w-7xl mx-auto">
        <ScrollReveal variant="fade-up">
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '4rem',
            }}
          >
            <p className="label-tag mb-4">Infográfico · Acesso ao Crédito</p>
            <h3
              className="font-display font-black uppercase mb-4"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
            >
              Simulando o acesso ao crédito
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '60ch' }}>
              De acordo com o Censo 2022 do IBGE, 72,9% da população preta e parda residem
              nas favelas e comunidades urbanas brasileiras. A geografia em que as trancistas
              estão localizadas contribui severamente para a invisibilidade socioeconômica e
              dificulta o acesso a crédito.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Renda sem formalização dificulta comprovação bancária', pct: 84 },
                { label: 'Falta de linha específica para trabalho ancestral autônomo', pct: 78 },
                { label: 'Burocracia de análise ignora realidade territorial periférica', pct: 76 },
                { label: 'Jornadas exaustivas reduzem tempo para capacitação financeira', pct: 69 },
                { label: 'Reconhecimento recente da ocupação ainda não virou política de crédito', pct: 73 },
              ].map((item, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                  <BarItem {...item} />
                </ScrollReveal>
              ))}
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
              * Referências: Censo 2022, CBO 2025 e levantamento Tranças no Mapa (DF/Entorno)
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Break tipográfico ── */}
      <div
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-secondary)',
        }}
      >
        <p
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            color: 'var(--text-primary)',
            letterSpacing: '0.06em',
            textAlign: 'center',
            lineHeight: 1.05,
            maxWidth: '14ch',
          }}
        >
          Da rota de fuga{' '}
          <span style={{ WebkitTextStroke: '1.5px var(--terracota)', color: 'transparent' }}>
            à autonomia
          </span>
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AfroPattern variant="mudcloth" color="#2D6A4F" opacity={0.06} />
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Linha do Tempo</p>
          <h3
            className="font-display font-black uppercase mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            A jornada de uma profissão
          </h3>
        </ScrollReveal>
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {TIMELINE_EVENTS.map((event, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
              }}
            >
              <TimelineItem event={event} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Onde estão os dados — coluna editorial ── */}
      <div style={{ ...COL, paddingTop: '1rem', paddingBottom: '3rem' }}>
        <ScrollReveal variant="fade-up">
          <StarDivider className="mb-8" />
          <p className="label-tag mb-4">Onde estão os dados?</p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            De acordo com o Censo 2022 do Instituto Brasileiro de Geografia e Estatística,
            72,9% da população preta e parda residem nas favelas e comunidades urbanas
            brasileiras. A geografia em que as trancistas e o público que utilizam as tranças,
            em sua maioria pessoas negras, estão localizados contribui severamente para a
            invisibilidade socioeconômica.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Gabriella Siqueira dos Santos, em seu Trabalho de Conclusão de Curso em
            Pedagogia, "Do Trançar ao Trançado", reflete sobre o livro "Memórias da
            plantação: episódios de racismo cotidiano" de Grada Kilomba. A escritora da
            obra alerta sobre como a potência do racismo se insere nas estruturas sociais
            de forma intensa e acentuada que as pessoas negras são, em sua maioria,
            excluídas das políticas e das estruturas sociais. Esse não reconhecimento
            histórico da profissão pode ser dado por muitas vezes como reflexo do racismo.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Viver uma profissão onde o reconhecimento vive às margens de uma história é
            conter em si as dores dessa marginalização. Apesar de ser uma prática ancestral,
            apenas no ano passado, em junho de 2025, que a profissão trancista foi
            denominada como ofício pela Classificação Brasileira de Ocupações.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A invisibilidade dessas mulheres permeia ainda mais quando falamos de dados e
            pesquisas. Não existem dados do mercado formal que falam estatisticamente sobre
            quantas profissionais atuam em Brasília ou no Brasil, e isso impacta diretamente
            na qualidade de trabalho, assistência, suporte mental, físico e econômico
            dessas mulheres.
          </p>
        </ScrollReveal>
      </div>

      <CenteredQuote
        quote="A maioria das trancistas opera sem o devido resguardo jurídico e econômico. A falta de políticas públicas específicas, o acesso restrito a linhas de crédito para a estruturação de salões e a ausência de uma regulamentação que valide a profissão como um saber técnico-cultural forçam essas trabalhadoras a jornadas duplas ou triplas."
        author="José Fhanoel"
        role="Artigo 'Tecendo histórias e caminhos: a trança como tecnologia de liberdade e identidade na diáspora'"
        dark
        accentColor="var(--verde)"
      />

      {/* ── Layla e o Tranças no Mapa ── */}
      <div style={{ ...COL, paddingTop: '3rem', paddingBottom: '3rem' }}>
        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Pensando nessa exclusão social, a pesquisadora e trancista Layla Maryzandra
            criou o Tranças no Mapa, projeto que mapeia tranças no Distrito Federal,
            promovendo pesquisas e oficinas voltadas à essa temática profissional. A mesma
            mapeou, entre abril e julho de 2023, 122 trancistas no DF e Entorno, que vieram
            de diferentes regiões do país, sendo 1 chilena. Também evidenciou a atuação em
            sua maioria em Ceilândia, Taguatinga e Santa Maria, regiões administrativas da
            capital. Outros projetos como Fios da Ancestralidade e Mapa Afetivo também foram
            criados por Layla a fim de criar rodas de diálogo entre trancistas e dar
            visibilidade a essas mulheres.
          </p>
        </ScrollReveal>

        {/* Foto Layla no encontro */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/imagem.jpeg"
              alt="Layla Maryzandra no encontro do Tranças no Mapa"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* Foto — Evento Tranças no Mapa (panfleto) */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/iomagm.jpeg"
              alt="Panfleto do evento Tranças no Mapa"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Ser trancista vai além, essas mulheres atuam, simultaneamente, como artistas,
            psicólogas de suas clientes, historiadoras cotidianas e empreendedoras. E,
            infelizmente, o mercado formal não reconhece a complexidade dessa atuação,
            primordialmente, como patrimônio cultural e sua importância ancestral.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function BarItem({ label, pct }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: 'var(--text-primary)' }}>{label}</span>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600,
          color: 'var(--terracota)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease 0.8s',
        }}>{pct}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: isVisible ? `${pct}%` : '0%',
          background: `linear-gradient(90deg, var(--terracota), var(--ouro))`,
          borderRadius: '2px',
          transition: isVisible ? `width 1.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s` : 'none',
        }} />
      </div>
    </div>
  )
}

function TimelineItem({ event }) {
  const color = FASE_COLORS[event.fase]
  const label = FASE_LABELS[event.fase]
  const IconComponent = ICON_MAP[event.icon]

  return (
    <div
      className="flex gap-5 md:gap-8"
      style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          border: `2px solid ${color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg-surface)', flexShrink: 0, color,
        }}>
          {IconComponent && <IconComponent size={17} strokeWidth={1.5} />}
        </div>
      </div>
      <div style={{ flex: 1, paddingTop: '0.5rem' }}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', color,
            background: `${color}18`, padding: '3px 10px',
          }}>{label}</span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {event.periodo}
          </span>
        </div>
        <h4 className="font-display font-bold uppercase mb-1" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
          {event.titulo}
        </h4>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {event.descricao}
        </p>
      </div>
    </div>
  )
}




