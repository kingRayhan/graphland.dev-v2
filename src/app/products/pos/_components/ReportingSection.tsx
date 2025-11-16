"use client";

import { motion } from "motion/react";
import { TrendingUp, DollarSign, BarChart3, Package } from "lucide-react";

const reportingFeatures = [
  {
    icon: TrendingUp,
    title: "Profit & Loss",
    description:
      "Complete financial overview with revenue, COGS, gross profit, net profit, and detailed expense breakdowns.",
  },
  {
    icon: DollarSign,
    title: "Cash Flow",
    description:
      "Real-time cash flow tracking with opening/closing balances, inflows/outflows, and time series analysis.",
  },
  {
    icon: BarChart3,
    title: "Sales Reports",
    description:
      "Comprehensive sales analytics with KPIs, product performance, category totals, and daily trends.",
  },
  {
    icon: Package,
    title: "Stock Reports",
    description:
      "Inventory visibility with stock levels, alerts, and comprehensive inventory management insights.",
  },
];

export default function ReportingSection() {
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
            Powerful Reporting & Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Make data-driven decisions with comprehensive financial and
            inventory reports.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reportingFeatures.map((report, index) => {
            const Icon = report.icon;
            return (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-800 rounded-2xl p-8 bg-gray-900/50 hover:border-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {report.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {report.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

