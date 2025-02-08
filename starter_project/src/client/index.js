// js files
import { handleSubmit } from './views/js/formHandler'

alert("I EXIST")
// console.log("CHANGE!!");

// sass files

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';


document.getElementById('urlForm').addEventListener('submit', handleSubmit); 
