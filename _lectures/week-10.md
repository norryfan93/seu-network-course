---
title: 第 10 周：图神经网络基础
number: 10
week: 10
module_name: Module III：图机器学习
parent: 课程讲义 Lectures
nav_order: 10
resource_key: week10
---

## 本周主题

**从邻居聚合到节点预测**

## 学习目标

1. 说明从邻居聚合到节点预测中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 加入邻居信息后模型获得什么，又引入什么风险？

## 知识要点

- 传统机器学习与图机器学习
- 邻居聚合
- Message Passing
- GCN
- 多层 GNN
- 节点分类

## 经管情境

小型商品图或社交网络中的节点分类

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：从邻居聚合到节点预测 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [Kipf & Welling (2017), Semi-Supervised Classification with Graph Convolutional Networks](https://openreview.net/forum?id=SJU4ayYgl)（拓展论文）——ICLR 2017。建议读摘要、图示和实验设置。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
