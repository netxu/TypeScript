import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

type Sexo = 'Hombre' | 'Mujer';

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleanos: string;
    colorFavorito: string;
    sexo: Sexo;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: string,
        colorFavorito: string,
        sexo: Sexo,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    public addDireccion (direccion: Direccion): void {
        this.direcciones.push(direccion);
    }

    public addMail (mail: Mail): void {
        this.mails.push(mail);
    }

    public addTelefono (telefono: Telefono): void {
        this.telefonos.push(telefono);
    }
}
