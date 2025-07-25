import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Clock, Briefcase } from "lucide-react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"

import { skills } from "../data/skills"
import { projects } from "../data/projects"
import { experiences } from "../data/expirences"

import DecryptText from "../components/decryptText"
import GradientText from "../components/graidentText"

import { sendEmail } from "../utils/malito"

import profileImage from '../../../public/assets/profile-x.jpg'

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isExperienceOpen, setIsExperienceOpen] = useState(false)

    // State for initial hero section animation
    const [heroVisible, setHeroVisible] = useState(false)
    useEffect(() => {
        setHeroVisible(true)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(sectionId)
        setIsMenuOpen(false)
        setIsExperienceOpen(false) // Close experience sidebar if open
        }
    }

    const handleContact = () => {
        sendEmail({
            to: 'kawaklebersc@gmail.com',
            subject: 'Proposta de Serviço',
            body: 'Olá, gostaria de entrar em contato para averiguar os seus serviços e solicitar um orçamento.',
        });
    };

    const currentYear = new Date().getFullYear()


        const sectionVariants = {
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                duration: 0.8,
                ease: easeInOut, // Use the Easing.easeInOut constant instead of a string
                },
            },
        };

        const itemVariants = {
            hidden: {
                opacity: 0,
                y: 20,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                duration: 0.5,
                ease: easeInOut, // Update this to a valid easing function
                },
            },
        };
    return (
        <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans">
        {/* Overlay para fechar sidebars */}
        <AnimatePresence>
            {(isMenuOpen || isExperienceOpen) && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => {
                setIsMenuOpen(false)
                setIsExperienceOpen(false)
                }}
            />
            )}
        </AnimatePresence>

        {/* Navigation Sidebar */}
        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-80 bg-white border-l border-black z-50 shadow-lg"
            >
                <div className="p-6 border-b border-neutral-200">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight">Navegação</h2>
                    <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded-full"
                    aria-label="Close navigation menu"
                    >
                    <X size={24} />
                    </button>
                </div>
                </div>

                <div className="p-6">
                <div className="space-y-4">
                    {["inicio", "sobre", "habilidades", "projetos", "contato"].map((item, index) => (
                    <motion.button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className={`group w-full text-left p-4 border transition-all duration-300 transform hover:scale-[1.02] ${
                        activeSection === item
                            ? "border-black bg-black text-white"
                            : "border-neutral-200 hover:border-black hover:bg-neutral-50"
                        }`}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center justify-between">
                        <span className="text-lg font-medium capitalize">{item}</span>
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeSection === item ? "bg-white" : "bg-neutral-400 group-hover:bg-black"
                            }`}
                        />
                        </div>
                        <div className="text-sm opacity-70 mt-1">
                        {item === "inicio" && "Início do portfolio"}
                        {item === "sobre" && "Sobre minha trajetória"}
                        {item === "habilidades" && "Tecnologias e habilidades"}
                        {item === "projetos" && "Meus trabalhos"}
                        {item === "contato" && "Entre em contato"}
                        </div>
                    </motion.button>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                    <h3 className="font-bold mb-4 text-neutral-700">Links Rápidos</h3>
                    <div className="space-y-3">
                    <a
                        href="https://github.com/Izileth"
                        className="flex items-center gap-3 p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kaw%C3%A3-correia-547547261/"
                        className="flex items-center gap-3 p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                    <button
                        onClick={handleContact}
                        className="flex items-center gap-3 p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded"
                    >
                        <Mail size={18} />
                        <span>Email</span>
                    </button>
                    </div>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* Experience Timeline Sidebar */}
        <AnimatePresence>
            {isExperienceOpen && (
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-full w-96 bg-white border-r border-black z-50 shadow-lg"
            >
                <div className="p-6 border-b border-neutral-200">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                    <Briefcase size={24} />
                    <h2 className="text-2xl font-bold tracking-tight">Experiência</h2>
                    </div>
                    <button
                    onClick={() => setIsExperienceOpen(false)}
                    className="p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded-full"
                    aria-label="Close experience timeline"
                    >
                    <X size={24} />
                    </button>
                </div>
                </div>

                <div className="p-6 h-full overflow-y-auto">
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                    >
                        {/* Timeline line */}
                        {index !== experiences.length - 1 && (
                        <div className="absolute left-6 top-12 w-px h-[calc(100%_-_2rem)] bg-neutral-200" />
                        )}

                        <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {index + 1}
                            </div>
                        </div>

                        <div className="flex-1 bg-neutral-50 p-4 border-l border-black hover:bg-neutral-100 transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-2">
                            <Clock size={16} className="text-neutral-600" />
                            <span className="text-sm font-medium text-neutral-600">{exp.year}</span>
                            </div>

                            <h3 className="text-lg font-bold mb-1">{exp.position}</h3>
                            <h4 className="text-md font-medium text-neutral-700 mb-3">{exp.company}</h4>

                            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <span
                                key={skill}
                                className="px-2 py-1 bg-white text-xs font-medium border border-neutral-300 text-neutral-800 hover:border-black transition-colors duration-200"
                                >
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4">
                <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl font-bold tracking-tight"
                >
                Portfolio
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                {["inicio", "sobre", "habilidades", "projetos", "contato"].map((item, index) => (
                    <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-lg transition-colors duration-300 hover:text-neutral-600 relative group ${
                        activeSection === item ? "text-black font-medium" : "text-neutral-500"
                    }`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>
                ))}
                </div>

                {/* Mobile Menu Buttons */}
                <div className="md:hidden flex items-center gap-4">
                <button
                    className="p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded-full"
                    onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                    title="Ver Experiência"
                    aria-label="Toggle experience timeline"
                >
                    <Briefcase size={24} />
                </button>
                <button
                    className="p-2 text-black hover:bg-neutral-100 transition-colors duration-200 rounded-full"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    title="Menu de Navegação"
                    aria-label="Toggle navigation menu"
                >
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={isMenuOpen ? "x" : "menu"}
                        initial={{ rotate: 0, opacity: 0 }}
                        animate={{ rotate: isMenuOpen ? 90 : 0, opacity: 1 }}
                        exit={{ rotate: isMenuOpen ? 0 : 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                    </AnimatePresence>
                </button>
                </div>
            </div>
            </div>
            {/* Desktop Experience Button */}
            <div className="hidden md:block">
            <motion.button
                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 bg-black text-white p-3 hover:bg-neutral-800 transition-all duration-300 hover:scale-110 group rounded-full"
                title="Ver Cronologia de Experiência"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                aria-label="Toggle experience timeline"
            >
                <Briefcase size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </motion.button>
            </div>
        </nav>

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={heroVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-tight tracking-tighter">Kawã Correia</h1>
                <DecryptText  text="" speed={150} />
                <motion.div
                initial={{ scaleX: 0 }}
                animate={heroVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="w-32 h-px bg-black mx-auto mb-8 origin-center mt-6"
                ></motion.div>
                <p className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                Desenvolvedor Full Stack especializado em criar experiências digitais modernas e funcionais
                </p>
                <motion.button
                onClick={() => scrollToSection("projetos")}
                className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-lg hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 border border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Ver Projetos
                <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
                </motion.button>
            </motion.div>
            </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 border-t border-neutral-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Sobre Mim</h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                    <p>
                    Desenvolvedor apaixonado por tecnologia com mais de X anos de experiência criando soluções digitais
                    inovadoras. Especializado em desenvolvimento full-stack com foco em performance e experiência do
                    usuário.
                    </p>
                    <p>
                    Trabalho com as mais modernas tecnologias do mercado, sempre buscando entregar código limpo, eficiente
                    e escalável. Acredito que a simplicidade é a chave para soluções elegantes.
                    </p>
                </div>
                <div className="flex gap-4 mt-8">
                    <motion.a
                    href="https://github.com/Izileth"
                    className="p-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub profile"
                    >
                    <Github size={24} />
                    </motion.a>
                    <motion.a
                    href="https://www.linkedin.com/in/kaw%C3%A3-correia-547547261/"
                    className="p-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn profile"
                    >
                    <Linkedin size={24} />
                    </motion.a>
                    <motion.button
                        onClick={handleContact}
                        className="p-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Send email"
                        >
                        <Mail size={24} />
                    </motion.button>
                </div>
                </div>
                <div className="relative">
                <div className="w-full h-96 bg-neutral-100 border border-black relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100"></div>
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover grayscale-100" />
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 border-t border-neutral-200 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
            >
                Skills
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((category, index) => (
                <motion.div
                    key={category.name}
                    className="group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="bg-white border border-black p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-neutral-600">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-neutral-700 transition-colors duration-300">
                        {category.name}
                    </h3>
                    <div className="space-y-3">
                        {category.items.map((skill, skillIndex) => (
                        <div key={skill} className="flex items-center gap-3 transform transition-all duration-300">
                            <div className="w-2 h-2 bg-black group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-neutral-700 group-hover:text-black transition-colors duration-300">
                            {skill}
                            </span>
                        </div>
                        ))}
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-20 border-t border-neutral-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
            >
                Projetos
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    className="group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="bg-white border border-black overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-neutral-600">
                    <div className="h-48 bg-neutral-100 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale-100" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-neutral-700 transition-colors duration-300">
                        {project.title}
                        </h3>
                        <p className="text-neutral-700 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span
                            key={tech}
                            className="px-3 py-1 bg-zinc-100 text-sm font-medium text-neutral-800 group-hover:bg-neutral-200 transition-colors duration-300"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                        <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-black hover:text-neutral-700 transition-colors duration-300 group-hover:translate-x-1 transform"
                        >
                        Ver Projeto <ExternalLink size={16} />
                        </a>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 border-t border-neutral-200 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
            >
                Vamos Conversar?
            </motion.h2>
            <motion.p
                className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                transition={{ delay: 0.2 }}
            >
                Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto.
            </motion.p>
            <div className="flex justify-center gap-6 flex-wrap">
                <motion.button
                    onClick={handleContact}
                    className="group flex items-center gap-3 bg-white text-black px-8 py-4 text-lg hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 border border-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                <Mail className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                Enviar Email
                </motion.button>
                <motion.a
                    href="https://github.com/Izileth"
                    className="group flex items-center gap-3 border border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                <Github className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                GitHub
                </motion.a>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black text-white border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-neutral-400 text-sm">© {currentYear} Kawã Correia. Desenvolvido com React & Tailwind CSS.</p>
            </div>
        </footer>
        </div>
    )
}

export default Portfolio
