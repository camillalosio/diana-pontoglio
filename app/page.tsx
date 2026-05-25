"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Baby,
  Calendar,
  Camera,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Menu,
  MonitorSmartphone,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CONFIG = {
  name: "Diana Pontoglio",
  role: "Medico Odontoiatra",
  master: "con Master Europeo Biennale in Medicina Estetica",
  phone: "+39 000 000 0000",
  email: "studio@dianapontoglio.it",
  address: "Via Roma, 15 · 25080 Padenghe sul Garda (BS)",
  googleMapsEmbedUrl: "", // Inserisci qui URL iframe/embed di Google Maps
  bookingUrl: "#prenota",
  instagramUrl: "https://www.instagram.com/",
  googleReviewsUrl: "https://www.google.com/search?q=Diana+Pontoglio+recensioni",
  googleReviewsWidgetEmbedUrl: "", // Inserisci URL widget recensioni Google dinamico: Elfsight, Trustindex, SociableKIT, EmbedSocial
  heroPhotoUrl: "/diana.png",
heroHorizonUrl: "/horizon.png",
};

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ToothIcon({ className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.5 3.5c1.6 0 2.5.8 4.5.8s2.9-.8 4.5-.8c2.5 0 4 2.1 4 4.8 0 2.3-1 4.1-1.7 6.4-.8 2.6-1.2 5.8-3.1 5.8-1.5 0-1.4-3.6-3.7-3.6s-2.2 3.6-3.7 3.6c-1.9 0-2.3-3.2-3.1-5.8C5 12.4 4 10.6 4 8.3c0-2.7 1.5-4.8 3.5-4.8Z" />
      <path d="M9 6.2c.8.4 1.7.6 3 .6s2.2-.2 3-.6" opacity=".6" />
    </svg>
  );
}

const nav = [
  ["Chi sono", "#chi-sono"],
  ["Servizi", "#servizi"],
  ["Tecnologia", "#tecnologia"],
  ["Recensioni", "#recensioni"],
  ["FAQ", "#faq"],
  ["Instagram", "#instagram"],
  ["Contatti", "#contatti"],
];

const highlights = [
  [<ToothIcon className="h-7 w-7" />, "Tecnologia avanzata", "Strumenti digitali per diagnosi precise e trattamenti minimamente invasivi."],
  [<Sparkles className="h-7 w-7" />, "Estetica e funzione", "Soluzioni personalizzate per migliorare sorriso, volto e benessere."],
  [<Heart className="h-7 w-7" />, "Approccio empatico", "Ascolto, attenzione e cura per ogni paziente, adulto o bambino."],
  [<Baby className="h-7 w-7" />, "Mamma, come te", "So quanto è importante prendersi cura di sé per prendersi cura degli altri."],
];

const services = [
  [<ToothIcon className="h-8 w-8" />, "Odontoiatria preventiva", "Controlli, igiene, prevenzione e mantenimento della salute orale."],
  [<Smile className="h-8 w-8" />, "Odontoiatria estetica", "Faccette, sbiancamento e trattamenti per un sorriso armonioso."],
  [<ShieldCheck className="h-8 w-8" />, "Implantologia avanzata", "Soluzioni affidabili e pianificate digitalmente per recuperare funzione e sicurezza."],
  [<Camera className="h-8 w-8" />, "Ortodonzia trasparente", "Allineatori e percorsi discreti per migliorare estetica e funzione."],
  [<Sparkles className="h-8 w-8" />, "Medicina estetica del viso", "Trattamenti naturali per valorizzare proporzioni, luminosità e freschezza."],
  [<MonitorSmartphone className="h-8 w-8" />, "Tecnologia digitale", "Scanner, fotografia clinica e smile design per percorsi chiari e misurabili."],
];

const credentials = [
  "Laurea in Odontoiatria",
  "Master Europeo in Medicina Estetica",
  "Aggiornamento continuo e formazione avanzata",
  "Approccio integrato sorriso-volto",
];

const reviews = [
  { name: "Martina R.", text: "Professionalità, gentilezza e tecnologie all’avanguardia. Lo studio della Dott.ssa Pontoglio è una garanzia." },
  { name: "Laura M.", text: "Mi sono sentita ascoltata e accompagnata in ogni fase. Risultato naturale e bellissimo." },
  { name: "Elena P.", text: "Ambiente elegante, cura del dettaglio e grande attenzione alla persona." },
];

const faqs = [
  {
    q: "La medicina estetica del volto dà un risultato naturale?",
    a: "Sì, quando viene pianificata con un approccio conservativo e personalizzato. L’obiettivo è valorizzare proporzioni, freschezza e armonia senza modificare l’identità del viso.",
    category: "Medicina estetica",
  },
  {
    q: "Quali trattamenti di medicina estetica del volto sono più richiesti?",
    a: "I più richiesti sono trattamenti per luminosità della pelle, idratazione profonda, ridefinizione delicata dei volumi, correzione di piccoli inestetismi e miglioramento dell’armonia sorriso-volto.",
    category: "Medicina estetica",
  },
  {
    q: "Quanto dura l’effetto dei trattamenti estetici del viso?",
    a: "Dipende dal trattamento, dalla pelle, dallo stile di vita e dagli obiettivi. Durante la consulenza viene costruito un piano realistico con tempi, mantenimento e aspettative chiare.",
    category: "Medicina estetica",
  },
  {
    q: "Che cos’è lo smile design digitale?",
    a: "È una progettazione estetica del sorriso basata su fotografie, analisi del volto e strumenti digitali. Aiuta a visualizzare il risultato e a pianificare trattamenti più precisi.",
    category: "Odontoiatria",
  },
  {
    q: "Le faccette dentali rovinano i denti?",
    a: "Le faccette moderne possono essere molto conservative, ma ogni caso va valutato. L’obiettivo è preservare il più possibile la struttura dentale e ottenere un risultato naturale e stabile.",
    category: "Odontoiatria",
  },
  {
    q: "Quando è consigliata una visita dal dentista?",
    a: "È consigliata una visita periodica anche in assenza di dolore. Prevenzione, igiene e diagnosi precoce permettono trattamenti più semplici, efficaci e meno invasivi.",
    category: "Odontoiatria",
  },
  {
    q: "Odontoiatria estetica e medicina estetica possono essere integrate?",
    a: "Sì. Sorriso, labbra, pelle e proporzioni del volto dialogano tra loro. Un piano integrato permette di ottenere un risultato più armonico e coerente.",
    category: "Approccio integrato",
  },
];

const hours = [
  ["Lunedì", "09:00 – 18:00"],
  ["Martedì", "09:00 – 18:00"],
  ["Mercoledì", "09:00 – 19:00"],
  ["Giovedì", "09:00 – 18:00"],
  ["Venerdì", "09:00 – 17:00"],
  ["Sabato", "Chiuso"],
  ["Domenica", "Chiuso"],
];

const instagramPosts = [
  { label: "Studio", type: "Ambiente" },
  { label: "Diana", type: "Personal branding" },
  { label: "Tecnologia", type: "Scanner digitale" },
  { label: "Smile tip", type: "Consiglio" },
  { label: "Prima visita", type: "Dietro le quinte" },
  { label: "Mamma e cura", type: "Valori" },
];

function SeoJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${CONFIG.name} - ${CONFIG.role}`,
    description: "Odontoiatria estetica avanzata, medicina estetica del volto, tecnologie digitali, smile design e percorsi personalizzati.",
    medicalSpecialty: ["Dentistry", "Aesthetic Medicine"],
    address: CONFIG.address,
    telephone: CONFIG.phone,
    email: CONFIG.email,
    openingHours: hours.map(([day, time]) => `${day} ${time}`),
    sameAs: [CONFIG.instagramUrl, CONFIG.googleReviewsUrl],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[.35em] text-[#91B3BE]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#274955] md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-8 text-[#506877]">{subtitle}</p>}
    </div>
  );
}

function ImagePlaceholder({ label, dark = false }) {
  return (
    <div className={`grid h-full min-h-[260px] place-items-center rounded-[2rem] border border-white/35 ${dark ? "bg-[#274955]/35 text-white" : "bg-white/30 text-[#274955]"}`}>
      <div className="text-center">
        <Camera className="mx-auto mb-4 h-10 w-10 opacity-70" />
        <p className="font-semibold">{label}</p>
        <p className="mt-2 text-sm opacity-70">Sostituisci con immagine reale</p>
      </div>
    </div>
  );
}

export default function DianaPontoglioLandingEditable() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#274955]">
      <SeoJsonLd />
      <h1 className="sr-only">Diana Pontoglio medico odontoiatra, odontoiatria estetica avanzata e medicina estetica</h1>

      <section className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[#91B3BE]/60 via-[#F7F4EF]/40 to-[#F7F4EF]" />
        <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(180deg,rgba(247,244,239,0)_0%,rgba(39,73,85,.55)_100%)]" />
        {CONFIG.heroHorizonUrl ? (
          <img src={CONFIG.heroHorizonUrl} alt="Orizzonte in palette blu e crema" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_65%,rgba(255,230,204,.85),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(145,179,190,.85),transparent_35%),linear-gradient(180deg,#d9e5e8_0%,#f3e4d0_54%,#718a96_55%,#274955_100%)]" />
        )}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-10 lg:px-16">
          <div className="grid h-20 w-20 place-items-center rounded-full border border-white/40 text-sm font-bold tracking-[.25em] text-white">DP</div>
          <div className="hidden rounded-full bg-white/20 px-5 py-3 text-sm font-medium text-white backdrop-blur md:flex md:gap-7">
            {nav.map(([label, href]) => <a key={label} href={href} className="hover:text-[#274955]">{label}</a>)}
          </div>
          <Button className="hidden rounded-full bg-[#91B3BE] px-7 text-white hover:bg-[#274955] md:flex">Prenota una visita</Button>
          <Menu className="text-white md:hidden" />
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-5 pb-0 pt-10 md:grid-cols-[1fr_.9fr] md:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="pb-20 md:pb-36">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.35em] text-[#5E95A6]">Odontoiatria avanzata, cura e umanità</p>
            <h2 className="max-w-2xl text-5xl font-serif leading-[.95] tracking-[-0.04em] md:text-7xl">Il tuo sorriso, la nostra missione.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#274955]">Odontoiatria estetica e funzionale con tecnologie all’avanguardia e un approccio su misura per te.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="group rounded-full bg-[#274955] px-8 py-6 text-white hover:bg-[#728191]">Prenota una visita <ChevronRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></Button>
              <Button variant="outline" className="rounded-full border-[#274955] bg-white/30 px-8 py-6 text-[#274955] backdrop-blur hover:bg-white">Scopri i trattamenti</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative flex min-h-[520px] items-end justify-center">
        {CONFIG.heroPhotoUrl ? (
  <img src={CONFIG.heroPhotoUrl} alt="Diana Pontoglio medico odontoiatra" className="relative z-10 max-h-[660px] w-full object-contain object-bottom" />
) : (
              <div className="relative z-10 flex h-[560px] w-[390px] items-end justify-center rounded-t-[14rem] bg-[#91B3BE]/55 shadow-2xl backdrop-blur">
                <ImagePlaceholder label="Foto scontornata di Diana" dark />
              </div>
            )}
          </motion.div>
        </div>

        <div className="relative z-20 mx-auto mt-0 max-w-6xl px-5 md:-mt-10 md:px-10 lg:px-16">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#274955]/92 text-white shadow-2xl backdrop-blur md:grid-cols-4">
            {highlights.map(([icon, title, text]) => (
              <div key={title} className="border-white/10 p-7 md:border-r last:border-r-0">
                <div className="mb-5 text-white/80">{icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-sono" className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-[#91B3BE]">Chi sono</p>
            <h2 className="mt-4 text-5xl font-serif tracking-[-0.04em]">Diana Pontoglio</h2>
            <p className="mt-4 font-semibold">{CONFIG.role}<br />{CONFIG.master}</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#506877]">Credo in un’odontoiatria che mette al centro la persona. Unisco competenza, tecnologia e sensibilità per offrire trattamenti efficaci, confortevoli e duraturi. Sono anche mamma, e so quanto sia importante la cura, ogni giorno.</p>
            <Button className="mt-8 rounded-full bg-[#274955] px-7 py-6 text-white hover:bg-[#728191]">Scopri di più su di me <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="grid gap-4">
            {credentials.map((item, i) => (
              <Card key={item} className="rounded-[1.5rem] border-0 bg-white shadow-sm">
                <CardContent className="flex items-center gap-5 p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#91B3BE]/20 text-[#274955]"><Award className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold">{item}</p>
                    <p className="text-sm text-[#728191]">Step {String(i + 1).padStart(2, "0")}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="servizi" className="bg-white/65 px-5 py-24 md:px-10 lg:px-16">
        <SectionTitle eyebrow="I miei servizi" title="Soluzioni su misura per ogni esigenza" subtitle="Dalla prevenzione all’estetica avanzata, ogni trattamento è pensato per regalarti un sorriso sano, bello e naturale." />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([icon, title, text]) => (
            <Card key={title} className="group rounded-[2rem] border-0 bg-[#F7F4EF] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-white text-[#274955] shadow-sm transition group-hover:bg-[#274955] group-hover:text-white">{icon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-[#506877]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="tecnologia" className="relative overflow-hidden bg-[#274955] px-5 py-24 text-white md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(145,179,190,.4),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="min-h-[360px]"><ImagePlaceholder label="Scanner digitale / tecnologia studio" dark /></div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-white/55">Tecnologia che fa la differenza</p>
            <h2 className="mt-4 text-4xl font-serif leading-tight tracking-[-0.04em] md:text-6xl">Innovazione per diagnosi precise e trattamenti migliori</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">Utilizziamo tecnologie digitali di ultima generazione per offrirti un’esperienza confortevole, sicura e prevedibile. Meno invasività, più precisione, risultati eccellenti.</p>
            <Button variant="outline" className="mt-8 rounded-full border-white/55 bg-transparent px-7 py-6 text-white hover:bg-white hover:text-[#274955]">Scopri le tecnologie <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section id="recensioni" className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:gap-8 lg:grid-cols-3">
          <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
            <CardContent className="p-5 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.35em] text-[#91B3BE]">Recensioni Google</p>
              <div className="mt-7 flex flex-wrap items-center gap-3"><span className="text-4xl font-semibold">5,0</span><div className="flex text-[#E9B44C]">{[1,2,3,4,5].map((s) => <Star key={s} className="h-5 w-5 fill-current" />)}</div></div>
              <p className="mt-4 text-[#506877]">Integra qui il widget reale Google Business Profile o un embed autorizzato.</p>
              <Button variant="outline" className="mt-8 rounded-full border-[#91B3BE] px-6">Leggi tutte le recensioni <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-white shadow-sm lg:col-span-2">
            <CardContent className="p-5 sm:p-8">
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <Quote className="h-9 w-9 text-[#91B3BE]" />
                  <h3 className="mt-4 text-2xl font-semibold text-[#274955]">Recensioni aggiornate automaticamente</h3>
                </div>
                <a href={CONFIG.googleReviewsUrl} className="text-sm font-semibold text-[#274955] hover:text-[#91B3BE]">Apri profilo Google →</a>
              </div>
              {CONFIG.googleReviewsWidgetEmbedUrl ? (
                <iframe
                  src={CONFIG.googleReviewsWidgetEmbedUrl}
                  title="Recensioni Google aggiornate automaticamente"
                  className="h-[430px] w-full rounded-[1.5rem] border-0 bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-[#91B3BE] bg-[#F7F4EF] p-6">
                  <p className="font-semibold text-[#274955]">Widget Google Reviews dinamico</p>
                  <p className="mt-3 leading-7 text-[#506877]">
                    Inserisci in CONFIG.googleReviewsWidgetEmbedUrl l’URL iframe di Elfsight, Trustindex, SociableKIT o EmbedSocial. Le recensioni si aggiorneranno in autonomia dal profilo Google Business Profile.
                  </p>
                  <Button variant="outline" className="mt-5 rounded-full border-[#91B3BE] px-6">Collega widget recensioni</Button>
                </div>
              )}
              <div className="mt-8 rounded-[1.5rem] bg-[#F7F4EF] p-5 sm:p-6">
                <p className="text-xl leading-8 text-[#274955] sm:text-2xl sm:leading-10">“{review.text}”</p>
                <div className="mt-7 flex items-center justify-between">
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex gap-2">
                    {reviews.map((_, i) => <button key={i} onClick={() => setReviewIndex(i)} className={`h-2.5 w-2.5 rounded-full ${reviewIndex === i ? "bg-[#274955]" : "bg-[#91B3BE]/45"}`} aria-label={`Recensione ${i + 1}`} />)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="bg-[#F7F4EF] px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionTitle eyebrow="FAQ" title="Domande frequenti" subtitle="Risposte chiare alle domande più comuni su medicina estetica del volto, dentista, odontoiatria estetica e prevenzione." />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[1.5rem] bg-white p-5 shadow-sm transition open:shadow-lg sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-[#91B3BE]/20 px-3 py-1 text-xs font-semibold text-[#274955]">{item.category}</span>
                  <h3 className="text-lg font-semibold leading-7 text-[#274955]">{item.q}</h3>
                </div>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F7F4EF] text-[#274955] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-[#506877]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contatti" className="bg-white px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:gap-8 lg:grid-cols-3">
          <Card className="rounded-[2rem] border-0 bg-[#F7F4EF] shadow-sm lg:col-span-1">
            <CardContent className="p-5 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.35em] text-[#91B3BE]">Dove siamo</p>
              <h2 className="mt-4 text-3xl font-semibold">Trova lo studio</h2>
              <p className="mt-5 leading-7 text-[#506877]"><MapPin className="mb-2 h-5 w-5" />{CONFIG.address}</p>
              <Button variant="outline" className="mt-7 rounded-full border-[#91B3BE] px-6">Indicazioni stradali <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[2rem] border-0 bg-[#F7F4EF] shadow-sm lg:col-span-1">
            <CardContent className="p-4">
              {CONFIG.googleMapsEmbedUrl ? (
                <iframe src={CONFIG.googleMapsEmbedUrl} title="Mappa studio Diana Pontoglio" className="h-[330px] w-full rounded-[1.5rem] border-0" loading="lazy" />
              ) : (
                <div className="grid h-[330px] place-items-center rounded-[1.5rem] bg-[#91B3BE]/25 text-center"><div><MapPin className="mx-auto mb-4 h-10 w-10" /><p className="font-semibold">Google Maps Embed</p><p className="mt-2 text-sm text-[#506877]">Inserisci URL iframe in CONFIG.googleMapsEmbedUrl</p></div></div>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-[#274955] text-white shadow-sm lg:col-span-1">
            <CardContent className="p-5 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.35em] text-white/55">Orari dello studio</p>
              <div className="mt-6 space-y-3">
                {hours.map(([day, time]) => <div key={day} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm"><span>{day}</span><span className="font-semibold">{time}</span></div>)}
              </div>
              <Button className="mt-8 w-full rounded-full bg-white px-6 text-[#274955] hover:bg-[#F7F4EF]">Prenota una visita</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="instagram" className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.35em] text-[#91B3BE]"><InstagramIcon className="h-4 w-4" /> Seguimi su Instagram</p>
              <h2 className="mt-4 text-4xl font-serif tracking-[-0.04em] md:text-5xl">Consigli, novità e sorrisi dal nostro studio</h2>
            </div>
            <Button variant="outline" className="rounded-full border-[#91B3BE] px-7 py-6">Vai al profilo</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {instagramPosts.map((post, i) => (
              <motion.a key={post.label} href={CONFIG.instagramUrl} whileHover={{ y: -6 }} className="group relative min-h-[210px] overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,179,190,.55),transparent_35%),linear-gradient(145deg,#F7F4EF,#A2ADB6)]" />
                <div className="absolute inset-0 bg-[#274955]/0 transition group-hover:bg-[#274955]/20" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                  <InstagramIcon className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-lg font-semibold text-white">{post.label}</p>
                    <p className="text-sm text-white/80">{post.type}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="prenota" className="bg-[#274955] px-5 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-white/55">Il tuo sorriso merita la migliore cura</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-serif leading-tight tracking-[-0.04em] md:text-5xl">Prenota la tua visita e scopri un nuovo modo di vivere l’odontoiatria.</h2>
          </div>
          <Button className="rounded-full bg-white px-8 py-6 text-[#274955] hover:bg-[#F7F4EF]">Prenota ora <ChevronRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>

      <footer className="bg-[#1E3C47] px-5 py-8 text-white/70 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm md:flex-row md:items-center">
          <p>© {CONFIG.name} · {CONFIG.role} · Dentisti dal 1980</p>
          <div className="flex gap-5">{nav.map(([label, href]) => <a key={label} href={href} className="hover:text-white">{label}</a>)}</div>
        </div>
      </footer>
    </main>
  );
}
