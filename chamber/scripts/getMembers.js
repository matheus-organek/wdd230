async function fetchMembers() {
    const url = 'data/members.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        const data = await response.json();
        const spotlightMembers = getRandomMembers(data.members, 3);
        displaySpotlightMembers(spotlightMembers);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function getRandomMembers(members, count) {
    let filteredMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
    let selectedMembers = [];
    while (selectedMembers.length < count && filteredMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }
    return selectedMembers;
}

function displaySpotlightMembers(members) {
    const container = document.getElementById('spotlight-container');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'spotlight-member';
        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        `;
        container.appendChild(memberDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchMembers);
