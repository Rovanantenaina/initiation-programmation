class Personne {
    nom: string
    prenoms: string
    age: number
    DateDeNaissance: Date

    modifierAge(): number {
        return 18
    }

    estMajeure(): string {
        return "grande"
    }

    calculerAge(): number {
        return 17 + 1
    }

    recuererNom(): string {
        return "Wendy"
    }

    couperCheveux(): number {
        return 12
    }


}