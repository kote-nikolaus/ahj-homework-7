/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

const tasksList = document.getElementById('tasks-box');
const addButton = document.getElementById('add-button');
const modal = document.getElementById('modal');
const name = document.getElementById('name');
const description = document.getElementById('description');

function closeModal(e) {
  e.preventDefault();
  modal.classList.remove('modal-active');
}

function openModal(e) {
  e.preventDefault();
  modal.classList.add('modal-active');

  if (e.currentTarget.classList.contains('add-button')) {
    name.value = '';
    description.value = '';
    modal.dataset.id = '-1';
  } else {
    const ticketToEdit = e.currentTarget.closest('.ticket-full');
    name.value = ticketToEdit.querySelector('.ticket-name').textContent;
    modal.dataset.id = ticketToEdit.dataset.id;
  }

  const closeButton = document.getElementById('cancel-button');
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('submit', saveInfo);
}

addButton.addEventListener('click', openModal);

function POSTData(params, method) {
  const queryString = `method=${method}`;
  const url = `http://localhost:7070/?${queryString}`;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.response);
      }
    }
  });
  xhr.send(params);
}

function getAllTickets() {
  tasksList.innerHTML = '';
  const queryString = 'method=allTickets';
  const url = `http://localhost:7070/?${queryString}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const tickets = xhr.response;
        for (let i = 0; i < tickets.length; i += 1) {
          const ticketHTML = createHTML(tickets[i]);
          tasksList.appendChild(ticketHTML);
        }
      }
    }
  });
  xhr.send();
}

document.addEventListener('DOMContentLoaded', getAllTickets);

function saveInfo(e) {
  e.preventDefault();
  if (modal.dataset.id !== '-1') {
    const params = `id=${modal.dataset.id}&name=${name.value}&description=${description.value}`;
    POSTData(params, 'editTicket');
  } else {
    const params = `name=${name.value}&description=${description.value}`;
    POSTData(params, 'createTicket');
  }

  getAllTickets();
  closeModal(e);
}

function changeStatus(e) {
  e.preventDefault();
  const thisButton = e.currentTarget;
  const thisTicketId = thisButton.closest('.ticket-full').dataset.id;
  if (thisButton.classList.contains('done-button-pressed')) {
    const params = `id=${thisTicketId}&status=false`;
    POSTData(params, 'changeStatus');
  } else {
    const params = `id=${thisTicketId}&status=true`;
    POSTData(params, 'changeStatus');
  }
  getAllTickets();
}

function showDescription(e) {
  e.preventDefault();
  const descriptionBlock = e.currentTarget.closest('.ticket-full').querySelector('.ticket-description');

  if (descriptionBlock.classList.contains('hidden')) {
    const thisTicketId = e.currentTarget.closest('.ticket-full').dataset.id;
    const queryString = `method=ticketById&id=${thisTicketId}`;
    const url = `http://localhost:7070/?${queryString}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const ticket = xhr.response;
          descriptionBlock.textContent = ticket.description;
          descriptionBlock.classList.remove('hidden');
        }
      }
    });
    xhr.send();
  } else {
    getAllTickets();
  }
}

function createHTML(ticket) {
  const ticketHTML = document.createElement('div');
  ticketHTML.className = 'ticket-full';
  ticketHTML.dataset.id = ticket.id;
  ticketHTML.innerHTML = `<div class='ticket-short'>
  <button class='done-button'></button>
  <div class='ticket-name'>${ticket.name}</div>
  <div class='ticket-date'>${ticket.created}</div>
  <button class='ticket-button edit-button'></button></div>
  <div class='ticket-description hidden'></div>`;

  const doneButton = ticketHTML.querySelector('.done-button');

  if (ticket.status) {
    doneButton.classList.add('done-button-pressed');
  }

  doneButton.addEventListener('click', changeStatus);

  const editButton = ticketHTML.querySelector('.edit-button');
  editButton.addEventListener('click', openModal);
  const ticketName = ticketHTML.querySelector('.ticket-name');
  ticketName.addEventListener('click', showDescription);
  return ticketHTML;
}
