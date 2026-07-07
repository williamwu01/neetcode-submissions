class Solution {
    /**
     * @param {number[1,2,3,3]} nums true 
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let repeated = new Set()

        for(let i = 0; i < nums.length; i++){
            if(repeated.has(nums[i])){
                return true;
            } else{
                repeated.add(nums[i])
            }
        }
        return false
    }
}
