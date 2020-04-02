for (let i = 1; i < 6; i++) {
    let src = "blog/entries/blogImages/carotenoid/maps/" + i + ".jpg";

    let anchor = document.querySelector(".anchor");
    let figure = document.createElement("figure");
    anchor.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", src);
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);
};

{/* <figure>
	<img class="lazy" data-src="/galleries/personalArt/entries/images/20170902_photoRoll9/20170902_photoRoll9_1.jpg">
	<figcaption></figcaption>
</figure> */}