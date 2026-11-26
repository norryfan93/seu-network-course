---
layout: page
title: 课程首页 Home
nav_order: 1
permalink: /
seo:
  type: Course
  name: 复杂网络分析与图机器学习
---

# 复杂网络分析与图机器学习

<section class="seu-course-hero" aria-label="东南大学课程介绍">
  <div class="seu-course-brand">
    <a href="https://www.seu.edu.cn/" aria-label="东南大学官方网站">
      <img src="{{ '/assets/images/seu/seu-lockup.svg' | relative_url }}" alt="东南大学校标与中英文标准字">
    </a>
    <span>经济管理学院<br>本科课程</span>
  </div>
  <div class="seu-course-hero-main">
    <div>
      <p class="seu-course-eyebrow">NETWORK ANALYSIS · GRAPH MACHINE LEARNING</p>
      <p class="seu-course-summary">面向经管学生的网络数据分析课程<br>从商业关系出发，理解网络结构与智能预测。</p>
      <div class="seu-course-pills"><span>16 周课程</span><span>8 次集中实验</span><span>Python 实践</span></div>
    </div>
    <div class="seu-course-motto">
      <img src="{{ '/assets/images/seu/seu-motto.svg' | relative_url }}" alt="东南大学校训：止于至善">
      <span>知行并进 · 数据洞察</span>
    </div>
  </div>
  <img class="seu-course-hall" src="{{ '/assets/images/seu/seu-hall-pattern.svg' | relative_url }}" alt="" aria-hidden="true">
</section>

<table class="course-meta-table">
<tr><th>授课教师</th><td><a href="{{ '/staff/' | relative_url }}">{{ site.data.course.instructor }} {{ site.data.course.instructor_en }}</a> · {{ site.data.course.instructor_title }}</td><th>授课对象</th><td>{{ site.data.course.audience }}</td></tr>
<tr><th>课程周期</th><td>{{ site.data.course.period_weeks }} 周</td><th>总学时</th><td>{{ site.data.course.total_hours }} 学时（理论 {{ site.data.course.lecture_hours }} + 实验 {{ site.data.course.lab_hours }}）</td></tr>
<tr><th>讲授与实验</th><td>每周讲授 2 学时（{{ site.data.course.lecture_minutes }} 分钟）</td><th>集中实验</th><td>{{ site.data.course.lab_frequency }}，每次 {{ site.data.course.lab_minutes }} 分钟</td></tr>
<tr><th>学期 / 课程编号</th><td>{{ site.data.course.semester }} / {{ site.data.course.course_code }}</td><th>上课时间 / 地点</th><td>{{ site.data.course.teaching_time }} / {{ site.data.course.classroom }}</td></tr>
</table>

<p><a href="{{ '/schedule/' | relative_url }}">教学日历 Schedule</a> · <a href="{{ '/lectures/' | relative_url }}">课程讲义 Lectures</a> · <a href="{{ '/labs/' | relative_url }}">课程实验 Labs</a></p>

## 课程介绍

{{ site.data.course.introduction }}

{{ site.data.course.positioning }}

<figure class="course-figure"><img src="{{ '/assets/images/network-structure.svg' | relative_url }}" alt="由不同社群、节点与连接构成的网络结构示意图"><figcaption>网络把个体、关系及其所在群体放在同一分析视角中。</figcaption></figure>

## 学习目标

<ol>{% for item in site.data.course.objectives %}<li>{{ item }}</li>{% endfor %}</ol>

## 课程模块

<table class="module-table"><thead><tr><th>模块</th><th>主题</th><th>周次</th><th>理论学时</th><th>实验学时</th><th>学习重点</th></tr></thead><tbody>
{% for module in site.data.course.modules %}<tr><td>Module {{ module.code }}</td><td>{{ module.name }}</td><td>{{ module.weeks }}</td><td>{{ module.lecture_hours }}</td><td>{{ module.lab_hours }}</td><td>{{ module.summary }}</td></tr>{% endfor %}
</tbody></table>

## 知识路径

<figure class="course-figure"><img src="{{ '/assets/images/course-roadmap.svg' | relative_url }}" alt="网络数据、结构分析、行为分析、图表示学习、图机器学习和商业应用的课程知识路径"></figure>

## 先修知识

<ul>{% for item in site.data.course.prerequisites %}<li>{{ item }}</li>{% endfor %}</ul>
{{ site.data.course.prerequisite_note }}

## 课程入口

- <a href="{{ '/schedule/' | relative_url }}">查看 16 周教学日历</a>
- <a href="{{ '/labs/' | relative_url }}">查看 8 次集中实验</a>
- <a href="{{ '/projects/' | relative_url }}">了解综合课程项目</a>
- <a href="{{ '/resources/' | relative_url }}">教材、课程、论文、工具与数据集</a>
