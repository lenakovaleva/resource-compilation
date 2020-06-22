import { htmlCollection, cssCollection, jsCollection, fontsCollection, colorsCollection, iconsCollection, emmetCollection, picturesCollection, templatesCollection, designCollection, inspirationCollection, gitCollection, articlesCollection, learningCollection, seoCollection, toolsCollection, nodejsCollection, npmCollection, bundlersCollection, animationCollection, algorithmsollection, booksCollection, coursesCollection, youtubeCollection, compilationsCollection, sublimeCollection, resourcesCollection, commentsCollection, serversCollection, phpCollection, speedCollection } from "./data.js";

let Collections = [htmlCollection, cssCollection, jsCollection, fontsCollection, colorsCollection, iconsCollection, emmetCollection, picturesCollection, templatesCollection, designCollection, inspirationCollection, gitCollection, articlesCollection, learningCollection, seoCollection, toolsCollection, nodejsCollection, npmCollection, bundlersCollection, animationCollection, algorithmsollection, booksCollection, coursesCollection, youtubeCollection, compilationsCollection, sublimeCollection, resourcesCollection, commentsCollection, serversCollection, phpCollection, speedCollection]; // all arrays collected

let idCollection = ["html", "css", "js", "fonts", "colors", "icons", "emmet", "pictures", "templates", "design/UX", "inspiration", "git", "articles", "learning path", "seo", "tools for dev", "node.js", "npm", "bundlers", "animation", "Algorithms & OOP", "books", "courses", "youtube", "compilations", "sublime", "resources", "comments", "servers", "php", "speed"]; // all ids collected

var section = document.createElement("section");

var container = document.createElement("div");
container.setAttribute("class", "container");
section.appendChild(container);

var row = document.createElement("div");
row.setAttribute("class", "row");
container.appendChild(row);

var col = document.createElement("div");
col.setAttribute("class", "col-12");
row.appendChild(col);

var name = document.createElement("h2");
var nameText = document.createTextNode("Resources Compilation");
name.appendChild(nameText);
section.appendChild(name);
document.body.appendChild(section);


for (let i = 0; i < idCollection.length; i++) {

    var section = document.createElement("section");
    var id = idCollection[i];
    section.setAttribute("class", id);

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    section.appendChild(container);

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    var col = document.createElement("div");
    col.setAttribute("class", "col-12");
    row.appendChild(col);

    var ul = document.createElement("ul");
    ul.setAttribute("id", id);
    col.appendChild(ul);

    var title = document.createElement("h1");
    var titleId = document.createTextNode(id);
    title.appendChild(titleId);
    ul.appendChild(title);
    document.body.appendChild(section);


    for (var k = 0; k < Collections[i].length; k++) {
        var text = document.createTextNode(Collections[i][k][0]);

        console.log(Collections[i][k][1]);

        var a = document.createElement("a");
        a.appendChild(text);
        a.href = Collections[i][k][1];
        a.setAttribute("target", "_blank");
        var li = document.createElement("li");
        li.appendChild(a);

        var ul = document.getElementById([id]);
        ul.appendChild(li);

    }
}