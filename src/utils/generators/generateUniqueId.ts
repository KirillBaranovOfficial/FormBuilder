const abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

export const generateUniqueId = (length: number): string => {
  let output = "";

  while (output.length < length) {
    output += generateLetter();
  }

  return output;
};

const generateLetter = (): string =>
  abc[Math.floor(Math.random() * abc.length)];
