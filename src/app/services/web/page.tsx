"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Look no further for your <br /> web development needs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-lg text-neutral-400 md:text-xl"
        >
          We offer a wide range of web development services to help you build
          your <br />
          website, mobile app, and desktop software tailored to your unique
          needs <br />
          and vision.
        </motion.p>
      </LampContainer>

      <div className="flex justify-center">
        <Image
          src={"/services/web-1.png"}
          alt="web-1"
          width={1000}
          height={500}
        />
      </div>

      {/* Web Solutions Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tailored Web Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From sleek websites to robust web applications, we deliver
              solutions crafted around your vision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Performance */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Performance
              </h3>
              <p className="text-gray-400 mb-8">
                Blazing fast and optimized for speed our code ensures seamless
                navigation and instant load times.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-blue-400">
                      1.04
                    </span>
                    <span className="text-lg text-gray-400">s</span>
                    <span className="text-green-400 text-sm ml-auto">-22%</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-8 bg-blue-500 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Security
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Your data is safe with us. We build with strong encryption
                    and best practices to ensure total peace of mind.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white">🔒</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white">🛡️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Engine Optimization */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Search Engine Optimization
              </h3>
              <p className="text-gray-400 mb-8">
                Structured, optimized, and keyword-aware we help your product
                get discovered and stay visible online.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Performance", score: "100%" },
                  { label: "Accessibility", score: "100%" },
                  { label: "Best Practices", score: "100%" },
                  { label: "SEO", score: "100%" },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {metric.score}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Friendly Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mobile Friendly
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for every screen size. Our web apps adapt perfectly to
              ensure smooth and intuitive user experiences on the go.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-800/50 rounded-xl p-8">
              <video autoPlay loop muted className="rounded-lg w-full h-auto">
                <source src="/services/mobile-friendly.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure, and high-performance web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded"></div>
                  <span className="text-gray-300">React</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded"></div>
                  <span className="text-gray-300">Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-gray-300">TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-gray-300">Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-700 rounded"></div>
                  <span className="text-gray-300">Express</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <span className="text-gray-300">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="text-gray-300">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Push Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                  <span className="text-gray-300">Firebase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <span className="text-gray-300">OneSignal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                  <span className="text-gray-300">Web Push API</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded"></div>
                  <span className="text-gray-300">Service Workers</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <span className="text-gray-300">AWS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-gray-300">Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded"></div>
                  <span className="text-gray-300">Vercel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-700 rounded"></div>
                  <span className="text-gray-300">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technologies */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Database */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🗄️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Database</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="text-gray-300">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                  <span className="text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <span className="text-gray-300">Redis</span>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Authentication</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  <span className="text-gray-300">Auth0</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                  <span className="text-gray-300">Firebase Auth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-gray-300">JWT</span>
                </div>
              </div>
            </div>

            {/* APIs & Integration */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">APIs & Integration</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-500 rounded"></div>
                  <span className="text-gray-300">GraphQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-gray-300">REST APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                  <span className="text-gray-300">Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
