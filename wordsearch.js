const getColumn = function(letters) {
  let index = -1;
  const coloumnArr = [];
  let coloumn = [];
  while (index < letters.length) {
    const getColumn = () => letters.map((row) => {
      coloumn.push(row[index]);
    });
    index += 1;
    coloumnArr.push(coloumn.join(''));
    coloumn = [];
    getColumn();
  }
  return coloumnArr.slice(1, coloumnArr.length - 1);
};

const wordSearch = (letters, word) => {
  if (word === "") return false;

  const verticalJoin = getColumn(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (const words of horizontalJoin) {
    if (words.includes(word)) return true;
  }
  for (const words of verticalJoin) {
    if (words.includes(word)) return true;
  } return false;

};

module.exports = wordSearch;