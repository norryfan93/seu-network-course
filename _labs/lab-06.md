---
title: Lab 6：图神经网络与模型比较
number: 6
weeks: 第 11—12 周
parent: 课程实验 Labs
nav_order: 6
dataset_id: amazon-computers
resource_key: week12
---

## 商业背景

商品分类任务中，团队要判断邻居聚合是否比仅用商品自身特征更有帮助，关注公平比较和过拟合。

## 实验目标

1. 理解 GCN 与 GraphSAGE 邻居聚合。
2. 使用教师代码模板运行基础模型。
3. 用相同划分比较 MLP 并识别过拟合。

## 实验数据

- 数据集：[Amazon Computers](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.Amazon.html)
- 格式：PyTorch Geometric 数据集对象，含图连接、节点特征和类别标签。
- 使用提示：按官方数据集说明和上游来源条件使用；课程站不重新分发数据。
- 实验说明：PyG Amazon Computers 可用于小规模教学比较；不要求从零编写 GNN 底层代码。

## 使用工具

PyTorch, PyTorch Geometric, Scikit-learn

## 实验任务

1. 读取统一训练、验证和测试划分。
2. 运行 MLP 非图基线和教师 GCN 模板。
3. 环境允许时运行 GraphSAGE，GAT 为选做。
4. 记录损失和验证指标并绘制训练曲线。
5. 比较 Accuracy、Macro-F1 等适合的指标。
6. 检查标签、边或特征中是否泄漏未来信息。
7. 讨论图结构提升是否稳定且有管理意义。

## 180 分钟安排

| 时间 | 环节 |
|---|---|
| 0–20 分钟 | 比较原则与划分 |
| 20–55 分钟 | MLP 基线 |
| 55–105 分钟 | GCN 模板 |
| 105–140 分钟 | GraphSAGE 或教师结果 |
| 140–165 分钟 | 指标和过拟合 |
| 165–180 分钟 | 提交审查表 |

## 提交要求

- 模型划分和参数记录
- MLP、GCN、GraphSAGE 结果表
- 训练曲线和过拟合/泄漏分析

## 实验资源

{% include week-resources.html key=page.resource_key lab=true %}

数据通过来源页面获取。许可或隐私条件不明确时，暂停下载和分享并向教师确认。
