// const getBreeds = async () => {
//   try {
//     return await axios.get("https://dog.ceo/api/breeds/list/all");
//   } catch (error) {
//     console.log(error);
//   }
// };

// const countBreeds = async () => {
//   const breeds = await getBreeds();
//   console.log(breeds.data.message.spaniel);
// };

// countBreeds();

// const seedImg = async () => {
//   try {
//     const resp = await axios.get(
//       "https://api.unsplash.com/photos/?client_id=47IxngQJ68O-6HL4L1Gtvzl1Rv_IF-lBozPERsluK2Q"
//     );
//     return resp;
//   } catch (err) {
//     console.log(err);
//   }
// };

// seedImg();

const axios = require("axios");

// axios
//   .get(
//     "https://api.unsplash.com/photos/?client_id=47IxngQJ68O-6HL4L1Gtvzl1Rv_IF-lBozPERsluK2Q"
//   )
//   .then((response) => {
//     for (let docs of response.data) {
//       console.log(JSON.stringify(docs.urls.raw));
//     }
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const seedImg = async () => {
//   const response = await axios.get(
//     "https://api.unsplash.com/photos/?client_id=47IxngQJ68O-6HL4L1Gtvzl1Rv_IF-lBozPERsluK2Q"
//   );
//   const data = JSON.stringify(response.data[0].urls.small);
//   console.log(data);
// };
// seedImg();

const array = [
  {
    id: 123,
    name: "Javed Akeeb",
    urls: {
      small: "abcdef",
      medium: "qwerty",
      large: "jkdfs",
    },
  },
  {
    id: 555,
    name: "alex furgurson",
    urls: {
      small: "what is the ",
      medium: "hahahahahh",
      large: "large cups of ice",
    },
  },
];

for (let i = 0; i < 2; i++) {
  const result = JSON.stringify(array[i].urls.small);
  console.log(result);
}
