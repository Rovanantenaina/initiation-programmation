package main;

import java.util.Scanner;

public class Conversion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double c, f = 0;
        int i, j = 0;
        char reponse = ' ';
        System.out.println("-------------------------------------------------");
        System.out.println("| CONVERSION DEGRES CELCIUS ET DEGRES FARENHEIT |");
        System.out.println("-------------------------------------------------");
        do {
            do {
                do {
                    System.out.println("A partir de : ");
                    c = sc.nextDouble();
                    System.out.println("jusqu'à : ");
                    i = sc.nextInt();
                    System.out.println("Par pas de :");
                    j = sc.nextInt();

                    if (c > i || j > i || j == 0)
                        System.out.println("Traitement impossible");

                } while (c > i || j > i || j == 0);
                do {
                    System.out.println("Assurez-vous que l'imprimante est prête");
                    System.out.println("Si vous êtes prêt, tapez O, sinon tapez N");
                    reponse = sc.next().charAt(0);
                } while (reponse != 'O' && reponse != 'N');
            } while (reponse=='N');

            System.out.println("TABLEAU DE CONVERSION CELCIUS/FARNEHEIT");
            System.out.println("---------------------------------------------------------------------------------");
            System.out.println("Celsius | Farneheit");
            System.out.println("---------------------------------------------------------------------------------");

            do {
                f = ((9.0 / 5.0) * c) + 32.0;
                if (c < 10)
                    System.out.println("" + c + "|" + arrondi(f, 1));
                else {
                    if (c < 100)
                        System.out.println(" " + c + " | " + arrondi(f, 1));
                    else
                        System.out.println(" " + c + " | " + arrondi(f, 1));

                }
                c = c + j;
            } while (c <= i);
            do {
                System.out.println("Souhaitez-vous éditer une autre table? (O/N) ");
                reponse = sc.next().charAt(0);
            } while (reponse != 'O' && reponse != 'N');
        } while (reponse == 'O');
        System.out.println("Au revoir !");
    }

    public static double arrondi(double A, int B) {
        return (double) ((int) (A * Math.pow(10, B) + .5)) /
                Math.pow(10, B);
    }
}
