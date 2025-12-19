const mainPage = document.querySelector(".container");

const items = [
    `https://www.lnkmeup.com/view.php?id=5539224&pub=2869635`,
    `https://www.mobtrk.link/view.php?id=5539225&pub=2869635`,
    `https://www.directcpi.com/view.php?id=5539221&pub=28696`,
    `https://www.mobtrk.link/view.php?id=5539217&pub=2869635`,
    `https://www.directcpi.com/view.php?id=5541733&pub=28696`,
    `https://www.lnkmeup.com/view.php?id=5541426&pub=2869635`,
    `https://www.mobtrk.link/view.php?id=5539217&pub=2869635`
]

const title = [
    `Animal`, `Book`, `Color`, `story`, `Villain`, `Flower personality`, `Element`
]

items.forEach((item, idx) => {
    let link = `
    <div class = "button-49">
        <a href="${item}" data-interact-trigger data-tool-id="61438" class="navigation">
            ${title[idx]} test
        </a>
    </div>
        `
    mainPage.innerHTML += link;
})