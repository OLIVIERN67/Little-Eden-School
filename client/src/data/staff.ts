export interface StaffMember {
  role: string;
  name: string;
  phone: string;
  image?: string;
}

export const staffMembers: StaffMember[] = [
  {
    role: "Director",
    name: "IMANISHIMWE Amani",
    phone: "+250787999646",
    // Add image path here, e.g. image: "/staff/director.jpg"
  },
  {
    role: "Head-teacher",
    name: "DUKUZYMUREMYI CHANTAL",
    phone: "+250783310595",
    // Add image path here, e.g. image: "/staff/headteacher.jpg"
  },
  {
    role: "Secretary",
    name: "IMANISHIMWE RENE",
    phone: "+250795216427",
    image: "/Highlights/SECRETARY.jpeg",
  },
];

