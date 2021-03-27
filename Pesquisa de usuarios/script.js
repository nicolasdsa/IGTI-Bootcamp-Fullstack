/* script */
let allPeople = [];

window.addEventListener("load", () =>{
    fetchPeople();
})

async function fetchPeople(){
    let res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    let json = await res.json();

    allPeople = json.results.map(person => {
        const {name, dob} = person;
        return {
            nome: `${name.first} ${name.last}`,
            idade: dob.age,
        }
    })
    console.log(allPeople);
    render();
}

function render(){

}