const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { People } = require("./src/db.js");

require("dotenv").config();

const port = process.env.PORT;

const force = false;
const alter = true;
conn.sync({ force, alter }).then(() => {
  server.listen(port, async () => {
    console.log(`Listening at ${port}`);
    console.log(`Creating bulk data`);
    if (force) {
      destroyOptions = {
        where: {},
        truncate: false,
      };
      // await People.destroy(destroyOptions);
      await People.bulkCreate(
        [
          {
            id: 1,
            name: "Kanye West",
            description:
              "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
            category: "entertainment",
            picture: "/media/kanye.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 24,
            voteNegative: 35,
          },
          {
            id: 2,
            name: "Cristina Fernández de Kirchner",
            description:
              "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
            category: "politics",
            picture: "/media/cristina.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 45,
            voteNegative: 97,
          },
          {
            id: 3,
            name: "Elon Musk",
            description:
              "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
            category: "business",
            picture: "/media/elon.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 1237,
            voteNegative: 854,
          },
          {
            id: 4,
            name: "Greta Thumberg",
            description:
              "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
            category: "enviroment",
            picture: "/media/greta.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 118,
            voteNegative: 45,
          },
          {
            id: 5,
            name: "Mark Zuckerberg",
            description:
              "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
            category: "business",
            picture: "/media/mark.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 418,
            voteNegative: 324,
          },
          {
            id: 6,
            name: "Malala Yousafzai",
            description:
              "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
            category: "politics",
            picture: "/media/malala.webp",
            lastUpdated: "2020-12-10 18:41:07.120 -0500",
            votePositive: 420,
            voteNegative: 324,
          },
        ],
        {
          ignoreDuplicates: true,
        }
      );
    }
  });
});
