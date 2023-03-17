import { Direccion } from "./classes/Direccion";
import { Mail } from "./classes/Mail";
import { Persona } from "./classes/Persona";
import { Telefono } from "./classes/Telefono";

const direccion1 = new Direccion('Calle Falsa', 1234, 1, 'A', 11111, 'Teruel', 'Teruel');
const direccion2 = new Direccion('Calle Venta de Juan Pito', 2, 4, 'D', 22222, 'Isaba', 'Navarra');
const direccion3 = new Direccion('Calle Verdadera', 1, 1, 'C', 11111, 'Springfield', 'Murcia');

const mail1 = new Mail('Personal', 'personal@mail.es');
const mail2 = new Mail('Laboral', 'laboral@mail.es');

const telefono1 = new Telefono('Personal', 123456789);
const telefono2 = new Telefono('Laboral', 987654321);
const telefono3 = new Telefono('Fijo', 123789654);

const persona1 = new Persona('María Antonieta', 'García Llanos', 96, '00000000A', '1/1/1927', 'Negro', 'Mujer', [direccion3], [mail2], [telefono2, telefono3], 'Primigenia');
const persona2 = new Persona('Pepe', 'Pérez García', 19, '123456678Z', '29/02/2004', 'Verde', 'Hombre', [direccion1, direccion2], [mail1], [telefono1, telefono2, telefono3], 'Primo de Juan');
const persona3 = new Persona('María Natividad', 'San Felices Gil', 42, '87654321R', '27/5/1980', 'Rosa', 'Mujer', [direccion2], [mail1], [telefono3], 'La Nati');

console.log(persona1, persona2, persona3);

const personas = [persona1, persona2, persona3];

const nati = personas.filter((persona: Persona) => persona.dni === '87654321R')[0];
nati.addDireccion(direccion3);
nati.addMail(mail2);
nati.addTelefono(telefono2);

console.log(persona1, persona2, nati);