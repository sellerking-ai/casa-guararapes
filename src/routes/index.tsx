import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  ExternalLink,
  Truck,
  CreditCard,
  UserCheck,
  Sofa,
  Refrigerator,
  HardHat,
  Flame,
  Award,
  Home,
  Palette,
  Ruler
} from "lucide-react";
import { SectorCard } from "../components/SectorCard";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import logo from "../assets/logo.png";
import lojaFachada from "../assets/loja-fachada.png";
import equipeLoja from "../assets/equipe-loja.jpg";
import equipeConstrucao from "../assets/equipe-construcao.jpg";
import equipeHistoria from "../assets/equipe-historia.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const sectors = [
  {
    icon: Sofa,
    title: "Móveis",
    description: "Conforto e design para sua casa",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  },
  {
    icon: Refrigerator,
    title: "Eletrodomésticos",
    description: "Tecnologia e praticidade no seu dia",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  },
  {
    icon: HardHat,
    title: "Material de Construção",
    description: "Base sólida para seu projeto",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  },
  {
    icon: Palette,
    title: "Decoração",
    description: "Itens para deixar sua casa mais bonita",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  },
  {
    icon: Ruler,
    title: "Móveis Planejados",
    description: "Projetos sob medida para seu espaço",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  },
  {
    icon: Flame,
    title: "Gás",
    description: "Rapidez e segurança na sua cozinha",
    link: "https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
  }
];

const features = [
  { icon: <Award className="w-9 h-9" />, text: <>40 ANOS de tradição e qualidade</> },
  { icon: <CreditCard className="w-9 h-9" />, text: <>Garantia CREDIÁRIO PRÓPRIO</> },
  { icon: <Truck className="w-9 h-9" />, text: <>Entrega e MONTAGEM GRÁTIS</> },
  { icon: <Home className="w-9 h-9" />, text: <>Da CONSTRUÇÃO à DECORAÇÃO</> }
];

function Index() {
  const scrollToSectors = () => {
    document.getElementById("setores")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-barlow overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0d2d5e] h-[70px] flex items-center shadow-lg px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src={logo}
                alt="Casa Guararapes - Toda Casa"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-2 text-white">
              <Phone size={20} className="text-white" />
              <a href="tel:3733811492" className="font-bold text-lg hover:text-white/80 transition-colors">(37) 3381-1492</a>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e6fd4] text-white px-4 md:px-8 py-2.5 rounded-[50px] font-black uppercase text-sm md:text-base flex items-center gap-2 hover:brightness-110 transition-all shadow-md animate-pulse-whatsapp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-[22px] h-[22px]"
              />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative bg-gradient-to-r from-[#0d2d5e] to-[#123975] text-white pt-16 pb-24 md:pt-28 md:pb-40 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
                <span className="bg-[#f5a800] text-[#0d2d5e] px-2 md:px-4 py-1 inline-block">40 ANOS</span> DE TRADIÇÃO E CONFIANÇA!
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl font-medium">
                Da construção à decoração, tudo para sua casa!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToSectors}
                  className="bg-[#1e6fd4] text-white px-10 py-5 rounded-[50px] font-black uppercase text-lg hover:brightness-110 transition-all shadow-xl text-center active:scale-95"
                >
                  Ver Setores
                </button>
                <a
                  href="https://www.google.com/maps/place/Casa+Guararapes+Toda+Casa/data=!4m2!3m1!1s0x0:0x3ee34eff551ec7e7?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-10 py-5 rounded-[50px] font-black uppercase text-lg hover:bg-white hover:text-[#0d2d5e] transition-all text-center flex items-center justify-center gap-2 active:scale-95"
                >
                  Como chegar
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white">
                <img
                  src={lojaFachada}
                  alt="Loja Casa Guararapes - Fachada"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-highlight text-[#0d2d5e] px-6 py-3 rounded-full font-black text-sm md:text-base shadow-lg animate-bounce">
                ⭐ Tradição e qualidade
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO DE SETORES */}
        <section id="setores" className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black text-[#0d2d5e] mb-4 uppercase tracking-tighter">Nossos Departamentos</h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Tudo o que você precisa com atendimento direto pelo WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SectorCard
                    icon={sector.icon}
                    title={sector.title}
                    description={sector.description}
                    whatsappLink={sector.link}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BARRA DE DIFERENCIAIS */}
        <section className="bg-[#0d2d5e] text-white py-16 px-4 md:px-8 border-y-4 border-highlight/20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 px-4">
                <div className="text-white">
                  {feature.icon}
                </div>
                <span className="font-bold text-base md:text-[16px] leading-tight max-w-[200px]">{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO DE AVALIAÇÕES */}
        <section className="py-24 px-4 md:px-8 bg-[#0d2d5e] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">O que nossos clientes dizem</h2>
              <div className="flex items-center justify-center gap-2 text-xl font-bold">
                <span className="text-[#f5a800]">⭐⭐⭐⭐⭐</span>
                <span>4.8 · +200 avaliações no Google</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Letícia Oliveira",
                  rating: 5,
                  text: "Loja maravilhosa! Atendimento nota 10, muita variedade de móveis e materiais de construção. Recomendo demais!",
                  date: "1 mês atrás"
                },
                {
                  name: "Ricardo Silva",
                  rating: 5,
                  text: "Melhor preço da região. Comprei todo o material da minha obra lá e a entrega foi super rápida. Crediário próprio facilita muito.",
                  date: "2 semanas atrás"
                },
                {
                  name: "Maria Eduarda",
                  rating: 5,
                  text: "Fiquei encantada com a parte de decoração. Tudo de muito bom gosto e os vendedores são muito atenciosos.",
                  date: "3 meses atrás"
                }
              ].map((review, i) => (
                <div key={i} className="bg-[#1a4a8f] p-8 rounded-[16px] border border-white/5 flex flex-col h-full shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1e6fd4] rounded-full flex items-center justify-center font-black text-xl text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">{review.name}</p>
                      <p className="text-white/50 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <div className="text-[#f5a800] mb-3 text-lg">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-white/90 italic leading-relaxed font-medium">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/Casa+Guararapes+Toda+Casa/data=!4m8!3m7!1s0xa0934eefe9def3:0x3ee34eff551ec7e7!8m2!3d-20.4431528!4d-44.7653817!9m1!1b1!16s%2Fg%2F1tj5940d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1e6fd4] text-white px-10 py-5 rounded-[50px] font-black uppercase text-lg hover:brightness-110 transition-all shadow-xl active:scale-95"
              >
                Ver todas no Google <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO NOSSA EQUIPE */}
        <section id="equipe" className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#f5a800] text-[#0d2d5e] px-4 py-1 rounded-full text-sm font-black uppercase tracking-wider mb-4">
                Quem te atende
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0d2d5e] mb-4 uppercase tracking-tighter">
                Nossa Equipe
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Pessoas reais, prontas para te ajudar a encontrar tudo o que você precisa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: equipeLoja, title: "Loja & Decoração", desc: "Atendimento dedicado em móveis, eletrodomésticos e decoração." },
                { img: equipeConstrucao, title: "Material de Construção", desc: "Especialistas para te orientar do alicerce ao acabamento." }
              ].map((team, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative rounded-[20px] overflow-hidden shadow-xl border-4 border-[#1e6fd4]/10 hover:border-[#f5a800] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={team.img}
                      alt={`Equipe ${team.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d5e] via-[#0d2d5e]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">{team.title}</h3>
                    <p className="text-white/90 font-medium md:text-lg">{team.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO NOSSA HISTÓRIA */}
        <section id="historia" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#f5a800] text-[#0d2d5e] px-4 py-1 rounded-full text-sm font-black uppercase tracking-wider mb-4">
                Tradição que constrói
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0d2d5e] mb-4 uppercase tracking-tighter">
                Nossa História
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Quatro décadas de compromisso, família e orgulho em fazer parte da história de Cláudio.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(13,45,94,0.25)] border-4 border-[#1e6fd4]/20">
                  <img
                    src={equipeHistoria}
                    alt="Equipe Casa Guararapes - Orgulho de ser claudiense"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#f5a800] text-[#0d2d5e] px-6 py-3 rounded-full font-black text-sm md:text-base shadow-lg">
                  Orgulho de ser claudiense!
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="space-y-6"
              >
                <p className="text-[#0d2d5e] text-lg md:text-xl leading-relaxed font-medium">
                  A <span className="font-black text-[#1e6fd4]">Casa Guararapes</span> nasceu em 1985 com um sonho simples: oferecer à cidade de <strong>Cláudio - MG</strong> um lugar onde as famílias pudessem encontrar tudo para construir, mobiliar e decorar seus lares com preço justo e atendimento de verdade.
                </p>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                  Ao longo de <span className="bg-[#f5a800] text-[#0d2d5e] px-2 py-0.5 font-black rounded">40 anos</span>, crescemos junto com a nossa região. Começamos pequenos, conquistamos a confiança de gerações e nos tornamos referência em móveis, eletrodomésticos, material de construção, decoração, gás e móveis planejados.
                </p>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                  Hoje somos uma <strong>família</strong> que acredita no trabalho honesto, no crediário que facilita a vida do cliente e na entrega que chega na hora certa. Cada produto, cada conversa e cada sorriso carregam a nossa essência: fazer com que você se sinta em casa.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { number: "1985", label: "Fundação" },
                    { number: "40+", label: "Anos de história" },
                    { number: "6", label: "Setores" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#0d2d5e] text-white p-5 rounded-[16px] text-center shadow-lg">
                      <p className="text-2xl md:text-3xl font-black text-[#f5a800]">{stat.number}</p>
                      <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE LOCALIZAÇÃO */}
        <section className="py-24 px-4 md:px-8 bg-[#0d2d5e]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center uppercase tracking-tighter">Onde Estamos</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-[#1a4a8f] p-8 rounded-[16px] shadow-sm border border-white/10">
                  <h3 className="font-black text-2xl mb-4 flex items-center gap-3 text-white uppercase">
                    <MapPin className="text-white" size={28} /> Endereço
                  </h3>
                  <p className="text-white/90 text-lg mb-8 font-medium">
                    Praça dos Ex-Combatentes, 56 - Centro, Cláudio - MG, 35530-000
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Casa+Guararapes+Toda+Casa/data=!4m2!3m1!1s0x0:0x3ee34eff551ec7e7?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-white text-[#0d2d5e] px-8 py-4 rounded-[50px] font-black uppercase text-lg hover:bg-white/90 transition-all shadow-lg active:scale-95"
                  >
                    Abrir no Google Maps <ExternalLink size={20} />
                  </a>
                </div>

                <div className="bg-[#1a4a8f] p-8 rounded-[16px] shadow-sm border border-white/10">
                  <h3 className="font-black text-2xl mb-6 flex items-center gap-3 text-white uppercase">
                    <Clock className="text-white" size={28} /> Funcionamento
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-[#1e5aad] p-4 rounded-2xl">
                      <span className="font-bold text-white/70 uppercase text-xs">Segunda a Sexta</span>
                      <span className="font-black text-white">07:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#1e5aad] p-4 rounded-2xl">
                      <span className="font-bold text-white/70 uppercase text-xs">Sábado</span>
                      <span className="font-black text-white">08:00 – 12:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[500px] rounded-[16px] overflow-hidden border-[3px] border-white relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.03704987627!2d-44.76757042504269!3d-20.443152755250495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ee34eff551ec7e7!2sCasa%20Guararapes%20Toda%20Casa!5e0!3m2!1spt-BR!2sbr!4v1715520000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-[#0d2d5e] text-white pt-20 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Casa Guararapes - Toda Casa" className="h-10 w-auto" />
              </div>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                O maior mix da região em móveis, eletrodomésticos, material de construção e utilidades.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="font-black text-xl uppercase tracking-widest text-white">Atendimento</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:3733811492" className="flex items-center gap-3 hover:text-highlight transition-all group whitespace-nowrap">
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-highlight/20 shrink-0">
                      <Phone size={18} className="text-highlight" />
                    </div>
                    <span className="font-bold text-base md:text-[15px]">(37) 3381-1492</span>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-all group whitespace-nowrap">
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#25D366]/20 shrink-0">
                      <MessageCircle size={18} className="text-[#25D366]" />
                    </div>
                    <span className="font-bold text-base md:text-[15px]">(37) 9 9969-7190</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/casaguararapes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#E1306C] transition-all group whitespace-nowrap">
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#E1306C]/20 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-[#E1306C]">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </div>
                    <span className="font-bold text-base md:text-[15px]">@casaguararapes</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="font-black text-xl uppercase tracking-widest text-white">Segurança</h4>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 text-white">
                  <ShieldCheck size={40} className="text-[#25D366]" />
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">Loja Confiável</p>
                    <p className="text-white/50 text-xs">Atendimento 100% humano e seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
            <img
              src={logo}
              alt="Casa Guararapes"
              className="h-8 md:h-10 w-auto"
            />
            <p className="text-white/30 text-sm font-bold uppercase tracking-widest">
              © 2026 Casa Guararapes. SUA CASA COMO VOCÊ IMAGINA!
            </p>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
