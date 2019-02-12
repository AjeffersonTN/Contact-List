import displayContactList from "./ContactList"
import eventListeners from "./ContactForm"


const contactElement = document.querySelector("#contactList")

displayContactList(contactElement)
eventListeners.createContactComponent()
eventListeners.deleteContact()
eventListeners.editContact()