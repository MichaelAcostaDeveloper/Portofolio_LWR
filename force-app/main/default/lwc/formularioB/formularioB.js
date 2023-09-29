import { LightningElement, track, api, wire } from 'lwc';
import guardarEstudiante from '@salesforce/apex/EstudianteController.createStudent';

export default class FormularioB extends LightningElement {
    @track universidad;
    @track valorCarrera;
    @track nivelEstudio;

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    handleSave() {
        const event = new CustomEvent('save', {
            detail: { 
                universidad: this.universidad,
                valorCarrera: this.valorCarrera,
                nivelEstudio: this.nivelEstudio
            }
        });
        this.dispatchEvent(event);
    }

    handleSave() {
        const estudianteData = {
            universidad: this.universidad,
            valorCarrera: this.valorCarrera,
            nivelEstudio: this.nivelEstudio,
            nombre: this.nombre,  // Datos del formulario A
            apellido: this.apellido,  // Datos del formulario A
            cedula: this.cedula  // Datos del formulario A
        };

        guardarEstudiante({ estudianteData })
            .then(result => {
                console.log('Guardado exitoso', result);
            })
            .catch(error => {
                console.error('Error al guardar', error);
            });
    }
}
