import {
  FigmaIcon,
  GlobeIcon,
  LayoutPanelTopIcon,
  MoveUpRightIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Graphland builds lightning-fast, scalable websites with Next.js and React—designed to look stunning, convert effectively, and deliver top performance with SEO in mind.",
    icon: <GlobeIcon className="size-8 text-primary" />,
  },
  {
    id: "2",
    title: "Native & Cross-Platform Mobile Apps",
    description:
      "We create sleek, high-performance mobile apps that work seamlessly on any device, helping your business reach users everywhere.",
    icon: <TabletSmartphoneIcon className="size-8 text-primary" />,
  },
  {
    id: "3",
    title: "User-Centered Design Solutions",
    description: "Great design is more than pixelsit's how users feel.",
    icon: <FigmaIcon className="size-8 text-primary" />,
  },
  {
    id: "4",
    title: "Scalable SaaS Solutions",
    description:
      "We build scalable SaaS platforms designed for growth, reliability, and seamless user experiences.",
    icon: <LayoutPanelTopIcon className="size-8 text-primary" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We specialize in creating digital solutions that drive business
            growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
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
                href={"/"}
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
  );
}
