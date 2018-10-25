/* 
Activity: Contact manager
*/

/**
 * Contact model constructor
 *
 * @param {string} firstName
 * @param {string} lastName
 */
function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

/**
 *
 * @param {Array} contacts
 */
function listContacts(contacts) {
  let str = "Here's the list of all your contacts:\n\n";
  for (let contact of contacts) {
    str +=
      'Last name: ' +
      contact.lastName +
      ', first name: ' +
      contact.firstName +
      '\n';
  }
  alert(str);
}

/**
 *
 * @param {Array} contacts
 */
function addContact(contacts) {
  let firstName = prompt('Enter first Name');
  let lastName = prompt('Enter last Name');
  contacts.push(new Contact(firstName, lastName));
  alert('Contact added!');
}

/**
 * Contact Manager module
 */
function ContactManager() {
  let ACTION_EXIT = 0;
  let ACTION_LIST = 1;
  let ACTION_ADD = 2;
  let NO_ACTION = 3;
  let contacts = [new Contact('John', 'Smith'), new Contact('Jane', 'Doe')];
  let action;

  while (action !== ACTION_EXIT) {
    action = prompt(
      'Welcome to your contacts manager!\n\n1: List contacts\n2: Add a contact\n0: Quit'
    );

    if (action.length === 0) {
      action = NO_ACTION;
    } else {
      action = Number(action);
    }

    switch (action) {
      case ACTION_ADD:
        addContact(contacts);
        break;
      case ACTION_LIST:
        listContacts(contacts);
        break;
    }
  }
}

ContactManager();
