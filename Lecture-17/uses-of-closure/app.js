

function counter(){
    let count = 0;

    return {
        getCount: function getCount(){
            console.log(count);
        },
        incCount: function incCount(){
            count++;
        },
        decCount : function decCount(){
            count--;
        },
        resetCount : function resetCount(){
            count=0;
        }
    }
}
let retObj = counter()

retObj.getCount()
retObj.incCount()
retObj.incCount()
retObj.incCount()
retObj.getCount()






