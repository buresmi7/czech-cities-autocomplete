# Czech cities fast autocomplete (czech-cities-autocomplete)

## Usage

Search a cities by a starting name part of the city name. The search string length must have at least 3 characters.

```javascript
const autocomplete = require('czech-cities-autocomplete');
const result = autocomplete.search('usti');
```

Result:

```javascript
[
    {
        "ascii": "usti",
        "name": "Ústí",
        "parent": "Jihlava",
        "region": "Kraj Vysočina",
        "weight": 4
    },
    {
        "ascii": "usti",
        "name": "Ústí",
        "parent": "Přerov",
        "region": "Olomoucký kraj",
        "weight": 4
    },
    {
        "ascii": "usti",
        "name": "Ústí",
        "parent": "Vsetín",
        "region": "Zlínský kraj",
        "weight": 4
    },
    {
        "ascii": "ustin",
        "name": "Ústín",
        "parent": "Olomouc",
        "region": "Olomoucký kraj",
        "weight": 5
    },
    {
        "ascii": "usti nad labem",
        "name": "ÚSTÍ NAD LABEM",
        "parent": "Ústí nad Labem",
        "region": "Ústecký kraj",
        "weight": 14
    },
    {
        "ascii": "usti nad orlici",
        "name": "Ústí nad Orlicí",
        "parent": "Ústí nad Orlicí",
        "region": "Pardubický kraj",
        "weight": 15
    }
]
```

## Installation

 * Clone project
 * Go to project folder
 * `npm install`

## Run tests:

 * `npm run test`