---
title: Lab 4：社交关系预测
number: 4
weeks: 第 7—8 周
parent: 课程实验 Labs
nav_order: 4
dataset_id: college-msg
resource_key: week08
---

## 商业背景

平台希望根据历史交往提出潜在好友或合作对象。实验按时间切分，避免将未来网络结构提前提供给模型。

## 实验目标

1. 按时间构造历史网络与未来关系。
2. 形成正负样本并说明抽样方法。
3. 比较启发式链路预测并解释 AUC。

## 实验数据

- 数据集：[CollegeMsg](https://snap.stanford.edu/data/CollegeMsg.html)
- 格式：发送者、接收者、时间戳组成的文本记录。
- 使用提示：保留时间顺序，不识别真实身份；遵循 SNAP 页面说明。
- 实验说明：CollegeMsg 按时间切分；数据下载和再分发遵循 SNAP 页面说明。

## 使用工具

NetworkX, Pandas, Scikit-learn

## 实验任务

1. 解析互动时间戳并定义训练截止时间。
2. 仅用截止前数据构造历史网络。
3. 以之后出现的边构造正样本，从未连边候选抽取负样本。
4. 计算 Common Neighbors、Jaccard 和 Adamic–Adar。
5. 计算 ROC-AUC 与 Precision@K，说明负样本抽样影响。
6. 检查跨划分边与未来信息泄漏。
7. 讨论推荐价值及可能的曝光偏差。

## 180 分钟安排

| 时间 | 环节 |
|---|---|
| 0–25 分钟 | 目标和时间戳 |
| 25–65 分钟 | 训练网与候选样本 |
| 65–115 分钟 | 相似性分数 |
| 115–150 分钟 | AUC 与 Precision@K |
| 150–170 分钟 | 泄漏审查 |
| 170–180 分钟 | 提交 |

## 提交要求

- 时间划分和样本构造说明
- 算法比较表与 ROC 曲线
- 含泄漏检查的结论

## 实验资源

{% include week-resources.html key=page.resource_key lab=true %}

数据通过来源页面获取。许可或隐私条件不明确时，暂停下载和分享并向教师确认。
