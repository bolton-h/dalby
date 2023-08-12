// Fetch the external HTML content
fetch('components/tableHeaders.html')
  .then(response => response.text())
  .then(html => {
    // Inject the fetched content into the tableHeadersContainer
    document.getElementById('tableHeadersContainer').innerHTML = html;

    // Append the headers to the container
    const headers = [
      "ID",
      "Registration",
      "Mileage",
      "Address",
      "VIN",
      "Make",
      "Model",
      "Derivative",
      "Bodytype",
      "Seats",
      "Doors",
      "CO2",
      "Colour",
      "OEM Colour",
      "Emissions Standard",
      "Transmission",
      "Fuel",
      "Year",
      "Plate",
      "Service History",
      "Condition",
      "Keys",
      "Owners",
      "MOT Expiry",
      "MOT Advisories",
      "HPI Report",
      "Registration Date",
      "CAP Below",
      "CAP Average",
      "CAP Clean",
      "CAP Retail",
      "AT Trade",
      "AT Part Exchange",
      "AT Private",
      "AT Retail",
      "Price",
      "Fee + VAT (£)",
      "Source",
      "Images",
      "Files",
      "Status",
      "Delete"
  ];
  

    const container = document.getElementById('tableHeadersContainer');

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        container.appendChild(th);
    });
  })
  .catch(error => {
    console.warn('Something went wrong.', error);
  });
