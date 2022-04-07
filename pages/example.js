import { useState, useEffect } from "react";

export default function Example() {
  let secretWord = ["N", "A", "T", "A", "L"];

  let currentWord = ["T", "B", "Z", "A", "N"];

  useEffect(() => {
    currentWord.map((x, index) => {
      // si non présent
      if (!secretWord.includes(x)) {
        console.error(`${x} is not present in the secret word ${secretWord}`);
      }

      // Si présent
      if (secretWord.includes(x)) {
        // Test si au même endroit
        if (x === secretWord[index]) {
          console.log(x);
          console.log(secretWord[index]);
          console.log(`${x} present a the same index in ${secretWord}`);
        }

        if (x !== secretWord[index]) {
          console.log(x);
          console.log(secretWord[index]);
          console.error(`${x} present a different index in ${secretWord}`);
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>Example page</h1>
    </div>
  );
}
