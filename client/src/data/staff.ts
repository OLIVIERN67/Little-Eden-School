export interface StaffMember {
  role: string;
  name: string;
  phone: string;
  image?: string;
}

export const staffMembers: StaffMember[] = [
  {
    role: "Director",
    name: "Amani IMANISHIMWE ",
    phone: "+250787999646",
     image: "/Highlights/IMANISHIMWE Amani2.jpeg",
  },
  {
    role: "Head-teacher",
    name: "CHANTAL DUKUZYMUREMYI ",
    phone: "+250783310595",
   image: "/Highlights/ht.png",
  },
  {
    role: "Secretary",
    name: "RENE IMANISHIMWE ",
    phone: "+250795216427",
    image: "/Highlights/SECRETARY.jpeg",
  },
];

