const splitter = {
  split: (text) => {
    const MAX_LINE_LENGTH = 40;
    const paragraphs = text.replace(/\n\s/g, "\n\n ➡ ");
    const words = paragraphs.replace(/\n/g, "").split(" ");
    const lines = [""];
    let index = 0;

    words.forEach((word) => {
      const newLine = !(
        lines[index].length <
        MAX_LINE_LENGTH - (word.length + 1)
      );

      if (newLine) {
        index++;
        lines[index] = "";
      }

      const line = lines[index];
      const space = line.length > 0 ? " " : "";
      lines[index] = `${line}${space}${word}`;
    });

    return lines;
  },
};
