import { collection, onSnapshot, query, doc, updateDoc } from "firebase/firestore";


const tableHeaders = [
    "Select",
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
    "MOT History",
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
    "Fee",
    "Source",
    "Images",
    "Files",
    "Status"
];


function setupTableSync(tableId, collectionName) {
    const tableRef = collection(db, "cars", collectionName);
    const tableElement = document.getElementById(tableId);

    let hot = new Handsontable(tableElement, {
        data: [],
        rowHeaders: true,
        colHeaders: tableHeaders,
        afterChange: function(changes, source) {
            if (source !== 'loadData' && changes) {
                changes.forEach(([row, prop, oldValue, newValue]) => {
                    if (oldValue !== newValue) {
                        const carId = hot.getDataAtRowProp(row, 'ID');
                        const carDocRef = doc(tableRef, carId);
                        
                        updateDoc(carDocRef, {
                            [prop]: newValue
                        }).catch(error => {
                            console.error("Error updating document:", error);
                        });
                    }
                });
            }
        }
    });

    onSnapshot(query(tableRef), (snapshot) => {
        const data = [];
        snapshot.forEach(doc => {
            data.push(doc.data());
        });
        hot.loadData(data);
    });
}

setupTableSync('enquiriesTable', 'enquiries');
setupTableSync('pendingTable', 'pending');
setupTableSync('liveTable', 'live');
setupTableSync('agreedTable', 'agreed');
setupTableSync('completedTable', 'completed');
