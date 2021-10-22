const socialMedias = {
  github: 'Busolin',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'maykbrito'
}

//Começar com o que será feito da função (change)

function changeSocialMediaLinks() {
  //Pega cada um filho do ul (cada li)

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${socialMedias[social]}`

    //alert(li.children[0].href)
  }

  //Por ser ID, pode ser utilizado apenas o ID, sem necessidade de utilizar o document.getElementById userName.textContent = 'Cleber Poggers'
}

changeSocialMediaLinks()

//Buscar informações da API do GitHub
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedias.github}`

  //then -> Promisse
  //Não precisa da chave depois da Arrow Function pois só tem 1 coisa a ser feita (response.json)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
