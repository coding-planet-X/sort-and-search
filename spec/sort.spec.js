describe('SortList', () => {
    let sortList;
    beforeEach(() => {
        sortList = new SortList();
    })
    describe('selectionSortS2L', () => {
        it('should have 0 in the index of 0', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted)
            expect(sorted[0]).toEqual(0)

        })
        it('should have 26 in the final index [0-9]', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7]
            let sorted = sortList.selectionSortS2L(unsorted)
            expect(sorted[9]).toEqual(26)
        })
        it('should have 10 in  index 7', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7]
            let sorted = sortList.selectionSortS2L(unsorted);
            expect(sorted[7]).toEqual(10)
        })
        it('should be from smallest to largest', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7]
            let sorted = sortList.selectionSortS2L(unsorted)
            let TorF = 0;
            for (let i = 0; i < sorted.length; i++) {
                for (j = i + 1; j < sorted.length; j++) {
                    if (sorted[i] <= sorted[j]) {
                        if (TorF === false) {
                            TorF = false
                        }
                        else {
                            TorF = true
                        }
                    }
                    else {
                        TorF = false
                    }
                }
            }
            expect(TorF).toEqual(true)
        })
    })
    describe('selectionSortL2S', () => {
        it('should have 26 in the index of 0', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortL2S(unsorted)
            expect(sorted[0]).toEqual(26)
        })
        it('should have 0 in the final index [0-9]', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortL2S(unsorted)
            expect(sorted[9]).toEqual(0)
        })
        it('should have 3 in the index of 7', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortL2S(unsorted)
            expect(sorted[7]).toEqual(3)
        })
        it('should be from largest to smallest', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7]
            let sorted = sortList.selectionSortL2S(unsorted)
            let TorF = 0;
            for (let i = 0; i < sorted.length; i++) {
                for (j = i + 1; j < sorted.length; j++) {
                    if (sorted[i] >= sorted[j]) {
                        if (TorF === false) {
                            TorF = false
                        }
                        else {
                            TorF = true
                        }
                    }
                    else {
                        TorF = false
                    }
                }
            }
            expect(TorF).toEqual(true)
        })
    })
    describe('binarySearch', () => {

        it('should find 13 in 3 steps', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 13;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(3)
        })
        it('should find 6 in 1 steps', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 6;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(1)
        })
        it('should find 0 in 3 steps', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 0;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(3)
        })
        it('should find 26 in 4 steps', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 26;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(4)
        })
        it('should find 7 in 4 steps', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 7;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(3)
        })
        it('should return -1 for number not in list', () => {
            let unsorted = [13, 0, 10, 6, 4, 26, 9, 3, 1, 7];
            let sorted = sortList.selectionSortS2L(unsorted);
            let steps = 0;
            let find = 16;
            let search = sortList.binarySearch(sorted, find, steps);
            expect(search).toEqual(-1)
        })
        
    })
})