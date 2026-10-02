class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let seenNums = new Set() 
       for(let num of nums){
        if(seenNums.has(num)){
            return true;
        }
        seenNums.add(num)
       }
       return false 
    }
}
