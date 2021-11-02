describe('LinkedList', ()=>{
    let linkedList;
    beforeEach(()=>{
        linkedList = new linkedList();
    })

    describe('insert', ()=>{
        it('should contain the element with key 5 when the element is inserted', ()=>{
            const element = {
                key:5
            }
            linkedList.insert(element);
            const foundElement = linkedList.contains(element.key);
            expect(foundElement.key).toEqual(element.key)
        })
        it('should contain the element with keys 5, 10, 14 when the element is inserted', ()=>{
            const element1 = {
                key:5
            }
            const element2 = {
                key:10
            }
            const element3 = {
                key:14
            }
            linkedList.insert(element1);
            const foundElement1 = linkedList.contains(element1.key);
            linkedList.insert(element2);
            const foundElement2 = linkedList.contains(element2.key);
            linkedList.insert(element3);
            const foundElement3 = linkedList.contains(element3.key);
            expect(foundElement1.key).toEqual(element1.key)
            expect(foundElement2.key).toEqual(element2.key)
            expect(foundElement3.key).toEqual(element3.key)
        })
        it('should increment the size when elements are inserted', ()=>{

        })
        
    })
    describe('remove', ()=>{
        it('should remove the element with key 5 when the element 5, 10, 14 are inserted', ()=>{

        })
        it('should remove the element with key 10 when the element 5, 10, 14 are inserted', ()=>{

        })
        it('should remove the element with key 14 when the element 5, 10, 14 is inserted', ()=>{

        })
        it('should decremnet the size when elements are removed', ()=>{

        })
    })
    describe('contains', ()=>{
        it('should return the element with key 5 when the element 5, 10, 14 are inserted', ()=>{

        })
        it('should return the element with key 10 when the element 5, 10, 14 are inserted', ()=>{

        })
        it('should return the element with key 14 when the element 5, 10, 14 are inserted', ()=>{

        })
        it('should return null when the element with key 20 is searched for and only elements 5, 10, 14 are inserted', ()=>{

        })
        
    })
    describe('size', ()=>{
        it('should return 0 when no elements have been inserted', ()=>{

        })
        it('should return 1 when 1 elements have been inserted', ()=>{

        })
        it('should return 3 when 3 elements have been inserted', ()=>{

        })
        it('should return 2 when 3 elements have been inserted and 1 have been removed', ()=>{

        })
        it('should return 0 when 3 elements have been inserted and 3 have been removed', ()=>{

    
        })
    })
})