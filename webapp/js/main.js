console.log(window.fridgeData);

function makeList(result, li) {
  return result += '<li>' + li.name + '</li>'
}

var ul=document.querySelector("ul");
ul.innerHTML = window.fridgeData.reduce(makeList, '')
