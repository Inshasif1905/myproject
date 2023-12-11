function searchSelfDefenseClassesInIndia() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();
const classesIndia = [
        { name: 'Krav Maga Institute', city: 'Mumbai', address: '123 ABC Street' },
        { name: 'Taekwondo Academy', city: 'Delhi', address: '456 XYZ Road' },
    ];
displayClassesInIndia(classesIndia);
}
function displayClassesInIndia(classesIndia) {
    const classesListIndia = document.getElementById('classesListIndia');
    classesListIndia.innerHTML = ''; 
    if (classesIndia.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No classes found in this location. Try another city in India.';
        classesListIndia.appendChild(li);
    } else {
        classesIndia.forEach((classInfo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${classInfo.name}</strong> - ${classInfo.city}, ${classInfo.address}`;
            classesListIndia.appendChild(li);
        });
    }
}

