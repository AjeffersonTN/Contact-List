import contactManager from "./ContactCollection"
import putContactOnDom from "./Contact"


const displayContactList = (linktoDom) => {
    linktoDom.innerHTML = ""
    contactManager.getContacts().then((parsedContacts) => {
        parsedContacts.forEach(contact => {
            const name = contact.name
            const phone = contact.phone
            const address = contact.address
            const id = contact.id

            let contactHTML = putContactOnDom(name, phone, address, id)
            linktoDom.innerHTML += contactHTML

        })
    })
}



export default displayContactList