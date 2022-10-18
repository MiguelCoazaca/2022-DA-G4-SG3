class Estudiante():
    def __init__(self, cod,dni, nomb, telf, cat, deu):
        self.cod = cod
        self.dni = dni
        self.nomb = nomb
        self.telf = telf
        self.cat = cat
        self.deu = deu

    def mostrarDatos(self):
        sh = "DATOS DE CLIENTE: \n- Codigo: {}\n- DNI: {}\n- Nombre completo: {}\n- Telefono: {}\n- Categoria: S/.{}\n- Deuda: {}"
        print(sh.format(self.cod,self.dni,self.nomb,self.telf,self.cat,self.deu))

class matricular():
    def __init__(self, matricular):
        self.matricular = matricular

    def matricula(self):
        if self.matricular == "si" or "Si" or "Sí":
            print("¡usted ha sido matriculado")
        else:
            print("usted no ha sido Matriculado")


class pension():
    def __init__(self, pagar):
        self.pagar = pagar

    def pagpension(self):
        if self.pagar == "si" or "Si" or "Sí":
            print("¡usted ha pagado con exito")
        else:
            print("usted no ha pagado aun")
 

Codigo = int(input("Ingresar Codigo: "))
DNIs = int(input("Ingresar DNI: "))
nombre = input("Ingresar nombre: ")
telefono = input("Ingresar Telefono de Contacto: ")
categoria = input("Ingresar su categoria: ")

deuda =input("¿Es deudor?: ")

Alumno1 = Estudiante(Codigo,DNIs,nombre,telefono,categoria,deuda)
Alumno1.mostrarDatos()


matri = str(input("desea matricularse en este semesetre?: (si/no)"))

Alumno1 = matricular(matri)
Alumno1.matricula


paga = str(input("desea pagar la pension?:  (si/no)"))

Alumno1 = pension(paga)
Alumno1.pagpension




