function loadSidebar() {
  fetch('partials/sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebarContainer').innerHTML = data;

      // เรียกใช้ฟังก์ชันจัดการ toggle หลังจากโหลดเนื้อหาเสร็จ
      setupMenuToggle();
    })
    .catch(error => console.error('Error loading sidebar:', error));
}

function setupMenuToggle() {
  $(".menu > ul > li").click(function (e) {
    // remove active from already active
    $(this).siblings().removeClass("active");
    // add active to clicked
    $(this).toggleClass("active");
    // if has sub menu open it
    $(this).find("ul").slideToggle();
    // close other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active class of sub menu items
    $(this).siblings().find("ul").find("li").removeClass("active");
  });

  $(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
  });
}

// เรียกใช้ฟังก์ชันเพื่อโหลด sidebar เมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener('DOMContentLoaded', loadSidebar);
