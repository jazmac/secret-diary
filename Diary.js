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



}

module.exports = Diary;