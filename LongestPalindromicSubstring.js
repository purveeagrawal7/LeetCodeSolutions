//Brute-force Method:

var longestPalindrome = function(s) {
    var max = 0;
    var maxLen = 0;
    var palindromicStr = "";
    var longestPalindomicStr= "";
    for(let i =0; i<s.length;i++){
        for(let j=i; j<s.length;j++){
        palindromicStr += s[j];
        console.log(palindromicStr)
        if(palindromicStr === palindromicStr.split('').reverse().join('')){
            maxLen = palindromicStr.length;
            if(maxLen > max){
                max = maxLen;
                longestPalindomicStr = palindromicStr;
            }
            }
        }
        palindromicStr = "";
    }
        
    return longestPalindomicStr;
};

//Using Dynamic Programming

var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	
    const isPalindromicMatrix = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
	
    let lps = '';
    
    for(let i = 0; i < s.length; i++) {
        isPalindromicMatrix[i][i] = true;
        lps = s[i];
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) isPalindromicMatrix[i][i+1] = true;
        if(isPalindromicMatrix[i][i+1]) lps = s.substring(i, i + 2);
    }
    
    for(let g=2; g<s.length; g++){
          for(let i=0, j = g; j<s.length; j++,i++){
            isPalindromicMatrix[i][j] = isPalindromicMatrix[i+1][j-1] && s[i] === s[j];
            if(isPalindromicMatrix[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
}
