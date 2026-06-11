const colleges = [];

const data = [
  ["IIT Madras","Chennai"],
  ["IIT Bombay","Mumbai"],
  ["IIT Delhi","Delhi"],
  ["IIT Kanpur","Kanpur"],
  ["IIT Kharagpur","Kharagpur"],
  ["IIT Roorkee","Roorkee"],
  ["IIT Guwahati","Guwahati"],
  ["IIT Hyderabad","Hyderabad"],
  ["IIT Indore","Indore"],
  ["IIT BHU","Varanasi"],

  ["NIT Trichy","Tiruchirappalli"],
  ["NIT Surathkal","Mangalore"],
  ["NIT Warangal","Warangal"],
  ["NIT Calicut","Calicut"],
  ["NIT Rourkela","Rourkela"],
  ["NIT Kurukshetra","Kurukshetra"],
  ["NIT Jalandhar","Jalandhar"],
  ["NIT Durgapur","Durgapur"],
  ["NIT Raipur","Raipur"],
  ["NIT Silchar","Silchar"],

  ["IIIT Hyderabad","Hyderabad"],
  ["IIIT Bangalore","Bangalore"],
  ["IIIT Delhi","Delhi"],
  ["IIIT Allahabad","Prayagraj"],
  ["IIIT Lucknow","Lucknow"],
  ["IIIT Pune","Pune"],
  ["IIIT Gwalior","Gwalior"],
  ["IIIT Kottayam","Kottayam"],
  ["IIIT Nagpur","Nagpur"],
  ["IIIT Bhagalpur","Bhagalpur"],

  ["BITS Pilani","Pilani"],
  ["BITS Goa","Goa"],
  ["BITS Hyderabad","Hyderabad"],
  ["DTU","Delhi"],
  ["NSUT","Delhi"],
  ["PEC Chandigarh","Chandigarh"],
  ["LNMIIT Jaipur","Jaipur"],
  ["DAIICT","Gandhinagar"],
  ["COEP Pune","Pune"],
  ["ICT Mumbai","Mumbai"],

  ["VIT Vellore","Vellore"],
  ["VIT Chennai","Chennai"],
  ["SRM Chennai","Chennai"],
  ["Manipal Institute of Technology","Manipal"],
  ["Thapar Institute","Patiala"],
  ["RVCE Bangalore","Bangalore"],
  ["BMSCE Bangalore","Bangalore"],
  ["MSRIT Bangalore","Bangalore"],
  ["Amity University","Noida"],
  ["UPES Dehradun","Dehradun"],

  ["Chandigarh University","Mohali"],
  ["LPU","Jalandhar"],
  ["KIIT Bhubaneswar","Bhubaneswar"],
  ["SASTRA University","Thanjavur"],
  ["Nirma University","Ahmedabad"],
  ["Jadavpur University","Kolkata"],
  ["Anna University","Chennai"],
  ["Jamia Millia Islamia","Delhi"],
  ["Aligarh Muslim University","Aligarh"],
  ["University of Hyderabad","Hyderabad"],

  ["VNIT Nagpur","Nagpur"],
  ["MANIT Bhopal","Bhopal"],
  ["MNNIT Allahabad","Prayagraj"],
  ["IIEST Shibpur","Howrah"],
  ["NIT Hamirpur","Hamirpur"],
  ["NIT Meghalaya","Shillong"],
  ["NIT Goa","Goa"],
  ["NIT Patna","Patna"],
  ["NIT Agartala","Agartala"],
  ["NIT Srinagar","Srinagar"]
];

data.forEach((c, index) => {
  colleges.push({
    id: index + 1,
    name: c[0],
    location: c[1],
    fees: `${(1.5 + Math.random() * 4).toFixed(1)}L/year`,
    rating: +(4 + Math.random() * 1).toFixed(1),
    placement: `${Math.floor(10 + Math.random() * 25)} LPA`,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    overview: `${c[0]} is a reputed institution known for academics and placements.`,
    courses: ["CSE", "ECE", "Mechanical"]
  });
});

console.log(JSON.stringify(colleges, null, 2));