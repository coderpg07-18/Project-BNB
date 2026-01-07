if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;
async function main() {
  await mongoose.connect(dbUrl);
};

main()
    .then(() => {
        console.log("Connected");
    }).catch((err) => {
        console.log(err);
    });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => (
    {...obj, owner: "695e869707d33e7ab4cdd448" }
  ));

  await Listing.insertMany(initData.data);

  console.log("data was initialized");
};

initDB(); 