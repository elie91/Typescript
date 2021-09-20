/*

Voici donc quelques pistes qui vous feront sentir que vous êtes sur la mauvaise voie :

    Vous avez une méthode qui n’a pas lieu d’être dans votre classe, mais vous devez l’implémenter.
    Vous avez du réécrire une méthode de la classe parente car celle-ci ne doit « surtout pas » être exécutée ou ne rien faire.
    Vous avez réécrit une méthode de votre parent et vous lancez une exception, alors que celle-ci n’était pas prévue dans la classe de base. Du coup, vous changez tous les appels en les englobant par un « try/catch »
    Vous utilisez des « instanceof » pour exécuter (ou non) une méthode spécifique (aussi mauvais que le try/catch)
    Vous devez modifier une classe parente pour que votre nouvelle classe fonctionne. Par exemple, ajouter des arguments optionnels.



Le but est de se dire :
    Si je n’étendais pas cette classe (ou l’interface), est-ce que j’aurais de toute façon écrit cette méthode ?
    S’appellerait-elle de la même manière ?
    Aurait-elle le même comportement globale?
    Est-ce que ma sortie (return) et mes erreurs (throw new Exception) sont identiques à ma classe parente?

Si vous avez répondu « oui » à toutes les questions, alors, félicitations, vous avez répondu au principe de substitution de Liskov.
*/