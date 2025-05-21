const user = {
    name: 'Rishabh',
    address: {
        personal: {
            area: 'Nagaur Road',
            villege: 'Merta Road',
            district: 'Nagaur'
        },
        professional: {
            area: {
                landmark: 'Near Gokul Vatika',
                name: 'Kamla Nehru Nagar'
            },
            villeage: 'Bhankota',
            district: 'Jaipur'
        }
    }
}

// let finalObj = {
//     user_name: 'rishabh',
//     user_address_personal_area: 'Nagaur Road',
//     user_address_personal_villege: 'Merta Road',
//     user_address_personal_district: 'Nagaur',
//     user_address_personal_area_landmark: 'Near Gokul Vatika',
//     user_address_personal_area_name: 'Kamla Nehru Nagar',
//     user_address_personal_villege: 'Bhankota',
//     user_address_personal_district: 'Jaipur'
// }

let finalObj = {};
let magicFunction = function (obj, parent) {
    for (const key in obj) {
        if (typeof (obj[key]) === 'object') {
            const element = `${parent}_${key}`;
            magicFunction(obj[key], element);
        } else {
            finalObj[`${parent}_${key}`] = obj[key];
        }
    }

    return finalObj;
}

console.log(magicFunction(user, 'user'));


