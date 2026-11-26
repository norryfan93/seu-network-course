---
layout: page
title: 教学日历 Schedule
nav_order: 2
permalink: /schedule/
---

# 教学日历

本课程每周讲授 2 学时（90 分钟），第 2、4、6、8、10、12、14、16 周安排集中实验，每次 4 学时（180 分钟）。学期日期尚未确定，具体日期、时间与教室待公布。

<div class="schedule-scroll" role="region" aria-label="可横向滚动的教学日历" tabindex="0">
<table class="schedule-table"><thead><tr><th>周次 Week</th><th>理论讲授 Lecture</th><th>主要知识点 Topics</th><th>课件与讲义 Materials</th><th>实验 Lab</th><th>阅读 Readings</th></tr></thead><tbody>
{% for week in site.data.schedule.weeks %}
{% if week.module_start %}<tr class="module-divider"><td colspan="6">{{ week.module_name }}</td></tr>{% endif %}
<tr><td class="week-label">第 {{ week.week }} 周</td><td><a href="{{ week.lecture_page | relative_url }}">{{ week.title }}</a></td>
<td>{{ week.concepts | join: '；' }}</td><td>{% if week.lab_number %}{% include week-resources.html key=week.resource_key lab=true %}{% else %}{% include week-resources.html key=week.resource_key lab=false %}{% endif %}</td>
<td>{% if week.lab_number %}{% assign lab = site.data.labs.labs | where: "number", week.lab_number | first %}<a href="{{ lab.url_path | relative_url }}">Lab {{ week.lab_number }}：{{ lab.title }}</a>{% else %}<span class="resource-pending">—</span>{% endif %}</td>
<td>{% for reading_id in week.reading_ids %}{% assign reading = site.data.resources.readings | where: "id", reading_id | first %}{% if reading %}<a href="{{ reading.url }}" target="_blank" rel="noopener">{{ reading.title }}</a>{% unless forloop.last %}；{% endunless %}{% endif %}{% endfor %}</td></tr>
{% endfor %}</tbody></table></div>

### 学时核对

- 理论：16 周 × 每周 2 学时 = **32 学时**。
- 实验：8 次 × 每次 4 学时 = **32 学时**。
- 合计：**64 学时**。每学时 45 分钟；理论课 90 分钟，集中实验 180 分钟。
