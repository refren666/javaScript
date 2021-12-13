const targetUser = JSON.parse(localStorage.getItem('targetUser'));

const wrapper = document.createElement('div');

const id = document.createElement('div');
id.innerText = `User id: ${targetUser.id}`;
const name = document.createElement('div');
name.innerText = `Name: ${targetUser.name}`;
const username = document.createElement('div');
username.innerText = `Username: ${targetUser.username}`;
const email = document.createElement('div');
email.innerText = `Email: ${targetUser.email}`;
const address = document.createElement('div');
address.innerText = 'Address: ';

const addressWrapper = document.createElement('ul');

const street = document.createElement('li');
street.innerText = `Street: ${targetUser.address.street}`;
const suite = document.createElement('li');
suite.innerText = `Suite: ${targetUser.address.suite}`;
const city = document.createElement('li');
city.innerText = `City: ${targetUser.address.city}`;
const zipcode = document.createElement('li');
zipcode.innerText = `Zipcode: ${targetUser.address.zipcode}`;

const geoWrapper = document.createElement('ul');

const lat = document.createElement('li');
lat.innerText = `Lat: ${targetUser.address.geo.lat}`;
const lng = document.createElement('li');
lng.innerText = `Lng: ${targetUser.address.geo.lng}`;

const phone = document.createElement('div');
phone.innerText = `Phone number: ${targetUser.phone}`;
const website = document.createElement('div');
website.innerText = `Website: ${targetUser.website}`;
const company = document.createElement('div');
company.innerText = 'Company: ';

const companyWrapper = document.createElement('ul');

const companyName = document.createElement('li');
companyName.innerText = `Company name: ${targetUser.company.name}`;
const companyCatchPhrase = document.createElement('li');
companyCatchPhrase.innerText = `Company catchphrase: ${targetUser.company.catchPhrase}`;
const companyBs = document.createElement('li');
companyBs.innerText = `Company bs: ${targetUser.company.bs}`;

const userPostsBtn = document.createElement('button');
userPostsBtn.innerText = 'Posts of current user';
userPostsBtn.style.width = '90%';
userPostsBtn.style.display = 'block';
userPostsBtn.style.margin = '0px auto';
userPostsBtn.style.marginTop = '20px';

wrapper.append(id, name, username, email, address, addressWrapper, phone, website, company, companyWrapper);
addressWrapper.append(street, suite, city, zipcode, geoWrapper);
geoWrapper.append(lat, lng);
companyWrapper.append(companyName, companyCatchPhrase, companyBs);
document.body.append(wrapper, userPostsBtn);

userPostsBtn.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${targetUser.id}/posts`)
        .then(response => response.json())
        .then(postArray => {
            postArray.forEach(post => {
                const postWrapper = document.createElement('div');
                postWrapper.style.border = '1px solid cornflowerblue';
                postWrapper.style.margin = '10px 0';
                postWrapper.style.padding = '5px';
                const titleBlock = document.createElement('h3');
                titleBlock.innerText = `Post title: ${post.title}`;
                const postsLink = document.createElement('a');
                postsLink.style.textDecoration = 'none';
                postsLink.style.color = 'blue';
                postsLink.href = 'post-details.html';
                postsLink.innerText = 'Click for full info';
                postsLink.setAttribute('target', '_blank');

                postsLink.addEventListener('click', () => {
                    localStorage.setItem('targetPost', JSON.stringify(post));
                })

                postWrapper.append(titleBlock, postsLink);
                document.body.appendChild(postWrapper);
            });
        })
}, {once: true});