import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import AudioPlayer from '../ui/AudioPlayer'
import BraidDivider from '../ui/BraidDivider'
import BeadDivider from '../ui/BeadDivider'
import ImageCarousel from '../ui/ImageCarousel'
import { CARROSSEL1_IMAGES, CARROSSEL2_IMAGES } from '../../data/content'

const COL = { maxWidth: '720px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }

function InlinePhoto({ src, alt, caption, ratio = '3/2' }) {
  return (
    <ScrollReveal variant="fade-up">
      <figure style={{ margin: '0 0 3rem' }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', display: 'block' }}
        />
        <figcaption style={{
          paddingTop: '0.55rem',
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          borderTop: '1px solid var(--border)',
          marginTop: '0.5rem',
        }}>
          {caption}
        </figcaption>
      </figure>
    </ScrollReveal>
  )
}

function PullQuote({ text, author, role, accentColor = 'var(--terracota)' }) {
  return (
    <ScrollReveal variant="fade-up">
      <blockquote style={{ margin: '0 0 2.5rem', paddingLeft: '1.5rem', borderLeft: `4px solid ${accentColor}` }}>
        <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)', lineHeight: 1.75, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          {text}
        </p>
        <footer style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '20px', height: '1px', background: accentColor, flexShrink: 0 }} />
          <div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', fontStyle: 'normal', display: 'block' }}>{author}</span>
            {role && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'normal' }}>{role}</span>}
          </div>
        </footer>
      </blockquote>
    </ScrollReveal>
  )
}

export default function AutoestimaIdentidade() {
  return (
    <section id="identidade" style={{ background: 'var(--bg-secondary)' }}>

      {/* ── Cabeçalho ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem' }}>
        <ScrollReveal variant="fade-up">
          <SectionLabel number={2} text="AUTOESTIMA" />
        </ScrollReveal>
        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', color: 'var(--text-primary)' }}
          >
            FIOS DA<br />
            <span className="wood-text-gold">IDENTIDADE</span>
          </h2>
        </ClipReveal>
      </div>

      {/* ── Carrossel — ensaio fotográfico ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Galeria de Fotos</p>
        </ScrollReveal>
        <ImageCarousel images={CARROSSEL2_IMAGES} />
      </div>

      {/* ── Coluna editorial ── */}
      <div style={COL}>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            O filme "Felicidade por um fio", romance norte-americano, aborda as vivências de
            uma mulher negra e sua relação com o cabelo afro. Violet, protagonista do filme,
            foi ensinada a viver nos padrões de uma sociedade racista e, por isso, associava
            o cabelo liso à perfeição. Durante a obra, a mesma sofre uma desilusão amorosa e
            decide passar pela transição capilar, processo em que a pessoa muda o formato do
            fio aceitando seu cabelo natural, aprendendo sobre suas raízes, e chegando à
            aceitação capilar.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            A história de Violet não é apenas uma obra cinematográfica, e sim um espelho da
            vida de muitas mulheres negras que um dia passaram pela transição capilar. O
            processo de aceitação vai além de apenas "mudar o cabelo", é um processo que exige
            reconexão com a identidade e a ancestralidade. Neste momento, as tranças utilizadas,
            muitas vezes, para esconder o cabelo se tornam um escape e um facilitador para esse
            processo que exige força, paciência e sensibilidade.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Maria Luiza Pereira, trancista no Riacho Fundo 2, região administrativa de Brasília,
            conta como as tranças a auxiliaram a passar pela transição de forma mais leve.
          </p>
        </ScrollReveal>

        <PullQuote
          text='"No decorrer de me descobrir como uma mulher preta, eu me deparei com a necessidade de passar pela transição capilar. E durante a transição, tive que aprender a lidar com o meu cabelo crespo, e isso me despertou o olhar como mulher preta, cuidando de mim e depois das outras. Foi aí que eu desenvolvi a habilidade de trançar."'
          author="Maria Luiza Pereira"
          role="Trancista no Riacho Fundo 2"
          accentColor="var(--terracota)"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            A trança, além do viés estético, é símbolo de autoestima, cultura e resistência
            negra. Sua rica herança histórica e cultural traz significado de ancestralidade
            aos fios trançados, sendo uma forma de comunicação e identidade entre mulheres
            e homens negros. Lady Barbara, mulher negra e professora de dança, compartilha
            sua relação com a trança:
          </p>
        </ScrollReveal>

        <PullQuote
          text={`"Além da estética e de me sentir muito bonita, eu acabei descobrindo o meu cabelo natural. Eu nasci numa época em que o cabelo bonito era o 'pranchado' e foi graças às tranças que eu tive coragem para assumir o meu cabelo natural, minha identidade. Foi um ato de autoperdão."`}
          author="Lady Barbara"
          role="Mulher negra e professora de dança"
          accentColor="var(--ouro)"
        />

        {/* ── Podcast — antes de Doechii ── */}
        <ScrollReveal variant="fade-up">
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-tag mb-3">Ouça o episódio</p>
            <AudioPlayer
              title="Fios de Identidade e Autoestima"
              episode="PI 1/2026"
              src="/media/audio/podcast.mp3"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Hoje, artistas negros com suas obras ascendem socialmente levando as tranças a
            lugares de poder e marcando uma nova era de representatividade a meninos e meninas
            negras. A rapper estadunidense Doechii, ganhadora de dois Grammys, fez uma <a href="https://youtu.be/Ggg45-e4oj0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracota)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>performance musical</a> em que ela e suas dançarinas estavam ligadas por tranças que
            simbolizavam a conexão da artista com as mulheres negras através do Hip-Hop.
          </p>
        </ScrollReveal>

        {/* Foto — Doechii */}
        <InlinePhoto
          src="/media/photos/seq-3.jpg"
          alt="Doechii — performance musical com tranças"
          caption="DOECHII, rapper estadunidense, performando ligada por tranças com suas bailarinas/ foto: Scott Kowalchyk"
          ratio="16/9"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            No Brasil não é diferente, as tranças e as características físicas e culturais
            afro-brasileiras são fortalecidas por artistas como Iza, Mano Brown, Bella Campos,
            Negra Li e Preta Gil. A cena do rap, abastecida por mulheres negras, criou uma
            identidade visual onde os elementos e as letras exaltam e lutam por um futuro onde
            características antes oprimidas se tornam base de um empoderamento coletivo. Esse
            movimento chega ao Distrito Federal por meio de multiartistas como Marcus Samuel
            Cunha, que escolheu usar tranças no primeiro clipe de sua carreira chamado <a href="https://youtu.be/jSEBLaJckVo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracota)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>"NEGO"</a>.
            Marcus conta que a primeira vez que conseguiu se enxergar como uma pessoa bonita
            foi através das tranças.
          </p>
        </ScrollReveal>

        {/* Foto — Marcus Samuel clipe Nego */}
        <InlinePhoto
          src="/media/photos/seq-4.jpg"
          alt="Marcus Samuel — clipe Nego"
          caption="Markus no clipe 'NEGO'/ Foto: João Gabriel Andrade"
          ratio="4/3"
        />

      </div>

      {/* ── Carrossel 1 — ensaio fotográfico antes de Abrindo caminhos ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Galeria de Fotos</p>
        </ScrollReveal>
        <ImageCarousel images={CARROSSEL1_IMAGES} />
      </div>

      <div style={COL}>

        <BraidDivider className="mb-8" />

      </div>

      <BeadDivider className="my-8" />

      <CenteredQuote
        quote="Falar de trança é falar de território, é falar de história de vida"
        author="Layla Maryzandra"
        role=""
        dark
        accentColor="var(--ouro)"
      />

    </section>
  )
}
