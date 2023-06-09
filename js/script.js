window.onload = () => {
     let btnHamburger = document.querySelector(".btn-hamburger");
     let btnCount = false;

     btnHamburger.onclick = () => {
          let html = document.querySelector("html");
          let body = document.querySelector("body");

          let navigationMenu = document.querySelector("#navigation-menu");
          let hiddenMenu = document.querySelector(".hidden-menu");

          if (btnCount) {
               btnCount = false;

               btnHamburger.classList.remove("btn-hamburger-close");
               hiddenMenu.style.animation = "hidden-menu-right 0.5s ease-in-out forwards";

               hiddenMenu.addEventListener("animationend", () => {
                    html.classList.remove("html-body");
                    body.classList.remove("html-body");
               });
          }

          else {
               btnCount = true;

               btnHamburger.classList.add("btn-hamburger-close");
               hiddenMenu.style.animation = "hidden-menu-left 0.5s ease-in-out forwards";

               hiddenMenu.addEventListener("animationend", () => {
                    html.classList.add("html-body");
                    body.classList.add("html-body");
               });

               hiddenMenu.addEventListener("animationstart", () => {
                    html.classList.add("html-body");
                    body.classList.add("html-body");

                    navigationMenu.style.height = "100%";
                    navigationMenu.style.alignItems = "flex-start";
               });
          }
     };
};