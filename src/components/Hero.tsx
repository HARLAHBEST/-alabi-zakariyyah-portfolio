import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal } from "./Terminal";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Badge variant="secondary" className="mb-4">
            <span className="text-primary">✦</span> MERN Stack Developer × Next.js Specialist
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
            Alabi Zakariyyah Olamilekan
          </h1>
          
          <p className="text-xl md:text-2xl text-accent font-medium">
            Full-Stack Engineer × MERN Developer × Next.js Enthusiast
          </p>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Crafting scalable full-stack solutions with modern JavaScript technologies. 
            Building the future with React, Next.js, Node.js, and MongoDB-powered applications.
          </p>

          <Terminal />

          <div className="flex gap-4 justify-center pt-6">
            <Button size="lg" asChild>
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Tech Stack:</strong> React • Next.js • Node.js • 
              Express • MongoDB • Bootstrap • Firebase
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
