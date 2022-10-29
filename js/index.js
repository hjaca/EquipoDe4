

var cad = `
<!--CSS-->
<style>
    .navbar-image {
        width: 80px;
        height: 80px;
        padding: 10px;
    }
</style>
<h1>Proyecto de 4</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="imagenes/ep.png"
            class="navbar-image" 
            alt="GFG logo" />
    </a>
    <button class="navbar-toggler" type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" 
        id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
            <a class="nav-link active" href="index.html"> Home <span class="sr-only">(current)</span>            </a>
            <a class="nav-link" href="about.html">About Us</a>
           <a class="nav-link" href="location.html">Sucursales</a>
            <a class="nav-link" href="form.html">Registrarse</a>
            <a class="nav-link" href="Personajes.html">Personajes</a>
        </div>
    </div>
    </nav>
`
document.getElementById("idheader").innerHTML = cad
cad = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://rickandmortyapi.com/api/character/?name=rick&status=alive" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.youtube.com" target="_blank"><i class="fa fa-youtube"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.linkedin.com" target="_blank"><i
        class="fa fa-linkedin" aria-hidden="true"></i></a>
    <p>Derechos Reservados @2022 </p>  
`
document.getElementById("idfooter").innerHTML = cad

