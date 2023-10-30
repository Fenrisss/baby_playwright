module.exports = {
    buttons: {
        settings: "[href='/settings']",
        locations: "//*[text()='Локации']",
        add: "[name='addLocationButton']",
        next: "[name='next-button']",
        submit: "[name='saveButton']",
        location_success: "//*[text()='Локация добавлена']"

    },
    fields: {
        name: "[name='name']",
        email: "[name='email']",
        phone: "[type='tel']",
        postcode: "[name='postcode']",
        directionHint: "[name='directionHint']",
        house_number: "[name='houseNumber']"
    },

}