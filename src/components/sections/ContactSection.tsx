import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Mail, MessageSquare, Send, Phone, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

interface ContactSectionProps {
  id?: string;
  language?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  id = "contact",
  language: propLanguage,
}) => {
  // Try to use the language from context, fall back to prop if context is not available
  let contextLanguage;
  try {
    const context = useLanguage();
    contextLanguage = context.language;
  } catch (error) {
    // If useLanguage fails, we'll use the prop language
  }

  const language = contextLanguage || propLanguage || "en";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const translations = {
    en: {
      title: "Contact Me",
      subtitle:
        "Get in touch with me through the form below or direct channels.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message here...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully!",
      orText: "Or reach me directly via:",
      whatsappText: "WhatsApp",
      emailText: "Email",
      phoneText: "Phone",
      portfolioText: "Portfolio",
    },
    "pt-BR": {
      title: "Entre em Contato",
      subtitle: "Fale comigo através do formulário abaixo ou canais diretos.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "seu.email@exemplo.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Sua mensagem aqui...",
      sendButton: "Enviar Mensagem",
      sendingButton: "Enviando...",
      successMessage: "Mensagem enviada com sucesso!",
      orText: "Ou entre em contato diretamente via:",
      whatsappText: "WhatsApp",
      emailText: "Email",
      phoneText: "Telefone",
      portfolioText: "Portfólio",
    },
  };

  const t =
    translations[language as keyof typeof translations] || translations.en;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      id={id}
      className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-slate-800 shadow-md border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Send className="mr-2 h-5 w-5" />
                {t.sendButton}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-md text-center">
                  {t.successMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      {t.nameLabel}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      {t.emailLabel}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      {t.messageLabel}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t.sendingButton}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.sendButton}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col justify-start gap-6">
            <Card className="bg-white dark:bg-slate-800 shadow-md border-t-4 border-t-primary h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {t.orText}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <a
                  href="https://wa.me/5511999999999" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <MessageSquare className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-medium text-lg">{t.whatsappText}</div>
                    <div className="text-sm text-green-600/80 dark:text-green-400/80">
                      +55 11 99999-9999
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:your.email@example.com" // Replace with your actual email
                  className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Mail className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-medium text-lg">{t.emailText}</div>
                    <div className="text-sm text-blue-600/80 dark:text-blue-400/80">
                      your.email@example.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+5511999999999" // Replace with your actual phone number
                  className="flex items-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Phone className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-medium text-lg">{t.phoneText}</div>
                    <div className="text-sm text-purple-600/80 dark:text-purple-400/80">
                      +55 11 99999-9999
                    </div>
                  </div>
                </a>

                <a
                  href="https://yourportfolio.com" // Replace with your actual portfolio URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                >
                  <ExternalLink className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-medium text-lg">{t.portfolioText}</div>
                    <div className="text-sm text-amber-600/80 dark:text-amber-400/80">
                      yourportfolio.com
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
