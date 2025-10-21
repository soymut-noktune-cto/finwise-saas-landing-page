import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "The Framework of Inner Engineering",
        description: "Soymut unites your story, your perception on daily events, your dreams, your emotions, and your reflections into a single consciousness framework. It helps you perceive the hidden connections between your inner and outer worlds — guiding you gently toward self-awareness.",
        bullets: [
            {
                title: "Consciousness Journal",
                description: "Record dreams, thoughts, and emotional moments in one space — a living archive of your evolving awareness.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Symbol & Pattern Insight",
                description: "AI identifies recurring symbols, themes, and emotional tones, revealing the subtle architecture of your mind.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Reflection Engine",
                description: "Receive personalized prompts and reflections designed to help you explore meaning, balance, and transformation.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "The Journey of Self-Discovery",
        description: "Soymut helps you move from passive observation to conscious transformation. Through guided reflections and insight visualization, you begin to see how your consciousness grows over time.",
        bullets: [
            {
                title: "Emotional Tracking",
                description: "Follow the rhythms of your emotions and their connection to your dreams and daily experiences.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Consciousness Map",
                description: "Visualize your evolution as a dynamic map of symbols, emotions, and recurring patterns.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Inner Alignment",
                description: "Translate awareness into action by integrating insights into your daily life with calm intention.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Trust, Privacy & Awareness",
        description: "Your reflections are sacred. Soymut protects your privacy with care and transparency — ensuring your inner world remains truly yours.",
        bullets: [
            {
                title: "Local Encryption",
                description: "Your journal entries are stored securely and encrypted — accessible only to you.",
                icon: <FiLock size={26} />
            },
            {
                title: "AI Transparency",
                description: "Understand how Soymut’s AI interprets and learns from your data — no black boxes, only clarity.",
                icon: <FiUser size={26} />
            },
            {
                title: "Ethical AI Foundation",
                description: "Built on a framework of human-centered design, psychology, and spiritual respect.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]