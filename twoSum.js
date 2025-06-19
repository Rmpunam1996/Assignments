function twoSum(nums, target) {
  if (!Array.isArray(nums) || typeof target !== "number") {
    throw new Error(
      "Invalid input: nums must be an array and target must be a number"
    );
  }

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No two sum solution found");
}

console.log(twoSum([2, 7, 11, 15], 9));
