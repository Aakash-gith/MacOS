import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Cpu, Layout, CheckCircle2, Command, History, Calendar, Lightbulb } from 'lucide-react';
import { macContent } from './data/macContent';
import { SectionWrapper, InfoCard, ComparisonTable, Timeline, VersionItem } from './components/UI';
import Lenis from 'lenis';

const Navbar = () => (
    <nav className="nav-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-lg">
                <Command size={24} className="text-apple-blue" />
                <span>MacOS Guide</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-apple-subtext">
                <a href="#hero" className="hover:text-apple-blue transition-colors">Overview</a>
                <a href="#what-is-mac" className="hover:text-apple-blue transition-colors">Fundamentals</a>
                <a href="#versions" className="hover:text-apple-blue transition-colors">Versions</a>
                <a href="#core-topics" className="hover:text-apple-blue transition-colors">Topics</a>
            </div>
            <button className="bg-apple-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-all">
                Start Guide
            </button>
        </div>
    </nav>
);

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden">
            <motion.div style={{ y, opacity }} className="text-center z-10 px-6">
                <motion.span
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-apple-blue font-semibold tracking-wider uppercase text-sm mb-4 block"
                >
                    Beginner to Advanced
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    {macContent.hero.title}
                </motion.h1>
                <p className="text-xl md:text-2xl text-apple-subtext max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    {macContent.hero.subtitle}
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all shadow-lg shadow-blue-200">
                        {macContent.hero.primaryAction}
                    </button>
                    <a href="#comparison" className="border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
                        {macContent.hero.secondaryAction}
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-20 w-full max-w-5xl px-6 relative"
            >
                <div className="aspect-[16/9] md:aspect-[21/9] glass-panel p-4 shadow-2xl relative bg-white/40 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                        <div className="text-gray-400 font-light flex items-center gap-2 text-sm md:text-base">
                            <Monitor size={20} /> Advanced macOS Architecture
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-2">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const SectionHeader = ({ title, subtitle, centered = true }) => (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-apple-subtext text-base md:text-xl max-w-2xl overflow-visible mx-auto">{subtitle}</p>}
    </div>
);

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <div className="min-h-screen bg-apple-gray selection:bg-apple-blue/20">
            <Navbar />
            <Hero />

            {/* What is Mac */}
            <SectionWrapper id="what-is-mac">
                <SectionHeader title={macContent.whatIsMac.title} subtitle={macContent.whatIsMac.description} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {macContent.whatIsMac.cards.map((card, i) => {
                        const Icon = card.icon === 'monitor' ? Monitor : card.icon === 'cpu' ? Cpu : Layout;
                        return <InfoCard key={card.id} title={card.title} description={card.description} icon={Icon} delay={i * 0.1} />;
                    })}
                </div>
                <div className="mt-16 glass-panel p-10 bg-white/60">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Command className="text-apple-blue" />
                        {macContent.whatIsMac.verticalIntegration.title}
                    </h3>
                    <p className="text-lg text-apple-subtext leading-relaxed">
                        {macContent.whatIsMac.verticalIntegration.description}
                        <span className="block mt-4 text-sm font-semibold text-apple-text italic">
                            {macContent.whatIsMac.verticalIntegration.tradeoff}
                        </span>
                    </p>
                </div>
            </SectionWrapper>

            {/* Philosophy & Comparison */}
            <SectionWrapper id="comparison" className="bg-white/50">
                <SectionHeader title={macContent.philosophy.title} centered={false} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-panel p-8 border-t-4 border-apple-blue">
                        <h4 className="text-2xl font-bold mb-6 text-apple-blue">{macContent.philosophy.mac.title}</h4>
                        <ul className="space-y-4">
                            {macContent.philosophy.mac.points.map((p, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium">
                                    <CheckCircle2 size={18} className="text-apple-blue" /> {p}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-apple-subtext italic">Note: {macContent.philosophy.mac.tradeoff}</p>
                    </div>
                    <div className="glass-panel p-8 border-t-4 border-gray-400">
                        <h4 className="text-2xl font-bold mb-6 text-gray-500">{macContent.philosophy.windows.title}</h4>
                        <ul className="space-y-4">
                            {macContent.philosophy.windows.points.map((p, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium">
                                    <CheckCircle2 size={18} className="text-gray-400" /> {p}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-apple-subtext italic">Note: {macContent.philosophy.windows.tradeoff}</p>
                    </div>
                </div>
                <ComparisonTable features={macContent.comparisonTable} />
            </SectionWrapper>

            <SectionWrapper id="architecture" className="bg-black text-white py-20 md:py-32 rounded-[2rem] md:rounded-[3rem] my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{macContent.architecture.title}</h2>
                        <div className="p-8 bg-zinc-900 rounded-3xl mb-8 border border-zinc-800">
                            <h3 className="text-2xl font-bold text-apple-blue mb-4">{macContent.architecture.unifiedMemory.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-lg">{macContent.architecture.unifiedMemory.description}</p>
                        </div>
                        <div className="space-y-6">
                            {macContent.architecture.performancePoints.map((p, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-apple-blue flex items-center justify-center mt-1">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">{p.title}</h5>
                                        <p className="text-zinc-500 text-sm">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square glass-panel bg-zinc-800/50 border-zinc-700 flex items-center justify-center text-zinc-600">
                            <Cpu size={120} className="text-apple-blue animate-pulse" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* History & Versions */}
            <section className="bg-apple-gray py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3"><History /> {macContent.history.title}</h2>
                        <Timeline items={macContent.history.timeline} />
                    </div>
                    <div id="versions" className="lg:col-span-2">
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3"><Calendar /> {macContent.versions.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {macContent.versions.items.map((v, i) => (
                                <VersionItem key={v.name} {...v} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Topics to Master */}
            <SectionWrapper id="core-topics">
                <SectionHeader title={macContent.coreTopics.title} subtitle={macContent.coreTopics.subtitle} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {macContent.coreTopics.topics.map((item, i) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02, translateY: -5 }}
                            className="glass-panel p-6 h-full flex flex-col items-start gap-4 hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center text-apple-blue font-bold">
                                {item.id}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-apple-subtext text-sm leading-relaxed">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>


            <footer className="py-20 border-t border-gray-200 bg-white">
                <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-apple-subtext text-sm mb-4 md:mb-0">
                        © 2026 MacOS Guide Project. Designed by Antigravity.
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-apple-subtext">
                        <a href="#" className="hover:text-apple-blue">Curriculum</a>
                        <a href="#" className="hover:text-apple-blue">Architecture</a>
                        <a href="#" className="hover:text-apple-blue">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
