
  document.getElementById('newItemEnquiry').addEventListener('click', function() {
  var table = document.querySelector('.table.table-hover.caption-top');
  var newRow = document.createElement('tr');
  var newId = Math.floor(Math.random() * 1000000); // Generate a random ID

  // Create the checkbox cell
  var checkboxCell = document.createElement('td');
  var div = document.createElement('div');
  div.className = "form-check";
  var input = document.createElement('input');
  input.className = "form-check-input";
  input.type = "checkbox";
  input.value = "";
  input.id = "flexCheckDefault";
  var label = document.createElement('label');
  label.className = "form-check-label";
  label.htmlFor = "flexCheckDefault";
  div.appendChild(input);
  div.appendChild(label);
  checkboxCell.appendChild(div);
  newRow.appendChild(checkboxCell);

  // Create the carId cell (text)
  var carIdCell = document.createElement('td');
  var carIdInput = document.createElement('input');
  carIdInput.style = "width: fit-content; text-align: center;";
  carIdInput.className = "form-control";
  carIdInput.type = "text";
  carIdInput.value = newId; // Set the value to the new ID
  carIdInput.name = "carId";
  carIdCell.appendChild(carIdInput);
  newRow.appendChild(carIdCell);

  // Create the registration cell (text)
  var registrationCell = document.createElement('td');
  var registrationInput = document.createElement('input');
  registrationInput.style = "width: fit-content; text-align: center;";
  registrationInput.className = "form-control";
  registrationInput.type = "text";
  registrationInput.name = "registration";
  registrationCell.appendChild(registrationInput);
  newRow.appendChild(registrationCell);

  // Create the mileage cell (number)
  var mileageCell = document.createElement('td');
  var mileageInput = document.createElement('input');
  mileageInput.style = "width: fit-content; text-align: center;";
  mileageInput.className = "form-control";
  mileageInput.type = "number";
  mileageInput.name = "mileage";
  mileageCell.appendChild(mileageInput);
  newRow.appendChild(mileageCell);

  // Create the address cell (address)
  var addressCell = document.createElement('td');
  var addressInput = document.createElement('input')
  addressInput.style = "width: fit-content; text-align: center;";
  addressInput.className = 'form-control';
  addressInput.type = 'address';
  addressInput.value = '';
  addressInput.name = 'address';
  addressCell.appendChild(addressInput);
  newRow.appendChild(addressCell);

  // Create the vin cell (textarea)
  var vinCell = document.createElement('td');
  var vinTextArea = document.createElement('textarea');
  vinTextArea.style = "width: fit-content; text-align: center;";
  vinTextArea.classname = "form-control";
  vinTextArea.type = "text";
  vinTextArea.value = "";
  vinTextArea.placeholder = "examplevingoesinhere";
  vinTextArea.name = "vin";
  vinCell.appendChild(vinTextArea);
  newRow.appendChild(vinCell);

  // Create the make cell (text)
  var makeCell = document.createElement('td');
  var makeInput = document.createElement('input');
  makeInput.style = "width: fit-content; text-align: center;";
  makeInput.className = "form-control";
  makeInput.type = "text";
  makeInput.name = "make";
  makeCell.appendChild(makeInput);
  newRow.appendChild(makeCell);

  // Create the model cell (text)
  var modelCell = document.createElement('td');
  var modelInput = document.createElement('input');
  modelInput.style = "width: fit-content; text-align: center;";
  modelInput.className = "form-control";
  modelInput.type = "text";
  modelInput.name = "model";
  modelCell.appendChild(modelInput);
  newRow.appendChild(modelCell);

  // Create the derivative cell (textarea)
  var derivativeCell = document.createElement('td');
  var derivativeTextArea = document.createElement('textarea');
  derivativeTextArea.style = "width: fit-content; text-align: center;";
  derivativeTextArea.classname = "form-control";
  derivativeTextArea.type = "text";
  derivativeTextArea.value = "";
  derivativeTextArea.placeholder = "derivativegoesinhere";
  derivativeTextArea.name = "derivative";
  derivativeCell.appendChild(derivativeTextArea);
  newRow.appendChild(derivativeCell);

  // Create the bodytype cell (text)
  var bodytypeCell = document.createElement('td');
  var bodytypeInput = document.createElement('input');
  bodytypeInput.style = "width: fit-content; text-align: center;";
  bodytypeInput.className = "form-control";
  bodytypeInput.type = "text";
  bodytypeInput.name = "bodytype";
  bodytypeCell.appendChild(bodytypeInput);
  newRow.appendChild(bodytypeCell);

  // Create the seats cell (number)
  var seatsCell = document.createElement('td');
  var seatsInput = document.createElement('input');
  seatsInput.style = "width: fit-content; text-align: center;";
  seatsInput.className = "form-control";
  seatsInput.type = "number";
  seatsInput.name = "seats";
  seatsCell.appendChild(seatsInput);
  newRow.appendChild(seatsCell);

  // Create the doors  cell (number)
  var doorsCell = document.createElement('td');
  var doorsInput = document.createElement('input');
  doorsInput.style = "width: fit-content; text-align: center;";
  doorsInput.className = "form-control";
  doorsInput.type = "number";
  doorsInput.name = "doors";
  doorsCell.appendChild(doorsInput);
  newRow.appendChild(doorsCell);

  // Create the co2 cell (number)
  var co2Cell = document.createElement('td');
  var co2Input = document.createElement('input');
  co2Input.style = "width: fit-content; text-align: center;";
  co2Input.className = "form-control";
  co2Input.type = "number";
  co2Input.name = "co2";
  co2Cell.appendChild(co2Input);
  newRow.appendChild(co2Cell);

  // Create the colour cell (text)
  var colourCell = document.createElement('td');
  var colourInput = document.createElement('input');
  colourInput.style = "width: fit-content; text-align: center;";
  colourInput.className = "form-control";
  colourInput.type = "text";
  colourInput.name = "colour";
  colourCell.appendChild(colourInput);
  newRow.appendChild(colourCell);

  // Create the oemColour cell (text)
  var oemColourCell = document.createElement('td');
  var oemColourInput = document.createElement('input');
  oemColourInput.style = "width: fit-content; text-align: center;";
  oemColourInput.className = "form-control";
  oemColourInput.type = "text";
  oemColourInput.name = "oemColour";
  oemColourCell.appendChild(oemColourInput);
  newRow.appendChild(oemColourCell);

  // Create the emissionsStandard cell (text)
  var emissionsStandardCell = document.createElement('td');
  var emissionsStandardInput = document.createElement('input');
  emissionsStandardInput.style = "width: fit-content; text-align: center;";
  emissionsStandardInput.className = "form-control";
  emissionsStandardInput.type = "text";
  emissionsStandardInput.name = "emissionsStandard";
  emissionsStandardCell.appendChild(emissionsStandardInput);
  newRow.appendChild(emissionsStandardCell);

  // Create the transmission cell (dropdown)
  var transmissionCell = document.createElement('td');
  var transmissionInput = document.createElement('select');
  transmissionInput.style = "";
  transmissionInput.className = "";
  transmissionInput.type = "";
  transmissionInput.name = "";
  transmissionInput.value = "";
  transmissionInput.options = [];
  transmissionCell.appendChild(transmissionInput);
  newRow.appendChild(transmissionCell);

  // Create the fuel cell (dropdown)
  var fuelCell = document.createElement('td');
  var fuelInput = document.createElement('select');
  fuelInput.style = "";
  fuelInput.className = "";
  fuelInput.type = "";
  fuelInput.name = "";
  fuelInput.value = "";
  fuelInput.options = [];
  fuelCell.appendChild(fuelInput);
  newRow.appendChild(fuelCell);

  // Create the year cell (number)
  var yearCell = document.createElement('td');
  var yearInput = document.createElement('input');
  yearInput.style = "width: fit-content; text-align: center;";
  yearInput.className = "form-control";
  yearInput.type = "number";
  yearInput.name = "year";
  yearCell.appendChild(yearInput);
  newRow.appendChild(yearCell);

  // Create the plate cell (number)
  var plateCell = document.createElement('td');
  var plateInput = document.createElement('input');
  plateInput.style = "width: fit-content; text-align: center;";
  plateInput.className = "form-control";
  plateInput.type = "number";
  plateInput.name = "plate";
  plateCell.appendChild(plateInput);
  newRow.appendChild(plateCell);

  // Create the serviceHistory cell (dropdown)
  var serviceHistoryCell = document.createElement('td');
  var serviceHistoryInput = document.createElement('select');
  serviceHistoryInput.style =
  serviceHistoryInput.className = 
  serviceHistoryInput.type = 
  serviceHistoryInput.name = 
  serviceHistoryInput.value = 
  serviceHistoryInput.options = []
  serviceHistoryCell.appendChild(serviceHistoryInput);
  newRow.appendChild(serviceHistoryCell);
  
  // Create the condition cell (dropdown)
  var conditionCell = document.createElement('td');
  var conditionInput = document.createElement('select');
  conditionInput.style =
  conditionInput.className = 
  conditionInput.type = 
  conditionInput.name = 
  conditionInput.value = 
  conditionInput.options = []
  conditionCell.appendChild(conditionInput);
  newRow.appendChild(conditionCell);

  // Create the keys cell (number)
  var keysCell = document.createElement('td');
  var keysInput = document.createElement('input');
  keysInput.style = "width: fit-content; text-align: center;";
  keysInput.className = "form-control";
  keysInput.type = "number";
  keysInput.name = "keys";
  keysCell.appendChild(keysInput);
  newRow.appendChild(keysCell);

  // Create the owners cell (number)
  var ownersCell = document.createElement('td');
  var ownersInput = document.createElement('input');
  ownersInput.style = "width: fit-content; text-align: center;";
  ownersInput.className = "form-control";
  ownersInput.type = "number";
  ownersInput.name = "owners";
  ownersCell.appendChild(ownersInput);
  newRow.appendChild(ownersCell);

  // Create the motExpiry cell (date)
  var motExpiryCell = document.createElement('td');
  var motExpiryInput = document.createElement('input');
  motExpiryInput.style = "width: fit-content; text-align: center;";
  motExpiryInput.classname = "form-control";
  motExpiryInput.type = "date";
  motExpiryInput.value = "";
  motExpiryInput.placeholder = "2014-01-04";
  motExpiryInput.name = "motExpiry";
  motExpiryCell.appendChild(motExpiryInput);
  newRow.appendChild(motHistoryCell);
  
  // Create the motHistory cell (textarea)
  var motHistoryCell = document.createElement('td');
  var motHistoryTextArea = document.createElement('textarea');
  motHistoryTextArea.style = "width: fit-content; text-align: center;";
  motHistoryTextArea.classname = "form-control";
  motHistoryTextArea.type = "text";
  motHistoryTextArea.value = "";
  motHistoryTextArea.placeholder = "mot history goes in here with some line breaks";
  motHistoryTextArea.name = "motHistory";
  motHistoryCell.appendChild(motHistoryTextArea);
  newRow.appendChild(motHistoryCell);

  // Create the hpiReport cell (textarea)
  var hpiReportCell = document.createElement('td');
  var hpiReportTextArea = document.createElement('textarea');
  hpiReportTextArea.style = "width: fit-content; text-align: center;";
  hpiReportTextArea.classname = "form-control";
  hpiReportTextArea.type = "text";
  hpiReportTextArea.value = "";
  hpiReportTextArea.placeholder = "hpi report goes in here, also with some line breaks";
  hpiReportTextArea.name = "hpiReport";
  hpiReportCell.appendChild(hpiReportTextArea);
  newRow.appendChild(hpiReportCell);

  // Create the registrationDate cell (date)

  // Create the capBelow cell (number)
  var capBelowCell = document.createElement('td');
  var capBelowInput = document.createElement('input');
  capBelowInput.style = "width: fit-content; text-align: center;";
  capBelowInput.className = "form-control";
  capBelowInput.type = "number";
  capBelowInput.name = "capBelow";
  capBelowCell.appendChild(capBelowInput);
  newRow.appendChild(capBelowCell);

  // Create the capAverage cell (number)
  var capAverageCell = document.createElement('td');
  var capAverageInput = document.createElement('input');
  capAverageInput.style = "width: fit-content; text-align: center;";
  capAverageInput.className = "form-control";
  capAverageInput.type = "number";
  capAverageInput.name = "capAverage";
  capAverageCell.appendChild(capAverageInput);
  newRow.appendChild(capAverageCell);

  // Create the capClean cell (number)
  var capCleanCell = document.createElement('td');
  var capCleanInput = document.createElement('input');
  capCleanInput.style = "width: fit-content; text-align: center;";
  capCleanInput.className = "form-control";
  capCleanInput.type = "number";
  capCleanInput.name = "capClean";
  capCleanCell.appendChild(capCleanInput);
  newRow.appendChild(capCleanCell);

  // Create the capRetail cell (number)
  var capRetailCell = document.createElement('td');
  var capRetailInput = document.createElement('input');
  capRetailInput.style = "width: fit-content; text-align: center;";
  capRetailInput.className = "form-control";
  capRetailInput.type = "number";
  capRetailInput.name = "capRetail";
  capRetailCell.appendChild(capRetailInput);
  newRow.appendChild(capRetailCell);

  // Create the atTrade cell (number)
  var atTradeCell = document.createElement('td');
  var atTradeInput = document.createElement('input');
  atTradeInput.style = "width: fit-content; text-align: center;";
  atTradeInput.className = "form-control";
  atTradeInput.type = "number";
  atTradeInput.name = "atTrade";
  atTradeCell.appendChild(atTradeInput);
  newRow.appendChild(atTradeCell);

  // Create the atPartExchange cell (number)
  var atPartExchangeCell = document.createElement('td');
  var atPartExchangeInput = document.createElement('input');
  atPartExchangeInput.style = "width: fit-content; text-align: center;";
  atPartExchangeInput.className = "form-control";
  atPartExchangeInput.type = "number";
  atPartExchangeInput.name = "atPartExchange";
  atPartExchangeCell.appendChild(atPartExchangeInput);
  newRow.appendChild(atPartExchangeCell);

  // Create the atPrivate cell (number)
  var atPrivateCell = document.createElement('td');
  var atPrivateInput = document.createElement('input');
  atPrivateInput.style = "width: fit-content; text-align: center;";
  atPrivateInput.className = "form-control";
  atPrivateInput.type = "number";
  atPrivateInput.name = "atPrivate";
  atPrivateCell.appendChild(atPrivateInput);
  newRow.appendChild(atPrivateCell);

  // Create the atRetail cell (number)
  var atRetailCell = document.createElement('td');
  var atRetailInput = document.createElement('input');
  atRetailInput.style = "width: fit-content; text-align: center;";
  atRetailInput.className = "form-control";
  atRetailInput.type = "number";
  atRetailInput.name = "atRetail";
  atRetailCell.appendChild(atRetailInput);
  newRow.appendChild(atRetailCell);
  
  // Create the price cell (number)
  var priceCell = document.createElement('td');
  var priceInput = document.createElement('input');
  priceInput.style = "width: fit-content; text-align: center;";
  priceInput.className = "form-control";
  priceInput.type = "number";
  priceInput.name = "price";
  priceCell.appendChild(priceInput);
  newRow.appendChild(priceCell);

  // Create the fee cell (number)
  var feeCell = document.createElement('td');
  var feeInput = document.createElement('input');
  feeInput.style = "width: fit-content; text-align: center;";
  feeInput.className = "form-control";
  feeInput.type = "number";
  feeInput.name = "fee";
  feeCell.appendChild(feeInput);
  newRow.appendChild(feeCell);

  // Create the source cell (dropdown)
  var sourceCell = document.createElement('td');
  var sourceInput = document.createElement('select');
  sourceInput.style =
  sourceInput.className = 
  sourceInput.type = 
  sourceInput.name = 
  sourceInput.value = 
  sourceInput.options = [1,2,3,4,5];
  sourceCell.appendChild(sourceInput);
  newRow.appendChild(sourceCell);

  // Create the images cell (upload)

  // Create the files cell (upload)

  // Create the status cell (dropdown)
  var statusCell = document.createElement('td');
  var statusInput = document.createElement('select');
  statusInput.style =
  statusInput.className = 
  statusInput.type = 
  statusInput.name = 
  statusInput.value = 
  statusInput.options = []
  statusCell.appendChild(statusInput);
  newRow.appendChild(statusCell);
  





  table.appendChild(newRow);
});