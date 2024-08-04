document.addEventListener("DOMContentLoaded", function() {
    const editBtn = document.getElementById('edit-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const updateBtn = document.getElementById('update-btn');
    const saveBtn = document.getElementById('save-btn');
    const idField = document.getElementById('id');

    // Edit button click event
    editBtn.addEventListener('click', function() {
        editBtn.style.display = 'none';
        deleteBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        updateBtn.style.display = 'block';

        // Fill form fields with existing data
        idField.value = ''; // clear id field
        const formData = new FormData(document.querySelector('form'));
        for (const [key, value] of formData.entries()) {
            const field = document.getElementById(key);
            if (field) {
                field.value = value;
            }
        }
    });
});
