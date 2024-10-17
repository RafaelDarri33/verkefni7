/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/**
 * Longest skilar lengsta orðinu í streng ef það er ekki strengur þá skilar það null,
 * ef það er tómur strengur skilar hann tómum streng.
 * @param {string} str Strengur sem er að leita af lengsta orðinu.
 * @returns {string|null} Skilar lengsta orðinu í strengnum eða null ef ekki strengur.
 */
function longest(str) {
  if (!isString(str)) return null;
  if (str === "") return "";
  const words = str.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.assert(
  longest(12345) === null,
  "longest: skilar núll ef það er ekki strengur"
);
console.assert(
  longest("") === "",
  "longest: skilar tómum streng ef það er tómur strengur"
);

/**
 * Shortest skilar styðsta orðinu í streng ef það er ekki strengur þá skilar það null,
 * ef það er tómur strengur skilar það tómum streng.
 * @param {string} str Strengur sem leytar af styðsta orðinu.
 * @returns {string|null} Skilar styðsta orðinu í strengnum eða null ef ekki strengur.
 */
function shortest(str) {
  if (!isString(str)) return null;
  if (str === "") return "";
  const words = str.split(" ");
  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.assert(
  shortest("Hæ ég er maður") === "Hæ",
  "shortest: skilar styðsta orðinu sem hann les fyrst"
);
console.assert(
  shortest("") === "",
  "shortest: tómur strengur skilar tómum streng"
);

/**
 * Reverse breytir snýr streng öfugt t.d. halló verður óllah,
 * ef ekki strengur skila null.
 * @param {string} str Strengur sem snýr strengum við.
 * @returns Skilar strengum öfugum eða null ef ekki strengur.
 */
function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

/**
 * Palindrome tékkar hvort það sé strengur annars skilar það null,
 * síðan kannar hann hvort strengurinn er palindrome
 * og skilar true ef það er palindrome annars false.
 * @param {string} str Strengur sem tékkar hvort það sem er í strengnum er palindrome.
 * @returns Skilar true ef það er palindrome annars false.
 */
function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }
  return false;
}
console.assert(palindrome("halló") === false, "palindrome: strengur, ekki");
console.assert(palindrome("hah") === true, "palindrome: strengur, er");
console.assert(palindrome("") === false, "palindrome: tómi strengur ekki");

/**
 * Vowels tékkar hvort það sé strengur ef ekki skilar 0,
 * ef það eru vowels þá telur hann hversu margir eru og skilar
 * t.d. halló skilar 2.
 * @param {string} str Strengur sem tékkar hversu marga vowels strengurinn er með.
 * @returns Skilar tölu hversu marga vowles það eru.
 */
function vowels(str) {
  if (!isString(str)) return 0;
  const vowelSet = "aeiouyáéýúíóöæ";
  let count = 0;
  const lowerStr = str.toLowerCase();
  for (const char of lowerStr) {
    if (vowelSet.includes(char)) {
      count++;
    }
  }
  return count;
}
console.assert(vowels("") === 0, "vowels: tómi strengur gefur 0");
console.assert(vowels(123) === 0, "vowels: tölur eru ekki vowels");

/**
 * Consonants tékkar hversu marga það hefur í strengum
 * ef það er ekki strengur þá skilar það 0, annars tölu.
 * @param {*} str Strengur sem tékkar hversu marga consonants strengurinn er með.
 * @returns Skilar tölu hversu marga consonants það eru.
 */
function consonants(str) {
  if (!isString(str)) return 0;
  const consonantSet = "bðdfghjklmnpqrstvxþ";
  let count = 0;
  const lowerStr = str.toLowerCase();
  for (const char of lowerStr) {
    if (consonantSet.includes(char)) {
      count++;
    }
  }
  return count;
}
console.assert(consonants("") === 0, "consonants: tómur strengur skilar 0");
console.assert(consonants("halló") === 3, "consonants: halló skilar 3");

//------------------------------------------------------------------------------
// Leiðbeint ferli
/**
 * Hér er allt sett saman í könnun, 
 * þú getur skrifað inn streng og kannað eftirfarandi hluti. 
 */
function start() {
  alert(
    "Velkomin! núna getur þú slegið inn streng og forritið mun skilgreina eftirfarandi streng ef strengur er."
  );

  let userInput = prompt("settu inn streng:");

  if (userInput === null || userInput.trim() === "") {
    return;
  }
  const longestResult = longest(userInput);
  const shortestResult = shortest(userInput);
  const reverseResult = reverse(userInput);
  const vowelsResult = vowels(userInput);
  const consonantsResult = consonants(userInput);
  const palindromeResult = palindrome(userInput);

  alert(
    "Hér eru þínar niðurstöður:\n" +
      "Lengsta orð: " +
      longestResult +
      "\n" +
      "Stysta orð: " +
      shortestResult +
      "\n" +
      "Öfugur strengur: " +
      reverseResult +
      "\n" +
      "Sérhljóð: " +
      vowelsResult +
      "\n" +
      "Samhljóð: " +
      consonantsResult +
      "\n" +
      "Er samhverfur: " +
      palindromeResult
  );
  let tryAgain = confirm("viltu prufa aftur?");
  if (tryAgain) {
    start();
  }
}
start();
