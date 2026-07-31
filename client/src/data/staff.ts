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
     image: "/Highlights/IMANISHIMWE Amani.png",
  },
  {
    role: "Head-teacher",
    name: "DUKUZYMUREMYI CHANTAL",
    phone: "+250783310595",
   image: "/Highlights/ht.png",
  },
  {
    role: "Secretary",
    name: "IMANISHIMWE RENE",
    phone: "+250795216427",
    image: "/Highlights/SECRETARY.jpeg",
  },
];

