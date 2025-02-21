export default class MzWItemSheet extends ItemSheet {
    get template() {
        return `systems/MazeWorldFoundryVTT/MzW/templates/sheets/${this.item.type}-sheet.html`;
    }

    /**
     * Gets the data object for the MazeWorld item sheet
     * @returns {Object} The data object for the sheet
     */
    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.data,
            config: CONFIG.MzW
        };

        return sheetData;
    }
}