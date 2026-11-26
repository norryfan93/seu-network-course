---
layout: page
title: 课程要求 Syllabus
nav_order: 7
permalink: /syllabus/
---

# 课程要求

## 课程定位

{{ site.data.course.positioning }}

## 学习目标
<ol>{% for item in site.data.course.objectives %}<li>{{ item }}</li>{% endfor %}</ol>

## 先修要求
<ul>{% for item in site.data.course.prerequisites %}<li>{{ item }}</li>{% endfor %}</ul>
{{ site.data.course.prerequisite_note }}

## 学时安排
| 教学环节 | 安排 | 学时 |
|---|---|---:|
| 理论讲授 | 16 周，每周 2 学时，每学时 45 分钟 | 32 |
| 集中实验 | 每两周一次，共 8 次；每次 4 学时 | 32 |
| 合计 | 16 周 | 64 |

## 考核方式（暂定）
<table class="resource-table"><thead><tr><th>考核内容</th><th>比例</th><th>状态</th><th>说明</th></tr></thead><tbody>
{% for item in site.data.course.grading %}<tr><td>{{ item.name }}</td><td>{{ item.weight }}%</td><td>{{ item.status }}</td><td>{{ item.detail }}</td></tr>{% endfor %}</tbody></table>
{{ site.data.course.policy_note }}

## 学习与提交要求
- 完成规定实验任务；实验报告包含代码、结果和简要解释。
- 项目说明数据来源、关系定义、方法选择和模型评估方式。
- 不得编造实验结果；提交的代码应能解释和复现。
- 使用生成式人工智能辅助学习时，应理解、验证其内容，并按教师要求说明使用方式。
- 对涉及个人信息的数据，遵守隐私、许可和研究伦理要求。
- 不要求购买付费软件或使用付费 API。
- 截止日期、提交平台和具体评分细则待教师公布。
