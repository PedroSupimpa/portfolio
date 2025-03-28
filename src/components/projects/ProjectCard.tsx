import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { cn } from "../../lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  thumbnail: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  language: "en" | "pt-br";
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the main features and technologies used.",
  detailedDescription = "This is a more detailed description of the project that explains the challenges faced, solutions implemented, and the overall architecture of the project. This will only be visible when the user expands the card to see more details.",
  thumbnail = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  tags = ["React", "TypeScript", "Tailwind CSS"],
  liveUrl = "#",
  githubUrl = "#",
  language = "en",
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const translations = {
    en: {
      viewMore: "View More",
      viewLess: "View Less",
      visitSite: "Visit Site",
      viewCode: "View Code",
    },
    "pt-br": {
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      visitSite: "Visitar Site",
      viewCode: "Ver Código",
    },
  };

  const t = translations[language];

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>

        <div
          className={cn(
            "mt-4 overflow-hidden transition-all duration-300",
            expanded ? "max-h-96" : "max-h-0",
          )}
        >
          <p className="text-sm text-gray-700">{detailedDescription}</p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-center gap-2"
          onClick={toggleExpand}
        >
          {expanded ? (
            <>
              {t.viewLess} <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              {t.viewMore} <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>

        <div className="flex gap-2 w-full">
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 flex items-center justify-center gap-1"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t.visitSite}
              </a>
            </Button>
          )}

          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 flex items-center justify-center gap-1"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                {t.viewCode}
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
