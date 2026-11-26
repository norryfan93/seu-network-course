# 东南大学《复杂网络分析与图机器学习》课程网站

本仓库建设面向经济管理类本科生的中文课程网站，后续可通过 GitHub Pages 发布。本阶段仅准备本地源代码和静态构建文件，不创建或推送远程仓库。

网站以 UC Berkeley CDSS 的 [Berkeley Class Site](https://github.com/berkeley-cdss/berkeley-class-site) 为基础，保留 Jekyll、Just the Docs 侧边导航与搜索、GitHub Pages 工作流和无障碍检查。模板许可证见 LICENSE，来源说明见 ATTRIBUTION.md。

## 目录说明

- _data/course.yml：课程名称、教师、学时、学习目标、模块、考核与项目评分。
- _data/schedule.yml：16 周教学主题、知识点、商业情境、讲授结构与阅读编号。
- _data/labs.yml：8 次实验的背景、目标、任务、时间安排、数据和提交要求。
- _data/resources.yml：教材、课程、论文、工具、数据集来源以及材料发布状态。
- _lectures/：16 个独立周讲义页面。
- _labs/：8 个独立实验页面。
- home.md、schedule.md、projects.md、resources.md、syllabus.md、staff.md、faq.md：课程页面。
- materials/：后续存放真实课件、讲义、代码、Notebook 和教学数据。
- _includes/resource-link.html：控制资源发布状态并核对本地文件是否存在。
- _layouts/、_sass/：页面模板与课程视觉样式。
- .github/workflows/：GitHub Pages 部署与无障碍检查。
- _site/：Jekyll 本地构建生成的静态网站，不需要手工编辑。

## 环境要求

模板要求 Ruby 3.3.9 或更高版本、Bundler 2.6 或更高版本。进入 course-website 文件夹后运行：

~~~bash
ruby --version
bundle --version
bundle install
~~~

项目中的 .ruby-version 和 .tool-versions 指定模板 CI 使用 Ruby 3.3.13。

## 本地预览与构建

启动本地预览：

~~~bash
bundle exec jekyll serve
~~~

浏览器访问终端显示的本地地址，通常为 http://127.0.0.1:4000/。结束服务按 Ctrl+C。

生成静态网站：

~~~bash
JEKYLL_ENV=production bundle exec jekyll build
~~~

生成文件位于 _site/。模板无障碍检查：

~~~bash
bundle exec rspec
~~~

## 修改课程信息

在 _data/course.yml 修改教师信息、学时、模块、学习目标和暂定考核比例。学期、课程编号、时间、地点、邮箱、主页和答疑安排目前待公布。更新站点名称时，也同步修改 _config.yml 的 title 与 tagline。

## 修改教学日历

在 _data/schedule.yml 编辑 weeks 数组。每周记录理论主题、知识点、商业情境、阅读编号、学习目标和 90 分钟建议结构。module_start 控制日历中的模块分隔行。实验安排在第 2、4、6、8、10、12、14、16 周；调整时同步修改 _data/labs.yml。

每周阅读详情统一放在 _data/resources.yml，教学日历通过阅读 id 引用，避免重复维护。

## 上传课件、讲义或代码

1. 将实际文件放入 materials/slides/、materials/notes/ 或 materials/code/。
2. 在 _data/resources.yml 对应 materials.weekXX 中填写仓库内路径，并将 status 改为 published。例如：

~~~yaml
slides:
  status: published
  url: /materials/slides/week-01.pdf
~~~

3. 重新构建网站。只有状态为 published 且本地文件实际存在时才会生成链接。
4. 未准备好的材料保持 status: pending，页面显示“待发布”。

不要创建空白 PDF、Notebook 或无实际内容的占位材料。Notebook 可放在 materials/notebooks/，并在资源配置中增加对应链接。数据集优先链接官方页面；确认许可后再考虑随仓库发布。

## 增加阅读材料与数据来源

在 _data/resources.yml 的 readings 或 datasets 中新增条目，填写标题、稳定来源、格式、教学用途和使用限制；然后在 _data/schedule.yml 中用阅读 id 引用。不要上传来源受限或含个人信息的数据。

## 更新教师信息

姓名、院系、研究方向、联系方式和答疑安排集中在 _data/course.yml。只有获得正式教师照片后才添加；本网站不使用生成的教师肖像。

## 修改配色和版式

主色为深绿 #00543D。课程样式位于 _sass/custom/custom.scss。网站使用 Just the Docs 的响应式布局、移动端侧栏折叠、导航与搜索机制。

## 发布课程公告

后续公告可单独新建 Markdown 页面或公告集合，注明发布时间、适用对象和实际内容。目前没有虚假公告。

## GitHub Pages 部署

1. 教师或管理员先在 GitHub 建立课程仓库并将本地项目添加到该仓库。本任务不会创建远程仓库或推送代码。
2. 仓库使用 main 分支；.github/workflows/jekyll.yml 会自动构建并部署。
3. 在仓库 Settings → Pages → Build and deployment 中选择 GitHub Actions。
4. 项目站点地址通常为 https://USERNAME.github.io/REPOSITORY/。工作流会读取 Pages 子路径并传给 Jekyll；页面内部链接使用 relative_url，不写死用户名或仓库名。
5. 自定义域名确认后，先按 GitHub Pages 指南完成域名与 DNS 验证，再修改 _config.yml 的 url 并按 GitHub 指引添加 CNAME。当前未预填域名。
6. 在 Actions 页面查看构建和部署结果。

## 常见问题

- Ruby 版本过低：使用 Ruby 3.3.9 或更新版本，再运行 bundle install。
- 找不到 gem：确认终端位于网站目录、Bundler 版本正确且网络可访问，然后重新安装。
- 修改配置后页面未变化：修改 _config.yml 后停止并重新启动 jekyll serve。
- 资源仍显示“待发布”：检查资源状态、以斜杠开头的路径和实际文件。
- Pages 子路径下链接错误：使用 Liquid 的 relative_url，不写死部署域名。
- 搜索结果不完整：确认页面已构建进站点，尝试中文词语并刷新浏览器搜索索引。

## 后续待补信息

学期、课程编号、教学时间、教室、邮箱、个人主页、答疑时间、最终考核安排和材料发布时间待确认；网站不会编造这些信息。
