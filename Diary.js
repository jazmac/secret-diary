class Diary {

    lock = false;
    //input;
    entry;

    addEntry(entry) {
        if (this.lock === true) {
            return;
        } else {
            //this.entry
            this.entry = entry;
        }
    };

    removeEntry() {
        if (this.lock === true) {
            return;
        } else {
            this.entry = undefined
        }
    }
}



module.exports = Diary;