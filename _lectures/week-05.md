---
title: 第 5 周：社区发现与网络划分
number: 5
week: 5
module_name: Module II：网络结构与行为分析
parent: 课程讲义 Lectures
nav_order: 5
resource_key: week05
---

## 本周主题

**谁与谁构成群体**

## 学习目标

1. 说明谁与谁构成群体中的核心概念及其适用问题。
2. 将相关方法放入具体经管情境中解释。
3. 指出该方法的关键假设与一种可能局限。

## 核心问题

> 算法发现的群体如何转化为可解释的市场细分？

## 知识要点

- 网络社区
- 同质性
- 模块度
- Girvan–Newman 边介数思路
- Louvain 模块度优化
- 社区解释

## 经管情境

消费者细分、品牌社群和用户兴趣群体

## 90 分钟讲授建议

| 时间 | 教学活动 |
|---|---|
| 0–10 分钟 | 商业情境导入与问题界定 |
| 10–35 分钟 | 核心概念：谁与谁构成群体 |
| 35–60 分钟 | 方法原理、图示与微型案例 |
| 60–80 分钟 | 经管案例讨论与结果解释 |
| 80–90 分钟 | 要点回顾、易错点与课后阅读 |

## 课件与学习材料

{% include week-resources.html key=page.resource_key lab=false %}

### 相关阅读

- [Blondel et al. (2008), Fast unfolding of communities in large networks](https://doi.org/10.1088/1742-5468/2008/10/P10008)（拓展论文）——J. Stat. Mech. P10008. DOI: 10.1088/1742-5468/2008/10/P10008。
- [NetworkX：Louvain 社区发现接口说明](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.louvain.louvain_communities.html)（工具说明）——查看输入图、分辨率参数与返回值。

## 课堂讨论提示

请说明分析对象是什么、关系如何定义、方法依赖哪些假设，以及结果能支持和不能支持哪些判断。
