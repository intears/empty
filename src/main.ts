

// testing

import { Empty } from "./empty/empty";

let test = new Empty();
test.getFormats().then(() => {
  let formats = test.formattings;
  console.log(formats)
});



