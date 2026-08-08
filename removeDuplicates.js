/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 //[{a:1}]
var removeDuplicates = function(s, k) {
    let tempArray = [];
    let result = "";
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i)
        let lastArrayEle = tempArray[tempArray.length -1];
        let lastKey = lastArrayEle ? Object.keys(lastArrayEle)[0] : null
        if(lastKey !== char){
            tempArray.push({[char]: 1})
        }
        else{
            lastArrayEle[char]= lastArrayEle[char] + 1;
            if(lastArrayEle[char] == k){
                tempArray.pop();
            }
        }
    }
    tempArray.forEach((ele)=>{
        let count = Object.values(ele)[0];
        while(count > 0){
            result = result + Object.keys(ele)[0];
            count --;
        }
    })
    return result;
};
