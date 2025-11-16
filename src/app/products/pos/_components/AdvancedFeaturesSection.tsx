"use client";

import { motion } from "motion/react";
import { Repeat, Layers, Network, Lock, BarChart3, Package, CreditCard } from "lucide-react";

export default function AdvancedFeaturesSection() {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Built with enterprise-grade features to handle complex business
              operations seamlessly.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Repeat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Product Returns & Refunds
                  </h3>
                  <p className="text-gray-400">
                    Comprehensive return management with payment processing,
                    validation, and automatic refund calculations. Prevents
                    over-refunding with multi-layer validation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Multi-Tenant Architecture
                  </h3>
                  <p className="text-gray-400">
                    Complete tenant isolation with database separation,
                    ensuring data security and scalability for multiple
                    businesses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    GraphQL API
                  </h3>
                  <p className="text-gray-400">
                    Modern API with Apollo Federation v2, enabling flexible
                    queries and real-time updates across all modules.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-400">
                    JWT-based authentication with role-based permissions and
                    comprehensive access control for all business operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    Real-time Analytics
                  </h4>
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Revenue</span>
                    <span className="text-white font-semibold">$125,430</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    Inventory Status
                  </h4>
                  <Package className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Active Products</span>
                    <span className="text-white font-semibold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Low Stock Alerts</span>
                    <span className="text-yellow-400 font-semibold">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    Payment Processing
                  </h4>
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Pending Payments</span>
                    <span className="text-white font-semibold">$8,920</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Completed Today</span>
                    <span className="text-green-400 font-semibold">
                      $15,340
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

