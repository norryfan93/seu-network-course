---
title: 第 11 周：图神经网络进阶
number: 11
week: 11
module_name: Module III：图机器学习
parent: 课程讲义 Lectures
nav_order: 11
resource_key: week11
---

## 本周主题

**归纳学习与邻居选择**

## 学习目标

1. 说明归纳学习与邻居选择中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 训练中没见过的新节点，何时仍能得到表示？

## 知识要点

- GraphSAGE
- 邻居采样
- Graph Attention Network
- 注意力
- Transductive 与 Inductive Learning

## 经管情境

新用户与新商品的分类预测

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：归纳学习与邻居选择 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [Hamilton, Ying & Leskovec (2017), Inductive Representation Learning on Large Graphs](https://proceedings.neurips.cc/paper/2017/hash/5dd9db5e033da9c6fb5ba83c7a7ebea9-Abstract.html)（拓展论文）——NeurIPS 2017, 1024–1034。
- [Veličković et al. (2018), Graph Attention Networks](https://openreview.net/forum?id=rJXMpikCZ)（拓展论文）——ICLR 2018。关注邻居加权聚合的直觉。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
