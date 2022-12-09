#include <stdio.h>
#include <ctype.h>

const int MAX_ELEMENTOS = 100;

int detectarFinCarga(void)
{
    char respuesta;

    printf("Carga elemento? (s/n) : ");

    scanf(" %c", &respuesta); // ojo. Dejar espacio antes de %c para que agarre cualquier \n previo. !!! no usar fflush()
    if (tolower(respuesta) == 's')
        return 1;
    else
        return 0;
}

int ingresaDato()
{
    int dato;
    do
    {
        printf("Ingrese entero positivo:");
        scanf("%i", &dato);
    } while (dato < 0);
    return dato;
}

int cargaArreglo(int arreglo[])
{
    int ce = 0;

    int dato;
    int continua;

    continua = detectarFinCarga();

    while (ce < MAX_ELEMENTOS && continua)
    {
        dato = ingresaDato();
        arreglo[ce] = dato;
        ce++;

        continua = detectarFinCarga();
    }
    return ce;
}

void mostrarArreglo(int arreglo[], int ce)
{
    int i = 0;
    while (i < ce)
        printf(" [%i] ", arreglo[i++]);
    printf("\n");
}

int main(int argc, char **argv)
{

    int ce;
    int arreglo[MAX_ELEMENTOS];

    ce = cargaArreglo(arreglo);

    mostrarArreglo(arreglo, ce);

    return 0;
}