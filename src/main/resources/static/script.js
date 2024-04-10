// script.js

document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
    const ticketList = document.getElementById('ticketList');
    const deleteButton = document.getElementById('deleteTickets');

    const tickets = [];

    ticketForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const movieName = document.getElementById('movieName').value;
        const customerName = document.getElementById('customerName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const numberOfPeople = document.getElementById('numberOfPeople').value;

        // Validating inputs
        if (movieName.trim() === '' || customerName.trim() === '' || email.trim() === '' || phone.trim() === '' || numberOfPeople.trim() === '') {
            alert('Alle felt må fylles ut.');
            return;
        }

        // Assuming email validation here, you can customize it further
        if (!isValidEmail(email)) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        // Assuming phone number validation here, you can customize it further
        if (!isValidPhoneNumber(phone)) {
            alert('Vennligst skriv inn et gyldig telefonnummer.');
            return;
        }

        const ticket = {
            movieName: movieName,
            customerName: customerName,
            email: email,
            phone: phone,
            numberOfPeople: numberOfPeople
        };

        tickets.push(ticket);
        displayTickets();
        ticketForm.reset();
    });

    deleteButton.addEventListener('click', function() {
        tickets.length = 0;
        displayTickets();
    });

    function displayTickets() {
        ticketList.innerHTML = '';
        tickets.forEach(function(ticket, index) {
            const li = document.createElement('li');
            li.textContent = `Billett ${index + 1}: Film: ${ticket.movieName}, Navn: ${ticket.customerName}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Antall personer: ${ticket.numberOfPeople}`;
            ticketList.appendChild(li);
        });
    }

    function isValidEmail(email) {
        // Simple email validation, can be further enhanced
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPhoneNumber(phone) {
        // Simple phone number validation, assuming 8 digits
        return /^\d{8}$/.test(phone);
    }
})

