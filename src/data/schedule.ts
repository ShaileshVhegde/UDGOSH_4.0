export type ScheduleKind =
  | "registration"
  | "competition"
  | "prize"
  | "greenroom-boys"
  | "greenroom-ladies";

export type ScheduleItem = {
  event: string;
  venue: string;
  time?: string;
  date?: string;
  kind: ScheduleKind;
};

export const scheduleData: ScheduleItem[] = [
  {
    event: "Registration📝",
    venue: "Sabha Bhavan",
    time: "9:00 AM - 10:00 AM",
    date: "November 22, 2025",
    kind: "registration",
  },
  {
    event: "Solo Singing",
    venue: " BBA 2nd year",
    time: "10:00 AM - 11:00 AM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Group Singing",
    venue: "BBA 2nd year",
    time: "11:30 AM - 1:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Ad Arena",
    venue: "Cobol & BBA 1st year",
    time: "9:00 AM - 2:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Solo Dance",
    venue: "Sabha Bhavan",
    time: "9:00 AM - 11:00 AM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Group Dance",
    venue: "Sabha Bhavan",
    time: "11:30 AM - 2:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Fashion Show",
    venue: "Sabha Bhavan",
    time: "2:30 PM - 4:30 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Painting",
    venue: "Perl classroom",
    time: "9:00 AM - 12:00 PM",
    date: "November 22 2025",
    kind: "competition",
  },
  {
    event: "Face Painting",
    venue: "Perl classroom",
    time: "9:00 AM - 12:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Pencil Sketch",
    venue: "Perl classroom",
    time: "1:00 PM - 3:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Mehendi",
    venue: "Ground",
    time: "9:00 AM - 4:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Rangoli",
    venue: "BBA 1st year",
    time: "9:00 AM - 12:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Vegetable & Fruit Carving",
    venue: "Ground",
    time: "10:00 AM - 1:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Paper Dress",
    venue: "Ruby",
    time: "9:00 AM - 2:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Collage",
    venue: "Rust",
    time: "1:00 PM - 3:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Photography",
    venue: "Computer Lab",
    time: "9:00 AM - 5:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Mobile Gaming",
    venue: "Computer Lab",
    time: "10:00 AM - 4:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Reels making",
    venue: "Computer Lab",
    time: "10:00 AM - 4:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Quiz",
    venue: "Prolog",
    time: "9:00 AM - 3:00 PM",
    date: "November 22, 2025",
    kind: "competition",
  },
  {
    event: "Prize Distribution🏆",
    venue: "Sabha Bhavan Hall",
    time: "4:00 PM ",
    date: "November 22, 2025",
    kind: "prize",
  },
  {
    event: "*Green Room (Boys)",
    venue: "BBA 3rd Year",
    kind: "greenroom-boys",
  },
  {
    event: "*Green Room (Ladies)",
    venue: "Inside Sabha bhavan",
    kind: "greenroom-ladies",
  },
];

export const scheduleNote =
  "* Schedule is subject to change. Please check for updates regularly.";
