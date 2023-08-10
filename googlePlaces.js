
function initAutocomplete() {
var input = document.querySelector('input[name="address"]');

// Create the Autocomplete object and specify the 'address_components' field.
var autocomplete = new google.maps.places.Autocomplete(input, {
fields: ['address_components']
});

// Add a listener for the place_changed event.
autocomplete.addListener('place_changed', function() {
var place = autocomplete.getPlace();
var addressComponents = place.address_components;

// Loop through the address components and find the postcode.
for (var i = 0; i < addressComponents.length; i++) {
  var addressType = addressComponents[i].types[0];
  if (addressType === 'postal_code') {
    var postcode = addressComponents[i].long_name;
    console.log('Postcode: ' + postcode);
  }
}
});
}

// Call the initAutocomplete function when the page has finished loading.
window.onload = initAutocomplete;
