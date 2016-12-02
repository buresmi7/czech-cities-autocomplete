
const assert = require('assert');
const autocomplete = require('./../app/index');

describe('CitiesHandler', () => {
    it('should return results', () => {
        assert.deepEqual(
            autocomplete.search(''),
            []);
        assert.deepEqual(
            autocomplete.search('Pr'),
            []);
        assert.deepEqual(
            autocomplete.search('Praha 10'),
            [
                {
                    "name": "Praha 10",
                    "ascii": "praha 10",
                    "parent": "Praha",
                    "region": "Hlavní město Praha",
                    "weight": 8
                }
            ]);
        assert.deepEqual(
            autocomplete.search('usti'),
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
            ]);
    });
});