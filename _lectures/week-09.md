---
title: 第 9 周：图表示学习
number: 9
week: 9
module_name: Module III：图机器学习
parent: 课程讲义 Lectures
nav_order: 9
resource_key: week09
---

## 本周主题

**把关系转为可计算表示**

## 学习目标

1. 说明把关系转为可计算表示中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 怎样把节点周围的关系上下文压缩为机器学习向量？

## 知识要点

- 图上机器学习任务
- 节点分类与链路预测
- 节点特征
- 节点嵌入
- 随机游走
- DeepWalk
- node2vec

## 经管情境

基于用户关系的用户画像

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：把关系转为可计算表示 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [Stanford CS224W：图表示学习相关课程材料](https://web.stanford.edu/class/cs224w/)（建议阅读）——选读课程介绍与相关主题材料。
- [Perozzi, Al-Rfou & Skiena (2014), DeepWalk: Online Learning of Social Representations](https://doi.org/10.1145/2623330.2623732)（拓展论文）——KDD 2014, 701–710. DOI: 10.1145/2623330.2623732。
- [Grover & Leskovec (2016), node2vec: Scalable Feature Learning for Networks](https://doi.org/10.1145/2939672.2939754)（拓展论文）——KDD 2016, 855–864. DOI: 10.1145/2939672.2939754。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
