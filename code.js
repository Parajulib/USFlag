let usFlag = [
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

function displayPixelArt(pictureArray) {
  //1. create a table element
  let pictureTable = document.createElement("table");
  document.body.append(pictureTable);

  //2 loop from 0 to picture array length
  for (let rowNum = 0; rowNum < pictureArray.length; rowNum++) {
    let rowArray = pictureArray[rowNum];

    // create new tr and append to table
    let rowEl = document.createElement("tr");
    pictureTable.append(rowEl);
    //3.  loop from 0 to row array length
    for (let cellNum = 0; cellNum < rowArray.length; cellNum++) {
      console.log(rowArray[cellNum]);

      // -create a new td with the approrate class
      let colorBlock = document.createElement("td");
      colorBlock.classList.add("color" + rowArray[cellNum]);
      // -append the td to the tr for that row
      rowEl.append(colorBlock);
    }
  }
}

displayPixelArt(usFlag);
