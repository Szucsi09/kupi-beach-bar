"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Logo } from "@/components/kupi/logo";

const WavePath = () => (
  <path
    fill="#ffffff"
    d="M0,64 C240,120 480,8 720,40 C960,72 1200,120 1440,72 L1440,120 L0,120 Z"
  />
);

type MenuDishFlipProps = {
  image: string;
  alt: string;
  title: string;
  desc: string;
  ingredients: string[];
};

const MenuDishFlip = ({ image, alt, title, desc, ingredients }: MenuDishFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="dish reveal">
      <div className="dish-flip-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`dish-flip-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="dish-flip-front">
            <div className="dish-img">
              <Image src={image} alt={alt} width={400} height={400} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="dish-flip-back">
            <div className="dish-back-content">
              <h4>{title}</h4>
              <ul>
                {ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export const KupiHome = () => {
  useReveal();

  return (
    <>
      <header className="nav" id="nav" data-screen-label="Navigation">
        <div className="wrap nav-inner">
          <Logo />
          <nav className="nav-links" id="navLinks">
            <a href="#menu" className="nlink">
              Menü
            </a>
            <a href="#location" className="nlink">
              Megtalálsz minket
            </a>
            <a href="#menu" className="btn btn-lime">
              Megnézem a menüt
            </a>
          </nav>
          <button
            type="button"
            className="nav-toggle"
            id="navToggle"
            aria-label="Menü megnyitása"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <span id="top" />

      <section className="hero wood-bg" data-screen-label="Hero">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow on-turq">Strand · Tó · Friss konyha</span>
            <h1 className="display hero-title" style={{ marginTop: 16 }}>
              <span className="word">Igazi</span>
              <span className="word">ételek</span>
              <br />
              <span className="word">a</span>
              <span className="word">vízparton.</span>
            </h1>
            <p className="subline">
              A KuPi Beach Barnál nem kell kompromisszumot kötni — friss
              alapanyagok, gondosan készített fogások, közvetlenül a tó
              partján.
            </p>
            <a href="#menu" className="btn btn-lime">
              Megnézem a menüt <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-art reveal">
            <div className="hero-ph">
              <Image
                src="/images/kupiBB9.jpg"
                alt="A türkiz KuPi Beach Bar faház a tó partján"
                width={600}
                height={600}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hero-badge">
              <span className="big">Friss</span>
              ma reggel
              <br />
              érkezett
            </div>
          </div>
        </div>
        <div className="wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <WavePath />
          </svg>
        </div>
      </section>

      <section className="empathy" data-screen-label="Empátia">
        <div className="wrap">
          <div className="inner reveal">
            <p>
              Tudjuk, hogy egy strandbüfétől senki sem vár különöset.{" "}
              <span className="accent">Mi sem értünk egyet ezzel.</span>
            </p>
            <span className="em-i">
              A KuPi-ban minden fogást úgy készítünk, mintha te lennél az
              egyetlen vendég ma — mert addig, amíg a rendelésedet várja, az
              vagy.
            </span>
          </div>
        </div>
      </section>

      <section className="strengths" data-screen-label="Három erősség">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Amiben hiszünk</span>
            <h2 className="display">Frissen. Helyileg. A víz mellett.</h2>
          </div>
          <div className="cards-3">
            <div className="feat-card reveal">
              <div className="feat-ic" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c.8 2.4-.6 3.6-1.6 4.8C9.2 9.2 8.5 10.4 8.5 12a3.5 3.5 0 0 0 7 0c0-1.2-.5-2.2-1.3-3 .2 1-.4 1.8-1 2.1.4-2.4-.6-5.4-1.2-8.1Z" />
                  <path d="M6 13a6 6 0 1 0 12 0c0-2-1-3.6-2-5" />
                </svg>
              </div>
              <h3>Frissen készül, nem csak melegítve</h3>
              <p>
                Nem tartjuk melegen, amíg meg nem rendeled. Amikor rendelsz,
                akkor kezdjük.
              </p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-ic" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20c-4 0-7-2.5-7-7 0-4.5 3.5-8 9-8.5 .5 5.5-2.5 9-9 9.5" />
                  <path d="M4 20c1.5-5 4.5-8 9-9.5" />
                </svg>
              </div>
              <h3>Helyi alapanyagok, szezonális ízek</h3>
              <p>
                Amit a tájék ad, azzal dolgozunk. Ezért változik a menü — és
                ezért érdemes visszajönni.
              </p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-ic" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M3 16c1.6 0 1.6 1.6 3.2 1.6S7.8 16 9.4 16s1.6 1.6 3.2 1.6S14.2 16 15.8 16s1.6 1.6 3.2 1.6" />
                  <path d="M3 20c1.6 0 1.6 1.6 3.2 1.6S7.8 20 9.4 20s1.6 1.6 3.2 1.6S14.2 20 15.8 20s1.6 1.6 3.2 1.6" />
                </svg>
              </div>
              <h3>A víz partján, nem mellette</h3>
              <p>Van pár hely, ahol igazán jó leülni. Mi ott vagyunk.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="audience" data-screen-label="Célcsoport">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Mindenkinek</span>
            <h2 className="display">Akárhonnan jössz, van itt helyed.</h2>
          </div>
          <div className="aud-grid">
            <AudienceCard
              image="/images/kupiBB3.jpg"
              imageAlt="Családok a KuPi teraszon"
              kicker="Nyaraló família"
              title="Először jársz nálunk?"
              text="Gyerekbarát menü, gyors kiszolgálás, és olyasmi, amit a kicsik is megesznek — anélkül, hogy neked kellene győzködnöd őket. A szülőknek is van mit rendelni."
              linkLabel="Megnézem a menüt"
            />
            <AudienceCard
              image="/images/kupiBB5.jpg"
              imageAlt="KuPi terasz a tó partján"
              kicker="Üdülő vendég"
              title="Nyaralsz a közelben?"
              text="A KuPi az a hely, amiről majd otthon mesélsz. Helyi ízek, szezonális fogások, vízparti hangulat — olyat nem találsz meg máshol a térképen."
              linkLabel="Megnézem a napi ajánlatot"
            />
            <AudienceCard
              image="/images/kupiBB9.jpg"
              imageAlt="A türkiz KuPi faház"
              kicker="Helyi törzsvendég"
              title="Már ismersz minket?"
              text="Akkor tudod, miről beszélünk. A minőség nem szezonális nálunk — és te voltál az első, aki ezt észrevette. Köszönjük, hogy visszajössz."
              linkLabel="Megnézem, mi újult meg"
            />
          </div>
        </div>
      </section>

      <section className="gallery" data-screen-label="Galéria">
        <div className="wrap">
          <div className="gallery-grid reveal">
            <div className="gallery-main">
              <Image
                src="/images/kupiBB5.jpg"
                alt="KuPi Beach Bar terasz a tó partján"
                width={800}
                height={480}
                className="h-[480px] w-full object-cover max-[680px]:h-[260px]"
              />
            </div>
            <div className="gallery-side">
              <div className="gs-item">
                <Image
                  src="/images/kupiBB8.jpg"
                  alt="KuPi sliderek és köret"
                  width={400}
                  height={230}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="gs-item">
                <Image
                  src="/images/kupiBB7.jpg"
                  alt="KuPi ételek — sliders és sült rizs"
                  width={400}
                  height={230}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu wood-bg" id="menu" data-screen-label="Menü kiemelés">
        <div className="wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <WavePath />
          </svg>
        </div>
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <div className="reveal">
            <span className="eyebrow center on-turq">A mai ajánlat</span>
            <h2 className="display" style={{ marginTop: 14 }}>
              Ma ezt ajánljuk
            </h2>
            <p className="menu-sub">
              Amit ma reggel hoztak, ma el is fogy. Holnap lehet, hogy más lesz
              — de az is ugyanolyan friss lesz.
            </p>
          </div>
          <div className="menu-grid">
            <MenuDish
              image="/images/kupiBB2.jpg"
              alt="Ropogós sült haltál sült krumplival"
              title="Ropogós haltál"
              desc="Friss sült hal, házi tartárral és sült krumplival"
            />
            <MenuDish
              image="/images/kupiBB8.jpg"
              alt="KuPi burger briós zsemlével és hasábburgonyával"
              title="KuPi burger"
              desc="Marhahús, érlelt sajt, házi brioche és ropogós saláta"
            />
            <MenuDish
              image="/images/kupiBB7.jpg"
              alt="Ázsiai csirke sliderek sült rizzsel"
              title="Ázsiai csirke sliderek"
              desc="Ropogós csirke briós buciban, wokban sült rizzsel"
            />
            <MenuDishFlip
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grillezettPisztrang-Mn0fi0SVfAvNr4Skqw8eWGOz9tZepf.jpg"
              alt="Grillezett pisztráng sült krumplival és savanyú uborkával"
              title="Grillezett pisztráng"
              desc="Helyi tóból, citromos-kapros vajjal"
              ingredients={[
                "Friss pisztráng (helyi tóból)",
                "Citromos-kapros vaj",
                "Sült krumpli",
                "Savanyú uborka",
                "Friss citrom"
              ]}
            />
            <MenuDish
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kertiSalata-PwKwkSaTRuauMfXotiZxdvx1KPrr2J.jpg"
              alt="Kerti saláta tál kecskesajttal és szezonális zöldségekkel"
              title="Kerti saláta tál"
              desc="Szezonális zöldségek, kecskesajttal és pirított maggal"
            />
            <MenuDish
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limonade-LM9rJcnjCCfPGaQcHNqDCs052C9GOG.webp"
              alt="Házi limonádé friss citrommal és friss mentával"
              title="Házi limonádé"
              desc="Frissen facsart, napi készítés"
            />
          </div>
          <div className="menu-foot reveal">
            <a href="#menu" className="textlink lime" style={{ fontSize: 17 }}>
              Teljes menü megtekintése <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="testi" data-screen-label="Vendégvélemények">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Vendégeink szerint</span>
            <h2 className="display">Amit a vendégeink mondanak</h2>
          </div>
          <div className="quotes">
            <Testimonial
              quote="A gyerekeim általában mindennel szemben kritikusak — itt kétszer kértek. Ez mindent elmond."
              name="Ági"
              context="két gyerekkel nyaralt a tónál"
            />
            <Testimonial
              quote="Nem számítottam rá, hogy a nyaralás legjobb étkezése egy strandbüfében lesz. De így lett."
              name="Bence"
              context="első alkalommal járt a tónál"
            />
            <Testimonial
              quote="Évek óta ez a kedvenc helyünk. A minőség nem változott — csak egyre jobb lett."
              name="Zsuzsa"
              context="helyi lakos"
            />
          </div>
        </div>
      </section>

      <section className="about" data-screen-label="A KuPi-ról">
        <div className="wrap about-grid">
          <div className="reveal">
            <span className="eyebrow">A mi történetünk</span>
            <h2 className="display">Miért csináljuk így?</h2>
            <p>Nem azért vagyunk itt, mert a strandon mindenki eszik valamit.</p>
            <p>
              Azért vagyunk itt, mert úgy gondoljuk, hogy a vízparton is lehet
              valóban jót enni — olyat, ami megéri, olyat, amire visszajössz.
            </p>
            <p>
              A KuPi Beach Bar{" "}
              <strong>nem egy büfé, amelyik ételt is felszolgál.</strong> Egy
              hely, amelyik komolyan veszi, amit csinál — és amelyik örül,
              amikor te is visszatérsz.
            </p>
          </div>
          <div className="reveal">
            <div className="ph about-ph">
              <Image
                src="/images/kupiBB4.jpg"
                alt="KuPi Beach Bar — a hely kívülről, fehér pergola és türkiz hordók"
                width={600}
                height={750}
                className="h-full w-full rounded-[inherit] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="loc" id="location" data-screen-label="Helyszín és nyitvatartás">
        <div className="wrap loc-grid">
          <div className="reveal">
            <span className="eyebrow">Megtalálsz minket</span>
            <h2 className="display">A tó partján vagyunk</h2>
            <p className="lead">Ha látod a vizet, már majdnem itt is vagy.</p>
            <div className="hours-title">Szezonban minden nap várunk.</div>
            <div className="hours">
              <div className="row">
                <span className="day">Hétfő – Csütörtök</span>
                <span className="time">11:00 – 21:00</span>
              </div>
              <div className="row">
                <span className="day">Péntek – Szombat</span>
                <span className="time">11:00 – 23:00</span>
              </div>
              <div className="row">
                <span className="day">Vasárnap</span>
                <span className="time">11:00 – 21:00</span>
              </div>
              <div className="row closed">
                <span className="day">Szezonon kívül</span>
                <span className="time">Zárva</span>
              </div>
            </div>
            <div className="contact-row">
              <span className="ci">
                <span className="dot" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </span>
                Tó utca 1., Strand
              </span>
              <span className="ci">
                <span className="dot" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 6a1 1 0 0 1 1-2Z" />
                  </svg>
                </span>
                +36 30 123 4567
              </span>
            </div>
          </div>
          <div className="reveal">
            <div className="ph map-ph">
              <Image
                src="/images/kupiBB5.jpg"
                alt="KuPi Beach Bar — tóparti hangulat"
                width={600}
                height={600}
                className="h-full w-full rounded-[inherit] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer data-screen-label="Footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="col">
              <Logo light className="mb-[18px]" />
              <p style={{ maxWidth: "34ch", marginTop: 6 }}>
                Igazi ételek a vízparton. Friss alapanyagok, gondosan készített
                fogások — közvetlenül a tó partján.
              </p>
            </div>
            <div className="col">
              <h4>Elérhetőség</h4>
              <p>Tó utca 1., Strand</p>
              <a href="tel:+36301234567">+36 30 123 4567</a>
              <a href="mailto:hello@kupibeachbar.hu">hello@kupibeachbar.hu</a>
            </div>
            <div className="col">
              <h4>Kövess minket</h4>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                    <rect x="4" y="4" width="16" height="16" rx="5" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
              <p style={{ marginTop: 18 }}>
                <a href="#menu">Menü</a>
                <a href="#location">Megtalálsz minket</a>
              </p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2025 KuPi Beach Bar</span>
            <span>Minden jog fenntartva.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

type AudienceCardProps = {
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  text: string;
  linkLabel: string;
};

const AudienceCard = ({
  image,
  imageAlt,
  kicker,
  title,
  text,
  linkLabel,
}: AudienceCardProps) => (
  <div className="aud-card reveal">
    <div className="top-accent" />
    <div className="ac-img">
      <Image src={image} alt={imageAlt} width={400} height={200} className="h-full w-full object-cover" />
    </div>
    <div className="ac-body">
      <span className="kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#menu" className="textlink">
        {linkLabel} <span className="arrow">→</span>
      </a>
    </div>
  </div>
);

type MenuDishProps = {
  image: string;
  alt: string;
  title: string;
  desc: string;
};

const MenuDish = ({ image, alt, title, desc }: MenuDishProps) => (
  <div className="dish reveal">
    <div className="dish-img">
      <Image src={image} alt={alt} width={400} height={400} className="h-full w-full object-cover" />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const MenuDishPlaceholder = ({ title, desc }: { title: string; desc: string }) => (
  <div className="dish reveal">
    <div className="ph ph-on-turq dish-ph" role="img" aria-label="Fogás fotó helye">
      <span className="ph-tag">Fogás fotó</span>
    </div>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

type TestimonialProps = {
  quote: string;
  name: string;
  context: string;
};

const Testimonial = ({ quote, name, context }: TestimonialProps) => (
  <div className="quote reveal">
    <span className="qmark">”</span>
    <blockquote>{quote}</blockquote>
    <div className="who">
      <span className="name">{name}</span>
      <span className="ctx">{context}</span>
    </div>
  </div>
);
