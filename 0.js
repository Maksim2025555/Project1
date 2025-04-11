document.addEventListener("DOMContentLoaded", function () { const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;
        const people = document.getElementById("people").value;
        
        if (name && email && destination && date && people) {
            alert(`Дякуємо, ${name}! Ваш тур у напрямку ${destination} на ${people} осіб заброньовано на ${date}. Ми надішлемо підтвердження на ${email}.`);
            bookingForm.reset();
        } else {
            alert("Будь ласка, заповніть усі поля форми.");
        }
    });
    
    const scrollToBookingBtn = document.querySelector("button");
    if (scrollToBookingBtn) {
        scrollToBookingBtn.addEventListener("click", function () {
            document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
        });
    }
    
    // Додавання динамічних новин
    const newsSection = document.getElementById("news");
    if (newsSection) {
        const newsArticles = [
            { title: "Знижки на літні тури!", content: "Забронюйте подорож до 1 червня та отримайте 20% знижки!" },
            { title: "Новий готель у Туреччині", content: "Ми додали розкішний готель 5* у список наших партнерів!" }
        ];
        
        newsArticles.forEach(news => {
            const article = document.createElement("article");
            article.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
            newsSection.appendChild(article);
        });
    }
    
    // Підсвічування активного пункту меню при скролінгу
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
    
    });
    function showSection(id) {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.style.display = "none";
        });
    
        const target = document.getElementById(id);
        if (target) {
            target.style.display = "block";
            window.scrollTo(0, 0);
        }
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        // При завантаженні показати лише головну секцію
        showSection("home");
    });