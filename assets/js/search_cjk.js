// Keep Just the Docs' search for English and add substring search for Chinese.
(function () {
  var baseurl = (window.courseSiteBaseurl || '').replace(/\/$/, '');
  var originalOpen = XMLHttpRequest.prototype.open;

  // Just the Docs requests its index from the site root. Prefix that request
  // for GitHub Pages project sites such as /course-name/.
  XMLHttpRequest.prototype.open = function (method, url) {
    if (baseurl && url === '/assets/js/search-data.json') {
      arguments[1] = baseurl + url;
    }
    return originalOpen.apply(this, arguments);
  };

  var searchDataPromise;
  function loadSearchData() {
    if (!searchDataPromise) {
      searchDataPromise = fetch(baseurl + '/assets/js/search-data.json')
        .then(function (response) { return response.json(); });
    }
    return searchDataPromise;
  }

  function normalize(value) {
    return value.toLowerCase().replace(/[\s\u3000，。；：、,.!?！？:;“”"'（）()\[\]{}]/g, '');
  }

  function showChineseResults(input) {
    var container = document.getElementById('search-results');
    var query = input.value.trim();
    if (!container || !query) return;

    loadSearchData().then(function (docs) {
      if (input.value.trim() !== query) return;
      var needle = normalize(query);
      var matches = Object.keys(docs).map(function (id) {
        var doc = docs[id];
        var title = normalize((doc.title || '') + ' ' + (doc.doc || ''));
        var content = normalize(doc.content || '');
        if (!title.includes(needle) && !content.includes(needle)) return null;
        return {
          doc: doc,
          score: (title.includes(needle) ? 100 : 0) + (content.includes(needle) ? 10 : 0)
        };
      }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 10);

      container.innerHTML = '';
      if (matches.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'search-no-result';
        empty.textContent = 'No results found';
        container.appendChild(empty);
        return;
      }

      var list = document.createElement('ul');
      list.className = 'search-results-list';
      matches.forEach(function (match) {
        var doc = match.doc;
        var item = document.createElement('li');
        item.className = 'search-results-list-item';
        var link = document.createElement('a');
        link.className = 'search-result';
        link.href = doc.url;

        var title = document.createElement('div');
        title.className = 'search-result-title';
        var source = document.createElement('div');
        source.className = 'search-result-doc';
        var sourceTitle = document.createElement('div');
        sourceTitle.className = 'search-result-doc-title';
        sourceTitle.textContent = doc.doc || doc.title;
        source.appendChild(sourceTitle);
        title.appendChild(source);

        if (doc.doc && doc.title && doc.doc !== doc.title) {
          var section = document.createElement('div');
          section.className = 'search-result-section';
          section.textContent = doc.title;
          title.appendChild(section);
        }
        link.appendChild(title);

        var content = doc.content || '';
        var index = content.toLowerCase().indexOf(query.toLowerCase());
        var start = index < 0 ? 0 : Math.max(0, index - 45);
        var end = Math.min(content.length, start + 150);
        var previews = document.createElement('div');
        previews.className = 'search-result-previews';
        var excerpt = document.createElement('div');
        excerpt.className = 'search-result-preview';
        excerpt.textContent = (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
        previews.appendChild(excerpt);
        link.appendChild(previews);
        item.appendChild(link);
        list.appendChild(item);
      });
      container.appendChild(list);
    }).catch(function () {
      // The theme's built-in search remains available if its index cannot load.
    });
  }

  function handleChineseInput(event) {
    var input = event.target;
    if (!input || input.id !== 'search-input' || event.isComposing) return;
    if (/[\u3400-\u4dbf\u4e00-\u9fff]/.test(input.value)) showChineseResults(input);
  }

  // IME and pasted Chinese text can change the field without a keyup event.
  // Render on input/composition events and stop the theme's English tokenizer
  // from replacing those results.
  document.addEventListener('input', handleChineseInput);
  document.addEventListener('compositionend', handleChineseInput);
  document.addEventListener('keyup', function (event) {
    var input = event.target;
    if (input && input.id === 'search-input' && /[\u3400-\u4dbf\u4e00-\u9fff]/.test(input.value)) {
      event.stopPropagation();
    }
  }, true);
})();
