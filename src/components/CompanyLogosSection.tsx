import Image from "next/image";
import { Highlighter } from "./magicui/highlighter";

const companyLogos = [
  {
    name: "Dinebd",
    logo: "/companies/dinebd-logo.png",
    bgColor: "bg-neutral-800",
    height: 30,
    width: 120,
  },
  {
    name: "Reel Recruits",
    logo: "/companies/reel-recruites.png",
    bgColor: "bg-neutral-700",
    height: 30,
    width: 150,
  },
  {
    name: "Electronthemes",
    logo: "/companies/electronthemes.png",
    bgColor: "bg-neutral-800",
    height: 30,
    width: 150,
  },
  {
    name: "Reserve Table",
    logo: "/companies/reserve-table.png",
    bgColor: "bg-neutral-700",
    height: 30,
    width: 150,
  },
  {
    name: "Curiousbiker",
    logo: "/companies/curiousbiker.svg",
    bgColor: "bg-neutral-800",
    height: 30,
    width: 150,
  },
];

export default function CompanyLogosSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wide">
                Our Clients
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <Highlighter action="underline" color="var(--primary)">
                Trusted
              </Highlighter>{" "}
              by
              <br />
              the industry&apos;s
              <br />
              <span className="text-white">leading companies</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Throughout the years, we have partnered with renowned global
              companies, delivering outstanding results and building strong
              relationships through our dedication to quality, innovation, and
              dependable service.
            </p>
          </div>

          {/* Right Logo Grid */}
          <div className="grid grid-cols-2 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-12 flex items-center justify-center h-32 lg:h-40 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
              >
                <div className="text-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    width={company.width}
                    height={company.height}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
