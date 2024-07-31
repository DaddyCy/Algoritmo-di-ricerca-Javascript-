alert("Inserire solo caratteri,nelle apposite caselle di testo");
const jobs = [  { title: "Marketing Intern", location: "US, NY, New York" },
{
  title: "Customer Service - Cloud Video Production",
  location: "NZ, Auckland",
},
{
  title: "Commissioning Machinery Assistant (CMA)",
  location: "US, IA, Wever",
},
{
  title: "Account Executive - Washington DC",
  location: "US, DC, Washington",
},
{ title: "Bill Review Manager", location: "US, FL, Fort Worth" },
{ title: "Accounting Clerk", location: "US, MD," },
{ title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
{
  title: "Lead Guest Service Specialist",
  location: "US, CA, San Francisco",
},
{ title: "HP BSM SME", location: "US, FL, Pensacola" },
{
  title: "Customer Service Associate - Part Time",
  location: "US, AZ, Phoenix",
},
{
  title: "ASP.net Developer Job opportunity at United States,New Jersey",
  location: "US, NJ, Jersey City",
},
{
  title: "Talent Sourcer (6 months fixed-term contract)",
  location: "GB, LND, London",
},
{
  title: "Applications Developer, Digital",
  location: "US, CT, Stamford",
},
{ title: "Installers", location: "US, FL, Orlando" },
{ title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
{
  title: "VP of Sales - Vault Dragon",
  location: "SG, 01, Singapore",
},
{ title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
{
  title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
  location: "GB, SOS, Southend-on-Sea",
},
{ title: "Visual Designer", location: "US, NY, New York" },
{
  title: "Process Controls Engineer - DCS PLC MS Office - PA",
  location: "US, PA, USA Northeast",
},
{ title: "Marketing Assistant", location: "US, TX, Austin" },
{ title: "Front End Developer", location: "NZ, N, Auckland" },
{ title: "Engagement Manager", location: "AE," },
{
  title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
  location: "US, CA, Carlsbad",
},
{ title: "Customer Service", location: "GB, LND, London" },
{ title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
{ title: "Marketing Exec", location: "SG," },
{
  title: "HAAD/DHA Licensed Doctors Opening in UAE",
  location: "AE, AZ, Abudhabi",
},
{
  title: "Talent Management Process Manager",
  location: "US, MO, St. Louis",
},
{ title: "Customer Service Associate", location: "CA, ON, Toronto" },
{
  title: "Customer Service Technical Specialist",
  location: "US, MA, Waltham",
},
{ title: "Software Applications Specialist", location: "US, KS," },
{ title: "Craftsman Associate", location: "US, WA, Everett" },
{ title: "Completion Engineer", location: "US, CA, San Ramon" },
{ title: "I Want To Work At Karmarama", location: "GB, LND," },
{
  title: "English Teacher Abroad",
  location: "US, NY, Saint Bonaventure",
}, 
];   


//Assegnazione variabile al bottone di invio dati //
let btn = document.getElementById("SearchButton");
 
// Assegnazione dell'evento al click sul bottone  , effettua la funzione (blocco di codice), sottostante //    
btn.addEventListener('click', function() {
  let valoreTitle= document.getElementById("title").value;
  let valoreLocation = document.getElementById("location").value;
  let risultato = ricercaLavoro(valoreTitle,valoreLocation);
  displayResults(risultato.result);                          // console.log(risultato.result); Stampano i risultati
}) ;                                                           //console.log(risultato.counter); della funzione.
                                       
         
                  



// Funzione che ricerca se i valori inseriti siano presenti nell'array originario(jobs) e restituisce il conteggio 
// oltre ai risultati,il conteggio dei valori trovati
function ricercaLavoro(parolaTitle,parolaLocation) {

                     
    
                // Trasformazione dei valori inseriti in valori con lettere solo minuscole
                    parolaTitle = parolaTitle.toLowerCase();
                    parolaLocation = parolaLocation.toLowerCase();
            
                    let result = []; //Variabile risultato con valore assegnato  di partenza 
                    let counter = 0; //Variabile risultato  con valore assegnato di partenza
                     
                for (let i = 0; i < jobs.length; i++) { // Iterazione dell'array jobs con verifiche se i valori inseriti 
                                                         // corrispondano almeno in una parola se l'oggetto array è formato 
                                                         //da più parole
                            
                    let risultatoTitle = false;
                    let risultatoLocation = false;
                    let valoreTitle = jobs[i].title.toLowerCase();
                    let valoreLocation = jobs[i].location.toLowerCase();
                        
                        if (valoreTitle.includes(parolaTitle)) {
                                risultatoTitle = true;
                            }
                            
                        if (valoreLocation.includes(parolaLocation)) {
                                risultatoLocation = true;
                            }   
                            
                        if (risultatoTitle && risultatoLocation) {
                                result.push(jobs[i]);
                                counter ++;
                            }
                     }
                    return {result,counter}
     
                    }
   
                 //Creazione della tabella dei risultati
                    function displayResults(results) {
                        let tableBody = document.getElementById("jobTableBody");
                        tableBody.innerHTML = ""; // Cancellazione dei valori precedentemente immessi //
                      
                        results.forEach(job => {
                          let row = document.createElement("tr");
                          let titleCell = document.createElement("td");
                          titleCell.textContent = job.title;
                          let locationCell = document.createElement("td");
                          locationCell.textContent = job.location;
                          row.appendChild(titleCell);
                          row.appendChild(locationCell);
                          tableBody.appendChild(row);
                        });

                    }                   
                      
                    

          