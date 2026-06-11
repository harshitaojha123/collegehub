const prisma = require("./config/prisma");

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Madras",
        location: "Chennai",
        fees: "2.5L/year",
        rating: 4.8,
        placement: "25 LPA",
        overview: "Top engineering institute in India",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: "2.3L/year",
        rating: 4.7,
        placement: "30 LPA",
        overview: "Excellent placements",
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: "3.2L/year",
        rating: 4.9,
        placement: "28 LPA",
        overview: "Excellent coding culture",
      },
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: "3.1L/year",
        rating: 4.9,
        placement: "27 LPA",
        overview: "World class faculty",
      },
      {
        name: "IIT Kanpur",
        location: "Kanpur",
        fees: "2.1L/year",
        rating: 4.7,
        placement: "24 LPA",
        overview: "Strong research culture",
      },
      {
        name: "IIT Kharagpur",
        location: "Kharagpur",
        fees: "2.0L/year",
        rating: 4.6,
        placement: "22 LPA",
        overview: "Oldest IIT in India",
      },
      {
        name: "NIT Trichy",
        location: "Tiruchirappalli",
        fees: "1.8L/year",
        rating: 4.6,
        placement: "18 LPA",
        overview: "Top NIT in India",
      },
      {
        name: "NIT Surathkal",
        location: "Mangalore",
        fees: "1.9L/year",
        rating: 4.5,
        placement: "17 LPA",
        overview: "Beautiful beach campus",
      },
      {
        name: "BITS Pilani",
        location: "Pilani",
        fees: "5.4L/year",
        rating: 4.8,
        placement: "22 LPA",
        overview: "Top private college",
      },
      {
        name: "DTU",
        location: "Delhi",
        fees: "2.4L/year",
        rating: 4.4,
        placement: "15 LPA",
        overview: "Leading state engineering college",
      },
      {
        name: "NSUT",
        location: "Delhi",
        fees: "2.5L/year",
        rating: 4.5,
        placement: "16 LPA",
        overview: "Excellent placements and coding culture",
      },
    ],
  });

  console.log("Seed Completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });