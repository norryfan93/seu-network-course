---
layout: page
title: 课程项目 Projects
nav_order: 5
permalink: /projects/
---

# 课程项目

综合项目在第 8 周启动，第 15 周辅导，第 16 周展示。建议 3—4 人一组。项目不强制使用 GNN；评价重点是问题定义、数据处理、方法选择、结果解释与可复现性。

### 项目选题参考
<table class="project-table"><thead><tr><th>项目名称</th><th>核心商业问题</th><th>可使用的方法</th></tr></thead><tbody>
{% for project in site.data.projects.projects %}<tr><td>{{ project.name }}</td><td>{{ project.question }}</td><td>{{ project.methods }}</td></tr>{% endfor %}</tbody></table>

### 项目进度
<table class="resource-table"><thead><tr><th>周次</th><th>建议工作</th></tr></thead><tbody>
{% for stage in site.data.projects.timeline %}<tr><td>第 {{ stage.week }} 周</td><td>{{ stage.activity }}</td></tr>{% endfor %}</tbody></table>

### 评分参考（暂定）
<table class="resource-table"><thead><tr><th>评价维度</th><th>建议比例</th></tr></thead><tbody>
{% for item in site.data.course.project_rubric %}<tr><td>{{ item.name }}</td><td>{{ item.weight }}%</td></tr>{% endfor %}</tbody></table>

<p class="course-callout">以上为建议方案，最终分组、提交形式、展示时间和评分细则由教师公布。</p>

### 项目提交建议
1. 项目报告：问题、数据、网络构建、方法、结果、管理启示与局限。
2. 展示 PPT：具体时长待教师公布。
3. 可复现代码：记录依赖、运行步骤、随机种子和数据获取方式。
4. 数据说明：标注来源、许可、筛选规则和隐私处理。
