const putContactOnDom = (name, phone, address, id) => {
    return `
    <div class="contact--${id} contactCard">
       <h4><strong>Name:</strong> ${name}</h4>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Address:</strong> ${address}</p>
       <div class="buttonContainer">
          <button id="deleteButton--${id}">Delete ${name}</button>
          <button id="editButton--${id}">Edit ${name}</button>
       </div>
    </div>
    <hr/>`
 }
 export default putContactOnDom