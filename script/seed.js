const {
  db,
  models: { User },
} = require("../server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced!");

    // seed your database here!
    const users = await Promise.all([
      User.create({ username: "Teddy", password: "123456" }),
      User.create({ username: "Alice", password: "123456" }),
      User.create({ username: "Janice", password: "123456" }),
      User.create({ username: "Robert", password: "123456" }),
    ]);

    console.log(`seeded ${users.length} users`);
    console.log(`seeded successfully`);
  } catch (err) {
    console.log(red(err));
  }
};
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.err(red("Something went wrong!"));
      console.err(err);
      db.close();
    });
}
