file = open ("Prueba.txt", "w")
file.write("Hola Mundo\n")
file.write("Ing. de sistemas\n")
nombre=input("introduce tu nombre: ")
numero=int(input("ingrese numero: "))
file.write(nombre +"\n")
file.write('% s' %numero+"\n")
n=int(input("Numero de Elementos de la lista: "))
lista=[]
for i in range (n):
    x=input("Elemento: ")
    lista.append(x)

file.write('la lista es: =%s' %lista)   
file.close()

file2 = "prueba2.dat"
file2 = open ("Prueba2.dat", "wb")
file2.write(b"Desarrollo de Aplicaciones")
file2.write(b"Desarrollo de Aplicaciones")


def file_read(fname):
    with open(fname, "w") as myfile:
        myfile.write("Ejercicios Python\n")
        myfile.write("Ejercicios Java")
    txt = open(fname)
    print(txt.read())
file_read('abc.txt')





fname = open ("test.txt", "w")
def file_read_from_head(fname, nlines):
    from itertools import islice
    with open(fname) as f:
        for line in islice(f, nlines):
            print(line)
file_read_from_head('test.txt',2)


def file_read(fname):
    with open (fname, "r") as myfile:
        data=myfile.readlines()
        print(data)
file_read('test.txt')

import glob
char_list = []
files_list = glob.glob("*.txt")
for file_elem in files_list:
    with open(file_elem, "r") as f:
        char_list.append(f.read())
print(char_list)

