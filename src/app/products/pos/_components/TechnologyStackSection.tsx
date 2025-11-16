"use client";

import { motion } from "motion/react";
import { Zap, Shield, Database } from "lucide-react";

const techStack = [
  { name: "NestJS", description: "Enterprise Node.js framework" },
  { name: "GraphQL", description: "Apollo Federation v2" },
  { name: "MongoDB", description: "Scalable NoSQL database" },
  { name: "TypeScript", description: "Type-safe development" },
];

export default function TechnologyStackSection() {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built with Modern Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Leveraging cutting-edge technologies for scalability, performance,
            and developer experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              High Performance
            </h4>
            <p className="text-gray-400 text-sm">
              Optimized queries with DataLoader pattern and efficient MongoDB
              aggregation pipelines.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <Shield className="w-8 h-8 text-green-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Secure by Default
            </h4>
            <p className="text-gray-400 text-sm">
              Built-in security with tenant isolation, role-based access
              control, and input validation.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <Database className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Scalable Architecture
            </h4>
            <p className="text-gray-400 text-sm">
              Multi-tenant design with horizontal scaling support for growing
              businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

