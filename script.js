//--------------------------title------------------
let title = document.createElement("div");
title.innerHTML = ` <div class="bg-dark">
<p class="text-white text-center display-4 container-fluid p-2 ">CityBikes API</p>
</div><div class="h4">You can find out the bike name, model name and which country in which city they are available are given below table</div>
<div class="p-5"><table class="table table-hover border table-striped ">
<thead class="bg-dark text-white">
  <tr>
    <th scope="col">S.No</th>
    <th scope="col">Name</th>
    <th scope="col">Model-id</th>
    <th scope="col">City</th>
    <th scope="col">Country Code</th>
  </tr>
</thead>
<tbody id="content">
</tbody>
</table></div>`;
document.body.append(title);
//--------------------Function----------------
async function bike() {
  let content = document.getElementById("content");
  let num = document.getElementById("val");
  let data = await (await fetch(`http://api.citybik.es/v2/networks`)).json();
  data.networks.forEach((e, index) => {
    content.innerHTML += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${e.name}</td>
    <td>${e.id}</td>
    <td>${e.location.city}</td>
    <td>${e.location.country}</td>
  </tr>`;
  });
}
bike();
