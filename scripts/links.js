const baseURL = "https://matheus-organek.github.io/wdd230/";
const linksURL = "https://matheus-organek.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const container = document.getElementById('learning-activities');
    weeks.forEach(week => {
        const weekSection = document.createElement('div');
        weekSection.classList.add('week-section');

        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        const linkList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });

        weekSection.appendChild(linkList);
        container.appendChild(weekSection);
    });
}

getLinks();
