function() {
  var lookupEventValue = {
    "ma__featured-item ma__featured-item--tall": "Mosaic image (tall)",
    "ma__featured-item": "Mosaic image",
    "ma__footer-links__link": "Footer link",
    "ma__icon-links" : "Social media icon",
    "ma__social-links__link js-social-share": "Social media icon (footer)",
    "ma__footer__info": "Footer logo",
    "ma__organization-navigation": "Org page subnavigation", // nav 
    "ma__emergency-alerts":"Global alert",  // section
    "ma__header-alert": "Page-level alert", //page-level alerts section
    "related": "Related", // closest ID of an h2 over related links in right rail
    "related-": "Related", // IBID but in footer for how-tos
    "ma__comp-heading   ma__comp-heading--sidebar ": "Related", // related for service&info details
    "ma__press-teaser": "Related" // news
  }
  
if ({{Click Classes}} && lookupEventValue[{{Click Classes}}]) {
    return lookupEventValue[{{Click Classes}}];
  } 

  // edge cases: Section = footer logo, alerts
else if ({{Click Element}}.closest('section') && lookupEventValue[{{Click Element}}.closest('section').classList[0]]) {
    return lookupEventValue[{{Click Element}}.closest('section').classList[0]];
 } 
 // Sub Nav 
else if ({{Click Element}}.closest('nav') && lookupEventValue[{{Click Element}}.closest('nav').classList[0]]) {
   return lookupEventValue[{{Click Element}}.closest('nav').classList[0]];
} 
// related links for service/info-details
 else if ({{Click Element}}.closest('section').children[0] && lookupEventValue[{{Click Element}}.closest('section').children[0].classList.value]) {
   return lookupEventValue[{{Click Element}}.closest('section').children[0].classList.value]
 } 
// related links for how-tos
 else if ({{Click Element}}.closest('section').children[0].id && lookupEventValue[{{Click Element}}.closest('section').children[0].id]) {
   return lookupEventValue[{{Click Element}}.closest('section').children[0].id];
}
 //process of elimination: header logo
  else if ({{Click Element}}.title==="Mass.gov home page") {
   return "Header logo"; 
 } 
}  