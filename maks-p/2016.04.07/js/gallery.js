;(function() {
  var activeIndex = 0,
      previewListNodes,
      thumbnailListNodes,
      galleryThumbnailsNode,
      activePreviewListNode,
      activeThumbnailListNode;

  var setActive = function(index) {
    if (activePreviewListNode && activeThumbnailListNode) {
      activePreviewListNode.className = '';
      activeThumbnailListNode.className = '';
    }

    activePreviewListNode = previewListNodes[index];
    activeThumbnailListNode = thumbnailListNodes[index];

    activeIndex = index;

    activePreviewListNode.className = 'active';
    activeThumbnailListNode.className = 'active';
  };

  var init = function(galleryNode) {
      previewListNodes = galleryNode.querySelectorAll('[data-id="gallery-preview"] li');
      thumbnailListNodes = galleryNode.querySelectorAll('[data-id="gallery-thumbnails"] li');

      setActive(0);

      galleryThumbnailsNode =  galleryNode.querySelector('[data-id="gallery-thumbnails"]');

      /*Start: add event to preview actions */
      galleryNode.querySelector('[data-action="left"]').addEventListener('click', function() {
        var index = activeIndex - 1;
        if (index < 0) {
          index = thumbnailListNodes.length - 1;
        }
        setActive(index);
      });

      galleryNode.querySelector('[data-action="right"]').addEventListener('click', function() {
        var index = activeIndex + 1;
        if (index > thumbnailListNodes.length - 1) {
          index = 0;
        }
        setActive(index);
      });
      /*End: add event to preview actions */

      /*Start: add event to thumbnails actions */
      var actionBtns = galleryNode.querySelectorAll('[data-action-thumbnails]');

      Array.prototype.forEach.call(actionBtns, function(actionBtn) {
        actionBtn.addEventListener('click', function(e) {
          var action = e.target.getAttribute('data-action-thumbnails');
          var sign = action === 'left' ? -1 : 1;
          var currentMarginLeft = parseInt(galleryThumbnailsNode.style.marginLeft || 0, 10);

          if ((currentMarginLeft === 0 && sign === 1) ||
             (currentMarginLeft*-1 >= (thumbnailListNodes.length * 50 / 2) && sign === -1)) {
            return;
          }

          galleryThumbnailsNode.style.marginLeft = (currentMarginLeft + 50 * sign) + 'px';
        });
      })
      /*End: add event to thumbnails actions */

      galleryThumbnailsNode.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget) {
          var i = 0,
              thumbnailListNodesLength = thumbnailListNodes.length;

          for (; i < thumbnailListNodesLength; i++) {
            if (thumbnailListNodes[i] === e.target.parentNode) {
              break;
            }
          }

          setActive(i);
        }
      });
  };

  window.Gallery = {
    init: init
  };
})();
