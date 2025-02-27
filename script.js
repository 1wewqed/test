// Hiệu ứng accordion cho các mục dịch vụ
document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Hiệu ứng chuyển đổi hình ảnh
document.querySelectorAll('.service-image').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});
