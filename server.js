const app = require("./app");
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app up and running on ${PORT}`));
