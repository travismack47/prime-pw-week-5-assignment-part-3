console.log('***** Music Collection *****')


let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

addToCollection('Teflon Don', 'Rick Ross', 2010);
console.log(collection);

addToCollection('Finally Rich', 'Chief Keef', 2012);
addToCollection('Painting Pictures', 'Kodak Black', 2017);
addToCollection('Magna Carta Holy Grail', 'Jay-Z', 2013);
addToCollection('The Persona Tape', 'Maxo Kream', 2016);
addToCollection('Time Served', 'Moneybagg Yo', 2020);

console.log(collection);

function showCollection( array ) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
    let albums = array[i]
    console.log(albums.title + ' by ' + albums.artist + ' published in ' + albums.yearPublished)
}
}

showCollection(collection);

