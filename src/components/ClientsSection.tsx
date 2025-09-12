import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { gql, gqlAPIClient } from "@/lib/api.client";
import { Testimonial } from "@/graphql/graphql";
import Image from "next/image";
import { getFileUrl } from "@/lib/utils";

const QUERY = gql`
  query Testimonials($orderBy: [TestimonialOrderByInput!]!) {
    list: testimonials(orderBy: $orderBy) {
      id
      clientName
      designation
      clientImage {
        id
        extension
      }
      companyName
      index
      rating
      testimonial
      url
    }
  }
`;

export default async function ClientsSection() {
  const query = await gqlAPIClient<{ list: Testimonial[] }>({
    query: QUERY,
    variables: { orderBy: [{ index: "asc" }] },
  });

  return (
    <>
      {/* <pre>{JSON.stringify(query.list, null, 2)}</pre> */}
      <section className="py-32 lg:py-40 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              We&apos;ve had the privilege of working with amazing clients who
              trust us to bring their digital visions to life.
            </p>
          </div>

          {/* Client Logos */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 lg:gap-12 mb-24 lg:mb-28">
          {clients.map((client, index) => (
            <div key={index} className="group flex items-center justify-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-neutral-700 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="font-bold text-lg">{client.logo}</span>
              </div>
            </div>
          ))}
        </div> */}

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {query.list.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800"
              >
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(+(testimonial?.rating ?? 1))].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-300 mb-6 leading-relaxed line-clamp-5">
                  &quot;{testimonial.testimonial}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="size-12 bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      src={getFileUrl(
                        testimonial.clientImage?.id || "",
                        testimonial.clientImage?.extension
                      )}
                      alt={testimonial.clientName + " logo"}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-100">
                      {testimonial.clientName}
                    </div>
                    <div className="text-neutral-400 text-sm">
                      {testimonial.designation} of {testimonial.companyName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20 lg:mt-24">
            <h3 className="text-2xl font-bold text-neutral-100 mb-4">
              Join our growing list of satisfied clients
            </h3>
            <p className="text-neutral-400 mb-8">
              Ready to start your project? Let&apos;s discuss how we can help
              you achieve your goals.
            </p>
            <Button asChild>
              <Link href={"/contact"} className="text-black">
                Start Your Project
                <ArrowUpRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
