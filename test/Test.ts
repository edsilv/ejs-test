class Batch {
    static $jsonMappings = {
        'owner': x => Person.fromJson(x),
        'entries': [x => Entry.fromJson(x)]
    };

    owner: Person = null;
    entries: Entry[] = [];
}
class Person {
    name: string;
}
class Entry {
    id: number;
}

var json = [
  {
    owner: {
      name: 'John Doe'
    },
    entries: [
      { id: 1 },
      { id: 2 }
    ]
  },
  {
    owner: {
      name: 'Jane Doe'
    },
    entries: []
  }
];

var batches = json.en().select(batch => Batch.fromJson(batch)).toArray();
console.log(batches);
// batches results in Batch[] with data filled in from json.