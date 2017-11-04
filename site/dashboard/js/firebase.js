
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAJpQtdB9cDhufYCwSQXvsGGRs0HKFEdzs",
    authDomain: "hackathonabbvie.firebaseapp.com",
    databaseURL: "https://hackathonabbvie.firebaseio.com",
    projectId: "hackathonabbvie",
    storageBucket: "hackathonabbvie.appspot.com",
    messagingSenderId: "808637613511"
};

firebase.initializeApp(config);
var db = firebase.database();

function addIntegrador(integrador) {

    // Get a key for a new Post.
    var newPostKey = db.ref().child('integrador').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/integrador/' + newPostKey] = integrador;

    return db.ref().update(updates);
}

function addcliente(cliente) {

    // Get a key for a new Post.
    var newPostKey = db.ref().child('cliente').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/cliente/' + newPostKey] = cliente;
    db.ref().update(updates);

    return newPostKey;
}

function addRelacionamento(relacionamento) {

    // Get a key for a new Post.
    var newPostKey = db.ref().child('relacionamento').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/relacionamento/' + newPostKey] = relacionamento;

    return db.ref().update(updates);
}

function getIntegrador(callback) {
    db.ref('/integrador/').once('value').then(function (snapshot) {
        let aux = [];
        for (atual in snapshot.val()) {
            aux2 = snapshot.val()[atual];
            aux2.key = atual;
            aux.push(aux2);
        }
        callback(aux);
    });
}


function getcliente(callback) {
    db.ref('/cliente/').once('value').then(function (snapshot) {
        let aux = [];
        for (atual in snapshot.val()) {
            aux2 = snapshot.val()[atual];
            aux2.key = atual;
            aux.push(aux2);
        }
        callback(aux);
    });
}

function getclienteKey(key, callback) {
    db.ref('/cliente/' + key).once('value').then(function (snapshot) {
        aux2 = snapshot.val()[atual];
        aux2.key = key;
        callback(aux2);
    });
}

function getIntegradorKey(key, callback) {
    db.ref('/integrador/' + key).once('value').then(function (snapshot) {
        aux2 = snapshot.val()[atual];
        aux2.key = key;
        callback(aux2);
    });
}
function addDocumento(documento) {
    
    var newPostKey = db.ref().child('documentos').push().key;
    console.log(newPostKey);
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/documentos/' + newPostKey] = documento;
    console.log(updates);
    db.ref().update(updates);
    return newPostKey;
}

function getCpf(codigo, callback) {
    // Write the new post's data simultaneously in the posts list and the user's post list.
    db.ref('codigo').orderByChild('codigo').equalTo(codigo).once('value').then(function (snapshot) {
        let aux = [];
        let aux3 = [];
        for (atual in snapshot.val()) {
            aux2 = snapshot.val()[atual];
            aux2.key = atual;
            //console.log(aux2);
            aux.push(aux2);
        }
        callback(aux[0].cpf);
    });

}

function getCpfbyCodigo(codigo, callback) {
    db.ref('codigo').orderByChild('codigo').equalTo(codigo).once('value').then(function (snapshot) {
        let aux = [];
        let aux3 = [];
        for (atual in snapshot.val()) {
            aux2 = snapshot.val()[atual];
            aux2.key = atual;
            //console.log(aux2);
            aux.push(aux2);
        }
        cpf = aux[0].cpf;

        db.ref('documentos').orderByChild('paciente').equalTo(cpf).once('value').then(function (snapshot2) {
            for (atual in snapshot2.val()) {
                aux2 = snapshot2.val()[atual];
                aux2.key = atual;
                aux3.push(aux2);
            }
            callback(aux3);
        });
    });

}