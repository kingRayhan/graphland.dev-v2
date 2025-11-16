"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import pricingData from "./pricing.json";

interface Plan {
  id: string;
  name: string;
  description: string;
  billingCycle: string;
  signUpFee: {
    amount: number;
    currency: string;
    discount?: {
      originalAmount: number;
      currency: string;
    };
    isFree?: boolean;
  } | null;
  monthlyPrice: {
    amount: number;
    currency: string;
    label: string;
  } | null;
  savings: {
    percentage: number;
    label: string;
  } | null;
  isPopular: boolean;
  features: string[];
  buttonText: string;
  buttonLink: string | null;
  buttonNote?: string;
  duration?: number;
}

interface PricingCalculations {
  monthlyCost: number;
  totalCost: number;
  originalTotalCost: number;
  savingsAmount: number | null;
  savingsPercentage: number | null;
  signUpFee: number;
  totalWithSignUp: number;
  originalTotalWithSignUp: number;
  firstYearMonthlyEquivalent: number;
  duration: number;
}

function calculatePricing(
  plan: Plan,
  monthlyPlanSignUpFee: number = 5000
): PricingCalculations {
  const monthlyPrice = plan.monthlyPrice?.amount || 0;
  const signUpFeeAmount = plan.signUpFee?.amount || 0;

  let duration = 1;
  if (plan.id === "half-yearly") duration = 6;
  if (plan.id === "yearly") duration = 12;

  const monthlyCost = monthlyPrice;
  const originalTotalCost = monthlyPrice * duration;
  const signUpFee = plan.signUpFee?.isFree ? 0 : signUpFeeAmount;

  let savingsAmount: number | null = null;
  let savingsPercentage: number | null = null;
  let totalCost = originalTotalCost;
  let originalTotalWithSignUp = originalTotalCost + signUpFee;

  if (plan.savings && plan.savings.percentage) {
    savingsPercentage = plan.savings.percentage;
    savingsAmount = originalTotalCost * (savingsPercentage / 100);
    totalCost = originalTotalCost - savingsAmount;
    originalTotalWithSignUp = originalTotalCost + signUpFee;
  }

  const totalWithSignUp = totalCost + signUpFee;

  // Calculate first year equivalent if paying monthly
  const firstYearMonthlyEquivalent =
    monthlyPrice * duration + monthlyPlanSignUpFee;

  return {
    monthlyCost,
    totalCost,
    originalTotalCost,
    savingsAmount,
    savingsPercentage,
    signUpFee,
    totalWithSignUp,
    originalTotalWithSignUp,
    firstYearMonthlyEquivalent,
    duration,
  };
}

export default function PricingSection() {
  const { title, description, disclaimer, plans } = pricingData;

  // Get monthly plan sign up fee for comparison
  const monthlyPlan = (plans as Plan[]).find((p) => p.id === "monthly");
  const monthlyPlanSignUpFee = monthlyPlan?.signUpFee?.amount || 5000;

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-gray-500 mt-4"
          >
            {disclaimer}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(plans as Plan[]).map((plan, index) => {
            const calculations = calculatePricing(plan, monthlyPlanSignUpFee);
            const showTotal = plan.id === "half-yearly" || plan.id === "yearly";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border ${
                  plan.isPopular ? "border-2 border-primary" : "border-gray-800"
                } rounded-2xl p-8 ${
                  plan.isPopular ? "bg-gray-900" : "bg-gray-900/50"
                } relative ${
                  plan.isPopular ? "scale-105 md:scale-100 lg:scale-105" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-primary-foreground" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      showTotal ? (
                        <div>
                          <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-2xl line-through text-gray-500">
                              {calculations.firstYearMonthlyEquivalent.toLocaleString()}
                            </span>
                            <div className="text-4xl font-bold text-primary">
                              {calculations.totalWithSignUp.toLocaleString()}
                            </div>
                            <span className="text-xl text-gray-400">
                              {plan.monthlyPrice.currency}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 mb-1">
                            For the first{" "}
                            {plan.id === "half-yearly"
                              ? "6 months"
                              : "12 months"}{" "}
                            • Save{" "}
                            {(
                              calculations.firstYearMonthlyEquivalent -
                              calculations.totalWithSignUp
                            ).toLocaleString()}{" "}
                            {plan.monthlyPrice.currency}
                          </div>
                          {plan.signUpFee && (
                            <div className="text-xs text-gray-500 mb-2">
                              {plan.signUpFee.isFree ? (
                                "FREE sign up fee"
                              ) : plan.signUpFee.discount ? (
                                <>
                                  Sign up fee:{" "}
                                  <span className="line-through text-gray-600">
                                    {plan.signUpFee.discount.originalAmount.toLocaleString()}
                                  </span>{" "}
                                  {plan.signUpFee.amount.toLocaleString()}{" "}
                                  {plan.signUpFee.currency}
                                </>
                              ) : (
                                `Sign up fee: ${plan.signUpFee.amount.toLocaleString()} ${
                                  plan.signUpFee.currency
                                }`
                              )}
                            </div>
                          )}
                          {calculations.signUpFee > 0 && (
                            <div className="pt-2 border-t border-gray-700 text-xs text-gray-500">
                              Then {calculations.totalCost.toLocaleString()}{" "}
                              {plan.monthlyPrice.currency} per{" "}
                              {plan.id === "half-yearly"
                                ? "6 months"
                                : "12 months"}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <div className="text-4xl font-bold text-primary mb-2">
                            {calculations.monthlyCost.toLocaleString()}
                            <span className="text-xl text-gray-400 ml-2">
                              {plan.monthlyPrice.currency}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400">
                            per month {plan.monthlyPrice.label}
                            {plan.signUpFee && !plan.signUpFee.isFree && (
                              <span>
                                {" "}
                                • + {plan.signUpFee.amount.toLocaleString()}{" "}
                                {plan.signUpFee.currency} one-time sign up fee
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="mb-4">
                        <p className="text-gray-500 text-sm mb-4">
                          {plan.billingCycle}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mt-8 min-h-[400px]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    asChild={!!plan.buttonLink}
                    className={`w-full mt-8 ${
                      plan.isPopular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : plan.buttonLink
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  >
                    {plan.buttonLink ? (
                      <a
                        href={plan.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5" />
                        {plan.buttonText}
                      </a>
                    ) : (
                      plan.buttonText
                    )}
                  </Button>

                  {plan.buttonNote && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {plan.buttonNote}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
