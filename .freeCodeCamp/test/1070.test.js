/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct if condition and statements', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]

    assert(/if[ \t]+\[\[[ \t]+-z[ \t]+\$AVAILABLE_BIKES[ \t]+\]\]([ \t]*;[ \t]*|\s*\v+)then\s+MAIN_MENU[ \t]+("|)Sorry, we don't have any bikes available right now\.\2([ \t]*;[ \t]*|\s*\v+)fi/.test(rentMenuFunction));
  });
});*/