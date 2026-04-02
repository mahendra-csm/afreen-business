import { motion } from "framer-motion";

const AboutConference = () => (
  <section id="about" className="py-20 bg-light-gray">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 text-center">
          📄 About the Conference
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The <strong className="text-foreground">International Conference on Computer Science, Information Technology & Software Engineering</strong> brings together leading researchers, industry professionals, and academics to explore the rapid evolution of computing technologies shaping our modern world.
          </p>
          <p>
            From artificial intelligence and cloud computing to cybersecurity and data science, software engineering is at the heart of every industry transformation. This conference provides a premier platform for presenting cutting-edge research, exchanging innovative ideas, and fostering global collaboration.
          </p>
          <p>
            Join a vibrant community of scholars and practitioners dedicated to advancing the frontiers of computer science and IT — and contribute to the research breakthroughs that will define the future of technology.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutConference;
