---
title: k个一组翻转链表
tags:
  - 算法
  - 链表
categories: [算法,链表]
keywords: 算法 链表
date: 2023-09-12 09:50:20
---
# 题目
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

# 分析
可以采用递归的方法，翻转局部，返回头节点

# 题解
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || head.next == null || k == 1) return head;

        ListNode pre = null;
        ListNode start = head;
        ListNode end = head;

        for (int i = 0; i < k-1; i++) {
            end = end.next;
            if (end == null) return start;
        }

        ListNode next = end.next;

        for (int i = 0; i < k; i++) {
            ListNode tmp = start.next;
            start.next = pre;
            pre = start;
            start = tmp;
        }
        head.next = reverseKGroup(next,k);
        return end;
    }
}
```