import type { Metadata } from "next";

type BilingualSection = {
  titleEn: string;
  titleBn: string;
  english: string[];
  bangla: string[];
};

const privacySections: BilingualSection[] = [
  {
    titleEn: "Scope & Overview",
    titleBn: "ব্যাপ্তি ও সারসংক্ষেপ",
    english: [
      "Graphland (“we”, “our”, “us”) respects the privacy of visitors, prospects, and clients who interact with graphland.dev, our landing pages, and our official social channels, including Facebook. This Privacy Policy explains what data we collect, why we collect it, and how we safeguard it.",
      "By using our website, submitting a form, or communicating with us, you agree to the practices outlined below.",
    ],
    bangla: [
      "Graphland (“আমরা”, “আমাদের”) আমাদের ওয়েবসাইট graphland.dev, ল্যান্ডিং পেজ এবং অফিসিয়াল সোশ্যাল চ্যানেল (যেমন Facebook) ব্যবহারকারীদের গোপনীয়তাকে সম্মান করে। এই নীতিমালায় আমরা কোন তথ্য সংগ্রহ করি, কেন সংগ্রহ করি এবং কীভাবে সুরক্ষিত রাখি তা ব্যাখ্যা করা হয়েছে।",
      "আপনি ওয়েবসাইট ব্যবহার করলে, কোনো ফর্ম জমা দিলে বা আমাদের সাথে যোগাযোগ করলে, নিচের নীতিমালায় বর্ণিত শর্তসমূহে সম্মতি প্রদান করছেন।",
    ],
  },
  {
    titleEn: "Data We Collect",
    titleBn: "আমরা যে তথ্য সংগ্রহ করি",
    english: [
      "Contact information that you provide through forms, chat widgets, or email (name, company name, phone number, email address, and project details).",
      "Usage data such as page views, device information, IP address, and referrer URLs, collected via privacy-respecting analytics tools to help us improve performance and security.",
      "Business credentials shared voluntarily during discovery calls or proposals so that we can verify eligibility for specialized or compliance-focused services.",
    ],
    bangla: [
      "ফর্ম, চ্যাট বা ইমেইলের মাধ্যমে আপনি যে তথ্য দেন (নাম, কোম্পানির নাম, ফোন নম্বর, ইমেইল, প্রকল্পের বিবরণ) আমরা সংগ্রহ করি।",
      "আমাদের ওয়েবসাইটের ব্যবহার সংক্রান্ত তথ্য যেমন পেজ ভিউ, ডিভাইসের ধরন, IP ঠিকানা এবং রেফারার URL — পারফরম্যান্স ও সিকিউরিটি উন্নত করার জন্য বিশ্লেষণমূলক টুলের মাধ্যমে সংগ্রহ করা হয়।",
      "বিশেষায়িত বা কমপ্লায়েন্স সম্পর্কিত সেবার জন্য আপনার যোগ্যতা যাচাই করতে আপনি যে ব্যবসায়িক তথ্য স্বেচ্ছায় শেয়ার করেন, সেগুলোও আমরা সংগ্রহ করি।",
    ],
  },
  {
    titleEn: "How We Use Data",
    titleBn: "আমরা কীভাবে তথ্য ব্যবহার করি",
    english: [
      "To respond to inquiries, issue proposals, deliver contracted work, and provide product or service updates.",
      "To comply with legal or regulatory requirements in Bangladesh and any other jurisdictions where we operate.",
      "To maintain platform security, prevent fraud, and analyze aggregated trends that help us enhance user experience.",
    ],
    bangla: [
      "আপনার প্রশ্নের উত্তর দেওয়া, প্রস্তাবনা পাঠানো, চুক্তিভিত্তিক কাজ সম্পন্ন করা এবং সেবা সংক্রান্ত আপডেট দেওয়ার জন্য আমরা তথ্য ব্যবহার করি।",
      "বাংলাদেশসহ প্রযোজ্য আইন ও নিয়ন্ত্রক বাধ্যবাধকতা পূরণ করতে এই তথ্য ব্যবহৃত হয়।",
      "প্ল্যাটফর্ম সুরক্ষা বজায় রাখা, প্রতারণা প্রতিরোধ করা এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে সামগ্রিক বিশ্লেষণ পরিচালনা করা হয়।",
    ],
  },
  {
    titleEn: "Data Sharing & Disclosure",
    titleBn: "তথ্য ভাগাভাগি ও প্রকাশ",
    english: [
      "We do not sell your personal data. We may share limited information with trusted technology vendors or subcontractors who support our delivery, and only under confidentiality obligations.",
      "If required by law, court order, or government regulation, we may disclose necessary information after verifying the request.",
    ],
    bangla: [
      "আমরা কোনো ব্যক্তিগত তথ্য বিক্রি করি না। প্রকল্প বাস্তবায়নে সহায়তাকারী নির্ভরযোগ্য প্রযুক্তি ভেন্ডর বা সাবকন্ট্রাক্টরের সাথে প্রয়োজনীয় তথ্য গোপনীয়তার শর্তে ভাগ করা হতে পারে।",
      "আইন, আদালতের নির্দেশ বা সরকারি নিয়মের প্রয়োজনে যাচাই সাপেক্ষে প্রযোজ্য তথ্য প্রদান করা হতে পারে।",
    ],
  },
  {
    titleEn: "Security, Retention & International Transfers",
    titleBn: "সুরক্ষা, সংরক্ষণ ও আন্তর্জাতিক স্থানান্তর",
    english: [
      "We apply industry-standard safeguards (encryption, access controls, audits) to protect data. No system is absolute, but we continuously monitor and improve.",
      "Data is retained only for as long as required for the stated purposes or legal obligations, after which it is securely deleted or anonymized.",
      "Where data moves outside Bangladesh, we rely on contractual protections and reputable infrastructure providers to keep it safe.",
    ],
    bangla: [
      "আমরা শিল্পমানের নিরাপত্তা ব্যবস্থা (এনক্রিপশন, অ্যাক্সেস কন্ট্রোল, অডিট) প্রয়োগ করি। কোনো সিস্টেম পুরোপুরি ঝুঁকিমুক্ত নয়, তবু আমরা নিয়মিত নজরদারি ও উন্নতি করি।",
      "ঘোষিত উদ্দেশ্য বা আইনী বাধ্যবাধকতা পূরণ হওয়া পর্যন্ত তথ্য সংরক্ষণ করা হয়; পরে নিরাপদভাবে মুছে ফেলা বা অ্যানোনিমাইজ করা হয়।",
      "বাংলাদেশের বাইরে তথ্য স্থানান্তরের ক্ষেত্রে বিশ্বাসযোগ্য অবকাঠামো ও চুক্তিভিত্তিক সুরক্ষা ব্যবহৃত হয়।",
    ],
  },
  {
    titleEn: "Your Rights & Choices",
    titleBn: "আপনার অধিকার ও পছন্দ",
    english: [
      "You can request access, correction, deletion, or restriction of your personal data by emailing hello@graphland.dev. We respond within a reasonable timeframe.",
      "You may opt out of marketing updates at any time via the unsubscribe link or by contacting us directly.",
    ],
    bangla: [
      "hello@graphland.dev ইমেইলে যোগাযোগ করে আপনি ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন, মুছে ফেলা বা সীমাবদ্ধ করার অনুরোধ করতে পারেন। আমরা যথাসম্ভব দ্রুত উত্তর দিই।",
      "মার্কেটিং আপডেট থেকে আপনি যেকোনো সময় আনসাবস্ক্রাইব লিংক বা সরাসরি যোগাযোগের মাধ্যমে বেরিয়ে যেতে পারেন।",
    ],
  },
  {
    titleEn: "Policy Updates & Contact",
    titleBn: "নীতিমালা হালনাগাদ ও যোগাযোগ",
    english: [
      "We may update this Privacy Policy to reflect operational, legal, or regulatory changes. The “last updated” date will always be shown on this page.",
      "Questions about this policy can be directed to hello@graphland.dev or via our Facebook page facebook.com/GraphlandHQ.",
    ],
    bangla: [
      "অপারেশনাল, আইনি বা নিয়ন্ত্রক পরিবর্তনের আলোকে এই নীতিমালা আপডেট করা হতে পারে এবং এই পেজে ‘সর্বশেষ হালনাগাদ’ তারিখ উল্লেখ থাকবে।",
      "নীতিমালা সম্পর্কে প্রশ্ন থাকলে hello@graphland.dev-এ ইমেইল করুন অথবা facebook.com/GraphlandHQ পেজে ইনবক্স করুন।",
    ],
  },
];

const termsSections: BilingualSection[] = [
  {
    titleEn: "Acceptance of Terms",
    titleBn: "শর্তাবলীর স্বীকৃতি",
    english: [
      "These Terms & Conditions govern all proposals, statements of work, retainers, and digital products offered by Graphland. By engaging our services or accessing our materials, you confirm that you are legally authorized to represent your organization.",
      "If you disagree with any clause, please refrain from using our website or services.",
    ],
    bangla: [
      "Graphland প্রদত্ত সকল প্রস্তাবনা, কাজের চুক্তি, রিটেইনার ও ডিজিটাল পণ্যের ক্ষেত্রে এই শর্তাবলী প্রযোজ্য। আমাদের সঙ্গে কাজ শুরু করলে আপনি আপনার প্রতিষ্ঠানের পক্ষে আইনি প্রতিনিধি হিসেবে সম্মতি দিচ্ছেন।",
      "যদি কোনো শর্তের সঙ্গে দ্বিমত থাকে, তাহলে অনুগ্রহ করে আমাদের ওয়েবসাইট বা সেবা ব্যবহার থেকে বিরত থাকুন।",
    ],
  },
  {
    titleEn: "Services & Deliverables",
    titleBn: "সেবা ও ডেলিভারেবল",
    english: [
      "We provide custom software development, design, consulting, and related technology services as described in an agreed scope.",
      "Deliverables, timelines, and acceptance criteria are defined in writing. Any change request may impact scope, budget, or schedule and requires written approval.",
    ],
    bangla: [
      "আমরা চুক্তি অনুযায়ী কাস্টম সফটওয়্যার ডেভেলপমেন্ট, ডিজাইন, কনসালটিংসহ প্রযুক্তি সেবা প্রদান করি।",
      "ডেলিভারেবল, সময়সীমা এবং গ্রহণযোগ্যতার মানদণ্ড লিখিতভাবে নির্ধারিত থাকে। পরিবর্তন আনতে হলে তা বাজেট বা সময়সীমায় প্রভাব ফেলতে পারে এবং লিখিত অনুমোদন জরুরি।",
    ],
  },
  {
    titleEn: "Client Responsibilities",
    titleBn: "ক্লায়েন্টের দায়িত্ব",
    english: [
      "Provide timely access to information, content, approvals, and stakeholders needed for successful delivery.",
      "Ensure all submitted materials respect intellectual property laws and do not infringe on third-party rights.",
    ],
    bangla: [
      "প্রকল্প সফল করতে প্রয়োজনীয় তথ্য, কনটেন্ট, অনুমোদন এবং সংশ্লিষ্ট ব্যক্তিদের সময়মতো প্রদান করতে হবে।",
      "আপনার সরবরাহকৃত সব উপাদান যেন কপিরাইটসহ তৃতীয় পক্ষের অধিকারে আঘাত না করে, তা নিশ্চিত করা আপনার দায়িত্ব।",
    ],
  },
  {
    titleEn: "Fees, Payments & Taxes",
    titleBn: "ফি, পেমেন্ট ও কর",
    english: [
      "Invoices are payable in the currency and schedule stated in the agreement. Late invoices may incur financing charges or project pauses.",
      "Clients are responsible for applicable taxes, duties, or government charges unless otherwise stated.",
    ],
    bangla: [
      "চুক্তিতে উল্লেখিত মুদ্রা ও সময়সূচি অনুযায়ী ইনভয়েস পরিশোধ করতে হবে। দেরি হলে ফাইন্যান্স চার্জ বা কাজ স্থগিত হতে পারে।",
      "অন্যথায় উল্লেখ না থাকলে প্রযোজ্য কর, শুল্ক বা সরকারি চার্জ ক্লায়েন্টকে বহন করতে হবে।",
    ],
  },
  {
    titleEn: "Intellectual Property",
    titleBn: "বুদ্ধিবৃত্তিক সম্পদ",
    english: [
      "Upon full payment, ownership of final deliverables transfers to the client, except for pre-existing tools, reusable components, or open-source libraries that remain with their respective owners.",
      "Graphland may showcase non-confidential aspects of the project in portfolios or case studies unless a separate NDA restricts it.",
    ],
    bangla: [
      "সম্পূর্ণ অর্থ পরিশোধের পর চূড়ান্ত ডেলিভারেবলের মালিকানা ক্লায়েন্টের কাছে হস্তান্তরিত হয়; তবে পূর্ববর্তী টুল, পুনর্ব্যবহারযোগ্য কম্পোনেন্ট বা ওপেন-সোর্স লাইব্রেরির মালিকানা অপরিবর্তিত থাকবে।",
      "স্বতন্ত্র এনডিএ দ্বারা সীমাবদ্ধ না থাকলে Graphland প্রোজেক্টের অ-গোপনীয় অংশ পোর্টফোলিও বা কেস-স্টাডিতে প্রদর্শন করতে পারে।",
    ],
  },
  {
    titleEn: "Confidentiality & Data Protection",
    titleBn: "গোপনীয়তা ও তথ্য সুরক্ষা",
    english: [
      "Both parties agree to keep confidential information secure and to use it solely for fulfilling the engagement.",
      "We apply the privacy and security practices described in our Privacy Policy and can sign mutual NDAs upon request.",
    ],
    bangla: [
      "উভয় পক্ষ গোপন তথ্য নিরাপদে রাখবে এবং শুধুমাত্র চুক্তি বাস্তবায়নে ব্যবহার করবে।",
      "আমাদের প্রাইভেসি পলিসিতে বর্ণিত নিরাপত্তা চর্চা আমরা অনুসরণ করি এবং প্রয়োজনে পারস্পরিক এনডিএ সই করতে পারি।",
    ],
  },
  {
    titleEn: "Warranties & Liability",
    titleBn: "ওয়ারেন্টি ও দায়-দায়িত্ব",
    english: [
      "We warrant that services will be performed with reasonable skill and care. Except as expressly stated, we disclaim all other warranties, including implied warranties of merchantability or fitness.",
      "To the maximum extent permitted by law, our total liability is limited to the amount paid for the specific services giving rise to the claim.",
    ],
    bangla: [
      "আমরা নিশ্চয়তা দিই যে যুক্তিসঙ্গত দক্ষতা ও যত্নসহকারে সেবা প্রদান করা হবে। এখানে বর্ণিত ব্যতীত অন্যান্য সব ধরনের ওয়ারেন্টি (যেমন ব্যবসায়িক উপযোগিতা) আমরা অস্বীকার করি।",
      "আইন অনুমোদিত সীমার মধ্যে আমাদের মোট দায় সেই নির্দিষ্ট সেবার জন্য প্রদত্ত অর্থের সমপরিমাণে সীমাবদ্ধ থাকবে।",
    ],
  },
  {
    titleEn: "Governing Law & Dispute Resolution",
    titleBn: "প্রযোজ্য আইন ও বিরোধ নিষ্পত্তি",
    english: [
      "These Terms are governed by the laws of Bangladesh. Disputes will first be addressed through good-faith negotiations. If unresolved, the matter may be escalated to the competent courts in Dhaka.",
    ],
    bangla: [
      "এই শর্তাবলী বাংলাদেশের আইনের অধীন। কোনো বিরোধ হলে প্রথমে সদিচ্ছাপূর্ণ আলোচনার মাধ্যমে সমাধানের চেষ্টা করা হবে; প্রয়োজন হলে ঢাকার উপযুক্ত আদালতে বিষয়টি উপস্থাপন করা হবে।",
    ],
  },
  {
    titleEn: "Changes & Contact",
    titleBn: "পরিবর্তন ও যোগাযোগ",
    english: [
      "We may update these Terms to reflect new services, regulatory updates, or operational changes. Continued use of our services after an update constitutes acceptance of the revised Terms.",
      "For clarifications, email hello@graphland.dev or message us on facebook.com/GraphlandHQ.",
    ],
    bangla: [
      "নতুন সেবা, নিয়ন্ত্রক আপডেট বা অপারেশনাল পরিবর্তনের কারণে আমরা এই শর্তাবলী হালনাগাদ করতে পারি। আপডেটের পরও সেবা ব্যবহার করলে সেটি সংশোধিত শর্ত মেনে নেওয়া হিসেবে গণ্য হবে।",
      "কোনো ব্যাখ্যার জন্য hello@graphland.dev-এ ইমেইল করুন বা facebook.com/GraphlandHQ পেজে বার্তা পাঠান।",
    ],
  },
];

const SectionBlock = ({
  titleEn,
  titleBn,
  english,
  bangla,
}: BilingualSection) => (
  <div className="p-6 lg:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-neutral-100">{titleEn}</h3>
      <p className="text-neutral-400">{titleBn}</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          English
        </p>
        <div className="space-y-3 text-neutral-300">
          {english.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          বাংলা
        </p>
        <div className="space-y-3 text-neutral-300">
          {bangla.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | Graphland",
  description:
    "Graphland’s bilingual (English & Bangla) privacy policy and terms & conditions for graphland.dev and official social channels.",
};

export default function LegalPage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <section className="pt-32 pb-16 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Legal · বৈধতা
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Privacy Policy & Terms
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-neutral-400">
            <span>Last updated: November 19, 2025</span>
            <span className="hidden sm:block text-neutral-700">•</span>
            <span>Contact: hello@graphland.dev</span>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Privacy Policy · গোপনীয়তা নীতি
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              How we steward data for graphland.dev & Facebook
            </h2>
            <p className="text-neutral-400">
              The clauses below apply to our website, landing pages, Facebook
              page, and any other digital touchpoints operated by Graphland.
            </p>
          </div>

          <div className="space-y-6">
            {privacySections.map((section) => (
              <SectionBlock key={section.titleEn} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Terms & Conditions · শর্তাবলী
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Engagement rules for clients, prospects, and partners
            </h2>
            <p className="text-neutral-400">
              Review these Terms before engaging us for custom software
              projects, retainers, or any advisory work.
            </p>
          </div>

          <div className="space-y-6">
            {termsSections.map((section) => (
              <SectionBlock key={section.titleEn} {...section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
