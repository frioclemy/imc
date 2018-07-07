
function Personne(n, pn, tai, poi, sex)
{
	this.nom = n;
	this.prenom = pn;
	this.taille = tai;
	this.poids = poi;
	this.sexe = sex;

	this.taille /= 100;

	this.IMC = function()
	{
		return this.poids/(this.taille*this.taille);
	}

	this.poidsMini = function()
	{
		return 19*this.taille*this.taille;
	}

	this.poidsMaxi = function()
	{
		return 25*this.taille*this.taille;
	}

	this.poidsIdeal = function()
	{
		switch(this.sexe)
		{
			case "M" : return 22*this.taille*this.taille;
				break;
			case "F" : return 21*this.taille*this.taille;
				break;
		}

	}

	this.diagnostic = function()
	{
		var imc = this.IMC();
		
		if(imc < 17) return "Anorexique / anorexic";
		if(imc < 19) return "Maigre / skinny";
		if(imc < 25) return "En super forme / in super shape";
		if(imc < 30) return ((this.poids - this.poidsIdeal()).toFixed(2) + " kg en trop / too much");
		if(imc <= 40) return ((this.poids - this.poidsIdeal()).toFixed(2) + " kg en trop / too much => Obesite legere / Obesity slight");
		if(imc > 40) return ((this.poids - this.poidsIdeal()).toFixed(2) + " kg en trop / too much => Obesite morbide / Morbid obesity");
	}
}

function Calcul()
{
	var nom = document.getElementById("txtNom").value;
	var prenom = document.getElementById("txtPrenom").value;
	var taille = parseFloat(document.getElementById("txtTaille").value);
	var poids = parseFloat(document.getElementById("txtPoids").value);
	var sexe = document.getElementById("selectSexe").value;

	var p = new Personne(nom, prenom, taille, poids, sexe);

	document.getElementById("txtIMC").value = p.IMC().toFixed(2);
	document.getElementById("txtPoidsMini").value = p.poidsMini().toFixed(2);
	document.getElementById("txtPoidsMaxi").value = p.poidsMaxi().toFixed(2);
	document.getElementById("txtPoidsIdeal").value = p.poidsIdeal().toFixed(2);
	document.getElementById("txtDiagnostic").value = p.diagnostic();
}

function Reinit()
{
	document.getElementById("txtNom").value = "";
	document.getElementById("txtPrenom").value = "";
	document.getElementById("txtTaille").value = "";
	document.getElementById("txtPoids").value = "";
	document.getElementById("txtIMC").value = "";
	document.getElementById("txtPoidsMini").value = "";
	document.getElementById("txtPoidsMaxi").value = "";
	document.getElementById("txtPoidsIdeal").value = "";
	document.getElementById("txtDiagnostic").value = "";
}

window.onload = function()
{
	document.getElementById("cmdCalcul").addEventListener("click", Calcul);
	document.getElementById("cmdReinit").addEventListener("click", Reinit);
}