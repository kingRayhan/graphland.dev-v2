"use client";

import { motion } from "motion/react";
import { CheckCircle2, DollarSign, Package, Users, Shield, Settings, Database } from "lucide-react";

const coreModules = [
  {
    icon: DollarSign,
    title: "Accounting",
    description:
      "Comprehensive financial management with transactions, purchase payments, invoice payments, payroll, and expense tracking.",
    features: [
      "Transaction Management",
      "Payment Processing",
      "Expense Tracking",
      "Payroll Management",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Package,
    title: "Inventory",
    description:
      "Complete inventory control with products, purchases, invoices, quotations, and real-time stock management.",
    features: [
      "Product Management",
      "Purchase Orders",
      "Invoice Generation",
      "Stock Tracking",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "People Management",
    description:
      "Centralized management of clients, employees, and suppliers with complete relationship tracking.",
    features: [
      "Client Database",
      "Employee Management",
      "Supplier Records",
      "Relationship Tracking",
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Identity & Security",
    description:
      "Robust authentication and authorization with JWT tokens, role-based permissions, and multi-tenant isolation.",
    features: [
      "JWT Authentication",
      "Role-Based Access",
      "Multi-Tenant Security",
      "User Management",
    ],
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Settings,
    title: "Setup & Configuration",
    description:
      "Flexible configuration for brands, units, VAT settings, and business-specific customizations.",
    features: [
      "Brand Management",
      "Unit Configuration",
      "VAT Settings",
      "Customization",
    ],
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: Database,
    title: "Storage & Files",
    description:
      "Integrated file upload and management system with cloud storage support for documents and media.",
    features: [
      "File Upload",
      "Cloud Storage",
      "Document Management",
      "Media Handling",
    ],
    color: "from-indigo-500 to-violet-600",
  },
];

export default function CoreModulesSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive Business Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to run your business efficiently, from
            inventory to accounting, all in one powerful platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-800 rounded-2xl p-8 bg-gray-900/50 hover:bg-gray-900 transition-colors group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

