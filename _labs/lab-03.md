---
title: Lab 3：社区发现与信息传播
number: 3
weeks: 第 5—6 周
parent: 课程实验 Labs
nav_order: 3
dataset_id: college-msg
resource_key: week06
---

## 商业背景

品牌团队希望发现用户社群，并比较随机消费者或高连接消费者作为营销种子时的扩散范围。模拟结果是情景分析，不是效果承诺。

## 实验目标

1. 使用 Louvain 或教师实现发现社区。
2. 解释社区划分和模块度局限。
3. 比较不同种子策略下 SIR 传播。

## 实验数据

- 数据集：[CollegeMsg](https://snap.stanford.edu/data/CollegeMsg.html)
- 格式：发送者、接收者、时间戳组成的文本记录。
- 使用提示：保留时间顺序，不识别真实身份；遵循 SNAP 页面说明。
- 实验说明：CollegeMsg 是带时间戳的校园消息网络；只使用必要网络字段，不识别真实身份。
- 社区示例数据：[Karate Club](https://networkx.org/documentation/stable/reference/generated/networkx.generators.social.karate_club_graph.html)，用于小图算法演示。

## 使用工具

NetworkX, Matplotlib

## 实验任务

1. 在 Karate Club 小图检查社区算法输出。
2. 在 CollegeMsg 子图运行传播模拟模板。
3. 设定传播、恢复概率和随机种子，记录参数。
4. 比较随机节点、高度节点或高中介节点作为种子。
5. 比较感染曲线、最终覆盖与重复模拟波动。
6. 讨论社群边界和传播概率对策略的影响。

## 180 分钟安排

| 时间 | 环节 |
|---|---|
| 0–20 分钟 | 社区和传播问题 |
| 20–55 分钟 | Karate Club 社区划分 |
| 55–80 分钟 | 可视化与解释 |
| 80–125 分钟 | 多种种子 SIR 模拟 |
| 125–160 分钟 | 曲线与模拟波动 |
| 160–180 分钟 | 讨论并提交 |

## 提交要求

- 社区网络图
- 传播曲线和参数表
- 种子策略对比与局限说明

## 实验资源

{% include week-resources.html key=page.resource_key lab=true %}

数据通过来源页面获取。许可或隐私条件不明确时，暂停下载和分享并向教师确认。
