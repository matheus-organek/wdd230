document.addEventListener("DOMContentLoaded", () => {
    const memberContainer = document.getElementById('memberContainer');
    const toggleViewButton = document.getElementById('toggleView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
        });

    toggleViewButton.addEventListener('click', () => {
        memberContainer.classList.toggle('grid-view');
        memberContainer.classList.toggle('list-view');
    });

    function displayMembers(members) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <p>${member.description}</p>
            `;

            memberContainer.appendChild(memberCard);
        });
    }
});
