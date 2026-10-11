import fs from "fs";

const src = fs.readFileSync("src/pages/Events.tsx", "utf8");
const start = src.indexOf("const events = [");
const end = src.indexOf("];", start) + 2;
const block = src.slice(start, end).replace("const events = ", "export const events = ");

const header = `export type FestivalEvent = {
  name: string;
  description: string;
  icon: string;
  category: string;
  formLink: string;
  whatsappLink: string;
  rules: string;
  coordinator: string;
  contactNumber: string;
  S_coordinator: string;
  S_contactNumber: string;
};

`;

const footer = `

export const eventCategories = ["All", ...Array.from(new Set(events.map((e) => e.category)))] as const;

export const globalCoordinators = {
  eventCoordinator: { name: "Prof. Madhushri Patil", phone: "+91 8792940116" },
  studentCoordinators: [
    { name: "Ms. Preeti Menasinkai", phone: "+91 8310929047" },
    { name: "Mr. Prajwal Talawar", phone: "+91  9019272726" },
  ],
} as const;

export const generalRules = [
  "Eligibility: PU Science and Commerce students can participate.",
  "ID Verification: Participants must show a valid student ID card or a letter from the principal.",
  "One Competition Rule: Each student can participate in only one competition.",
  "Registration: Complete both online and on-site registration with all required details.",
  "Code of Conduct: Maintain discipline and proper behavior throughout the event.",
  "Disqualification: Violation of rules or unfair practices will lead to disqualification.",
  "Judging: Judges’ decisions are final and based on the given criteria.",
  "Awards: Winners will receive prizes and certificates at the end of the event.",
  "Attractive cash rewards will be awarded to top performers.",
  "General Championship: Awarded to the participant or team with the highest points or cash prize.",
  "Faculty: Each team may be accompanied by one faculty member.",
] as const;
`;

fs.writeFileSync("src/data/events.ts", header + block + footer);
console.log("Wrote src/data/events.ts");
