

const Page = require('./page');

class AddRemoveElementsPage extends Page {
    
    get addElement () {
        return $('[onclick="addElement()"]');
    }

    get deleteElement () {
        return $('[onclick="deleteElement()"]');
    }

    async addElementclk () {
        await this.addElement.click();
    }

    async addElementDobleclk () {
        await this.addElement.doubleClick();
    }

    async deleteclk () {
        await this.deleteElement.click();
    }

    async deleteDobleclk () {
        await this.deleteElement.doubleClick();
    }

    async deleteElementIsClk () {
        await this.deleteElement.isClickable();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemoveElementsPage();
