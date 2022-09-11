const mongoose = require("mongoose");
const Campground = require("../models/campgrounds");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const axios = require("axios").default;

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// const seedImg = async () => {
//   const response = await axios
//     .get(
//       "https://api.unsplash.com/photos/?client_id=47IxngQJ68O-6HL4L1Gtvzl1Rv_IF-lBozPERsluK2Q"
//     )
//     .then(() => {
//       console.log("success");
//       const dataT = JSON.stringify(response.data[0].urls.small);
//       return dataT;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   // console.log(data);
// };

// console.log(seedImg());
// const datta = JSON.stringify(seedImg());
// console.log(`het man i made ${res} request`);

const seedDB = async () => {
  await Campground.deleteMany({});
  for (i = 1; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30);

    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      price: price,
      image: "http://source.unsplash.com/collection/482351",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      location: `${cities[random1000].city}, ${cities[random1000].state} `,
    });
    await camp.save();
  }
};

// const res = JSON.stringify(seedImg());

seedDB().then(() => {
  mongoose.connection.close();
});
