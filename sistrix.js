function sistrix(url, country, key) {
  
  // country: de, at, ch, it, es, fr, pl, nl, uk, us, se, br, tr   
  
  api = 'https://api.sistrix.com/domain.sichtbarkeitsindex?api_key=' + key + '&format=json&domain=' + url + '?country=' + country;
  
  var response = UrlFetchApp.fetch(api);
  var jsonfied = JSON.parse(response.getContentText());
  
  result = JSON.stringify(jsonfied.answer[0].sichtbarkeitsindex[0].value);
  
  return result;

  
}
