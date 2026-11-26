---
layout: page
title: 教学团队 Staff
nav_order: 8
permalink: /staff/
---

# 教学团队

## 授课教师

<article class="instructor-card">
  <figure class="instructor-photo-frame">
    <img src="{{ '/assets/images/instructor-fan-yifan.jpg' | relative_url }}" alt="樊一凡教师个人照片">
    <figcaption>授课教师 · {{ site.data.course.unit }}</figcaption>
  </figure>
  <div class="instructor-details">
    <p class="instructor-eyebrow">COURSE INSTRUCTOR</p>
    <h3>{{ site.data.course.instructor }} <span>{{ site.data.course.instructor_en }}</span></h3>
    <p class="instructor-title">{{ site.data.course.unit }} · {{ site.data.course.department }} · {{ site.data.course.instructor_title }}</p>
    <p><strong>研究方向：</strong>{{ site.data.course.research_fields | join: "、" }}</p>
    <p><strong>办公地点：</strong>{{ site.data.course.office_location }}</p>
    <p><strong>邮箱：</strong><a href="mailto:{{ site.data.course.email }}">{{ site.data.course.email }}</a></p>
    <p><strong>答疑时间：</strong>{{ site.data.course.office_hours }}</p>
    <a class="instructor-homepage" href="{{ site.data.course.homepage }}">访问东南大学教师个人主页 <span aria-hidden="true">↗</span></a>
  </div>
</article>

<p class="license-note">教师照片由授课教师提供；个人主页、职称与研究方向以东南大学经济管理学院教师主页为准。</p>
