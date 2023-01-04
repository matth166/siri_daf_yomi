let yomi_url = "https://www.sefaria.org/api/calendars"
let yomi_req = new Request(yomi_url)
let yomi_json = await yomi_req.loadJSON()
let daf_yomi = yomi_json["calendar_items"][2]["url"]
daf = "http://www.sefaria.org/api/texts/".concat(daf_yomi)
let daf_req = new Request(daf)
let text_json = await daf_req.loadJSON()
let daf_text = String(text_json["text"]).replace(/<\/?[^>]+>/gi, '')
if (config.runsWithSiri) {
 Speech.speak(daf_text)
}
Script.complete()
