const mainSiteUrl = "https://playoverwatch.com/en-us/news/patch-notes";
const blizzTrackUrl = "https://blizztrack.com/overwatch/versions";
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchData(siteUrl) {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

async function scrapeOverwatch() {
    const $wholepage = await fetchData(mainSiteUrl);
    const firstPatchHtml = $wholepage('.PatchNotes-patch.PatchNotes-live').first().html();
    const $patch = await cheerio.load(firstPatchHtml);

    // date
    let date = $patch('.PatchNotes-patchTitle').first().text();
    // Get rid of "Overwatch Retail Patch Notes"
    date = date.substr(31);

    let body = "";
    $patch('.PatchNotes-section').has('.PatchNotes-sectionTitle').each((index, element) => {
        //let $ = cheerio.load($patch(element).html());
        //headers.push($('.PatchNotes-sectionTitle').text());
        if ($patch(element).has('.PatchNotesHeroUpdate').html() == null) {
            body += $patch(element);
        }
    });

    // version
    const $bt = await fetchData(blizzTrackUrl);
    let version = $bt('.mb-1').first().text();

    return {
        gameTitle: 'Overwatch',
        date: date,
        version: version,
        body: body,
        img: 'https://patchbot.io/images/overwatch_sm.png',
    }
}

module.exports = scrapeOverwatch;
