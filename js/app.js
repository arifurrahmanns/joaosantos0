
import Swiper from 'swiper';
import IMask from 'imask';

// selecting function
const $ = (selector) => {
    return document.querySelector(selector)
}
const swiper = new Swiper(".reviewSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
})


try {
    $(".navtoggle").addEventListener("click", () => {
        $("#header").classList.toggle('active')
    })

    document.querySelectorAll('#header a').forEach(e => {
        e.addEventListener("click", () => {
            $(".navtoggle").click()
        })
    })

} catch (error) {

}

const links = document.querySelectorAll('a[target^="#"]')
for (const link of links) {
    link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("target");
    const offsetTop = document.querySelector(href).offsetTop - 90;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}




try {
    document.querySelectorAll('#FormWrp .pkg .crd').forEach(e => {
        if (e.querySelector("input").checked) {
            e.classList.add('active')
        } else {

        }
        e.addEventListener("click", function () {
            this.querySelector("input").checked = true
            document.querySelectorAll('#FormWrp .pkg .crd').forEach(e2 => { e2.classList.remove('active') })
            if (this.querySelector("input").checked) {
                this.classList.add('active')
            } else {

            }
        })
    })
} catch (error) {

}


try {
    // making input mask for date
    var dateMask = IMask(
        document.querySelector('.cardDate'),
        {
            mask: 'MM/YY',
            blocks: {
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    placeholderChar: 'M'
                },
                YY: {
                    mask: IMask.MaskedRange,
                    from: 10,
                    to: 60,
                    placeholderChar: 'Y'

                }
            },
            lazy: false,

        });
} catch (error) {

}


try {
    document.querySelectorAll(".nextBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            let target = this.getAttribute('target')
            document.querySelectorAll(".step").forEach(e => e.classList.remove('active'))
            $("#" + target).classList.add("active")
        })
    })
} catch (error) {

}


try {
    function calHt() {
        var ht = document.body.scrollHeight

        $("#Loginfooter").style.top = (ht) + "px"
    }
    let i = 0
    const int = setInterval(() => {
        if (i > 10) {
            clearInterval(int)
        }
        calHt()
        i++
    }, 50);

} catch (error) {

}


try {

    document.querySelectorAll('.customCheckbox').forEach(e => {
        if (e.querySelector("input").checked) {
            e.classList.add('active')
        } else {

        }
        e.addEventListener("click", function () {
            if (e.querySelector("input").checked) {

                this.querySelector("input").checked = false
                this.classList.remove('active')
            } else {


                this.querySelector("input").checked = true
                if (this.querySelector("input").checked) {
                    this.classList.add('active')
                } else {

                }
            }
        })
    })

} catch (error) {

}


try {


    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section.scrollTo");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {

        // Get current scroll position
        let scrollY = window.pageYOffset;

        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");

            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {
                console.log(sectionId)
                document.querySelector("#header a[target*=" + sectionId + "]").classList.add("active");
            } else {
                console.log(sectionId)
                document.querySelector("#header a[target*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
} catch (error) {

}

