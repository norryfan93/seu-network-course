---
title: 第 14 周：图推荐系统
number: 14
week: 14
module_name: Module IV：商业应用与综合实践
parent: 课程讲义 Lectures
nav_order: 14
resource_key: week14
---

## 本周主题

**用户—商品关系与推荐**

## 学习目标

1. 说明用户—商品关系与推荐中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 图结构是否改善推荐？怎样避免测试期行为泄漏？

## 知识要点

- 用户—商品二部图
- 热门推荐
- 协同过滤
- 图邻居推荐
- LightGCN
- Recall@K 与 NDCG@K

## 经管情境

电子商务平台个性化推荐

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：用户—商品关系与推荐 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [He et al. (2020), LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation](https://doi.org/10.1145/3397271.3401063)（拓展论文）——SIGIR 2020. DOI: 10.1145/3397271.3401063。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
