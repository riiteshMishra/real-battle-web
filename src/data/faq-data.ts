export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category:
    | "general"
    | "tournaments"
    | "matches"
    | "rewards"
    | "wallet"
    | "support"
    | "account";
}

/**
 * Answers are written to match the policies currently published on the site
 * (Terms, Refund Policy and Privacy Policy). Do not add payout promises,
 * response-time guarantees or security claims that are not verifiable.
 */
export const faqData: FAQ[] = [
  {
    id: 1,
    category: "general",
    question: "What is Real Battle?",
    answer:
      "Real Battle is a competitive Free Fire tournament platform built for Indian players. You can browse solo, squad and Clash Squad events, register through the app, get room details, and track verified results. Tournament formats, entry fees and reward rules are published before you join.",
  },
  {
    id: 2,
    category: "tournaments",
    question: "How do I join a tournament?",
    answer:
      "Tournaments page se apna format choose karo, match details aur rules padho, aur app mein register karo. Registration ke waqt entry fee (agar applicable ho) aur eligibility clearly dikhaye jaate hain. Slot confirm hone ke baad match schedule follow karo.",
  },
  {
    id: 3,
    category: "matches",
    question: "How do I get the Room ID and Password?",
    answer:
      "Registration complete hone ke baad Room ID aur Password app ke dashboard mein match ke liye release hote hain. Match se pehle app check karo — credentials sirf registered players ke liye hote hain, public channels par share nahi kiye jaate.",
  },
  {
    id: 4,
    category: "matches",
    question: "How are match results verified?",
    answer:
      "Results tournament ke format ke hisaab se verify hote hain. Players ko screenshots, recordings, match results ya UID proof submit karna pad sakta hai. Admin available evidence review karta hai aur required case mein score adjust, match reverse ya entry disqualify kar sakta hai.",
  },
  {
    id: 5,
    category: "rewards",
    question: "How do rewards work?",
    answer:
      "Har tournament ka prize pool, per-kill reward, Booyah bonus aur placement split us match ke rules mein mention hota hai. Eligible players ko verification ke baad rewards milte hain. Amounts tournament-specific hote hain — koi fixed ya guaranteed earning promise nahi hai.",
  },
  {
    id: 6,
    category: "wallet",
    question: "How can I withdraw eligible rewards?",
    answer:
      "App ke wallet section mein available balance, withdrawal options aur minimum limits check karo. Withdrawal se pehle identity, age aur payment details ki verification ho sakti hai. Processing time aur applicable conditions wallet screen par dikhaye jaate hain.",
  },
  {
    id: 7,
    category: "general",
    question: "Is Real Battle available in every state?",
    answer:
      "Availability state aur tournament ke hisaab se vary kar sakti hai. Kuch events mein location, age ya identity requirements ho sakti hain. Join karne se pehle us tournament ki eligibility aur applicable local rules zaroor check karo.",
  },
  {
    id: 8,
    category: "account",
    question: "Is there an age requirement?",
    answer:
      "Real Battle is intended for players aged 18 and above, unless a specific tournament states a different permitted age with the required safeguards. You must meet the eligibility shown for the platform and for the event you join. Participation must be lawful in your location.",
  },
  {
    id: 9,
    category: "tournaments",
    question: "What happens if a match is cancelled?",
    answer:
      "Agar match cancel ya postpone hota hai, affected players ko app aur registered contact channel ke through update milta hai. Entry fee ka treatment Refund Policy ke according hota hai — eligible cases mein refund ya credit process kiya jaata hai.",
  },
  {
    id: 10,
    category: "support",
    question: "How can I contact support?",
    answer:
      "Account, tournament, payment ya dispute ke liye app ka support channel use karo, ya realbattleofficial@gmail.com par email bhejo. Match ID, tournament name aur relevant screenshots include karna fastest resolution mein help karta hai.",
  },
  {
    id: 11,
    category: "general",
    question: "Where can I download the Android app?",
    answer:
      "The official download page is realbattle.in/download. The APK link is published only after the production build is verified. Real Battle does not ask you to install files from unofficial mirrors, Telegram forwards or shortened links.",
  },
  {
    id: 12,
    category: "account",
    question: "Can I use an emulator or a modified game client?",
    answer:
      "Tournament rules decide device and client eligibility. Modified clients, hacks, scripts and unauthorised third-party tools are prohibited. Some events may restrict emulator players or require a specific game version — check the event rules before registering.",
  },
];

export const homepageFaqData = faqData.slice(0, 8);
