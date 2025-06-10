          // 图片懒加载
          document.addEventListener("DOMContentLoaded", function() {
              const lazyImages = [].slice.call(document.querySelectorAll("img"));
              
              if ("IntersectionObserver" in window) {
                  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                      entries.forEach(function(entry) {
                          if (entry.isIntersecting) {
                              let lazyImage = entry.target;
                              lazyImage.classList.add("fade-in");
                              lazyImageObserver.unobserve(lazyImage);
                          }
                      });
                  });
                  
                  lazyImages.forEach(function(lazyImage) {
                      lazyImageObserver.observe(lazyImage);
                  });
              }
          });