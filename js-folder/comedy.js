alert ("Welcome TO Comedy Movies");

const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
            stars.forEach((otherstar, otherIdex) => {
            if (otherIdex <= clickedIdx){
                otherstar.classList.add("active");
            }
        });

        console.log(`star of index ${clickedIdx +1} was clicked`)
    });
});