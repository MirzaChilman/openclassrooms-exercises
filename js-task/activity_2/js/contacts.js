/* 
Activity: Contact manager
*/
console.log('Welcome to your contacts manager!');
console.log('1: Lists contacts');
console.log('2: Add a contact');
console.log('0: Quit');
// TODO: Complete the program

const contacts = [
  {
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    firstName: 'Doe',
    lastName: 'Jane'
  }
];

window.addEventListener('keypress', options);
function options(e) {
  let keynum;
  if (window.event) {
    keynum = e.keyCode;
  } else if (e.which) {
    keynum = e.which;
  }

  if (keynum === 49) {
    console.log('Heres the list of all your contacts:');
    contacts.map(contact => {
      console.log(
        `Last name: ${contact.lastName}, first name: ${contact.firstName}`
      );
    });
  } else if (keynum === 50) {
    const fName = prompt('What is your first name');
    const lName = prompt('What is your last name');
    const objInput = {
      firstName: fName,
      lastName: lName
    };
    contacts.push(objInput);
    console.log('Contact added');
  } else if (keynum === 48) {
    window.stop();
  }
  if (keynum !== 48) {
    console.log('Welcome to your contacts manager!');
    console.log('1: Lists contacts');
    console.log('2: Add a contact');
    console.log('0: Quit');
  }
}
