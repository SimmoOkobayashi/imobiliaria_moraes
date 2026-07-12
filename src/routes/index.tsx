import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImg from "../assets/hero.jpg";
import portfolio1Img from "../assets/portfolio-1.jpg";
import portfolio2Img from "../assets/portfolio-2.jpg";
import portfolio3Img from "../assets/portfolio-3.jpg";
import aboutImg from "../assets/about.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "Moraes Imobiliária — imobiliaria de Imóveis de Alto Padrão",
      },
      {
        name: "description",
        content:
          "Conheça a Moraes Imobiliária: tradição, imobiliaria exclusiva e atendimento personalizado para compra, venda e investimento em imóveis premium.",
      },
      {
        property: "og:title",
        content: "Moraes Imobiliária — imobiliaria de Imóveis de Alto Padrão",
      },
      {
        property: "og:description",
        content:
          "Conheça a Moraes Imobiliária: tradição, imobiliaria exclusiva e atendimento personalizado para compra, venda e investimento em imóveis premium.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function HomePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Compra de Imóvel",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", interest: "Compra de Imóvel", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection form={form} setForm={setForm} submitted={submitted} onSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-primary">
          Moraes.
        </a>
        <div className="hidden md:flex gap-10 text-xs font-mono uppercase tracking-widest">
          <a href="#sobre" className="hover:text-primary transition-colors">
            O Legado
          </a>
          <a href="#portfolio" className="hover:text-primary transition-colors">
            Portfólio
          </a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">
            imobiliaria
          </a>
          <a href="#contato" className="hover:text-primary transition-colors">
            Contato
          </a>
        </div>
        <a
          href="#contato"
          className="px-6 py-2 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest hover:bg-emerald-900 transition-all"
        >
          Consultar
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
      <div className="md:col-span-7 animate-reveal">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
          ( 01 ) A Arte de Morar
        </span>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-balance mb-8">
          Onde a <em>arquitetura</em> encontra a sua <span className="text-primary italic">história</span>.
        </h1>
        <p className="max-w-md text-muted-foreground leading-relaxed text-pretty">
          Desde 2020, a Moraes não apenas vende imóveis; nós entregamos as chaves para novos capítulos de vida em imobiliarias exclusivas.
        </p>
      </div>
      <div className="md:col-span-5 animate-expand">
        <img
          src={heroImg}
          alt="Fachada moderna de residência de alto padrão com jardim verde"
          width={800}
          height={1008}
          className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}

function PortfolioSection() {
  const properties = [
    {
      title: "Residência das Palmeiras",
      location: "Jardim Europa",
      size: "450m²",
      image: portfolio1Img,
      alt: "Sala de estar contemporânea com janelas amplas e vista para a vegetação",
    },
    {
      title: "Villa Concrete",
      location: "Alto de Pinheiros",
      size: "620m²",
      image: portfolio2Img,
      alt: "Casa modernista de concreto ao pôr do sol",
    },
    {
      title: "Skyline Loft",
      location: "Itaim Bibi",
      size: "180m²",
      image: portfolio3Img,
      alt: "Varanda de cobertura minimalista com vista para o skyline da cidade",
    },
  ];

  return (
    <section id="portfolio" className="bg-primary text-primary-foreground py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl mb-4">Conquistas Recentes</h2>
            <p className="font-mono text-xs opacity-60 uppercase tracking-widest">
              Imóveis que encontraram seus donos
            </p>
          </div>
          <div className="hidden md:block text-right font-mono text-4xl opacity-10 leading-none">
            MORAES / 2024
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.title}
              className="group cursor-crosshair animate-reveal"
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              <div
                className={`w-full aspect-[3/4] bg-emerald-800/20 mb-6 overflow-hidden ${index === 1 ? "md:mt-20" : ""}`}
              >
                <img
                  src={property.image}
                  alt={property.alt}
                  width={704}
                  height={944}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <h3 className="font-display text-xl mb-1">{property.title}</h3>
              <p className="text-xs font-mono opacity-50 uppercase">
                {property.location} • {property.size}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative animate-reveal">
          <img
            src={aboutImg}
            alt="Mãos segurando chaves de bronze sobre planta arquitetônica"
            width={944}
            height={704}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-sm"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-12 border border-border hidden md:block">
            <div className="font-display text-5xl text-primary">+2.4k</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              Chaves Entregues
            </div>
          </div>
        </div>
        <div className="animate-reveal" style={{ animationDelay: "200ms" }}>
          <h2 className="font-display text-4xl mb-8 leading-tight">
            Mais do que metros quadrados, entregamos <em>legados familiares</em>.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Na Moraes, entendemos que o mercado imobiliário de alto padrão exige mais do que transações frias. Exige sensibilidade para entender o momento de vida de cada cliente.
            </p>
            <p>
              Nossa equipe é composta por especialistas em arquitetura e investimentos, garantindo que cada escolha seja estética e financeiramente impecável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-stone-100 py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12 block">
          Palavras de Confiança
        </span>
        <div className="relative">
          <p className="font-display text-3xl italic leading-snug mb-12">
            "A segurança de entregar o sonho da nossa primeira casa nas mãos da Moraes foi a melhor decisão que tomamos. O atendimento não foi corporativo, foi humano."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="size-12 rounded-full bg-primary/10 grid place-items-center font-mono text-xs text-primary">
              FA
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest">Família Almeida</p>
              <p className="text-[10px] text-muted-foreground">Proprietários no Condomínio Vert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactSectionProps {
  form: {
    name: string;
    email: string;
    interest: string;
    message: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      interest: string;
      message: string;
    }>
  >;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

function ContactSection({ form, setForm, submitted, onSubmit }: ContactSectionProps) {
  return (
    <section id="contato" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="border border-primary/20 p-12 md:p-24 bg-white">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-display text-5xl mb-8">
              Vamos iniciar seu <br />
              <span className="italic text-primary">próximo capítulo?</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Preencha os detalhes e um de nossos agentes entrará em contato para uma conversa privativa.
            </p>
            <div className="space-y-4 font-mono text-xs uppercase">
              <p className="flex items-center gap-4">
                <span className="w-8 h-px bg-primary/30"></span> 35 9 0000 0000
              </p>
              <p className="flex items-center gap-4">
                <span className="w-8 h-px bg-primary/30"></span> contato@moraes.imobi
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-8">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Nome Completo
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-border py-2 focus:outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                E-mail
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-border py-2 focus:outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Interesse
              </label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full border-b border-border py-2 focus:outline-none focus:border-primary transition-colors bg-transparent"
              >
                <option>Compra de Imóvel</option>
                <option>Venda de Imóvel</option>
                <option>Investimento</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Mensagem
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-b border-border py-2 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-6 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] hover:bg-emerald-900 transition-colors shadow-lg"
            >
              {submitted ? "Solicitação Enviada" : "Enviar Solicitação"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="font-display text-xl font-bold text-primary">Moraes.</span>
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          © 2024 Moraes imobiliaria Imobiliária. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest opacity-60">
          <a href="#" className="hover:opacity-100">
            Instagram
          </a>
          <a href="#" className="hover:opacity-100">
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
}
