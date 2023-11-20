---
title: 删除链表的倒数第N个节点
tags:
  - 算法
  - 链表
categories: [算法,链表]
keywords: 算法 链表
date: 2023-09-11 18:50:20
---
# 题目
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
# 分析
首先想到翻转，遍历到第N个，删除后再翻转回去

其次想到也可以放入栈，取出第N个

最后也可以用双指针
# 题解
翻转链表
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        head = swap(head);
        
        if (n == 1) head = head.next;
        else {
            ListNode pre = null;
            ListNode curr = head;
            for (int i = 0; i < n-1; i++) {
                ListNode tmp = curr;
                curr = curr.next;
                pre = tmp;
            }
            pre.next = curr.next;
        }
        
        head = swap(head);
        return head;
    }

    private static ListNode swap(ListNode head) {
        ListNode pre = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode tmp = curr.next;
            curr.next = pre;
            pre = curr;
            curr = tmp;
        }
        return pre;
    }
}
```

双指针
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode left = head;
        ListNode pre = null;
        ListNode right  = head;
        for (int i = 0; i < n-1; i++) {
            right = right.next;
        }
        
        while (right.next != null) {
            right = right.next;
            pre = left;
            left = left.next;
        }
        if (pre == null) return head.next;
        pre.next = left.next;
        return head;
    }
}
```
栈
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        Deque<ListNode> swap = new LinkedList<>();
        ListNode curr = head;
        while (curr != null) {
            swap.push(curr);
            curr = curr.next;
        }

        for (int i = 0; i < n; i++) {
            swap.pop();
        }
        if (swap.isEmpty()) return head.next;
        ListNode pre = swap.pop();
        pre.next = pre.next.next;
        return head;

    }
}
```