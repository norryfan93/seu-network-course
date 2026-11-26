---
title: Lab 5：节点嵌入与节点分类
number: 5
weeks: 第 9—10 周
parent: 课程实验 Labs
nav_order: 5
dataset_id: amazon-computers
resource_key: week10
---

## 商业背景

电商团队希望用商品共购关系辅助商品类别识别。节点嵌入将网络邻域压缩为向量，再与分类器组合。

## 实验目标

1. 理解商品节点、共购边、特征和类别。
2. 运行 node2vec 教师模板并理解随机游走参数。
3. 比较网络表示与传统基线。

## 实验数据

- 数据集：[Amazon Computers](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.Amazon.html)
- 格式：PyTorch Geometric 数据集对象，含图连接、节点特征和类别标签。
- 使用提示：按官方数据集说明和上游来源条件使用；课程站不重新分发数据。
- 实验说明：Amazon Computers 是 PyG 文档中的商品共购图；可使用教师注明抽样规则的固定子集，网站不再分发原始数据。

## 使用工具

NetworkX, node2vec, Scikit-learn, Pandas

## 实验任务

1. 加载 Amazon Computers 教学子集，检查图、特征和标签对应关系。
2. 固定随机种子运行 node2vec 或使用教师提供的嵌入。
3. 使用 PCA 或 t-SNE 投影，并谨慎解释图形。
4. 用逻辑回归训练嵌入分类器。
5. 与类别先验或网络统计特征基线比较。
6. 说明全图嵌入与训练/测试划分的泄漏风险。

## 180 分钟安排

| 时间 | 环节 |
|---|---|
| 0–20 分钟 | 字段与任务 |
| 20–55 分钟 | 加载图与子集 |
| 55–100 分钟 | node2vec 或嵌入 |
| 100–135 分钟 | 分类和基线 |
| 135–165 分钟 | 可视化与泄漏讨论 |
| 165–180 分钟 | 提交 |

## 提交要求

- 嵌入可视化
- 分类基线比较表
- 参数、随机种子和管理解释

## 实验资源

{% include week-resources.html key=page.resource_key lab=true %}

数据通过来源页面获取。许可或隐私条件不明确时，暂停下载和分享并向教师确认。
