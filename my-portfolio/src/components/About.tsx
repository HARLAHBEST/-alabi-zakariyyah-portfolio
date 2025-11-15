import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const stats = [
    { label: "Years Building Apps", value: "2+", icon: "📅" },
    { label: "Projects Completed", value: "10+", icon: "🚀" },
    { label: "Full-Stack", value: "Expertise", icon: "💻" },
    { label: "MERN Stack", value: "Certified", icon: "🎓" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <h3 className="text-xl md:text-2xl text-gradient mb-8">
            Building Scalable Full-Stack Solutions
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Bringing together frontend, backend, and modern web development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a certified MERN Stack Developer from SQI College of ICT with proven 
              experience shipping applications that solve real-world problems. My expertise 
              spans the complete development lifecycle: from building responsive user interfaces 
              to creating robust APIs and managing databases.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              At my core, I'm passionate about clean code and building complete systems. 
              I've created corporate websites with seamless UX, task management applications, 
              and deployed production-grade solutions. My approach combines modern frameworks 
              with scalable architecture and thoughtful full-stack design.
            </p>

            <div className="pt-4">
              <h4 className="font-semibold text-lg mb-3">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {["Creativity", "Consistency", "Collaboration", "Clean Code"].map((value) => (
                  <span key={value} className="px-4 py-2 bg-card border border-border rounded-full text-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
