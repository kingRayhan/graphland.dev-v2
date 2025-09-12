import {
  FigmaIcon,
  GlobeIcon,
  LayoutPanelTopIcon,
  MoveUpRightIcon,
  TabletSmartphoneIcon,
  CheckIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/button";
import ScheduleButton from "@/components/ScheduleButton";
import CurvedLoop from "@/components/ui/CurvedLoop";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

interface Service {
  id: string;
  title: string;
  path: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    path: "/services/web",
    description:
      "Graphland builds lightning-fast, scalable websites with Next.js and React—designed to look stunning, convert effectively, and deliver top performance with SEO in mind.",
    fullDescription:
      "Transform your digital presence with cutting-edge web solutions. We craft responsive, performance-optimized websites that not only look exceptional but drive real business results.",
    icon: <GlobeIcon className="size-8 text-primary" />,
    features: [
      "Custom responsive design",
      "SEO optimization",
      "Performance optimization",
      "E-commerce integration",
      "Content management systems",
      "Progressive web apps",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: "2",
    title: "Native & Cross-Platform Mobile Apps",
    path: "/services/mobile",
    description:
      "We create sleek, high-performance mobile apps that work seamlessly on any device, helping your business reach users everywhere.",
    fullDescription:
      "Reach your audience wherever they are with powerful mobile applications. From native iOS and Android apps to cross-platform solutions, we deliver exceptional user experiences.",
    icon: <TabletSmartphoneIcon className="size-8 text-primary" />,
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
      "Real-time synchronization",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
    ],
  },
  {
    id: "3",
    title: "User-Centered Design Solutions",
    path: "/services/design",
    description: "Great design is more than pixels—it's how users feel.",
    fullDescription:
      "Create meaningful connections with your users through thoughtful design. We blend aesthetics with functionality to deliver experiences that delight and convert.",
    icon: <FigmaIcon className="size-8 text-primary" />,
    features: [
      "User experience (UX) research",
      "User interface (UI) design",
      "Prototyping & wireframing",
      "Design systems",
      "Brand identity design",
      "Accessibility compliance",
    ],
    technologies: [
      "Figma",
      "Adobe Creative Suite",
      "Sketch",
      "Principle",
      "InVision",
      "Miro",
    ],
  },
  {
    id: "4",
    title: "Scalable SaaS Solutions",
    path: "/services/saas",
    description:
      "We build scalable SaaS platforms designed for growth, reliability, and seamless user experiences.",
    fullDescription:
      "Launch and scale your SaaS product with confidence. We architect robust, secure platforms that handle growth while delivering exceptional user experiences.",
    icon: <LayoutPanelTopIcon className="size-8 text-primary" />,
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "API development",
      "Database optimization",
      "Security & compliance",
      "Analytics & reporting",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Stripe",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <div className="relative flex h-[20rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Our{" "}
            <Highlighter action="highlight" color="var(--primary)">
              <span className="text-black">Services</span>
            </Highlighter>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            We specialize in creating digital solutions that drive business
            growth and deliver exceptional user experiences across web, mobile,
            design, and SaaS platforms.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => (
              <SpotlightCard
                key={service.id}
                className="group flex flex-col gap-3 justify-between"
                spotlightColor="rgba(223, 249, 74, 0.6)"
              >
                <div className="flex flex-col gap-3">
                  {/* Icon */}
                  {service.icon}

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.path}
                  className="inline-flex items-center font-medium transition-colors duration-200 group/btn"
                >
                  <span className="border-b-2 pb-1 mr-2 group-hover/btn:border-primary">
                    View Details
                  </span>
                  <MoveUpRightIcon className="size-4 group-hover/btn:translate-x-1 -group-hover/btn:translate-y-1 transition-transform duration-200" />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 lg:py-32 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Every project is tailored to your specific needs, but here&apos;s what
              you can expect from our comprehensive service offerings.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-100">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-neutral-200">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-neutral-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={service.path}>
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Technologies */}
                <div className="p-8 rounded-xl bg-neutral-800/50 border border-neutral-700">
                  <h4 className="text-lg font-semibold text-neutral-200 mb-6 text-center">
                    Technologies We Use
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {service.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-600 text-center"
                      >
                        <span className="text-sm text-neutral-300 font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers
              exceptional results on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-100">
                Discovery
              </h3>
              <p className="text-neutral-400">
                We dive deep into understanding your business, goals, and user
                needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-100">
                Strategy
              </h3>
              <p className="text-neutral-400">
                We create a comprehensive plan and roadmap for your project.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-100">
                Development
              </h3>
              <p className="text-neutral-400">
                Our team brings your vision to life with cutting-edge
                technology.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-100">Launch</h3>
              <p className="text-neutral-400">
                We deploy, test, and provide ongoing support for your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your project and explore how our services can help
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScheduleButton />
            <Button variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <CurvedLoop
        marqueeText="Custom Solutions for Every Need ✦  Custom Solutions for Every Need ✦  Custom Solutions for Every Need"
        speed={1}
        curveAmount={100}
        direction="right"
        interactive={true}
      />
    </div>
  );
}
