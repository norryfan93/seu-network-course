---
title: 第 7 周：网络关系预测
number: 7
week: 7
module_name: Module II：网络结构与行为分析
parent: 课程讲义 Lectures
nav_order: 7
resource_key: week07
---

## 本周主题

**预测尚未出现的联系**

## 学习目标

1. 说明预测尚未出现的联系中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 共同邻居等启发式能发现怎样的潜在关系？

## 知识要点

- Link Prediction
- Common Neighbors
- Jaccard
- Adamic–Adar
- Preferential Attachment
- 正负样本构造

## 经管情境

潜在好友推荐、企业合作关系预测

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：预测尚未出现的联系 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [Liben-Nowell & Kleinberg (2007), The Link-Prediction Problem for Social Networks](https://doi.org/10.1002/asi.20591)（拓展论文）——JASIST 58(7), 1019–1031. DOI: 10.1002/asi.20591。
- [NetworkX：链路预测指标接口说明](https://networkx.org/documentation/stable/reference/algorithms/link_prediction.html)（工具说明）——共同邻居、Jaccard 和 Adamic–Adar 的接口。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
