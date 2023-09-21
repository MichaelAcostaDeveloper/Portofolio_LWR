import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/ImagenesSites';

export default class Hero extends LightningElement {
    imageURL = IMAGES + '/tarjetaPC.jpg';
}