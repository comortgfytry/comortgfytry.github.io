---
title: 数组中的第K个最大元素
tags:
  - 算法
  - 堆
categories: [算法,堆]
keywords: 算法，堆
date: 2023-11-13 14:50:20
---

# 题目
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

输入: [3,2,1,5,6,4], k = 2  
输出: 5

# 分析
* 思路一：使用快速排序
> 对要排序的数组，选定其中一个数作为分界，把其他数划分到左右两侧
>
> 然后再把左侧或右侧作为一个数组，选取一个数划分为左右两侧
>
> 直到数组长度为1

* 思路二：堆排序
> 堆有最大堆（父节点的值大于子节点的值）和最小堆
>
> 堆本质是一个完全二叉树，可以用数组进行存储
>
> 先构建最大堆，然后不断删除根节点

关于堆的详解：[堆](堆.md)

# 代码
* 快速排序
```java
class Solution {
    public static int quickSelect(int[] nums, int left, int right,int k) {
        if (left == right) {
            return nums[k];
        }
        int part = nums[left];
        int i = left - 1;
        int j = right + 1;
        while (i < j) {
            do {
                i++;
            } while (nums[i] < part);
            do {
                j--;
            } while (nums[j] > part);
            if (i < j) {
                int tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
        if (k <= j) {
            return quickSelect(nums, left, j, k);
        } else {
            return quickSelect(nums, j + 1, right, k);
        }
    }
    public static int findKthLargest(int[] nums, int k) {
        int len = nums.length;
        return quickSelect(nums, 0, len - 1, len-k);
    }
}
```

* 堆排序
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        //构建最大堆
        int heapsize = nums.length;
        buildMaxHeap(nums, heapsize);
        //连续删除根
        for (int i = nums.length-1; i >= nums.length - k + 1; i--) {  
            int tmp = nums[0];
            nums[0] = nums[i];
            nums[i] = tmp;
            heapsize--;
            maxHeapify(nums, 0, heapsize);

        }
        return nums[0];
    }

    public static void buildMaxHeap(int[] nums, int heapSize) {
        for (int i = heapSize/2; i >= 0; i--) {
            maxHeapify(nums, i, heapSize);
        }
    }

    public static void maxHeapify(int[] nums, int i, int heapSize) {
        int left = 2*i + 1, right = 2*i + 2,father = i;
        if (left < heapSize && nums[left] > nums[father]) {
            father = left;
        }
        if (right < heapSize && nums[right] > nums[father]) {
            father = right;
        }
        if (father != i) {
            int tmp = nums[i];
            nums[i] = nums[father];
            nums[father] = tmp;
            maxHeapify(nums, father, heapSize);
        }
    }
}
```