import contactManager from "./ContactCollection";
import displayContactList from "./ContactList"
function clearInputFields() {
    document.querySelector("#phoneInput").value = ""
    document.querySelector("#addressInput").value = ""
    document.querySelector("#inputId").value = ""
    document.querySelector("#nameInput").value = ""
}

const linkToDom = document.querySelector("#contactList")


const eventListeners = {
    createContactComponent: () => {
        document.querySelector("#saveButton").addEventListener("click", () => {
            let name = document.querySelector("#nameInput").value
            const phone = document.querySelector("#phoneInput").value
            const address = document.querySelector("#addressInput").value
            const individualID = document.querySelector("#inputId").value

            const contactComponent = {
                name: name,
                phone: phone,
                address: address
            }

            if (document.querySelector("#inputId").value === "") {

                contactManager.postContact(contactComponent).then(() => {
                    displayContactList(linkToDom)
                    clearInputFields()


                })
            } else {
                contactManager.editContact(individualID, contactComponent).then(() => {
                    document.querySelector("#saveButton").textContent = "Submit"
                    displayContactList(linkToDom)
                    clearInputFields()

                })
            }
        })
    },

    editContact: () => {
        linkToDom.addEventListener("click", (event) => {
            if (event.target.id.startsWith("editButton--")) {
                const individualID = event.target.id.split("--")[1]
                document.querySelector("#inputId").value = individualID
                document.querySelector("#saveButton").textContent = "Save Changes"
                contactManager.getIndividualContact(individualID).then((contact) => {
                    document.querySelector("#nameInput").value = contact.name
                    document.querySelector("#phoneInput").value = contact.phone
                    document.querySelector("#addressInput").value = contact.address
                    clearInputFields()

                })
            }
        });
    },

    deleteContact: () => {
        linkToDom.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteButton--")) {
                const individualID = event.target.id.split("--")[1]
                contactManager.deleteContact(individualID).then(() => {
                    displayContactList(linkToDom)
                    clearInputFields()
                })
            }
        });
    }
}
export default eventListeners