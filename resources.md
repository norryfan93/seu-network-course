---
layout: page
title: 学习资源 Resources
nav_order: 6
permalink: /resources/
---

# 学习资源

资源以公开、权威和长期可访问来源为主。面向经管本科生，每周建议 1—2 项核心阅读；经典论文主要作为拓展阅读。每周阅读见<a href="{{ '/schedule/' | relative_url }}">教学日历</a>。数据集页面只链接来源，不复制可能受限的数据。

## 核心教材
<ul>{% for item in site.data.resources.textbooks %}<li><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>：{{ item.note }}</li>{% endfor %}</ul>
## 公开课程
<ul>{% for item in site.data.resources.courses %}<li><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>：{{ item.note }}</li>{% endfor %}</ul>
## 经典论文与每周阅读
<table class="resource-table"><thead><tr><th>主题周次</th><th>类型</th><th>书目信息 / 资源</th><th>阅读建议</th></tr></thead><tbody>
{% for item in site.data.resources.readings %}<tr><td>{{ item.week_label }}</td><td>{{ item.kind }}</td><td><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></td><td>{{ item.detail }}</td></tr>{% endfor %}</tbody></table>
## Python 与可视化工具
<table class="resource-table"><thead><tr><th>工具</th><th>入口</th><th>用途</th></tr></thead><tbody>
{% for item in site.data.resources.tools %}<tr><td>{{ item.name }}</td><td><a href="{{ item.url }}" target="_blank" rel="noopener">官方文档</a></td><td>{{ item.use }}</td></tr>{% endfor %}</tbody></table>
## 公开数据集
<table class="resource-table"><thead><tr><th>数据集</th><th>类型与格式</th><th>教学用途</th><th>来源与使用提示</th></tr></thead><tbody>
{% for item in site.data.resources.datasets %}<tr><td>{{ item.name }}</td><td>{{ item.type }}。{{ item.format }}</td><td>{{ item.use }}</td><td><a href="{{ item.url }}" target="_blank" rel="noopener">官方来源页面</a>。{{ item.caution }}</td></tr>{% endfor %}</tbody></table>
## 课程材料
课件、讲义、实验 Notebook 和代码将逐步上传到对应页面。未发布内容会标注“待发布”。基础实验以普通笔记本电脑 CPU 环境为目标，不要求购买 GPU 或付费 API。
