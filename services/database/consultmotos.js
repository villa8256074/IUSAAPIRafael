const motos = require('../../models/moto');
const usuarios = require('../../models/usuario');
const usuariosMotos = require('../../models/usuariomoto');


async function searchNameUser(name, phone, mail) {

    var query = {};

    if (!isEmpty(name)) {
        query["usuarios.full_name"] = name;
    }

    if (!isEmpty(phone)) {
        query["usuarios.phone"] = phone;
    }

    if (!isEmpty(mail)) {
        query["usuarios.mail"] = mail;
    }

    console.log(query);

    const arraymotos = []


    console.log(arraymotos);


    await usuariosMotos.aggregate([{
        $lookup: {
            from: "motos",
            localField: "_id_moto",
            foreignField: "_id_moto",
            as: "motos"
        }
    },
    {
        $unwind: '$motos' 
    }, {
        $lookup: {
            from: "usuarios",
            localField: "_id_usuario",
            foreignField: "_id_usuario",
            as: "usuarios"
        }
    },
    {
        $unwind: '$usuarios' 
    },
    {
        $match: query
    }
    ]).then((res) => {
        res.forEach(function(userMoto, index) {
            
            console.log(`${index} : ${userMoto}`);
            var useMoto = {
                idMoto: userMoto._id_moto,
                moto: userMoto.motos.codigo_motor,
                bateria1: userMoto.bateria_one,
                bateria2: userMoto.bateria_two
            };
            arraymotos.push(useMoto);
        });

        console.log("dentro de motos");
        console.log(res);

    }).catch((err) => {
        console.log(err);
    });

    console.log("fuera de motos");
    console.log(arraymotos);
    return arraymotos;
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

module.exports = {
    searchNameUser
}
