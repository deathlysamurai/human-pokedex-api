# human-pokedex-api

npm run devStart

Test Http Methods

GETTING ALL RECORDS:
GET  localhost:3000/homodex

GETTING SINGLE RECORD:
GET  localhost:3000/homodex/<numberOfRecord>

UPDATING SINGLE RECORD:
PATCH  localhost:3000/homodex/<numberOfRecord>
  Headers  Content-Type application/json
  Body  {
  "name":"testName"
  }  (Can update any field from list below)
  
DELETING SINGLE RECORD:
DELETE  localhost:3000/homodex/<numberOfRecord>
  
CREATING SINGLE RECORD:
POST localhost:3000/homodex
  Headers  Content-Type application/json
  Body {
  "name":"testName",
  "height":10,
  "weight":10,
  "gender":"testGender",
  "category":"testCategory",
  "abilities":["testAbility1", "testAbility2"],
  "type":["testType1", "testType2"],
  "weaknesses":["testWeakness1", "testWeakness2"],
  "hp":"5",
  "attack":"5",
  "defense":"5",
  "speed":"5"
  }  (Number field is automatically entered to next highest number)
  
  
  FIELDS:
  number, name, height, weight, gender, category, abilities, type, weaknesses, hp, attack, defense, speed
