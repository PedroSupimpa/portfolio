import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  // Mock language selection since we don't have access to the actual language context yet
  const language = "en";

  const translations = {
    en: {
      copyright: "© 2024 Portfolio. All rights reserved.",
      madeWith: "Made with",
      byDeveloper: "by Developer Name",
    },
    "pt-BR": {
      copyright: "© 2024 Portfólio. Todos os direitos reservados.",
      madeWith: "Feito com",
      byDeveloper: "por Nome do Desenvolvedor",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <footer className="w-full bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">{t.copyright}</p>
            <p className="text-sm flex items-center mt-2">
              {t.madeWith}{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />{" "}
              {t.byDeveloper}
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:example@example.com"
              className="hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
