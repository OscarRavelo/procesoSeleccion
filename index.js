


const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false, slowMo: 50
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://web.gencat.cat/ca/inici
  await page.goto('https://web.gencat.cat/ca/inici');

  // Click text=Agenda cultural. Obre en una nova finestra.
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Agenda cultural. Obre en una nova finestra.')
  ]);

  // Go to https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiIiwiYW1iaXRzIjpbXSwiY2F0ZWdvcmllcyI6W119
  await page2.goto('https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiIiwiYW1iaXRzIjpbXSwiY2F0ZWdvcmllcyI6W119');

  // Go to https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiIiwiYW1iaXRzIjpbXSwiY2F0ZWdvcmllcyI6W119&page=0
  await page2.goto('https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiIiwiYW1iaXRzIjpbXSwiY2F0ZWdvcmllcyI6W119&page=0');

  // ---------------------
  //if you wanna close the page after the search uncomment the line below
  // await browser.close();
  
})();
      
      
    