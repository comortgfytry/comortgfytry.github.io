---
title: 和为k的子数组
tags:
  - 算法
  - 子串
categories: [算法,子串]
keywords: 算法 子串
abbrlink: 56638
date: 2023-07-28 16:22:11
---
# 题目
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

输入：nums = [1,1,1], k = 2
输出：2

# 分析
* 首先想到遍历就可以了

# 解法

直接遍历
 
```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            int sum = 0;
            for (int j = i; j < nums.length; j++) {
                sum += nums[j];
                if (sum == k)   count++;
            }
        }
        return count;
    }
}
```

哈希优化

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        //在for循环里，hashMap存储（到目前索引可以有的连续数和，个数）
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        int sum = 0; // 表示从0号位开始一直连续之和
        int count = 0;  // 表示有多少个=k的子数组
        hashMap.put(0,1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (hashMap.containsKey(sum - k)) count += hashMap.get(sum - k);
            hashMap.put(sum, hashMap.getOrDefault(sum,0)+1);
        }
        return count;
    }
}
```
举例：
1，2，3，5，1，4，1，1，2，4
k = 6

首先：put(0,1)表示和为0的子数组，现在1个（空子数组）

索引：0-》sum = 1,如果之前有和为sum-k,那么二者中间则是一个满足条件的子数组

依次遍历下去。
