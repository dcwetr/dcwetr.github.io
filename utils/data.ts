export interface Destination {
  name: string;
  image: string;
  duration: number;
  costs: {
    foodPerDay: number;
    accommodationPerDay: number;
    travelCost: number;
  };
}

const data: Destination[] = [
  {
    name: "Vietnam",
    image: "/vietnam.jpg",
    duration: 21,
    costs: {
      travelCost: 156,
      foodPerDay: 10,
      accommodationPerDay: 6,
    },
  },
  {
    name: "Taiwan",
    image: "/taiwan.jpg",
    duration: 21,
    costs: {
      travelCost: 100,
      foodPerDay: 25,
      accommodationPerDay: 40,
    },
  },
  {
    name: "Thailand",
    image: "/thailand.jpg",
    duration: 21,
    costs: {
      travelCost: 100,
      foodPerDay: 5,
      accommodationPerDay: 30,
    },
  },
  {
    name: "Japan",
    image: "/japan.jpg",
    duration: 21,
    costs: {
      travelCost: 100,
      foodPerDay: 25,
      accommodationPerDay: 70,
    },
  },
  {
    name: "Korea",
    image: "/korea.jpg",
    duration: 7,
    costs: {
      travelCost: 100,
      foodPerDay: 30,
      accommodationPerDay: 40,
    },
  },
];

export default data;
