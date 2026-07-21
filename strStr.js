/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j=0;
    if(haystack == needle){
        return 0;
    }
    else if(haystack.length < needle.length){
        return -1;
    }
    else{
    for(let i=0;i<haystack.length - needle.length+1;i++){
        let j=0;
        if(haystack[i]==needle[j]){
            if(haystack.substr(i,needle.length) == needle){
                return i;
            }
        }
     }
     return -1;
    }
};
