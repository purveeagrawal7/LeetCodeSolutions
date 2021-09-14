var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var maxLen = 0;
    var longSubStr = "";
    for(let i =0; i<s.length;i++){
        if(longSubStr.indexOf(s[i]) !== -1){
            longSubStr = longSubStr.substr(longSubStr.indexOf(s[i])+1, longSubStr.length);
            max = longSubStr.length;
        }
        longSubStr += s[i]
        max += 1;
        if(max > maxLen){
            maxLen = max; 
        }
    }
    return maxLen;
};

lengthOfLongestSubstring("dvdf");
