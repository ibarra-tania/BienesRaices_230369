import express from 'express';

const router = express.Router();

router.get("/", function(req, res){
    res.send("Hola Mundo desde Node, a través del Navegador");
})

router.get("/QuienSoy", function(req, res){
    res.json({"estudiante": "Tania Ibarra Salgado",
        "carrera": "TI DSM",
        "grado": "4°",
        "grupo": "B",
        "asignatura": "AWOS"
    })
})

export default router; //Esta palabra reservada de JS me permite exportar los elementos definidos y utilizarlos en otros archivos del mismo sitio. 

