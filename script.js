const button = document.getElementById('btn')
const inputText = document.getElementById("inp")
const pokelist=document.getElementById('gender')
const url="https://api.genderize.io/?name="
button.addEventListener('click', (() =>
{
    const search = inputText.value;
  fetchData(url,search)
}))
async function fetchData (url,search)
{
    try
    {
        const response = await fetch(url + search)
    console.log(response)
    if (!response.ok)
    {
        throw new Error("something wrong happened")
        }
        const data= await response.json()
        console.log(this)
        displayData(data);

    }
    catch (err)
    {
        console.error(err)
    }
   
  }
  function displayData (data)
{
    let p = [];
   
       p.push(data)
        const nameValue = document.createElement("div")
        nameValue.innerHTML = `
        <h2>GENDER: ${p[0].gender}</h2>
        <p>:${p[0].gender}</p>
        <p>count:${p[0].count}</p>`
    console.log(nameValue)
    gender.appendChild(nameValue)
}