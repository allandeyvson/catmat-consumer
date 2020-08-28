const normalize = require('normalize-text');

function removeCaracteres(text) {
    text = text.replace(new RegExp('[/]', 'gi'), ' ');
    text = text.replace(new RegExp('[:]', 'gi'), ' ');
    text = text.replace(new RegExp('[;]', 'gi'), ' ');
    text = text.replace(new RegExp('[!]', 'gi'), ' ');
    text = text.replace(new RegExp('[\]', 'gi'), ' ');
    text = text.replace(new RegExp('[-]', 'gi'), ' ');
    text = text.replace(new RegExp('[,]', 'gi'), ' ');
    return text.toUpperCase();
}

function normalizeText(text){
    var textNormalized = removeCaracteres(text);
    textNormalized = normalize.normalizeText(textNormalized).toUpperCase();
    textNormalized = normalize.normalizeDiacritics(textNormalized).toUpperCase();
    return textNormalized;
}

module.exports = {removeCaracteres, normalizeText}

