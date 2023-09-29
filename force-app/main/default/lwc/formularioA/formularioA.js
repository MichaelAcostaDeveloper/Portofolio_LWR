import { LightningElement, track } from 'lwc';

export default class FormularioA extends LightningElement {
    @track nombre;
    @track apellido;
    @track cedula;

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    handleNext() {
        const event = new CustomEvent('next', {
            detail: { nombre: this.nombre, apellido: this.apellido, cedula: this.cedula }
        });
        this.dispatchEvent(event);
    }

    handleSave(event) {
        const estudianteData = event.detail;

        // Llamada al método Apex para guardar
        guardarEstudiante({ estudianteData })
            .then(result => {
                console.log('Guardado exitoso', result);
            })
            .catch(error => {
                console.error('Error al guardar', error);
            });
    }
}