---
layout: page
title: 课程实验 Labs
nav_order: 4
has_children: true
permalink: /labs/
---

# 课程实验

本课程安排 8 次集中实验，每次 4 学时（180 分钟），对应第 2、4、6、8、10、12、14、16 周。实验围绕经管问题组织，使用公开来源或教学子集；网站不会镜像来源数据。

<table class="resource-table"><thead><tr><th>实验</th><th>对应周次</th><th>数据</th><th>工具</th></tr></thead><tbody>
{% for lab in site.data.labs.labs %}{% assign dataset = site.data.resources.datasets | where: "id", lab.dataset_id | first %}
<tr><td><a href="{{ lab.url_path | relative_url }}">Lab {{ lab.number }}：{{ lab.title }}</a></td><td>{{ lab.weeks }}</td><td>{% if dataset %}<a href="{{ dataset.url }}" target="_blank" rel="noopener">{{ dataset.name }}</a>{% else %}学生自主选择{% endif %}</td><td>{{ lab.tools | join: '、' }}</td></tr>
{% endfor %}</tbody></table>

每个实验页面包含背景、目标、数据、工具、分步任务、时间安排和提交要求。
