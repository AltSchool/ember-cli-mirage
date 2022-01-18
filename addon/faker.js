const faker = {
  definitions: {},
  list: {},
  random: {},
  lorem: {},
  name: {}
};

faker.definitions.lorem = {
  words: [
    "alias",
    "consequatur",
    "aut",
    "perferendis",
    "sit",
    "voluptatem",
    "accusantium",
    "doloremque",
    "aperiam",
    "eaque",
    "ipsa",
    "quae",
    "ab",
    "illo",
    "inventore",
    "veritatis",
    "et",
    "quasi",
    "architecto",
    "beatae",
    "vitae",
    "dicta",
    "sunt",
    "explicabo",
    "aspernatur",
    "aut",
    "odit",
    "aut",
    "fugit",
    "sed",
    "quia",
    "consequuntur",
    "magni",
    "dolores",
    "eos",
    "qui",
    "ratione",
    "voluptatem",
    "sequi",
    "nesciunt",
    "neque",
    "dolorem",
    "ipsum",
    "quia",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisci",
    "velit",
    "sed",
    "quia",
    "non",
    "numquam",
    "eius",
    "modi",
    "tempora",
    "incidunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magnam",
    "aliquam",
    "quaerat",
    "voluptatem",
    "ut",
    "enim",
    "ad",
    "minima",
    "veniam",
    "quis",
    "nostrum",
    "exercitationem",
    "ullam",
    "corporis",
    "nemo",
    "enim",
    "ipsam",
    "voluptatem",
    "quia",
    "voluptas",
    "sit",
    "suscipit",
    "laboriosam",
    "nisi",
    "ut",
    "aliquid",
    "ex",
    "ea",
    "commodi",
    "consequatur",
    "quis",
    "autem",
    "vel",
    "eum",
    "iure",
    "reprehenderit",
    "qui",
    "in",
    "ea",
    "voluptate",
    "velit",
    "esse",
    "quam",
    "nihil",
    "molestiae",
    "et",
    "iusto",
    "odio",
    "dignissimos",
    "ducimus",
    "qui",
    "blanditiis",
    "praesentium",
    "laudantium",
    "totam",
    "rem",
    "voluptatum",
    "deleniti",
    "atque",
    "corrupti",
    "quos",
    "dolores",
    "et",
    "quas",
    "molestias",
    "excepturi",
    "sint",
    "occaecati",
    "cupiditate",
    "non",
    "provident",
    "sed",
    "ut",
    "perspiciatis",
    "unde",
    "omnis",
    "iste",
    "natus",
    "error",
    "similique",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollitia",
    "animi",
    "id",
    "est",
    "laborum",
    "et",
    "dolorum",
    "fuga",
    "et",
    "harum",
    "quidem",
    "rerum",
    "facilis",
    "est",
    "et",
    "expedita",
    "distinctio",
    "nam",
    "libero",
    "tempore",
    "cum",
    "soluta",
    "nobis",
    "est",
    "eligendi",
    "optio",
    "cumque",
    "nihil",
    "impedit",
    "quo",
    "porro",
    "quisquam",
    "est",
    "qui",
    "minus",
    "id",
    "quod",
    "maxime",
    "placeat",
    "facere",
    "possimus",
    "omnis",
    "voluptas",
    "assumenda",
    "est",
    "omnis",
    "dolor",
    "repellendus",
    "temporibus",
    "autem",
    "quibusdam",
    "et",
    "aut",
    "consequatur",
    "vel",
    "illum",
    "qui",
    "dolorem",
    "eum",
    "fugiat",
    "quo",
    "voluptas",
    "nulla",
    "pariatur",
    "at",
    "vero",
    "eos",
    "et",
    "accusamus",
    "officiis",
    "debitis",
    "aut",
    "rerum",
    "necessitatibus",
    "saepe",
    "eveniet",
    "ut",
    "et",
    "voluptates",
    "repudiandae",
    "sint",
    "et",
    "molestiae",
    "non",
    "recusandae",
    "itaque",
    "earum",
    "rerum",
    "hic",
    "tenetur",
    "a",
    "sapiente",
    "delectus",
    "ut",
    "aut",
    "reiciendis",
    "voluptatibus",
    "maiores",
    "doloribus",
    "asperiores",
    "repellat"
  ]
};

faker.name.firstName = (gender) => "Francie";
faker.name.lastName = (gender) => "Pomegranate";

faker.random.arrayElement = array => {
  array = array || ["a", "b", "c"];
  var r = faker.random.number({ max: array.length - 1 });
  return array[r];
};

faker.random.number = (options) => {

  if (typeof options === "number") {
    options = {
      max: options
    };
  }

  options = options || {};

  if (typeof options.min === "undefined") {
    options.min = 0;
  }

  if (typeof options.max === "undefined") {
    options.max = 99999;
  }
  if (typeof options.precision === "undefined") {
    options.precision = 1;
  }

  var max = options.max;
  if (max >= 0) {
    max += options.precision;
  }

  var randomNumber = options.precision * Math.floor(
    mersenneRand(max / options.precision, options.min / options.precision));

  return randomNumber;

};

faker.random.range = function(min, max) {
  return function(/* i */) {
    return Math.random() * (max - min) + min;
  };
};

const mersenneRand = function(max, min) {
  if (max === undefined) {
    min = 0;
    max = 32768;
  }

  return Math.floor(faker.random.range(min, max)());
};

faker.lorem.word = num => {
  return faker.random.arrayElement(faker.definitions.lorem.words);
};

faker.lorem.words = (num) => {
  if (typeof num == 'undefined') {
    num = 3;
  }
  var words = [];
  for (var i = 0; i < num; i++) {
    words.push(faker.lorem.word());
  }
  return words.join(' ');
};

faker.lorem.sentence = (wordCount, range) => {
  if (typeof wordCount == 'undefined') {
    wordCount = faker.random.number({ min: 3, max: 10 });
  }

  var sentence = faker.lorem.words(wordCount);
  return `${sentence.charAt(0).toUpperCase() + sentence.slice(1)  }.`;
};

let list = {
  random() {
    let items = arguments.length > 0 ? arguments : [];

    return function() {
      return faker.random.arrayElement(items);
    };
  },

  cycle() {
    let items = arguments.length > 0 ? arguments : [];

    return function(i) {
      return items[i % items.length];
    };
  }
};

faker.list = list;

export default faker;
