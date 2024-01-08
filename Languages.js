const englishCode = "en-US";
const spanishCode = "es-ES";
function Languages(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}

module.exports = Languages;