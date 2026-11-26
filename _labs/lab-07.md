---
title: Lab 7：图推荐系统
number: 7
weeks: 第 13—14 周
parent: 课程实验 Labs
nav_order: 7
dataset_id: movielens-100k
resource_key: week14
---

## 商业背景

平台希望从用户—物品交互生成个性化候选，同时避免热门推荐掩盖长尾需求。

## 实验目标

1. 构造用户—物品二部图。
2. 实现热门、协同过滤与邻居推荐基线。
3. 使用明确切分比较 Recall@K 和 NDCG@K。

## 实验数据

- 数据集：[MovieLens 100K](https://grouplens.org/datasets/movielens/100k/)
- 格式：GroupLens 归档包，含评分及用户、电影字段文件。
- 使用提示：阅读数据集页面和下载包 README 的使用条款；课程站只提供来源链接。
- 实验说明：MovieLens 100K 来自 GroupLens；请阅读官方数据页和下载包 README，课程站只链接来源。

## 使用工具

Pandas, NetworkX, Scikit-learn

## 实验任务

1. 读取 MovieLens 评分及时间字段。
2. 按时间或用户留出构造划分并记录规则。
3. 只用训练交互构建二部图。
4. 实现热门物品与基础协同过滤。
5. 基于邻居关系推荐候选并剔除已交互物品。
6. 计算 Recall@K、NDCG@K 并说明候选集定义。
7. LightGCN 作为拓展，不要求基本训练。

## 180 分钟安排

| 时间 | 环节 |
|---|---|
| 0–20 分钟 | 推荐和指标定义 |
| 20–55 分钟 | 数据与划分 |
| 55–100 分钟 | 二部图和热门基线 |
| 100–140 分钟 | 协同过滤和图邻居 |
| 140–165 分钟 | Recall 与 NDCG |
| 165–180 分钟 | 泄漏检查提交 |

## 提交要求

- 数据划分说明和推荐列表样例
- 基线指标比较表
- 含长尾和局限的管理解释

## 实验资源

{% include week-resources.html key=page.resource_key lab=true %}

数据通过来源页面获取。许可或隐私条件不明确时，暂停下载和分享并向教师确认。
