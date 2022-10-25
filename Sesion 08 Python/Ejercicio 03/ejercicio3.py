
Archivo= str(input("ingrese el archivo que desea buscar"))
Archivo = Archivo+".txt"
print (Archivo)
try:
    file = open(Archivo)
    print(file) # File handler
    file.close()
except FileNotFoundError:
    print('Sorry the file we\'re looking for doesn\' exist')
    exit()

