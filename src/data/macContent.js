export const macContent = {
    hero: {
        title: "Understanding Mac",
        subtitle: "From your first click to advanced Apple Silicon architecture. A complete guide for students and professionals.",
        primaryAction: "Start Learning",
        secondaryAction: "View Syllabus"
    },
    whatIsMac: {
        title: "The Trinity of Mac",
        description: "A Mac is not just a computer; it's the perfect synergy of hardware, software, and silicon.",
        cards: [
            {
                id: "hardware",
                title: "The Hardware",
                description: "Physical machines like MacBook Air, Pro, and iMac. Apple controls the design, firmware, and thermal limits for ultimate reliability.",
                icon: "monitor"
            },
            {
                id: "os",
                title: "macOS",
                description: "The UNIX-based operating system. It manages files, memory, and security specifically for Apple hardware.",
                icon: "layout"
            },
            {
                id: "chip",
                title: "Apple Silicon",
                description: "Custom ARM-designed processors (M1-M5) that offer industry-leading performance-per-watt.",
                icon: "cpu"
            }
        ],
        verticalIntegration: {
            title: "Vertical Integration",
            description: "Because Apple designs the hardware, the chip, and the OS, they can optimize performance in ways Windows cannot.",
            tradeoff: "The trade-off is less customization and fewer hardware upgrades."
        }
    },
    philosophy: {
        title: "Philosophy: macOS vs Windows",
        mac: {
            title: "Apple Philosophy",
            points: ["Control", "Consistency", "Efficiency", "Ecosystem-first"],
            tradeoff: "Limited hardware choice."
        },
        windows: {
            title: "Microsoft Philosophy",
            points: ["Compatibility", "Flexibility", "Broad Support", "Gaming"],
            tradeoff: "Inconsistent performance across hardware."
        }
    },
    architecture: {
        title: "Architecture & Performance",
        unifiedMemory: {
            title: "Unified Memory",
            description: "Unlike PC RAM, Unified Memory is shared by the CPU, GPU, and Neural Engine. This reduces data duplication and makes 8GB feel like 16GB."
        },
        performancePoints: [
            { title: "Smoothness", desc: "OS aggressively manages background tasks." },
            { title: "Efficiency", desc: "ARM architecture uses significantly less power for more work." },
            { title: "Security", desc: "Hardware-level encryption via the Secure Enclave." }
        ]
    },
    history: {
        title: "The Great Transitions",
        timeline: [
            { year: "1984", event: "First Macintosh (GUI + Mouse)" },
            { year: "1994", event: "68k to PowerPC" },
            { year: "2006", event: "PowerPC to Intel" },
            { year: "2020", event: "Intel to Apple Silicon (M1)" },
            { year: "2025", event: "Intel support reaches end-of-life" }
        ]
    },
    versions: {
        title: "Recent macOS Versions",
        items: [
            {
                name: "macOS Tahoe (16)",
                year: "2025",
                features: ["Final Intel support", "Liquid Glass UI", "Apple Intelligence deeply integrated", "Phone app on Mac"]
            },
            {
                name: "macOS Sequoia (15)",
                year: "2024",
                features: ["iPhone Mirroring", "Genmoji", "Math Notes in Calculator", "Writing Tools"]
            },
            {
                name: "macOS Sonoma (14)",
                year: "2023",
                features: ["Desktop Widgets", "Game Mode", "Safari Profiles", "Aerial Screen Savers"]
            },
            {
                name: "macOS Ventura (13)",
                year: "2022",
                features: ["Stage Manager", "Continuity Camera", "System Settings redesign"]
            }
        ]
    },
    coreTopics: {
        title: "Core Topics to Master",
        subtitle: "Essential knowledge for every macOS user, from basic navigation to advanced optimization.",
        topics: [
            { id: 1, title: "Search & Navigation", detail: "Spotlight (Cmd+Space) & enabling Right-click basics." },
            { id: 2, title: "File Management", detail: "Mastering Finder, Path Bar, and Quick Look (Space)." },
            { id: 3, title: "App Management", detail: "Installing via DMG/App Store & Force Quit patterns." },
            { id: 4, title: "Efficiency", detail: "Essential shortcuts (Cmd replaces Ctrl) & Trackpad gestures." },
            { id: 5, title: "Multitasking", detail: "Spaces, Mission Control, and Split View workflows." },
            { id: 6, title: "Privacy & Health", detail: "Privacy permissions, Login items, and Battery optimization." },
            { id: 7, title: "Backup & Security", detail: "Time Machine setup and securing Apple ID with 2FA." }
        ]
    },
    comparisonTable: [
        { name: "Game Library", mac: "Improving (Game Mode)", win: "Extensive (Standard)" },
        { name: "File Management", mac: "Finder (Tag-based)", win: "Explorer (Folder-based)" },
        { name: "Shortcuts", mac: "Command (⌘) based", win: "Control (Ctrl) based" },
        { name: "Updates", mac: "Annual / High Stability", win: "Frequent / Variable" }
    ],
};
