import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "pt-br";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Sample translations
const translations: Translations = {
  // Header
  "nav.home": {
    en: "Home",
    "pt-br": "Início",
  },
  "nav.about": {
    en: "About Me",
    "pt-br": "Sobre Mim",
  },
  "nav.projects": {
    en: "Projects",
    "pt-br": "Projetos",
  },
  "nav.skills": {
    en: "Skills",
    "pt-br": "Habilidades",
  },
  "nav.contact": {
    en: "Contact",
    "pt-br": "Contato",
  },

  // Hero Section
  "hero.greeting": {
    en: "Hello, I'm",
    "pt-br": "Olá, eu sou",
  },
  "hero.title": {
    en: "Software Developer",
    "pt-br": "Desenvolvedor de Software",
  },
  "hero.description": {
    en: "I build modern web applications with a focus on user experience and performance.",
    "pt-br":
      "Eu construo aplicações web modernas com foco em experiência do usuário e desempenho.",
  },
  "hero.cta": {
    en: "View My Work",
    "pt-br": "Ver Meu Trabalho",
  },

  // About Section
  "about.title": {
    en: "About Me",
    "pt-br": "Sobre Mim",
  },
  "about.description": {
    en: "I am a passionate software developer with experience in building web applications using modern technologies. I love solving complex problems and creating intuitive user interfaces.",
    "pt-br":
      "Sou um desenvolvedor de software apaixonado com experiência na construção de aplicações web usando tecnologias modernas. Adoro resolver problemas complexos e criar interfaces de usuário intuitivas.",
  },
  "about.background": {
    en: "With a background in computer science, I have been working in the industry for several years, collaborating with teams to deliver high-quality software solutions.",
    "pt-br":
      "Com formação em ciência da computação, tenho trabalhado na indústria por vários anos, colaborando com equipes para entregar soluções de software de alta qualidade.",
  },

  // Projects Section
  "projects.title": {
    en: "My Projects",
    "pt-br": "Meus Projetos",
  },
  "projects.viewDetails": {
    en: "View Details",
    "pt-br": "Ver Detalhes",
  },
  "projects.closeDetails": {
    en: "Close",
    "pt-br": "Fechar",
  },

  // Skills Section
  "skills.title": {
    en: "My Skills",
    "pt-br": "Minhas Habilidades",
  },
  "skills.frontend": {
    en: "Frontend",
    "pt-br": "Frontend",
  },
  "skills.backend": {
    en: "Backend",
    "pt-br": "Backend",
  },
  "skills.other": {
    en: "Other",
    "pt-br": "Outros",
  },

  // Contact Section
  "contact.title": {
    en: "Get In Touch",
    "pt-br": "Entre Em Contato",
  },
  "contact.name": {
    en: "Name",
    "pt-br": "Nome",
  },
  "contact.email": {
    en: "Email",
    "pt-br": "Email",
  },
  "contact.message": {
    en: "Message",
    "pt-br": "Mensagem",
  },
  "contact.send": {
    en: "Send Message",
    "pt-br": "Enviar Mensagem",
  },
  "contact.whatsapp": {
    en: "Contact via WhatsApp",
    "pt-br": "Contato via WhatsApp",
  },
  "contact.emailMe": {
    en: "Send me an Email",
    "pt-br": "Envie-me um Email",
  },

  // Footer
  "footer.copyright": {
    en: "All Rights Reserved",
    "pt-br": "Todos os Direitos Reservados",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  // Check for saved language preference in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (
      savedLanguage &&
      (savedLanguage === "en" || savedLanguage === "pt-br")
    ) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) {
        setLanguage("pt-br");
      }
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageProvider;
