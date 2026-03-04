export interface Insight {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "illiquidity-premium",
    category: "Art Finance",
    title: "The Illiquidity Premium: Why Art Outperforms in Private Markets",
    date: "March 1, 2025",
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80",
    description:
      "Why illiquid art assets can deliver superior risk-adjusted returns in private markets.",
    body: [
      "Fine art has long been treated as a consumption good or a store of value, but institutional research increasingly supports its role as an investable asset with distinct return and correlation characteristics. The illiquidity premium—the excess return demanded by investors for holding assets that cannot be quickly sold—helps explain why art has historically outperformed in certain regimes.",
      "In private markets, price discovery is slower and less efficient than in public equities or bonds. That inefficiency can work in favour of disciplined collectors and funds that hold through cycles and avoid forced sales. Art also exhibits low correlation to traditional asset classes over long horizons, which can improve portfolio efficiency when sized appropriately.",
      "Gallery Equity works with collectors who want to unlock liquidity from art without selling. Our structures are designed to preserve exposure to the asset while meeting near-term capital needs—aligning with the view that art is a long-term holding that rewards patience.",
    ],
  },
  {
    slug: "loan-to-value",
    category: "Market Insight",
    title: "Understanding Loan-to-Value in Fine Art Lending",
    date: "February 15, 2025",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
    description:
      "How LTV ratios are set in art-backed financing and what drives lender conservatism.",
    body: [
      "Loan-to-value (LTV) is the ratio of the loan amount to the value of the collateral—in this case, fine art. Lenders use LTV caps to limit loss severity in the event of a default and to account for valuation uncertainty and market volatility.",
      "In fine art lending, LTVs are typically lower than in real estate or listed securities. Conservative appraisals, concentration limits, and the cost of liquidation all contribute. Lenders may advance anywhere from 30% to 50% of appraised value depending on the artist, provenance, and structure. Senior facilities are often capped at the lower end of that range.",
      "Understanding how your collection is valued and how LTV is applied helps you compare options and set expectations. Gallery Equity structures are tailored to each situation; we can outline indicative ranges and documentation requirements during an initial conversation.",
    ],
  },
  {
    slug: "family-offices",
    category: "Collection Strategy",
    title: "How Family Offices Are Rethinking Art as Capital",
    date: "February 1, 2025",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    description:
      "Why family offices are moving art onto the balance sheet and using it as a funding source.",
    body: [
      "Family offices have historically held art for legacy, enjoyment, and diversification. As collections have grown and reporting has become more formalised, many are now treating art as a balance-sheet asset and exploring ways to use it without selling.",
      "Borrowing against art can fund new acquisitions, smooth liquidity, or support other investments—all while retaining ownership and potential upside. For families who do not want to liquidate during a transition or a market dip, art-backed facilities offer a structured alternative.",
      "Gallery Equity works with family offices and their advisors to design solutions that fit governance, risk tolerance, and reporting requirements. We focus on discretion, clear terms, and alignment with long-term holding objectives.",
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
