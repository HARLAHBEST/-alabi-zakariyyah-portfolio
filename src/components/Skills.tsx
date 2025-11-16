import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "JavaScript", "TypeScript", "REST APIs", "Authentication", "Server-side Logic"],
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "Firebase", "Supabase", "Git & GitHub", "EmailJS", "Deployment"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">
            Modern technologies I use to build scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="text-gradient">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
