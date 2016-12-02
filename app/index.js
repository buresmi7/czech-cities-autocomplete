
const citiesList = require("./citiesList");
const removeAccents = require('remove-accents');

sortCompare = (a, b) => {
    if (a.weight > b.weight) {
        return 1;
    }
    if (a.weight < b.weight) {
        return -1;
    } else {
        return 0;
    }
};

getListWithString = (str) => {
    var startString = str.substring(0, 3);
    if (!citiesList.hasOwnProperty(startString)) {
        return [];
    }
    var list = [];
    citiesList[startString].forEach((element, index, array) => {
        const indexOf = element.ascii.indexOf(str);
        if (indexOf > -1) {
            element.weight = indexOf + element.name.length + (indexOf == 0 ? 0 : 10);
            list.push(element);
        }
    });
    return list;
};

search = (str) => {
    if (str.length < 3) {
        return [];
    }

    var list = getListWithString(removeAccents(str.toLowerCase()));
    list.sort(sortCompare);
    return list.slice(0, 10);
};

module.exports.search = search;
