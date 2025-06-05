/* global Fluid */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.events = {

  registerNavbarEvent: function() {
    var navbar = jQuery('#navbar');
    var submenu = jQuery('#navbar .dropdown-menu');
    if (navbar.offset().top > 0) {
      navbar.removeClass('navbar-dark');
      submenu.removeClass('navbar-dark');
    }
    Fluid.utils.listenScroll(function() {
      navbar[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('top-nav-collapse');
      submenu[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('dropdown-collapse');
      if (navbar.offset().top > 0) {
        navbar.removeClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      } else {
        navbar.addClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      }
    });
    jQuery('#navbar-toggler-btn').on('click', function() {
      jQuery('.animated-icon').toggleClass('open');
      jQuery('#navbar').toggleClass('navbar-col-show');
    });
  },

  registerParallaxEvent: function() {
    var bg = jQuery('#banner[parallax="true"]');
    if (bg.length === 0) {
      return;
    }
    var board = jQuery('#board');
    if (board.length === 0) {
      return;
    }
    var parallax = function() {
      var oVal = jQuery(window).scrollTop() / 5;
      var offset = parseInt(board.css('margin-top'), 0);
      var max = 96 + offset;
      if (oVal > max) {
        oVal = max;
      }
      bg.css({
        transform          : 'translate3d(0,' + oVal + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-ms-transform'    : 'translate3d(0,' + oVal + 'px,0)',
        '-o-transform'     : 'translate3d(0,' + oVal + 'px,0)'
      });
      var toc = jQuery('#toc');
      if (toc) {
        jQuery('#toc-ctn').css({
          'padding-top': oVal + 'px'
        });
      }
    };
    Fluid.utils.listenScroll(parallax);
  },

  registerScrollDownArrowEvent: function() {
    var scrollbar = jQuery('.scroll-down-bar');
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on('click', function() {
      Fluid.utils.scrollToElement('#board', -jQuery('#navbar').height());
    });
  },

  registerScrollTopArrowEvent: function() {
    var topArrow = jQuery('#scroll-top-button');
    if (topArrow.length === 0) {
      return;
    }
    var board = jQuery('#board');
    if (board.length === 0) {
      return;
    }
    var posDisplay = false;
    var scrollDisplay = false;
    // Position
    var setTopArrowPos = function() {
      var boardRight = board[0].getClientRects()[0].right;
      var bodyWidth = document.body.offsetWidth;
      var right = bodyWidth - boardRight;
      posDisplay = right >= 50;
	  //console.log('test');
	  //console.log(topArrow);
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
        'right' : right - 64 + 'px'
      });
    };
    setTopArrowPos();
    jQuery(window).resize(setTopArrowPos);
    // Display
    var headerHeight = board.offset().top;
    Fluid.utils.listenScroll(function() {
      var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
      scrollDisplay = scrollHeight >= headerHeight;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px'
      });
    });
    // Click
    topArrow.on('click', function() {
      jQuery('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      });
    });
  },

  registerImageLoadedEvent: function() {
    if (!('NProgress' in window)) { return; }

    var bg = document.getElementById('banner');
    if (bg) {
      var src = bg.style.backgroundImage;
      var url = src.match(/\((.*?)\)/)[1].replace(/(['"])/g, '');
      var img = new Image();
      img.onload = function() {
        window.NProgress && window.NProgress.inc(0.2);
      };
      img.src = url;
      if (img.complete) { img.onload(); }
    }

    var notLazyImages = jQuery('main img:not([lazyload])');
    var total = notLazyImages.length;
    for (const img of notLazyImages) {
      const old = img.onload;
      img.onload = function() {
        old && old();
        window.NProgress && window.NProgress.inc(0.5 / total);
      };
      if (img.complete) { img.onload(); }
    }
  },

  billboard: function() {
    if (!('console' in window)) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|           Powered by Hexo x Fluid            |
|         GitHub: https://git.io/JqpVD         |
|                                              |
------------------------------------------------
    `);
  },

  // 判断有无modal, 处理搜索完成之后, modal未清空
  registerResetModal: function() {

    // Modify by [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
    function localSearchFunc(path, searchSelector, resultSelector) {
      'use strict';
      // 0x00. environment initialization
      var $input = jQuery(searchSelector);
      var $result = jQuery(resultSelector);

      if ($input.length === 0) {
        // eslint-disable-next-line no-console
        throw Error('No element selected by the searchSelector');
      }
      if ($result.length === 0) {
        // eslint-disable-next-line no-console
        throw Error('No element selected by the resultSelector');
      }

      if ($result.attr('class').indexOf('list-group-item') === -1) {
        $result.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>');
      }

      $.ajax({
        // 0x01. load xml file
        url     : path,
        dataType: 'xml',
        success : function(xmlResponse) {
          // 0x02. parse xml file
          var dataList = jQuery('entry', xmlResponse).map(function() {
            return {
              title  : jQuery('title', this).text(),
              content: jQuery('content', this).text(),
              url    : jQuery('url', this).text()
            };
          }).get();

          if ($result.html().indexOf('list-group-item') === -1) {
            $result.html('');
          }

          $input.on('input', function() {
            // 0x03. parse query to keywords list
            var content = $input.val();
            var resultHTML = '';
            var keywords = content.trim().toLowerCase().split(/[\s-]+/);
            $result.html('');
            if (content.trim().length <= 0) {
              return $input.removeClass('invalid').removeClass('valid');
            }
            // 0x04. perform local searching
            dataList.forEach(function(data) {
              var isMatch = true;
              if (!data.title || data.title.trim() === '') {
                data.title = 'Untitled';
              }
              var orig_data_title = data.title.trim();
              var data_title = orig_data_title.toLowerCase();
              var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
              var data_content = orig_data_content.toLowerCase();
              var data_url = data.url;
              var index_title = -1;
              var index_content = -1;
              var first_occur = -1;
              // only match articles with not empty contents
              if (data_content !== '') {
                keywords.forEach(function(keyword, i) {
                  index_title = data_title.indexOf(keyword);
                  index_content = data_content.indexOf(keyword);

                  if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                  } else {
                    if (index_content < 0) {
                      index_content = 0;
                    }
                    if (i === 0) {
                      first_occur = index_content;
                    }
                    //content_index.push({index_content:index_content, keyword_len:keyword_len});
                  }
                });
              } else {
                isMatch = false;
              }
              // 0x05. show search results
              if (isMatch) {
                resultHTML += '<a href=\'' + data_url + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + orig_data_title + '</a>';
                var content = orig_data_content;
                if (first_occur >= 0) {
                  // cut out 100 characters
                  var start = first_occur - 20;
                  var end = first_occur + 80;

                  if (start < 0) {
                    start = 0;
                  }

                  if (start === 0) {
                    end = 100;
                  }

                  if (end > content.length) {
                    end = content.length;
                  }

                  var match_content = content.substring(start, end);

                  // highlight all keywords
                  keywords.forEach(function(keyword) {
                    var regS = new RegExp(keyword, 'gi');
                    match_content = match_content.replace(regS, '<span class="search-word">' + keyword + '</span>');
                  });

                  resultHTML += '<p class=\'search-list-content\'>' + match_content + '...</p>';
                }
              }
            });
            if (resultHTML.indexOf('list-group-item') === -1) {
              return $input.addClass('invalid').removeClass('valid');
            }
            $input.addClass('valid').removeClass('invalid');
            $result.html(resultHTML);
          });
        }
      });
    }

    function localSearchReset(searchSelector, resultSelector) {
      'use strict';
      var $input = jQuery(searchSelector);
      var $result = jQuery(resultSelector);
  
      if ($input.length === 0) {
        // eslint-disable-next-line no-console
        throw Error('No element selected by the searchSelector');
      }
      if ($result.length === 0) {
        // eslint-disable-next-line no-console
        throw Error('No element selected by the resultSelector');
      }
  
      $input.val('').removeClass('invalid').removeClass('valid');
      $result.html('');
    }

    console.log('localSearchReset');
    var modal = jQuery('#modalSearch');
    var searchSelector = '#local-search-input';
    var resultSelector = '#local-search-result';
    localSearchReset(searchSelector, resultSelector);

   

    // 以下代码来着 Gemini ，搜索完之后，点文章跳转，但是modal没有来得及关闭

    // console.log('Pjax complete event fired. Cleaning up modal state...');

    // // 1. 移除所有模态框的背景
    // // 这行不需要判断，因为即使没有 modal-backdrop 元素，.remove() 也不会报错。
    $('.modal-backdrop').remove();

    // 2. 确保 body 上的 modal-open 类被移除
    // 这行也不需要判断，因为即使没有 modal-open 类，.removeClass() 也不会报错。
    $('body').removeClass('modal-open').removeAttr('style');

    // <body class="" style="padding-right: 15px;">

    // 3. 强制隐藏所有模态框，并移除其显示相关的类
    // **这里是需要进行判断的地方**
    const $modalSearch = $('#modalSearch'); // 缓存选择结果

    if ($modalSearch.length) { // 检查元素是否存在
        console.log('Found #modalSearch. Hiding and cleaning up its state.');
        // 如果已经初始化过，调用hide方法
        // 注意：如果你在 modalSearch 模态框中绑定了 hidden.bs.modal 事件来清理背景，
        // 那么在 Pjax complete 时调用 hide() 可能会导致背景被双重清理，但这通常是安全的。
        $modalSearch.modal('hide');
        $modalSearch.removeClass('show in'); // 移除显示类
        $modalSearch.css('display', 'none'); // 强制隐藏
    } else {
        console.log('Pjax complete: #modalSearch element not found. No need to hide.');
    }

    // // 重新初始化模态框内容的自定义 JS 逻辑（如果存在）
    // // 这部分通常是针对模态框内部的复杂组件，如果它们随着 Pjax 被替换了。
    // // 比如，一个搜索模态框内部可能有日期选择器、滑块等，这些可能需要重新初始化。
    // if (typeof initSearchModalContent === 'function') {
    //     console.log('Calling initSearchModalContent after Pjax complete.');
    //     initSearchModalContent();
    // } else {
    //     // 如果你期望这个函数存在但它没有，可能需要调试 modal.js 的加载或结构。
    //     console.log('initSearchModalContent function not found.');
    // }

    modal.on('show.bs.modal', function() {
      var path = CONFIG.search_path || '/local-search.xml';
      localSearchFunc(path, searchSelector, resultSelector);
    });
    modal.on('shown.bs.modal', function() {
      jQuery('#local-search-input').focus();
    });
    modal.on('hidden.bs.modal', function() {
      localSearchReset(searchSelector, resultSelector);
    });
  },
};