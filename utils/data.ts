export interface Destination {
  name: string;
  image: string;
  duration: number;
  costs: {
    foodPerDay: number;
    accommodationPerDay: number;
  };
}

const data: Destination[] = [
  {
    name: "Vietnam",
    image: "/vietnam.jpg",
    duration: 14,
    costs: {
      foodPerDay: 8,
      accommodationPerDay: 5,
    },
  },
  {
    name: "Thailand",
    image: "/thailand.jpg",
    duration: 21,
    costs: {
      foodPerDay: 12,
      accommodationPerDay: 10,
    },
  },
];

export default data;
