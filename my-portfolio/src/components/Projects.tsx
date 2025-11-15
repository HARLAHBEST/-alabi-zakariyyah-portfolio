import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "House Vista",
      description: "Modern real estate platform for property discovery and management. Features advanced search filters, interactive property galleries, and seamless user experience for buyers and sellers.",
      tags: ["React", "Next.js", "Real Estate", "Responsive Design", "Production"],
      link: "https://house-vista.vercel.app/",
      status: "Live",
    },
    {
      title: "Oyekanmi Bolaji Enterprise",
      description: "Professional enterprise website for Oyekanmi Bolaji Enterprise featuring modern design, business services showcase, and client engagement features. Built with cutting-edge web technologies for optimal performance.",
      tags: ["React", "Next.js", "Enterprise", "Production", "SEO"],
      link: "https://oyekanmibolajienterprise.com",
      status: "Live",
    },
    {
      title: "Symteco Nigeria Limited Website",
      description: "Corporate website for Symteco Nigeria Limited featuring responsive design, service pages, company information, and optimized performance. Built with modern web technologies and deployed for production use.",
      tags: ["MERN Stack", "Corporate Website", "Responsive UI", "Production"],
      link: "https://symteconigerialimited.com",
      status: "Live",
    },
    {
      title: "Prime Property Forge",
      description: "Real estate management platform for property listings, client engagement, and transaction management. Features modern UI with responsive design and optimized performance for seamless property browsing.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Real Estate", "Production"],
      link: "https://prime-property-forge.vercel.app/",
      status: "Live",
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern portfolio showcasing my skills, projects, and experience. Features an interactive contact form with Firebase integration and EmailJS for seamless communication.",
      tags: ["Next.js", "React", "Bootstrap", "Firebase", "EmailJS"],
      link: "https://portfolio.oyekanmibolajienterprise.com",
      status: "Live",
    },
    {
      title: "Task Management Application",
      description: "A productivity app designed to help users create, organize, and track their daily tasks efficiently. Built with Node.js backend and MongoDB for data persistence.",
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
      link: "https://github.com/HARLAHBEST/task-app",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A collection of projects I've built — from personal experiments to production applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
