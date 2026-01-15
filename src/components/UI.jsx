import { motion } from 'framer-motion';

export const SectionWrapper = ({ children, id, className = "" }) => (
    <section id={id} className={`section-container ${className}`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    </section>
);

export const InfoCard = ({ title, description, icon: Icon, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel p-8 hover:shadow-xl transition-all duration-300 group"
    >
        {Icon && <div className="mb-4 text-apple-blue group-hover:scale-110 transition-transform"><Icon size={32} /></div>}
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-apple-subtext leading-relaxed">{description}</p>
    </motion.div>
);

export const ComparisonTable = ({ features }) => (
    <div className="glass-panel overflow-hidden mt-12">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-50/50">
                    <th className="p-6 font-semibold text-gray-400">Feature</th>
                    <th className="p-6 font-semibold text-apple-blue">macOS</th>
                    <th className="p-6 font-semibold text-gray-500">Windows</th>
                </tr>
            </thead>
            <tbody>
                {features.map((f, i) => (
                    <tr key={i} className="border-t border-gray-100/50 hover:bg-white/40 transition-colors">
                        <td className="p-6 font-medium">{f.name}</td>
                        <td className="p-6 text-apple-text">{f.mac}</td>
                        <td className="p-6 text-apple-subtext">{f.win}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const Timeline = ({ items }) => (
    <div className="relative border-l-2 border-apple-blue/30 ml-4 py-8">
        {items.map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-10 ml-6 relative"
            >
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-apple-blue border-4 border-apple-gray"></div>
                <span className="text-apple-blue font-bold text-sm block mb-1">{item.year}</span>
                <h4 className="text-lg font-semibold">{item.event}</h4>
            </motion.div>
        ))}
    </div>
);

export const VersionItem = ({ name, year, features }) => (
    <div className="glass-panel p-6 border-l-4 border-apple-blue h-full">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold">{name}</h3>
            <span className="bg-apple-blue/10 text-apple-blue px-3 py-1 rounded-full text-xs font-semibold">{year}</span>
        </div>
        <ul className="space-y-2">
            {features.map((f, i) => (
                <li key={i} className="text-sm text-apple-subtext flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-1.5 shrink-0"></div>
                    {f}
                </li>
            ))}
        </ul>
    </div>
);
