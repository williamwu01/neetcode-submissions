class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {}

        for(let i = 0; i < s.length; i++){
            let char = s[i] 

            if(count[char]){
                count[char]++
            } else {
                count[char] = 1
            }
        }
        if(s.length !== t.length){
            return false;
        }

        for(let i = 0; i < t.length; i++){
            let char2 = t[i]

            if(!count[char2]){
                return false
            } 

        count[char2]--

        }
        return true
    }
}
