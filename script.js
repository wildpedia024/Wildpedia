document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    
    window.toggleTheme = () => {
        const isDark = document.documentElement.hasAttribute("data-theme");
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            if(themeToggle) themeToggle.textContent = "🌙 Dark Mode";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            if(themeToggle) themeToggle.textContent = "☀️ Light Mode";
        }
    };
    
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        if(themeToggle) themeToggle.textContent = "☀️ Light Mode";
    }

    if(themeToggle) {
        themeToggle.addEventListener("click", window.toggleTheme);
    }

    function updateDateTime() {
        const dt = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = dt.toLocaleDateString('en-US', options);
        const timeStr = dt.toLocaleTimeString('en-US', {hour12: false});
        
        const element = document.getElementById('datetime');
        if(element) {
            element.innerHTML = `${dateStr} | ${timeStr}`;
        }
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    window.addEventListener("scroll", () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        
        let bar = document.getElementById("progress-bar");
        if (bar) bar.style.width = scrolled + "%";

        let btn = document.getElementById("backToTop");
        if (btn) {
            btn.style.display = (winScroll > 300) ? "block" : "none";
        }
    });

    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const textToType = "Protecting the future of nature since 1961.";
        let i = 0;
        function type() {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }
});


function playMusic() {
    var audio = document.getElementById("bgMusic") || document.getElementById("bg-music");
    if (audio) {
        var promise = audio.play();
        if (promise !== undefined) {
            promise.then(_ => console.log("Muzik dimainkan.")).catch(e => console.log("Klik diperlukan."));
        }
    }
}

document.body.addEventListener('click', function() {
    playMusic();
}, { once: true });

function prosesCarian() {
    playMusic(); 
    const userInput = document.getElementById('userInput');
    if (!userInput) return;

    const carian = userInput.value.toLowerCase();
    if (carian.includes("wwf") || carian === "") {
        setTimeout(() => { window.location.href = "index.html"; }, 500);
    } else {
        alert("Please type 'WWF'.");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
}
