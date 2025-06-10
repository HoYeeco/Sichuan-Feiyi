 // 导航栏滚动效果
 const navbar = document.getElementById('navbar');
 const backToTop = document.getElementById('back-to-top');
 
 window.addEventListener('scroll', function() {
   if (window.scrollY > 100) {
     navbar.classList.add('bg-primary', 'shadow-md');
     navbar.classList.remove('bg-transparent');
     backToTop.classList.remove('translate-y-20', 'opacity-0');
     backToTop.classList.add('translate-y-0', 'opacity-100');
   } else {
     navbar.classList.remove('bg-primary', 'shadow-md');
     navbar.classList.add('bg-transparent');
     backToTop.classList.add('translate-y-20', 'opacity-0');
     backToTop.classList.remove('translate-y-0', 'opacity-100');
   }
 });
 
 // 移动端菜单切换
 const menuToggle = document.getElementById('menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');
 
 menuToggle.addEventListener('click', function() {
   mobileMenu.classList.toggle('hidden');
 });
 
 // 平滑滚动
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
     e.preventDefault();
     
     const targetId = this.getAttribute('href');
     if (targetId === '#') return;
     
     const targetElement = document.querySelector(targetId);
     if (targetElement) {
       window.scrollTo({
         top: targetElement.offsetTop - 80,
         behavior: 'smooth'
       });
       
       // 关闭移动菜单
       if (!mobileMenu.classList.contains('hidden')) {
         mobileMenu.classList.add('hidden');
       }
     }
   });
 });
 
 // 返回顶部按钮
 backToTop.addEventListener('click', function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });
 
 // 图片懒加载
 document.addEventListener("DOMContentLoaded", function() {
   const lazyImages = [].slice.call(document.querySelectorAll("img"));
   
   if ("IntersectionObserver" in window) {
     let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
       entries.forEach(function(entry) {
         if (entry.isIntersecting) {
           let lazyImage = entry.target;
           lazyImage.src = lazyImage.dataset.src;
           lazyImageObserver.unobserve(lazyImage);
         }
       });
     });
     
     lazyImages.forEach(function(lazyImage) {
       lazyImageObserver.observe(lazyImage);
     });
   }
 });