import { LightningElement, track } from 'lwc';
import controllerStudents from '@salesforce/apex/EstudianteController.createStudent';

export default class Hero extends LightningElement{

    @track firstName = '';
    @track lastName = '';
    @track cedula = '';
    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleCedulaChange(event) {
        this.cedula = event.target.value;
    }

    createStudent() {
        console.log('Creando nuevos estudiantes!')
        controllerStudents({
            firstName: this.firstName,
            lastName: this.lastName,
            cedula: this.cedula
        });

    }

    presioname(){
        console.log('presionado!!!!');
    }
}



