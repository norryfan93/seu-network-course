---
layout: page
title: 教学团队 Staff
nav_order: 8
permalink: /staff/
---

# 教学团队

## 授课教师

**{{ site.data.course.instructor }} {{ site.data.course.instructor_en }}**  
{{ site.data.course.unit }} · {{ site.data.course.department }}  
研究方向：{{ site.data.course.research_fields | join: "、" }}。

邮箱：{{ site.data.course.email }}  
{% if site.data.course.homepage %}个人主页：<a href="{{ site.data.course.homepage }}">教师主页</a>{% endif %}  
答疑时间：{{ site.data.course.office_hours }}

教师照片暂未提供，页面不使用生成的教师肖像。学期与联系方式确认后，可在 _data/course.yml 修改信息。
