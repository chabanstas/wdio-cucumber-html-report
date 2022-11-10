

const Page = require('./page');
const assert = require('assert');

class CheckboxesPage extends Page {
    
    get checkbox1 () {
        return $('input:nth-child(1)');
    }

    get checkbox2 () {
        return $('input:nth-child(3)');
    }

    async checkbox1clk () {
        await this.checkbox1.click();
    }

    async checkbox2clk () {
        await this.checkbox2.doubleClick();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();
