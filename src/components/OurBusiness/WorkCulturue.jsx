'use client';
import { motion } from 'framer-motion';

const cultureCards = [
  {
    id: 1,
    title: "Own Your Impact",
    description: "At Gluckscare, every individual has the power to create change. We encourage our team to think like leaders, take ownership, and push boundaries with confidence. We don't believe in rigid hierarchies—we believe in ideas, innovation, and initiative.",
    icon: "🚀"
  },
  {
    id: 2,
    title: "Progress Over Perfection",
    description: "In a field where speed and precision matter, we embrace a culture of learning, experimentation, and adaptability. We prioritize continuous improvement over unattainable perfection, ensuring that we bring life-saving solutions to market efficiently.",
    icon: "💡"
  },
  {
    id: 3,
    title: "Collective Strength Over Individual Brilliance",
    description: "True breakthroughs in healthcare are never achieved alone. At Gluckscare, we believe that a high-performing team is more valuable than any individual talent. We champion collaboration, respect, and shared success.",
    icon: "🤝"
  },
  {
    id: 4,
    title: "Empathy & Responsibility at the Core",
    description: "Our responsibility extends beyond innovation—it's about the people we serve. We foster a culture of accountability with empathy, where every decision is made with the well-being of patients, healthcare providers, and our team in mind.",
    icon: "❤️"
  }
];

export default function WorkCulture() {
  return (
    <section className="bg-gradient-to-b from-light to-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 relative inline-block">
            Our Work Culture
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
            {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span> */}
          </h2>
          <p className="text-heading/80 text-lg max-w-3xl mx-auto mt-6">
            At Gluckscare Pharmaceuticals, we believe that a strong organizational culture is the foundation of innovation, excellence, and meaningful impact in healthcare.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cultureCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-custom hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Card Content */}
                <div className="relative z-10">
                  <span className="text-4xl mb-6 block">{card.icon}</span>
                  <h3 className="text-2xl font-bold text-heading mb-4">{card.title}</h3>
                  <p className="text-heading/70 leading-relaxed">{card.description}</p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-heading mb-4">Driving Healthcare Forward, Together</h3>
          <p className="text-heading/70">
            At Gluckscare Pharmaceuticals, we are not just employees—we are changemakers, scientists, and visionaries on a mission to revolutionize healthcare. With integrity, innovation, and impact as our guiding principles, we are shaping a healthier future for all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}