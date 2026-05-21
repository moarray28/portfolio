const bcrypt = require("bcryptjs");

async function generateHash() {

  const hash =
    await bcrypt.hash(
      "RITesh@28",
      10
    );

  console.log(hash);
}

generateHash();