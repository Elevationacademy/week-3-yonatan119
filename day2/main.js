// let fetch = function () {
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         for(i in data.items){
//     console.log(data.items[i].volumeInfo.title,data.items[i].volumeInfo.authors[0],data.items[i].volumeInfo.industryIdentifiers)  
//     }},

//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// })};



// $(".searchButton").on("click",function (){
//     $(".gifContainer").empty()
//     const input = $("input").val()
//     var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=hAge6BcXp8ANT4wH2apyZprBuvDxF8PH&limit=5`);
//     xhr.done(function(data) {
//         let embed_urls = data.data.map(d => d.embed_url)
//         for (let i=0; embed_urls.length>i;i++)
//         $(".gifContainer").append(`<div class="gifscontainer"><iframe src="${data.data[i].embed_url}" width="auto" height="auto" class="gif"></iframe> <p><button class="addfavorite">add</button></p></div>`) 
//     });
// })
//         $(".gifContainer").on("click",".addfavorite",function () {
//             const $gif = $(this).closest(".gifscontainer").find(".gif")[0].src
//             $(".favoritegifs").append(`<iframe src="${$gif}" width="auto" height="auto" class="favoritegif"></iframe>`)
//         })

// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]


// let isorange = (a) => a === "orange"
// let orange = vegetables.filter(a => a.color === "orange")

// console.log(orange)

// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const bonus = function (person) {
// if (person.goodPerformance === true) {
//     person.salary += 300
// }
// }
// people.forEach(p => console.log(p.salary))

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
// let lowerCased = messagesFromDad.map(lc => lc.toLowerCase())
// console.log(lowerCased)

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]
// const findCommentByID = (postID, commentID) => {
// let post = posts.find(p => p.id === postID)
// return post.comments.find(c => c.id === commentID)

// }
// console.log(findCommentByID(1,0))


// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]
// if (movies.some(m => m.studio === "marvel")) {
//     console.log(`Let's go watch some movies` )
// } else {
//     console.log(`Let's stay home` )
// } if (movies.every(m => m.year > 2020)) {
//     console.log(`futuristic stuff` )
// } else {
//     console.log("Yawn")
// }


// let fetch = function () {
//     $.ajax({
//         method: "GET",
//         url: 'https://jsonplaceholder.typicode.com/users',
//         success: function (data) {
//            let newdata = data.map(nd => {return {name:nd.name, email:nd.email}})
//             console.log(newdata)
//         },

//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })};

// let fetch = function () {
//     $.ajax({
//         method: "GET",
//         url: 'https://jsonplaceholder.typicode.com/users',
//         success: function (data) {
//             let newdata = data.map(nd => nd = nd.address.zipcode)
//             const firstNumIs5 = (n) => n = n.charAt(0) == 5
//             let num5 = newdata.filter(firstNumIs5)
//             // let newdatachar = newdata[0].charAt(0)
//             console.log(num5)
//         },

//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
// };



// let fetch = function () {
//     $.ajax({
//     method: "GET",
//     url: 'https://jsonplaceholder.typicode.com/users',
//     success: function (data) {
//         const zipwith5 = data.filter(z => z.address.zipcode.charAt(0) == 5);
//         const onlyid = zipwith5.map(o => o.id)
//         console.log(onlyid)
//     },
//     error: function (xhr, text, error) {
//     console.log(text);
//         }
//     })
// };

//strange but satisfying result >>
// let newdata = data.map(nd => nd = nd.address.zipcode)
// const firstNumIs5 = (n) => n = n.charAt(0) == 5
// let num5 = newdata.filter(firstNumIs5)
// // let idnum5 = num5.map()
// console.log(num5)

// let fetch = function () {
//         $.ajax({
//         method: "GET",
//         url: 'https://jsonplaceholder.typicode.com/users',
//         success: function (data) {
//             const onlyNamesWithC = data.filter(z => z = z.name.charAt(0) === "C");
//             console.log(onlyNamesWithC)
//         },  
//         error: function (xhr, text, error) {
//         console.log(text);
//             }
//         })
//     };
    


// let fetch = function () {
//     $.ajax({
//     method: "GET",
//     url: 'https://jsonplaceholder.typicode.com/users',
//     success: function (data) {
//         console.log(data.every(c => c.address.city === "South Christy"))
//     },  
//     error: function (xhr, text, error) {
//     console.log(text);
//         }
//     })
// };


// let fetch = function () {
//     $.ajax({
//     method: "GET",
//     url: 'https://jsonplaceholder.typicode.com/users',
//     success: function (data) {
//        const apt =  data.find(c => c.address.suite === "Apt. 950")
//        console.log(apt.company.name)
//     },  
//     error: function (xhr, text, error) {
//     console.log(text);
//         }
//     })
// };


//  MYPEOPLE-MINI-PROJECT

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?results=20',
    dataType: 'json',
    success: function(data) {
        const details = data.results.map(d => ({email: d.email,name: d.name, id:d.id.value}))
        console.log(details)
        const source = $("#people-template").html();
        const template = Handlebars.compile(source)
        let newHTML = template({details})
        $('.container').append(newHTML)


    }
});
//   const nameTitle = data.results[0].name.title
//   const firstName = data.results[0].name.first
//   const lastName = data.results[0].name.last
//     const email = data.results[0].email