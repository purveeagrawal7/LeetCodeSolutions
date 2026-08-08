class Solution {
    public String removeDuplicates(String s, int k) {
    int tempArray = new int[s.length];
    String result = "";
    for(int i=0;i<s.length;i++){
        char char = s.charAt(i)
        Map<Character, Integer> lastArrayEle = tempArray[tempArray.length -1];
        char lastKey = lastArrayEle ? Object.keys(lastArrayEle)[0] : null
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
    }
}
