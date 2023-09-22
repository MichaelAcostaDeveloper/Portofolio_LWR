import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Hero extends NavigationMixin(LightningElement){

    handleComenzar(event){
        event.preventDefault();
        console.log("abriendo nueva pagina...");

        this[NavigationMixin.Navigate]({
            type: 'custom__component',
            attributes: {
                componentName: 'c__bussines'
            }
        });
    }
}
