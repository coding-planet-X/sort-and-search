class SortList {
    constructor() {
    }
    selectionSortS2L(list) {
        let lowest;
        let swap;
        let long = list.length
        let swapNum
        let arr = [];
        for (let i = 0; i < long; i++) {
            for(let l = 0; l < list.length;l++){
                if(l==0){
                    lowest=list[l]
                    swapNum = l
                }
                else if(list[l]< lowest){
                    lowest = list[l]
                    swapNum = l
                }
                if(l == list.length-1){
                    swap = list[l]
                    list[l] = lowest
                    list[swapNum] = swap
                    arr[i]= list.pop()
                }
            }
        }
        return arr
    }
    selectionSortL2S(list){
        let highest;
        let swap;
        let long = list.length
        let swapNum
        let arr = [];
        for (let i = 0; i < long; i++) {
            for(let l = 0; l < list.length;l++){
                if(l==0){
                    highest=list[l]
                    swapNum = l
                }
                else if(list[l]> highest){
                    highest = list[l]
                    swapNum = l
                }
                if(l == list.length-1){
                    swap = list[l]
                    list[l] = highest
                    list[swapNum] = swap
                    arr[i]= list.pop()
                }
            }
        }
        return arr
    }
    binarySearch(list, find, steps){
        console.log(list)
        if(list.length == 0){
            return -1;
        }
        steps+=1
        console.log(steps)
        let long = list.length
        let newList = [];
        if(long%2 == 0){
            let updateList = (long/2) -1;
            console.log(updateList)
            
            if(find == list[updateList]){
                return steps
            }
            else if(find>list[updateList]){
                for(let i = updateList+1;i<long;i++){
                    newList.push(list[i])
                }
                console.log(newList)
                return this.binarySearch(newList, find, steps)
            }
            else if(find < list[updateList]){
                for(let i = 0;i<updateList;i++){
                    newList.push(list[i])
                }
                console.log(newList)
                return this.binarySearch(newList, find, steps)
            }
            

        }
        else{
            let updateList = long-1;
            updateList= updateList/2;
            console.log(updateList)
            if(find == list[updateList]){
                return steps
            }
            else if(find>list[updateList]){
                for(let i = updateList+1;i<long;i++){
                    newList.push(list[i])
                }
                console.log(newList)
                return this.binarySearch(newList, find, steps)
            }
            else if(find < list[updateList]){
                for(let i = 0;i<updateList;i++){
                    newList.push(list[i])
                }
                console.log(newList)
                return this.binarySearch(newList, find, steps)
            }
        }
        
    }
}