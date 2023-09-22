import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/ImagenesSites';

export default class SkillsCards extends LightningElement {
    adminImageURL = IMAGES + '/admin.jpg';
    trainingImageURL = IMAGES + '/training.jpg';
    servicesImageURL = IMAGES + '/services.jpg';

}