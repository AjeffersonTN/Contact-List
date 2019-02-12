const contactManager = {
    getContacts: function () {
        return fetch("http://localhost:3002/contacts")
            .then(contacts => contacts.json())
    },
    getIndividualContact: function (individualID) {
        return fetch(`http://localhost:3002/contacts/${individualID}`)
            .then(contacts => contacts.json())
    },
    postContact: function (contactObject) {
        return fetch("http://localhost:3002/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
    },
    editContact: function (individualID, contactObject) {
        return fetch(`http://localhost:3002/contacts/${individualID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
    },
    deleteContact: (individualID) => {
        return fetch(`http://localhost:3002/contacts/${individualID}`, {
            method: "DELETE"
        })
    }
}

export default contactManager