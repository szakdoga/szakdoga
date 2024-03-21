import AdminModel from "../Model/AdminModel.js";
import AdminView from "../View/AdminView.js";
import AdminView2 from "../View/AdminView2.js";
import DataService from "../Model/DataService.js";

class AdminController {
    constructor() {
        this.dataService = new DataService();
        this.megjelenitCegek();
        this.megjelenitDiakok();
    }

    async megjelenitCegek() {
        await this.dataService.getData('/cegek/lista', (adatok) => {
            const model = new AdminModel(adatok);
            new AdminView(model.getAdat(), '.cegek');
        });
    }

    async megjelenitDiakok() {
        await this.dataService.getData('/diakok', (adatok) => {
            const model = new AdminModel(adatok);
            new AdminView2(model.getAdat(), '.diakok');
        });
    }
}
export default AdminController;
