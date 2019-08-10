'use strict';

module.exports = function(Student) {
  Student.import = function(cb) {
    const students = [
      {
        "slack_id": "UD194EW22",
        "Name": "Michael Roberts"
      },
      {
        "slack_id": "UD72HFYSC",
        "Name": "Margaret Wilson"
      },
      {
        "slack_id": "UD9HAVDQS",
        "Name": "Anthony Valera"
      },
      {
        "slack_id": "UDG0PD17S",
        "Name": "Mike Murray"
      },
      {
        "slack_id": "UE66FMNCX",
        "Name": "Alex Martinez"
      },
      {
        "slack_id": "UELKMCH39",
        "Name": "Ben Sims"
      },
      {
        "slack_id": "UEPJ92Z5M",
        "Name": "Gus Suarez"
      },
      {
        "slack_id": "UG8HKDWFJ",
        "Name": "Gian Delprado"
      },
      {
        "slack_id": "UGCQ9A3PG",
        "Name": "Taylour Pinard"
      },
      {
        "slack_id": "UGQTLMT7B",
        "Name": "John Gadi"
      },
      {
        "slack_id": "UGTGQAC2W",
        "Name": "Austin Gray"
      },
      {
        "slack_id": "UGZ6W20V8",
        "Name": "Rashad Astronomo"
      },
      {
        "slack_id": "UH44N3AUB",
        "Name": "Sam Umirdinov"
      },
      {
        "slack_id": "UH5PC877X",
        "Name": "Godfrey Martinez"
      },
      {
        "slack_id": "UHEC1FA5C",
        "Name": "Dean Lovett"
      },
      {
        "slack_id": "UHNGD5KDZ",
        "Name": "Argenis De Los Santos"
      },
      {
        "slack_id": "UHU8STP7A",
        "Name": "John Park"
      },
      {
        "slack_id": "UHUC1BRJM",
        "Name": "Garrett Cypher"
      },
      {
        "slack_id": "UHWLP6B8T",
        "Name": "Emily Kerr"
      },
      {
        "slack_id": "UHYPDPHRV",
        "Name": "Radiylon Mina"
      },
      {
        "slack_id": "UJ2399J1X",
        "Name": "Kris Logemann"
      },
      {
        "slack_id": "UJ5PHRT42",
        "Name": "Michael Ramirez"
      },
      {
        "slack_id": "UJ6JE7RPU",
        "Name": "Lexius Waltar"
      },
      {
        "slack_id": "UJ6V70NM8",
        "Name": "Sherry Freitas"
      },
      {
        "slack_id": "UJG7HTFNX",
        "Name": "Emmanuel Agubata"
      },
      {
        "slack_id": "UJGJ820UX",
        "Name": "Henry Frank"
      },
      {
        "slack_id": "UJHEDN7AM",
        "Name": "Cash Hill"
      },
      {
        "slack_id": "UJK5NS8DA",
        "Name": "Ryan Liang"
      },
      {
        "slack_id": "UJKJRUD4H",
        "Name": "Michael Fischer"
      },
      {
        "slack_id": "UJT5CAWVA",
        "Name": "Cano Espinoza"
      },
      {
        "slack_id": "UJV4086G3",
        "Name": "Hannah Clack"
      },
      {
        "slack_id": "UK06CPHU1",
        "Name": "MikeIngley"
      },
      {
        "slack_id": "UK4R3NWHH",
        "Name": "Miles Mickelson"
      },
      {
        "slack_id": "UK8BT9M9D",
        "Name": "Oscar Lizarraga"
      },
      {
        "slack_id": "UKQGUNDS7",
        "Name": "Anthony Garitachea"
      },
      {
        "slack_id": "UL1JNQG8H",
        "Name": "Jinhwan Kim"
      },
      {
        "slack_id": "ULLSLAZBJ",
        "Name": "Joshua Brooks"
      },
      {
        "slack_id": "UKU86HS84",
        "Name": "Bernadette St. George"
      },
      {
        "slack_id": "ULGM63V7C",
        "Name": "Andrew Thomsen"
      },
      {
        "slack_id": "UKTSB8BHN",
        "Name": "Shawn Taylor"
      }
    ];
    cb(null, students);
  };

  Student.remoteMethod('import', {
    http: {
      path: '/import',
      verb: 'get',
      status: 200,
      target: 'status'
    },
    returns: {
      arg: 'students',
      type: ['object']
    }
  });  
};
