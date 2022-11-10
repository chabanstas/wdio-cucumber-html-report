

const Page = require('./page');
const assert = require('assert');

class DropdownPage extends Page {
    
    get option1 () {
        return $('option[value="1"]');
    }

    get option2 () {
        return $('option[value="2"]');
    }

    async checkOp1Selected () {
        assert.equal(await this.option1.isSelected(), false);
    }

    async checkOp2Selected () {
        assert.equal(await this.option2.isSelected(), false);
    }

    async Op1Selected () {
        await this.option1.click();
        assert.equal(await this.option1.isSelected(), true);
    }

    async Op2Selected () {
        await this.option2.click();
        assert.equal(await this.option2.isSelected(), true);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();
